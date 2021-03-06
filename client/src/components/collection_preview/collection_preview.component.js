import React from 'react';

import './collection_preview.styles.scss';
import CollectionItem from '../collection_item/collection_item.component';

const CollectionPreview = ({ title, items }) => (
  <div className='collection_preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((_, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
