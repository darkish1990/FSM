import './App.css';
import { FSM } from './fsm';
import { useFSM } from './hooks/use-fsm';

const fsm = new FSM({
  initialState: "off",
  states: {
    off: {
      transitions: {
        TOGGLE: "on"
      }
    },
    on: {
      transitions: {
        TOGGLE: "off"
      }
    }
  }
});

const App = () => {
  const { state, error, transition } = useFSM(fsm);
  return (
    <div>
      <button onClick={() => transition("TOGGLE")}>toggle</button>
      <div>State is: {state}</div>
      {error ? <div>{error}</div> : null}
    </div>
  );
}

export default App;
