import { environment } from './../../environments/environment.prod';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

const TOKEN_KEY = 'access-token';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    Authorization: `${TOKEN_KEY} Bearer`
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.url;
  user: Observable<any>;
  currentUser: any;
  private authState = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private router: Router,
    private helper: JwtHelperService
  ) {
    this.user = this.authState.asObservable();
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        // tslint:disable-next-line:prefer-const
        let decoded = this.helper.decodeToken(token);
        // tslint:disable-next-line:prefer-const
        let isExpired = this.helper.isTokenExpired(token);
        if (!isExpired) {
          this.user = decoded;
          this.authState.next(true);

        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  }

  singIn(credentials: any): Observable<any> {
    return this.http.post(`${this.url}/api/login`, credentials, httpOptions)
      .pipe(
        tap(res => {

          let user = null;

          // tslint:disable-next-line:no-string-literal
          user = res['usuario'];


          this.authState.next(user);

          // tslint:disable-next-line:no-string-literal
          this.storage.set(TOKEN_KEY, res['token']);

          return of(user);
        })
      );
  }

  async signOut() {
    this.storage.set(TOKEN_KEY, null);
    this.authState.next(null);
    this.router.navigateByUrl('/login');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      console.error(
        `Mensagem de erro: ${error.message} ` +
        `Status: ${error.status}, ` +
        `Descrição do Erro: ${error.statusText} ` +
        `Erro: ${error.error}`);
    }
    return throwError('Algo deu errado, por favor tente novamente mais tarde!');
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  addUser(credentials): Observable<any> {
    return this.http.post(`${this.url}/api/user`, credentials, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  listUser(page): Observable<any> {
    return this.http.get(`${this.url}/api/users/` + page, httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getUserById(id): Observable<any> {
    return this.http.get(`${this.url}/api/user/${id}`, httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  attUser(credentials): Observable<any> {
    return this.http.post(`${this.url}/api/user`, credentials, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  delUser(id): Observable<any> {
    return this.http.delete(`${this.url}/api/user/${id}`, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  listProdutos(): Observable<any> {
    return this.http.get(`${this.url}/api/prods`, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getProdutoById(id: string): Observable<any> {
    return this.http.get(`${this.url}/api/prod/${id}`, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  addProduto(data: any): Observable<any> {
    return this.http.post(`${this.url}/api/prod`, data, httpOptions).pipe(
      catchError(this.handleError));
  }

  attProduto(data: any): Observable<any> {
    console.log(data);
    return this.http.put(`${this.url}/api/prod`, data, httpOptions).pipe(
      catchError(this.handleError));
  }

  delProduto(id: string): Observable<any> {
    return this.http.delete(`${this.url}/api/prod/${id}`, httpOptions).pipe(
      catchError(this.handleError));
  }
}
