import http from "../http-common";

class ProductsDataService {
  gets(params) {
    return http.get("/products", { params });
  }
  get = id => {
    return http.get(`/products/${id}`);
  }
  update = (id, data) => {
    return http.put(`/products/${id}`, data);
  }
  create = data => {
    return http.post("/products", data);
  }
  save(data) {
    return data.id ? this.update(data.id, data) : this.create(data)
  }
  remove = id => {
    return http.delete(`/products/${id}`);
  }
}

export default new ProductsDataService();