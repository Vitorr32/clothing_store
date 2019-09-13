import React from 'react';
import { connect } from 'react-redux';

import MenuItem from '../menu_item/menu_item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

import './directory.styles.scss';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => (
  <div className='directory_menu'>
    {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
      <MenuItem
        key={id}
        title={title}
        image={imageUrl}
        size={size}
        target={linkUrl}
        subtitle={'Shop Now'}
      />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
