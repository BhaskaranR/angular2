import { Injectable, Inject } from '@angular/core';
import { Control } from '@angular/common';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

/**
 * Import interfaces that service depends on
 */
import { User } from './user';

@Injectable()
export class UserService {
  constructor (private http: Http, @Inject('apiBase') private _apiBase: string) {

  }

  private _loginApi = this._apiBase + '/authorize/local';
  private _logoutApi = this._apiBase + '/logout';
  private _authenticatedApi = this._apiBase + '/authenticated';
  private _registerApi = this._apiBase + '/users/register';
  private _userExistsApi = this._apiBase + '/users/exists';


  login(request : LoginRequest) : Observable<User>{
    let token : string = null;
    return this.authHttp.post(Appsettings.API_ENDPOINT.concat(this.LOGIN_API_URL),JSON.stringify(request))
      .map((response : Response) => {
          token = response.headers.get('authorization');
          if(token)
            localStorage.setItem(Appsettings.JWT_TOKEN_NAME,token);
          localStorage.setItem(Appsettings.USER_STORAGE_NAME,response.text());
          return new User(JSON.parse(response.text()));
        },
        error => console.log("Login request failed : "+error));
  }


  register(registrationRequest : RegistrationRequest){
    let token : string = null;
    return this.authHttp.post(Appsettings.API_ENDPOINT.concat(this.REGISTER_API_URL),JSON.stringify(registrationRequest))
      .map((response : Response) => {
          token = response.headers.get('authorization');
          if(token)
            localStorage.setItem(Appsettings.JWT_TOKEN_NAME,token);
          return new User(response.json());
        },
        error => console.log("Registration request failed : "+error));
  }

  authenticated() {
    return this.http.get(this._authenticatedApi, <RequestOptionsArgs> {withCredentials: true})
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  logout() {
    return this.http.get(this._logoutApi, <RequestOptionsArgs> {withCredentials: true})
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }



  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    return Observable.throw(error || "Server Error");
  }
}
