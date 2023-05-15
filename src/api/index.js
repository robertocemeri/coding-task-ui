import ApiService from "../services/ApiService";
// import StorageService from "../services/StorageService";

// const Storage = new StorageService();
const Service = new ApiService();

export const loginUser = async (data) => Service.postData("/login", data);

// QUOTE
// export const updateMetlifeRequest = async (data) =>
//   Service.postData("/infortuni/metlife/update-quote", data);

// product routes
export const getProducts = async () => Service.getData("/products");
export const getMyProducts = async () => Service.getData("/user/products");
export const getProductById = async (data) =>
  Service.getData("/products/" + data);
export const storeProduct = async (data) =>
  Service.postData("/products/store", data);
export const placeBid = async (data) => Service.postData("/products/bid", data);

// categories routes
export const getCategories = async () => Service.getData("/categories");
