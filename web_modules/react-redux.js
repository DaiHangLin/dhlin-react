import { u as useIsomorphicLayoutEffect, a as createSubscription, R as ReactReduxContext } from './common/index-90a4279f.js';
export { c as connect } from './common/index-90a4279f.js';
import { r as react } from './common/index-531ebdd3.js';
import './common/extends-a912b717.js';
import './common/objectWithoutPropertiesLoose-6aab1694.js';
import './common/hoist-non-react-statics.cjs-1e057a94.js';
import './common/_commonjsHelpers-8c19dec8.js';
import './common/index-0ed5017e.js';

function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = react.useMemo(function () {
    var subscription = createSubscription(store);
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
    subscription.onStateChange = subscription.notifyNestedSubs;
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
