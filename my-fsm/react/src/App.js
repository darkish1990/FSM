import { withFSM } from './fsm/withFSM';
import './App.css';
import { FSM } from './fsm';
import { useFSM } from './hooks/use-fsm';

const fsm = new FSM({
  initialState: {
    toggle:'off',
    state2:'red'
  },
  states: {
    toggle:{
      on: {
        nextState: "blink"
      },
      blink: {
        nextState: "off"
      },
     off:{
        nextState:'on'
    }
  },
  state2:{
    blue: {
      nextState: "red"
    },
    red: {
      nextState: "blue"
    },
  }
  }
});



const SwitchInner = ({fsmInstance})=>{
  const {toggle,state2} = fsmInstance.getState()
  return(
  <>
  <button onClick={() => fsmInstance.transition("toggle")}>toggle</button>
  <button onClick={() => fsmInstance.transition("state2")}>toggle</button>
  <div>State is: {toggle}</div>
  <div>State is: {state2}</div>
  </>)
}

const Switch = withFSM(fsm)(SwitchInner)

const App = () => {
  // const { state, error, transition } = useFSM(fsm);
  return (
    <div>
      {/* <button onClick={() => transition("TOGGLE")}>toggle</button>
      <div>State is: {state}</div> */}
      {/* {error ? <div>{error}</div> : null} */}
      <Switch/>
    </div>
  );
}

export default App;
