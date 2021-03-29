export const initialState = {
  isMobileNavVisible: false,
  toggleTheme: false,
  ref: null,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_NAV": {
      return { ...state, isMobileNavVisible: !state.isMobileNavVisible }
    }
    case "TOGGLE_THEME": {
      return { ...state, toggleTheme: action.state }
    }
    case "SAVE_REF": {
      return { ...state, ref: action.ref }
    }
    default:
      return state
  }
}
export default rootReducer
