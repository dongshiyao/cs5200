export default function squadReducer( state = {
  showSearch: false,
  squad: null,
  formation: null,
	GKPlayer: null,
	STPlayer: null,
  CFPlayer: null,
	LMPlayer: null,
	LCMPlayer: null,
  RCMPlayer: null,
  RMPlayer: null,
  LBPlayer: null,
  LCBPlayer: null,
  RCBPlayer: null,
  RBPlayer: null,
	error: null
}, action) {
	switch (action.type) {
    case "CREATE_SQUAD": {
      return {
        ...state,
        squad: action.payload
      }
    }
    case "REMOVE_SQUAD": {
      return {
        ...state,
        squad: null,
        formation: null,
      	GKPlayer: null,
      	STPlayer: null,
        CFPlayer: null,
      	LMPlayer: null,
      	LCMPlayer: null,
        RCMPlayer: null,
        RMPlayer: null,
        LBPlayer: null,
        LCBPlayer: null,
        RCBPlayer: null,
        RBPlayer: null
      }
    }
    case "SET_FORMATION": {
      return {
        ...state,
        formation: action.payload
      }
    }
		case "ADD_GK": {
			return {
				...state,
				GKPlayer: action.payload
			}
		}
		case "ADD_ST": {
      return {
        ...state,
        STPlayer: action.payload
      }
    }
    case "ADD_CF": {
      return {
        ...state,
        CFPlayer: action.payload
      }
    }
    case "ADD_LM": {
      return {
        ...state,
        LMPlayer: action.payload
      }
    }
    case "ADD_LCM": {
      return {
        ...state,
        LCMPlayer: action.payload
      }
    }
    case "ADD_RCM": {
      return {
        ...state,
        RCMPlayer: action.payload
      }
    }
    case "ADD_RM": {
      return {
        ...state,
        RMPlayer: action.payload
      }
    }
    case "ADD_LB": {
      return {
        ...state,
        LBPlayer: action.payload
      }
    }
    case "ADD_LCB": {
      return {
        ...state,
        LCBPlayer: action.payload
      }
    }
    case "ADD_RCB": {
      return {
        ...state,
        RCBPlayer: action.payload
      }
    }
    case "ADD_RB": {
      return {
        ...state,
        RBPlayer: action.payload
      }
    }
    case "SQUAD_SEARCH_SWITCH": {
      return {
        ...state,
        showSearch: !action.payload
      }
    }
		default: {
			return state
		}
	}
}
