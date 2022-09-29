import http from "../http-common";

class ProductsDataService {
  getAll(params) {
    return http.get("/products", { params });
  }
  // other CRUD methods
}

export default new ProductsDataService();