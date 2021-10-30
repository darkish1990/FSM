export const withFSM=(mapProps) =>{
    // It lets us inject component as the last step so people can use it as a decorator.
    // Generally you don't need to worry about it.
    return function (WrappedComponent) {
      // It returns a component
      return class extends React.Component {
        render() {
          return (
            <WrappedComponent
              {...this.props}
              {...mapProps(fsm.getState(), this.props)}
            //   {...mapDispatchToProps(store.dispatch, this.props)}
            />
          )
        }
        
        componentDidMount() {
            this.unsubscribe = fsm.subscribe(this.handleChange.bind(this))
        }
        
        componentWillUnmount() {
          // and unsubscribe later
          this.unsubscribe()
        }
      
        handleChange() {
          // and whenever the store state changes, it re-renders.
          this.forceUpdate()
        }
      }
    }
  }
  
  // This is not the real implementation but a mental model.
  // It skips the question of where we get the "store" from (answer: <Provider> puts it in React context)
  // and it skips any performance optimizations (real connect() makes sure we don't re-render in vain).
  
  // The purpose of connect() is that you don't have to think about
  // subscribing to the store or perf optimizations yourself, and
  // instead you can specify how to get props based on Redux store state:
  
  const ConnectedCounter = connect(
    // Given Redux state, return props
    state => ({
      value: state.counter,
    }),
    // Given Redux dispatch, return callback props
    dispatch => ({
      onIncrement() {
        dispatch({ type: 'INCREMENT' })
      }
    })
  )(Counter)