import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

import Services from '../../api/service';

const servicesSubMenu = Services.map((service) => ({
  id: service.Id,
  title: service.sTitle,
  link: `/service-single/${service.slug}`,
}));

const menus = [
  {
    id: 3,
    title: 'Pages',
    link: '/',
    submenu: [
      { id: 31, title: 'About', link: '/about' },
      { id: 322, title: 'Testimonials', link: '/testimonials' },
      { id: 34, title: 'Team', link: '/team' }
    ]
  },
  {
    id: 6,
    title: 'Services',
    link: '/services',
    submenu: servicesSubMenu, // <--- Inserted dynamically
  },
  {
    id: 7,
    title: 'Projects',
    link: '/projects',
  },
  
  {
    id: 88,
    title: 'Contact',
    link: '/contact',
  },
  {
    id: 1,
    title: 'Home',
    link: '/home',
  },
];

const MobileMenu = () => {
  const [openId, setOpenId] = useState(0);
  const [menuActive, setMenuState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div>
      <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
        <div className="menu-close">
          <div className="clox" onClick={() => setMenuState(!menuActive)}>
            <i className="ti-close"></i>
          </div>
        </div>

        <ul className="responsivemenu">
          {menus.map((item, mn) => (
            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
              {item.submenu ? (
                <Fragment>
                  <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>
                    {item.title}
                    <i
                      className={
                        item.id === openId
                          ? 'fa fa-angle-up'
                          : 'fa fa-angle-down'
                      }
                    ></i>
                  </p>
                  <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                    <List className="subMenu">
                      {item.submenu.map((submenu, i) => (
                        <ListItem key={i}>
                          <Link
                            onClick={ClickHandler}
                            className="active"
                            href={submenu.link}
                          >
                            {submenu.title}
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </Fragment>
              ) : (
                <Link
                  className="active"
                  href={item.link}
                  onClick={ClickHandler}
                >
                  {item.title}
                </Link>
              )}
            </ListItem>
          ))}
        </ul>
      </div>

      <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
        <button type="button" className="navbar-toggler open-btn">
          <span className="icon-bar first-angle"></span>
          <span className="icon-bar middle-angle"></span>
          <span className="icon-bar last-angle"></span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;

{/*{
    id: 5,
    title: 'Blog',
    link: '/blog',
  },*/}