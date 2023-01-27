import type { PropsWithChildren } from 'react'

export interface LabelProps {
    className?: string
    htmlFor?: string
}

const Label = ({
    className = '',
    children,
    ...props
}: PropsWithChildren<LabelProps>) => (
    <label
        className={`${className} block font-medium text-sm text-gray-700`}
        {...props}>
        {children}
    </label>
)

export default Label
