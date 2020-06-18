import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { selectSelectedUser } from 'src/app/store/selectors/user.selector';
import { GetUser } from 'src/app/store/actions/user.action';

@Component({
  selector: 'app-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user$ = this._store.pipe(select(selectSelectedUser));

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this._route.snapshot.params.id);
   
    this._store.dispatch(new GetUser(this._route.snapshot.params.id));
    console.log(this.user$);
  }
}
