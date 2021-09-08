import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, increaseAsync, decreaseAsync } from '../modules/counter';

// const CounterContainer = ({ increase, decrease, number }) => {
//     return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
// };

// redux-thunk
const CounterContainer = ({ increaseAsync, decreaseAsync, number }) => {
    return <Counter number={number} onIncrease={increaseAsync} onDecrease={decreaseAsync} />;
};

export default connect(
    (state) => ({
        number: state.counter,
    }),
    {
        increaseAsync,
        decreaseAsync,
    }
)(CounterContainer);
