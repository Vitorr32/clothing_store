import React from 'react';

import './collection_item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className='collection_item'>
    <div className='image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
    <div className='collection_footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
);

export default CollectionItem;
