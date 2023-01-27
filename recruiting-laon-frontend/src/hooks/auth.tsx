import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export enum MiddlewareType {
    Guest,
    Auth,
}

export interface UseAuthParams {
    middleware?: MiddlewareType
    redirectIfAuthenticated?: string
}

interface WithSetError {
    setErrors: (data: any) => void
}

interface WithSetStatus {
    setStatus: (data: any) => void
}

export interface AnyProps {
    [x: string]: any
}

export interface LoginProps extends AnyProps {}
export interface RegisterProps extends AnyProps {}
export interface ResetPasswordProps extends AnyProps {}

export interface ForgotPasswordProps {
    email: string
}

export interface AuthUser {
    name: string
    email: string
    email_verified_at: string
}

export const useAuth = ({
    middleware,
    redirectIfAuthenticated,
}: UseAuthParams = {}) => {
    const router = useRouter()

    const {
        data: user,
        error,
        mutate,
    } = useSWR<AuthUser>('/api/user', () =>
        axios
            .get('/api/user')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error

                router.push('/verify-email')
            }),
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const register = async ({
        setErrors,
        ...props
    }: RegisterProps & WithSetError) => {
        await csrf()

        setErrors([])

        axios
            .post('/register', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const login = async ({
        setErrors,
        setStatus,
        ...props
    }: AnyProps & WithSetError & WithSetStatus) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/login', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const forgotPassword = async ({
        setErrors,
        setStatus,
        email,
    }: ForgotPasswordProps & WithSetError & WithSetStatus) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/forgot-password', { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resetPassword = async ({
        setErrors,
        setStatus,
        ...props
    }: ResetPasswordProps) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/reset-password', { token: router.query.token, ...props })
            .then(response =>
                router.push('/login?reset=' + btoa(response.data.status)),
            )
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resendEmailVerification = ({ setStatus }: WithSetStatus) => {
        axios
            .post('/email/verification-notification')
            .then(response => setStatus(response.data.status))
    }

    const logout = async () => {
        if (!error) {
            await axios.post('/logout').then(() => mutate())
        }

        window.location.pathname = '/login'
    }

    useEffect(() => {
        if (redirectIfAuthenticated) {
            if (middleware === MiddlewareType.Guest && user) {
                router.push(redirectIfAuthenticated)
            }

            if (
                window.location.pathname === '/verify-email' &&
                user?.email_verified_at
            ) {
                router.push(redirectIfAuthenticated)
            }
        }

        if (middleware === MiddlewareType.Auth && error) {
            logout()
        }
    })

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    }
}
