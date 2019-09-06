import React from 'react';

import './menu_item.styles.scss';

const MenuItem = ({ title, subtitle, image, size }) => (
  <div className={`${size} menu_item`}>
    <div
      className='background_image'
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>{subtitle}</span>
    </div>
  </div>
);

export default MenuItem;
