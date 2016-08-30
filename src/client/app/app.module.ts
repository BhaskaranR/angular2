import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { AboutModule } from './+about/about.module';
import { HomeModule } from './+home/home.module';
import { SharedModule } from './shared/shared.module';

import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';

import { provideAuth} from 'angular2-jwt';


@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), AboutModule, HomeModule, LoginModule, RegisterModule,  SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [
    provideAuth({
      headerName: 'Authorization',
      headerPrefix: 'bearer',
      tokenName: 'token',
      tokenGetter: (() => localStorage.getItem('id_token')),
      globalHeaders: [{ 'Content-Type': 'application/json' }],
      noJwtError: true
    }),
    {
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  },
    {provide: 'apiBase',
      useValue: 'https://angular2-login-seed.herokuapp.com'}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
