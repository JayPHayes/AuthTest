import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  user: any;
  name: any = "";
  photoURL: string = "";
  state: string = '';

  constructor(public af: AngularFireAuth, private router: Router) { 
    this.user = af.authState;
    console.log("this.user: ", this.user);

    af.authState.subscribe(auth => {
      console.log('auth: ', auth)
      if(auth){
        if(auth.displayName){
          this.name = auth.displayName
          this.photoURL = auth.photoURL
        } else {
          this.name = auth.email
          this.photoURL = "http://www.freeiconspng.com/uploads/profile-icon-9.png";  
        }

      }
    });

    // this.user = af.authState;
    // console.log("af.authState: ", af.authState)
    // this.af.authState.subscribe(auth => {
    //   if(auth){
    //     this.name =  auth;
    //   }
    // });
  }


  logout(){
    this.af.auth.signOut();
    console.log('Logged out');
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}
