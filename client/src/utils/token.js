export function getToken() {
	return localStorage.getItem("nat-exam-2022-token");
}

export function setToken(token) {
	return localStorage.setItem("nat-exam-2022-token", token);
}

export function removeToken() {
	localStorage.removeItem("nat-exam-2022-token");
}
