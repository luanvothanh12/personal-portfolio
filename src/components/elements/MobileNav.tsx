import { Menu, Transition } from '@headlessui/react'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Fragment } from 'react'

import DropdownMenuItem from '@/components/elements/DropdownMenuItem'
import config from '@/site-config'

export default function DropdownMenu() {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button
          className='bg-primary-foreground hover:border-foreground/25 inline-flex justify-center rounded-md border border-zinc-400 p-2 text-sm font-medium shadow-xs transition-all focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 focus:outline-hidden dark:border-zinc-700 dark:hover:bg-zinc-800'
          aria-label='menu'
        >
          <HamburgerMenuIcon className='size-5' />
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
        <Menu.Items className='bg-primary-foreground absolute right-0 z-10 mt-2 w-56 origin-top-right divide-zinc-400 rounded-md border border-zinc-400 ring-1 shadow-xl ring-black focus:outline-hidden dark:divide-zinc-700 dark:border-zinc-700 dark:bg-zinc-800'>
          <div className='py-1'>
            {config.header.menu.map((item, key) => {
              return (
                <DropdownMenuItem key={key} href={item.link}>
                  {item.title}
                </DropdownMenuItem>
              )
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
