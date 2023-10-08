import axios from "axios";

const API_HOST = 'http://localhost:8080'

const api = axios.create({
  baseURL: `${API_HOST}/`,
});

export const apiGet = async (path, body) => {
  try {
    const res = await api.get(path, body);
    return { response: res, error: null };
  } catch (err) {
    return { response: null, error: err };
  }
};

export const apiPost = async (path, body) => {
  try {
    const res = await api.post(path, body);
    return { response: res, error: null };
  } catch (err) {
    return { response: null, error: err };
  }
};
