import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/";

export function get(url, config = {}) {
	return axios.get(url, config);
}

export function post(url, body, config = {}) {
	return axios.post(url, body, config);
}
