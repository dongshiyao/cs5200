export default function searchingGroupReducer( state = {
	searchingPlayer: null,
	searchingPosition: null,
	searchingNation: null,
	searchingClub: null,
  searchingLeague: null,
  playerResults: [],
	error: null
}, action) {
	switch (action.type) {
		case "REMOVE_ALL_FILTERS": {
			return {
				...state,
				searchingPlayer: null,
				searchingPosition: null,
				searchingNation: null,
				searchingClub: null,
			  searchingLeague: null,
			  playerResults: []
			}
		}
		case "ADD_SEARCHING_PLAYER": {
			return {
				...state,
				searchingPlayer: action.payload
			}
		}
		case "REMOVE_SEARCHING_PLAYER": {
			return {
				...state,
				searchingPlayer: null
			}
		}
    case "ADD_SEARCHING_POSITION": {
			return {
				...state,
				searchingPosition: action.payload
			}
		}
		case "REMOVE_SEARCHING_PLAYER": {
			return {
				...state,
				searchingPosition: null
			}
		}
    case "ADD_SEARCHING_NATION": {
			return {
				...state,
				searchingNation: action.payload
			}
		}
		case "REMOVE_SEARCHING_NATION": {
			return {
				...state,
				searchingNation: null
			}
		}
    case "ADD_SEARCHING_CLUB": {
			return {
				...state,
				searchingClub: action.payload
			}
		}
		case "REMOVE_SEARCHING_CLUB": {
			return {
				...state,
				searchingClub: null
			}
		}
    case "ADD_SEARCHING_LEAGUE": {
			return {
				...state,
				searchingLeague: action.payload
			}
		}
		case "REMOVE_SEARCHING_LEAGUE": {
			return {
				...state,
				searchingLeague: null
			}
		}
    case "SET_PLAYERS_RESULTS": {
			return {
				...state,
				playerResults: action.payload
			}
		}
		default: {
			return state
		}
	}
}
