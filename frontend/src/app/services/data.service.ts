import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl + '/items');
  }

  update(post: Item): Observable<Item> {
    return this.http.put<Item>(this.apiUrl + '/items/' + post.id, post);
  }

  create(post: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl + '/items', post);
  }

  remove(post: Item): Observable<Item> {
    return this.http.delete<Item>(this.apiUrl + '/items/' + post.id, post);
  }
}
