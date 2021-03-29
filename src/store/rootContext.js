import React, { createContext, useContext, useMemo, useReducer } from "react"
import reducer, { initialState } from "./reducer"

const RootContext = createContext()

function RootProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState || {})

  const toggleNavigationOverflow = () => {
    return dispatch({ type: "TOGGLE_NAV" })
  }

  const toggleTheme = (state) => {
    return dispatch({ type: "TOGGLE_THEME", state })
  }

  const saveRef = (ref) => {
    return dispatch({ type: "SAVE_REF", ref })
  }

  const scrollToRef = () => {
    return window.scrollTo(0, state.ref.current.offsetTop)
  }

  const value = useMemo(() => {
    return {
      state,
      toggleNavigationOverflow,
      toggleTheme,
      saveRef,
      scrollToRef,
    }
  }, [state])

  return (
    <RootContext.Provider value={value}>{props.children}</RootContext.Provider>
  )
}

const useRootContext = () => useContext(RootContext)
export { RootContext, useRootContext }
export default RootProvider
