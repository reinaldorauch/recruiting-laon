import Navigation from '@/components/Layouts/Navigation'
import { MiddlewareType, useAuth } from '@/hooks/auth'
import { PropsWithChildren, ReactNode } from 'react'

export interface AppLayoutProps {
    header: ReactNode
}

const AppLayout = ({ header, children }: PropsWithChildren<AppLayoutProps>) => {
    const { user } = useAuth({ middleware: MiddlewareType.Auth })

    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation user={user} />

            {/* Page Heading */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {header}
                </div>
            </header>

            {/* Page Content */}
            <main>{children}</main>
        </div>
    )
}

export default AppLayout
