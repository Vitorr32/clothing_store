import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections_overview/collections_overview.component';
import Collection from '../Collection/Collection.component';

const ShopPage = ({ match }) => (
  <div className='shop_page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default ShopPage;
