import ApiService from "../services/ApiService";
// import StorageService from "../services/StorageService";

// const Storage = new StorageService();
const Service = new ApiService();

export const loginUser = async (data) => Service.postData("/login", data);
export const storeProduct = async (data) =>
  Service.postData("/product/store", data);
// QUOTE
// export const updateMetlifeRequest = async (data) =>
//   Service.postData("/infortuni/metlife/update-quote", data);

// // ? Saved Quotations
export const getProducts = async () => Service.getData("/products");
export const getMyProducts = async () => Service.getData("/user/products");
