import type { ReactNode } from 'react';
import { FiKey } from 'react-icons/fi';
import { BsChatLeftDots } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { GrStorage } from 'react-icons/gr';
import { MdOutlineLiveHelp } from 'react-icons/md';
import { IoMdPersonAdd } from 'react-icons/io';

type TMenuItem = {
  label: string;
  icon: ReactNode;
};
export const menuItems: TMenuItem[] = [
  { label: 'Account', icon: <FiKey /> },
  { label: 'Chat Settings', icon: <BsChatLeftDots /> },
  { label: 'Notifications', icon: <RiNotification3Line /> },
  { label: 'Storage', icon: <GrStorage /> },
  { label: 'Help', icon: <MdOutlineLiveHelp /> },
  { label: 'Invite a friend', icon: <IoMdPersonAdd /> },
];
