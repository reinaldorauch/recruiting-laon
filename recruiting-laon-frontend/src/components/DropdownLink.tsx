import Link from 'next/link'
import { Menu } from '@headlessui/react'
import {
    ButtonHTMLAttributes,
    PropsWithChildren,
    DetailedHTMLProps,
} from 'react'

export interface DropdownLinkProps {}

const DropdownLink = ({
    children,
    ...props
}: PropsWithChildren<DropdownLinkProps>) => (
    <Menu.Item>
        {({ active }) => (
            <Link
                href={'#'}
                {...props}
                className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 ${
                    active ? 'bg-gray-100' : ''
                } focus:outline-none transition duration-150 ease-in-out`}>
                {children}
            </Link>
        )}
    </Menu.Item>
)

export interface DropdownButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {}

export const DropdownButton = ({
    children,
    ...props
}: PropsWithChildren<DropdownButtonProps>) => (
    <Menu.Item>
        {({ active }) => (
            <button
                className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 ${
                    active ? 'bg-gray-100' : ''
                } focus:outline-none transition duration-150 ease-in-out`}
                {...props}>
                {children}
            </button>
        )}
    </Menu.Item>
)

export default DropdownLink
