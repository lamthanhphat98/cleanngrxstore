import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/models/user.interface';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { AddUser } from 'src/app/store/actions/user.action';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // saveForm = new FormGroup({
  //   id : new FormControl(''),
  //   name : new FormControl(''),
  //   cardName : new FormControl(''),
  //   cardType : new FormControl('')
  //  });

  
  userData:IUser = {id:0,cardNumber:'',cardType:'',name:''};

  constructor(private store : Store<IAppState>,private userService:UserService) { }

  ngOnInit() {
  }
  saveData()
  {
    console.log(this.userData);
    this.userData.id = 4;
    // this.userService.postUser(this.userData).subscribe((res:any)=>{
    //   console.log(res);
    // });
    this.store.dispatch(new AddUser(this.userData));
  }

}
