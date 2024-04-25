import axios from 'axios';
import { BACKEND_API_URL } from "../config";
import StorageService from "./StorageService";


const options = {
  baseURL: BACKEND_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 50000,
};

const api = axios.create(options);
const Storage = new StorageService();

api.interceptors.request.use(
  async (config) => {
    const token = Storage.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default function ApiService() {
  const postData = async (path, data) => {
    try {
      const response = await api.post(path, data);
      return { ...response.data, statusCode: response.status };
    } catch (error) {
      throw error;
    }
  };

  const getData = async (path) => {
    try {
      const response = await api.get(path);
      return { ...response.data, statusCode: response.status };
    } catch (error) {
      throw error;
    }
  };

  return {
    postData,
    getData
  };
}
