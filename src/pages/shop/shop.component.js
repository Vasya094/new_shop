import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component.js";
import CollectionPage from "../collection/collection.component.js";


const ShopPage = ({match}) => {

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview}/>
      <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
  );
};



export default ShopPage;
