export function login(user) {
  return {
    type: 'LOGIN',
    payload: user,
  }
}

export function logout() {
  return {
		type: 'LOGOUT',
    payload: null
	}
}

export function register(user) {
  return {
    type: "REGISTER",
    payload: user,
  }
}

export function updateInfo(user) {
  return {
    type: "UPDATE_INFO",
    payload: user
  }
}

export function changeContent(pageContent) {
  return {
    type: "CHANGE_CONTENT",
    payload: pageContent,
  }
}
