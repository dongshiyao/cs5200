export function createSquad(squad) {
  return {
    type: "CREATE_SQUAD",
    payload: squad
  }
}

export function removeSquad() {
  return {
    type: "REMOVE_SQUAD",
  }
}

export function setFormation(formation) {
  return {
    type: "SET_FORMATION",
    payloay: formation
  }
}

export function addGK(player) {
	return {
		type: 'ADD_GK',
		payload: player
	}
}

export function addST(player) {
	return {
		type: 'ADD_ST',
		payload: player
	}
}

export function addLM(player) {
	return {
		type: 'ADD_LM',
		payload: player
	}
}

export function addLCM(player) {
	return {
		type: 'ADD_LCM',
		payload: player
	}
}

export function addCF(player) {
	return {
		type: 'ADD_CF',
		payload: player
	}
}

export function addRCM(player) {
	return {
		type: 'ADD_RCM',
		payload: player
	}
}

export function addRM(player) {
	return {
		type: 'ADD_RM',
		payload: player
	}
}

export function addLB(player) {
	return {
		type: 'ADD_LB',
		payload: player
	}
}

export function addLCB(player) {
	return {
		type: 'ADD_LCB',
		payload: player
	}
}

export function addRCB(player) {
	return {
		type: 'ADD_RCB',
		payload: player
	}
}

export function addRB(player) {
	return {
		type: 'ADD_RB',
		payload: player
	}
}

export function squadSearchSwitch(showSearch) {
  return  {
    type: 'SQUAD_SEARCH_SWITCH',
    payload: showSearch
  }
}
