import { useState, useCallback, useEffect } from 'react'

export const useFSM=(fsm)=>{
    const [state, setState] = useState(fsm.getState())
    const [error, setError] = useState(fsm.getError())

    const onTransition = useCallback(
        (nextState) => {
      
            setState(nextState)
        },
        [],
    )
    const onError = useCallback(
        (error) => {
            setError(error)
        },
        [],
    )

    useEffect(() => {
        fsm.subscribe(onTransition,onError)
        return () => {
            fsm.unsubscribe(onTransition,onError)
        }
    }, [fsm,onTransition,onError])

    const transition =useCallback(
        (transitionName) => {
            fsm.transition(transitionName)
        },
        [fsm],
    )

    return {state, error, transition}
}