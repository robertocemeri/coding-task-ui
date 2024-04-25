import ApiService from "./ApiService";

const Service = new ApiService();

export const loginUser = async (data) => Service.postData("/login", data);

// product routes
export const getProducts = async () => Service.getData("/products");
export const getMyProducts = async () => Service.getData("/user/products");
export const getMyPurchases = async () => Service.getData("/user/purchases");
export const getProductById = async (id) => Service.getData(`/products/${id}`);
export const storeProduct = async (data) => Service.postData("/products/store", data);
export const placeBid = async (data) => Service.postData("/products/bid", data);
export const buyNowProduct = async (data) => Service.postData("/products/buy-now", data);

// categories routes
export const getCategories = async () => Service.getData("/categories");

//notification routes
export const getMyNotifications = async () => Service.getData("/user/notifications");
export const getMyNotificationsCount = async () => Service.getData("/user/notifications-count");
export const readAllMyNotifications = async () => Service.getData("/user/read-all-notifications");
