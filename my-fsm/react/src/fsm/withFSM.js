import React from "react"

export const withFSM=(fsmInstance) =>{
    return function (WrappedComponent) {
      return class extends React.Component {
        render() {
          return (
            <WrappedComponent
              {...this.props}
              fsmInstance={fsmInstance}
            />
          )
        }
        
        componentDidMount() {
            this.unsubscribe = fsmInstance.subscribe(this.handleChange.bind(this))
        }
        
        componentWillUnmount() {
          this.unsubscribe()
        }
      
        handleChange() {
          this.forceUpdate()
        }
      }
    }
  }
  