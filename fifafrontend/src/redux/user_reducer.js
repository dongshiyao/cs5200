export default function userReducer( state = {
  user: null,
  pageContent: 'LOGIN',
	error: null
}, action) {
	switch (action.type) {
		case "LOGIN": {
			return {
				...state,
				user: action.payload,
			}
		}
    case "LOGOUT": {
      localStorage.clear();
      return  {
        ...state,
        user: null
      }
    }
    case "REGISTER": {
      return {
        ...state,
        user: action.payload
      }
    }
    case "UPDATE_INFO": {
      return  {
        ...state,
        user: action.payload
      }
    }
    case "CHANGE_CONTENT": {
      return {
        ...state,
        pageContent: action.payload
      }
    }
    default: {
			return state
		}
  }
}
