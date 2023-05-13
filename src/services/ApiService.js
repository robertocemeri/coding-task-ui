import { BACKEND_API_URL } from "../config";
import StorageService from "./StorageService";

const Storage = new StorageService();
export default class ApiService {
  #makeHeaders = async () => {
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    let token = Storage.getToken();
    if (token !== null) {
      headers.Authorization = "Bearer " + token;
    }

    return headers;
  };

  #makeBody = (data) => {
    return JSON.stringify(data);
  };

  async postData(path, data) {
    let endpoint = BACKEND_API_URL + path;
    console.warn("POST: " + endpoint);
    console.warn("DATA", data);
    let requestData = {
      method: "POST",
      headers: await this.#makeHeaders(),
      body: this.#makeBody(data),
    };
    return await fetch(endpoint, requestData)
      .then((res) => {
        const statusCode = res.status;
        const data = res.json();
        return Promise.all([statusCode, data]);
      })
      .then(([statusCode, data]) => {
        return { ...data, statusCode: statusCode };
      })
      .catch((e) => console.log(e));
  }

  async getData(path) {
    let endpoint = BACKEND_API_URL + path;

    let requestData = {
      method: "GET",
      headers: await this.#makeHeaders(),
    };

    return await fetch(endpoint, requestData)
      .then((res) => {
        const statusCode = res.status;
        const data = res.json();
        return Promise.all([statusCode, data]);
      })
      .then(([statusCode, data]) => {
        return { ...data, statusCode: statusCode };
      })
      .catch((e) => console.log(e));
  }
}
