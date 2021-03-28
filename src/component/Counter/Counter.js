import React from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import counterActions from '../../redux/counter/counter-actions';
import './Counter.css';
import Value from './Value';

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = disaptch => ({
  onIncrement: value => disaptch(counterActions.increment(value)),
  onDecrement: value => disaptch(counterActions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
