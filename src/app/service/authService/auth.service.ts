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
          this.LocalStorageSaveData(resp);
        }
      }),
      map((valid) => valid.message),
      catchError((err) => of(err.error.message))
    );
  }

  register(email: string, user: string, password: string) {
    const url = `${this.baseUrl}/register-user`;
    const body = { email, user, password };

    return this.http.post<LoginResponse>(url, body).pipe(
      tap((resp) => {
        if (resp.message === 'success') {
          this.LocalStorageSaveData(resp);
        }
      }),
      map((valid) => valid.message),
      catchError((err) => of(err.error.message))
    );
  }

  LocalStorageSaveData(respData: LoginResponse) {
    localStorage.setItem('userType', respData.data.userType);
    localStorage.setItem('email', respData.data.email);
    localStorage.setItem('user', respData.data.user);
    localStorage.setItem('token', respData.access_token);
  }

  statusSesion(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
