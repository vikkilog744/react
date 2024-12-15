import * as React from 'react';
import { Link } from 'react-router-dom';
import './menuStyle.scss';

const Menu = (props) => {
  const { data: menuList } = props;
  const windowLocation = window.location;
  return (
    <nav>
        <ul className='container'>
            {menuList && menuList.map((item, index) => (
              <li key={index} className={item.menuUrl === windowLocation.pathname ? 'active': ''}>
                <Link to={item.menuUrl}>
                  <img src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="" title="" />
                  {item.menuComp}
                </Link>
              </li>
            ))}
        </ul>
    </nav>
  );
}

export default Menu;