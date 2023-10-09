import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { LoginResponse } from 'src/app/interfaces/auth-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.urlStoreApp;

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const url = `${this.baseUrl}/login`;
    const body = { email, password };

    return this.http.post<LoginResponse>(url, body).pipe(
      tap((resp) => {
        if (resp.message == 'success') {
          // TODO: Save modules for user
          localStorage.setItem('userType', resp.data.userType);
          localStorage.setItem('email', resp.data.email);
          localStorage.setItem('user', resp.data.user);
          localStorage.setItem('token', resp.access_token);
        }
      }),
      map((valid) => valid.message),
      catchError((err) => of(err.error.message))
    );
  }
}
