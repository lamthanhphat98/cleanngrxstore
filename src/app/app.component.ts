import { Component, OnInit } from '@angular/core';
import { IAppState } from './store/state/app.state';
import { Store, select } from '@ngrx/store';
import { GetConfig } from './store/actions/config.action';
import { selectConfig } from './store/selectors/config.selector';
import { IConfig } from './models/config.interface';
import { Observable } from 'rxjs';
import { selectUserList } from './store/selectors/user.selector';
import { GetUsers } from './store/actions/user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cleanngrxstore';
  /**
   *
   */
  config$ = this.store.pipe(select(selectConfig));
  users$ = this.store.pipe(select(selectUserList));

  constructor(private store : Store<IAppState>) {

  }
  ngOnInit(): void {
    this.store.dispatch(new GetConfig());
    this.store.dispatch(new GetUsers());

    console.log(this.config$);
    console.log(this.users$);
  }
  
}
