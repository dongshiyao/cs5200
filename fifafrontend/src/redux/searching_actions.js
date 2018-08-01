export function addSearchingPlayer(player) {
  // console.log('action', player);
	return {
		type: 'ADD_SEARCHING_PLAYER',
		payload: player
	}
}

export function removeSearchingPlayer(player) {
	return {
		type: 'REMOVE_SEARCHING_PLAYER',
		payload: player
	}
}

export function addSearchingPosition(position) {
	return {
		type: 'ADD_SEARCHING_POSITION',
		payload: position === 'All' ? null : position
	}
}

export function removeSearchingPosition(position) {
	return {
		type: 'REMOVE_SEARCHING_POSITION',
		payload: position
	}
}

export function addSearchingNation(nation) {
	return {
		type: 'ADD_SEARCHING_NATION',
		payload: nation === 'All' ? null : nation
	}
}

export function removeSearchingNation(nation) {
	return {
		type: 'REMOVE_SEARCHING_NATION',
		payload: nation
	}
}

export function addSearchingClub(club) {
	return {
		type: 'ADD_SEARCHING_CLUB',
		payload: club === 'All' ? null : club
	}
}

export function removeSearchingClub(club) {
	return {
		type: 'REMOVE_SEARCHING_CLUB',
		payload: club
	}
}

export function addSearchingLeague(league) {
	return {
		type: 'ADD_SEARCHING_LEAGUE',
		payload: league === 'All' ? null : league
	}
}

export function removeSearchingLeague(league) {
	return {
		type: 'REMOVE_SEARCHING_LEAGUE',
		payload: league
	}
}

export function setPlayersResults(players) {
  // console.log('action', players);
  return {
		type: 'SET_PLAYERS_RESULTS',
		payload: players
	}
}
