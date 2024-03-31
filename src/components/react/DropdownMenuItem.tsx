import { Menu } from '@headlessui/react'
import React from 'react'
import { cn } from '@/utils'

type Props = {
	href: string
	children: React.ReactNode
}

export default function DropdownMenuItem({ href, children }: Props) {
	return (
		<Menu.Item>
			{({ active }) => (
				<a
					href={href}
					className={cn(active ? 'bg-orange-200 dark:bg-zinc-700' : '', 'block px-4 py-2 text-sm')}
				>
					{children}
				</a>
			)}
		</Menu.Item>
	)
}
