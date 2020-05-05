// import globalSaga from 'containers/App/saga';
// import homeSaga from 'containers/Home/saga';
// import portfolioSaga from 'containers/Portfolio/saga';
// import messagesSaga from 'containers/Messages/saga';
// import productSaga from 'containers/Products/saga';
// import recommendationSaga from 'containers/Recommendation/saga';
// import investmentPostSaga from 'containers/InvestmentPost/saga';
// import productDetailSaga from 'containers/ProductDetail/saga';
// import buySaga from 'containers/Buy/saga';
// import insightsSaga from 'containers/Insights/saga';

import {all} from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    // globalSaga(),
    // homeSaga(),
    // portfolioSaga(),
    // productSaga(),
    // messagesSaga(),
    // recommendationSaga(),
    // investmentPostSaga(),
    // productDetailSaga(),
    // buySaga(),
    // insightsSaga(),
  ]);
}
