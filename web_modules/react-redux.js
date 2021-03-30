import { S as Subscription, u as useIsomorphicLayoutEffect, R as ReactReduxContext } from './common/index-0f43782e.js';
export { c as connect } from './common/index-0f43782e.js';
import { r as react } from './common/index-fc424163.js';
import './common/hoist-non-react-statics.cjs-2ee5b6bc.js';
import './common/extends-7477639a.js';
import './common/objectWithoutPropertiesLoose-d5128f55.js';
import './common/redux-36ed889e.js';
import './common/index-0f6db834.js';
import './common/_commonjsHelpers-8c19dec8.js';

function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = react.useMemo(function () {
    var subscription = new Subscription(store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = react.useMemo(function () {
    return store.getState();
  }, [store]);
  useIsomorphicLayoutEffect(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || ReactReduxContext;
  return /*#__PURE__*/react.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

export { Provider };
