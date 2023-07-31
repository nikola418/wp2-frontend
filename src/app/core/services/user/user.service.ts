import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getOne(id: string) {
    return;
  }
  getAll(skip = 0, take = 10) {
    return;
  }
}
