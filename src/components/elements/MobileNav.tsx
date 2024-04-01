import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import DropdownMenuItem from '@/components/modules/DropdownMenuItem'
import { menuLinks } from '@/site-config'

export default function DropdownMenu() {
	return (
		<Menu as='div' className='relative inline-block text-left'>
			<div>
				<Menu.Button
					className='inline-flex justify-center rounded-md border border-zinc-400 bg-primary-foreground px-2 py-2 text-sm font-medium shadow-sm transition-all hover:border-foreground/25 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:border-zinc-700 dark:hover:bg-zinc-800'
					aria-label='menu'
				>
					<HamburgerMenuIcon className='h-5 w-5' />
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right divide-zinc-400 rounded-md border border-zinc-400 bg-primary-foreground shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-zinc-700 dark:border-zinc-700 dark:bg-zinc-800'>
					<div className='py-1'>
						{menuLinks.map((menu, key) => {
							return (
								<DropdownMenuItem key={key} href={`${menu.path.toLowerCase()}`}>
									{menu.title}
								</DropdownMenuItem>
							)
						})}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	)
}
