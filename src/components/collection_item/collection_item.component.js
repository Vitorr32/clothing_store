import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom_button/custom_button.component';
import {
  CollectionItemContainer,
  CollectionItemImage,
  CollectionItemFooter,
  CollectionItemName,
  CollectionItemPrice
} from './collection_item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer className='collection_item'>
      <CollectionItemImage imageUrl={imageUrl} />
      <CollectionItemFooter>
        <CollectionItemName>{name}</CollectionItemName>
        <CollectionItemPrice>{price}</CollectionItemPrice>
      </CollectionItemFooter>
      <CustomButton onClick={() => addItem(item)} footer inverted>
        Add to cart
      </CustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
