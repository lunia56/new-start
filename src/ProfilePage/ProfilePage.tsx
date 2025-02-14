import type { ReactNode } from 'react';
import { cnProfilePage } from './ProfilePage.classname.ts';
import '../ProfilePage/ProfilePage.css';
import { MdArrowBackIosNew } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { FiKey } from 'react-icons/fi';
import { BsChatLeftDots } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { GrStorage } from 'react-icons/gr';
import { MdOutlineLiveHelp } from 'react-icons/md';
import { IoMdPersonAdd } from 'react-icons/io';
import avatar from '../assets/profilePhoto.png';

type TMenuItem = {
  label: string;
  icon: ReactNode;
};

export const ProfilePage = () => {
  const menuItems: TMenuItem[] = [
    { label: 'Account', icon: <FiKey /> },
    { label: 'Chat Settings', icon: <BsChatLeftDots /> },
    { label: 'Notifications', icon: <RiNotification3Line /> },
    { label: 'Storage', icon: <GrStorage /> },
    { label: 'Help', icon: <MdOutlineLiveHelp /> },
    { label: 'Invite a friend', icon: <IoMdPersonAdd /> },
  ];

  return (
    <div>
      <header className={cnProfilePage('header')}>
        <button className={cnProfilePage('back-button')}>
          <MdArrowBackIosNew />
        </button>
        <h1 className={cnProfilePage('title')}>Profile</h1>
      </header>

      <div className={cnProfilePage('avatar-block')}>
        <div className={cnProfilePage('avatar-container')}>
          <img
            src={avatar}
            alt="User Avatar"
            className={cnProfilePage('avatar')}
          />
          <button className={cnProfilePage('avatar-edit')}>
            <span className={cnProfilePage('edit-icon')}>
              <CiEdit />
            </span>
          </button>
        </div>
      </div>
      <div className={cnProfilePage('info')}>
        <h2 className={cnProfilePage('name')}>Jane Doe</h2>
        <p className={cnProfilePage('description')}>
          This is a small bio description to let users express themselves
        </p>
      </div>
      <nav className={cnProfilePage('menu')}>
        {menuItems.map((item, index) => (
          <div key={index} className={cnProfilePage('menu-item')}>
            <span className={cnProfilePage('menu-icon')}>{item.icon}</span>
            {item.label}
          </div>
        ))}
      </nav>
      <button className={cnProfilePage('logout')}>Logout</button>
    </div>
  );
};
