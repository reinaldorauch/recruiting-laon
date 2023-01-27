import PropTypes from 'prop-types'

export interface AuthSessionStatusProps {
    status: string
    className?: string
}

const AuthSessionStatus = ({
    status,
    className = '',
    ...props
}: AuthSessionStatusProps) => (
    <>
        {status && (
            <div
                className={`${className} font-medium text-sm text-green-600`}
                {...props}>
                {status}
            </div>
        )}
    </>
)

AuthSessionStatus.propTypes = {
    status: PropTypes.string,
}

export default AuthSessionStatus
