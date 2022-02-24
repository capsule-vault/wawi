import { Fragment } from 'react';
import { Transition, Popover } from '@headlessui/react';

const MyPopover = (props) => (
  <Popover>
    {props.button}
    <Transition
      as={Fragment}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Popover.Panel className="fixed inset-0 z-50 bg-bg overflow-y-scroll">
        {props.children}
      </Popover.Panel>
    </Transition>
  </Popover>
);

export default MyPopover;
