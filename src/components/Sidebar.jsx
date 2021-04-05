import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { links, social } from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    return (
        <aside className={`sidebar ${isSidebarOpen && 'show-sidebar'}`}>
            <div className='sidebar-header'>
                <img
                    src='https://raw.githubusercontent.com/john-smilga/react-projects/ca901d0954cf72ebbae6318816eeb018506b8912/12-sidebar-modal/setup/src/logo.svg'
                    alt='Logo'
                />
                <button onClick={closeSidebar} className='close-btn'>
                    <FaTimes />
                </button>
            </div>
            <ul className='links'>
                {links.map((link) => {
                    const { id, url, text, icon } = link;
                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <ul className='social-icons'>
                {social.map((socialIcon) => {
                    const { id, url, icon } = socialIcon;
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};

export default Sidebar;
