import { Fragment, PropsWithChildren, ReactNode, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'

export interface DropdownProps {
    align?: 'right' | 'left' | 'top'
    width?: string
    contentClasses?: string
    trigger: ReactNode
}

const Dropdown = ({
    align = 'right',
    width = 'w-48',
    contentClasses = 'py-1 bg-white',
    trigger,
    children,
}: PropsWithChildren<DropdownProps>) => {
    let alignmentClasses = 'origin-top-right right-0'

    switch (align) {
        case 'left':
            alignmentClasses = 'origin-top-left left-0'
            break
        case 'top':
            alignmentClasses = 'origin-top'
            break
    }

    const [open, setOpen] = useState(false)

    return (
        <Menu as="div" className="relative">
            {({ open }) => (
                <>
                    <Menu.Button as={Fragment}>{trigger}</Menu.Button>

                    <Transition
                        show={open}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95">
                        <div
                            className={`absolute z-50 mt-2 ${width} rounded-md shadow-lg ${alignmentClasses}`}>
                            <Menu.Items
                                className={`rounded-md focus:outline-none ring-1 ring-black ring-opacity-5 ${contentClasses}`}
                                static>
                                {children}
                            </Menu.Items>
                        </div>
                    </Transition>
                </>
            )}
        </Menu>
    )
}

export default Dropdown
