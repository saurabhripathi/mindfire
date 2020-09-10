import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as errorMessage from '../shared/error'
import { Router } from '@angular/router';
import { GlobalServiceService } from '../global-service.service';
import { concatMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFg: FormGroup;
  errorMessage: typeof errorMessage;

  constructor(private readonly router: Router,
    private readonly globalServiceService : GlobalServiceService) {
    this.errorMessage = errorMessage
  }

  ngOnInit(): void {
    this.setUpFormControl()
  }

  getUserNameFormControl() {
    return this.loginFg.get('userName')
  }
  getPasswordFormControl() {
    return this.loginFg.get('password')
  }
  setUpFormControl() {
    this.loginFg = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  submitButtonStatusFn() {
    if (!this.getUserNameFormControl().value.trim() || !this.getPasswordFormControl().value.trim()) {
      return true
    }
    else {
      false
    }
  }

  loginClicked() {
    const apiArray = []
    const payload = {
      userName : this.getUserNameFormControl().value.trim(),
      password : this.getPasswordFormControl().value.trim()
    }
    this.globalServiceService.loginFn(payload).pipe(concatMap((res)=>{
      for(let x of this.globalServiceService.mockAirportData()){
        apiArray.push(this.globalServiceService.saveAirportDetails(x))
      }
      for(let x of this.globalServiceService.mockAircraftData()){
        apiArray.push(this.globalServiceService.saveAircraftDetails(x))
      }
       return forkJoin(apiArray)
      })).
    subscribe((res)=>{
      this.router.navigate(['/home/airports'])
    })
    
  }

}
