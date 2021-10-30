export class FSM {
  state;
  error = "";
  states;
  transitionSubsrcibers = new Set();
  errorSubscribers = new Set();
  constructor({initialState, states}){
    this.state = initialState;
    this.states = states;
  }

  transition(transitionName){
    const nextState = this.states[this.state]?.transitions?.[transitionName]
    //check if the state has a transition with said name 
    if(nextState){
      this.state = nextState
      this.transitionSubsrcibers.forEach((transitionFunction)=>transitionFunction(this.state))
      this.error = ''
      this.errorSubscribers.forEach((errorFunction)=>errorFunction(this.error))
    }else{
      this.error = `Error Can't transition ${this.state} to ${transitionName}`
      this.errorSubscribers.forEach((errorFunction)=>errorFunction(this.error))
    }
  }

  getState(){
    return this.state
  }

  getError(){
    if(this.error){
      return this.error
    }
  }

  subscribe(onTransition, onError){
    this.transitionSubsrcibers.add((onTransition))
    onError && this.errorSubscribers.add((onError))
  }
  unsubscribe(onTransition, onError){
    this.transitionSubsrcibers.delete((onTransition))
    onError && this.errorSubscribers.delete((onError))
  }

}