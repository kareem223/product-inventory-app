import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = environment.backendurl;

  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createProduct(product: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, product);
  }

  updateProduct(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getProductsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getProductsListByCategory(category: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?category=${category}`);
  }

}
