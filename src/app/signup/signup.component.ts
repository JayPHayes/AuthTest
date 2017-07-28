import { Component, OnInit } from '@angular/core';
import { AngularFireAuth  } from "angularfire2/auth";

import { AngularFireDatabaseModule } from "angularfire2/database";
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()]
})
export class SignupComponent implements OnInit {
  state: string = '';
  error: any;

  constructor(public af: AngularFireAuth, private router: Router) { }

  onSubmit(formData){
    if(formData.valid){
      console.log(formData.valid);
      this.af.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password)
      .then(
        (success) => {
          console.log(success);
          this.router.navigate(['login']);
        })
      .catch(
        (err) => {
          console.log(err);
          this.error = err;
        }
      );

    }
  }

  ngOnInit() {
  }

}
