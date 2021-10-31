import { useEffect } from 'react';
import MainPage from './pages/MainPage/MainPage';
import { FSM } from './fsm';
import { useFSM } from './fsm/fsm-react';

const fsm = new FSM({
  initialState: "up",
  states: {
    up: {
      transitions: {
        TOGGLE: "right",
      }
    },
    right: {
      transitions: {
        TOGGLE: "down"
      }
    },
    down: {
      transitions: {
        TOGGLE: "left"
      }
    },
    left: {
      transitions: {
        TOGGLE: "up"
      }
    },
  }
});

const App=()=> {
  // const { state, error, transition } = useFSM(fsm);
  // return (
  //   <div>
  //     <button onClick={() => transition("TOGGLE")}>toggle</button>
  //     <button onClick={() => transition("UNSUPPORTED_TRANSITION")}>
  //       Error me!
  //     </button>
  //     <div>State is: {state}</div>
  //     {error ? <div>{error}</div> : null}
  //   </div>
  // );
  return <MainPage/>
}

export default App;
