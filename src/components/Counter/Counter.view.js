import { connect } from 'react-redux'
import { counterDataSelecter, increamentData, decreamentData } from './Counter.redux'
import Counter from './Counter'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
    return {
        data: counterDataSelecter(state)
    }
}

const mapDispatchToProps = (dispach, props) => bindActionCreators(
    {
        doIncreament: increamentData,
        doDecreament: decreamentData,
    }, dispach, props
)

const CounterView = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default CounterView
