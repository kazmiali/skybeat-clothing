import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner/spinner.component';
import ErrorBoundary from '../../components/error-boundary/error-boundary.component';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import { ShopContainer } from './shop.styles';

const CollectionsOverviewContainer = lazy(() =>
  import(
    '../../components/collections-overview/collections-overview.container'
  ),
);
const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container'),
);

const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <ShopContainer>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route
            exact
            path={`${match.path}`}
            component={CollectionsOverviewContainer}
          />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
          />
        </Suspense>
      </ErrorBoundary>
    </ShopContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
