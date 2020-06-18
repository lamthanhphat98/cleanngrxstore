import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { GetUsers, DeleteUser } from 'src/app/store/actions/user.action';
import { Router } from '@angular/router';
import { IUserHttp } from 'src/app/models/http/user.http.interface';
import { selectUserList } from 'src/app/store/selectors/user.selector';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   users$ = this.store.pipe(select(selectUserList));
   listUser:IUserHttp;
  constructor(private store : Store<IAppState>,
    private router:Router,
    private userService:UserService) { }

  ngOnInit() {
    this.store.dispatch(new GetUsers());
    this.fetchUser();
    console.log(this.users$);

   // this.users$.subscribe((res:any)=>console.log(this.listUser = res));
  }
  navigateToUser(id:number)
  {
    console.log(id);
    this.router.navigate(["user",id]);
  }
  fetchUser()
  {
    this.users$.subscribe((res:any)=>{
      console.log(this.listUser = res);
    })
  }
  deleteUser(id)
  {
    console.log(id);
    this.store.dispatch(new DeleteUser(id));
  }
}
