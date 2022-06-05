import { connect } from '../../../web_modules/react-redux.js';
import { counterDataSelecter, increamentData, decreamentData } from './Counter.redux.js';
import { Counter } from './Counter.js';
import { bindActionCreators } from '../../../web_modules/redux.js';

const mapStateToProps = state => {
  return {
    data: counterDataSelecter(state)
  };
};

const mapDispatchToProps = (dispach, props) => bindActionCreators({
  doIncreament: increamentData,
  doDecreament: decreamentData
}, dispach, props);

const CounterView = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default CounterView;