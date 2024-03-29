import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USER_STATUS_CODES } from '../shared/services/user/user-status-codes';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../shared/services/user/user.service';

/**
 * Uncomment the below import when the debouncing asynchronous validators issue
 * get resolved.
 * See https://github.com/angular/angular/issues/6895#issuecomment-221765955
 */

// import { UsernameEmailValidator } from '../shared/services/user/username-email-validator';

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})

export class RegisterComponent implements OnInit {
  title = 'Register';
  loginLink = '/login';

  name: FormControl;
  username: FormControl;
  email: FormControl;
  password: FormControl;
  form: FormGroup;

  /**
   * Boolean used in telling the UI
   * that the form has been submitted
   * and is awaiting a response
   */
  submitted: boolean = false;

  /**
   * Diagnostic message from received
   * form request error
   */
  errorDiagnostic: string;

  constructor(private _userService: UserService, private _router: Router) {

  }

  ngOnInit() {
    /**
     * Initialize form Controls
     */
    this.name = new FormControl('', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(64)]));
    this.username = new FormControl('', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(64)]));
    this.email = new FormControl('', Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]));
    this.password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(32)]));

    /**
     * Initialize form
     */
    this.form = new FormGroup({
      'name': this.name,
      'username': this.username,
      'email': this.email,
      'password': this.password
    });
  }

  login() {
    this._router.navigateByUrl(this.loginLink);
  }


  onSubmit() {
    /**
     * Innocent until proven guilty
     * (show nothing until the request completes)
     */
    this.submitted = true;
    this.errorDiagnostic = null;

    this._userService.register(this.form.value).subscribe(data => {
      this._router.navigateByUrl('/login');
    },
    error => {
      this.submitted = false;
      //this.errorDiagnostic = USER_STATUS_CODES[error.status] || USER_STATUS_CODES[500];
    });
  }

}
