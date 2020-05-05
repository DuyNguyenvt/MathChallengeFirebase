/**
 * Combine all reducers in this file and export the combined reducers.
 */
// import globalReducer from 'containers/App/reducer';
// import modalReducer from 'containers/Modals/reducer';
// import homeReducer from 'containers/Home/reducer';
// import portfolioReducer from 'containers/Portfolio/reducer';
// import messagesReducer from 'containers/Messages/reducer';
// import productReducer from 'containers/Products/reducer';
// import recommendationReducer from 'containers/Recommendation/reducer';
// import investmentPostReducer from 'containers/InvestmentPost/reducer';
// import productDetailReducer from 'containers/ProductDetail/reducer';
// import buyReducer from 'containers/Buy/reducer';
// import insightsReducer from 'containers/Insights/reducer';
import {combineReducers} from 'redux';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    // global: globalReducer,
    // modals: modalReducer,
    // home: homeReducer,
    // portfolio: portfolioReducer,
    // messages: messagesReducer,
    // product: productReducer,
    // recommendation: recommendationReducer,
    // investmentPost: investmentPostReducer,
    // productDetail: productDetailReducer,
    // buy: buyReducer,
    // insights: insightsReducer,
    // ...injectedReducers,
  });

  return rootReducer;
}
