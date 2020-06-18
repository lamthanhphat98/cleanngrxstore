import { Injectable } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { IAppState } from '../state/app.state';
import { Store, select } from '@ngrx/store';
import { EUserAction, GetUser, GetUserSuccess, GetUsers, GetUsersSuccess, AddUser, AddUserSuccess, AddUserFailed, DeleteUser, DeleteUserSuccess, DeleteUserFailed } from '../actions/user.action';
import { selectUserList } from '../selectors/user.selector';
import { map, switchMap, withLatestFrom, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { IUserHttp } from 'src/app/models/http/user.http.interface';
import { IUser } from 'src/app/models/user.interface';


@Injectable()
export class UserEffects {
    @Effect()
    getUser$ = this.action.pipe(
        ofType<GetUser>(EUserAction.GetUser),
        map(action => action.payload),
        withLatestFrom(this.store.pipe(select(selectUserList))),
        switchMap(([id,users]) => {
            const selectedUser = users.filter(user => user.id === +id)[0];
            return of(new GetUserSuccess(selectedUser));
        })
    );

    @Effect()
    getUsers$ = this.action.pipe(
        ofType<GetUsers>(EUserAction.GetUsers),
        switchMap(() => this.userService.getUsers()),
        switchMap((iUsers: IUser[]) => {
            return of(new GetUsersSuccess(iUsers))
        })
    );

    
    @Effect() 
    addUser = this.action.pipe(
        ofType<AddUser>(EUserAction.AddUser),
        mergeMap(
            (data) => this.userService.postUser(data.payload).pipe(
             map(() => new AddUserSuccess(data.payload)),
             catchError(error => of(new AddUserFailed(error))),
            )
        )
    )

    @Effect() 
    deleteUser = this.action.pipe(
        ofType<DeleteUser>(EUserAction.DeleteUser),
        mergeMap(
            (data) => this.userService.deleteUser(data.payload).pipe(
             map(() => new DeleteUserSuccess(data.payload)),
             catchError(error => of(new DeleteUserFailed(error))),
            )
        )
    )

    constructor(
        private userService: UserService,
        private action: Actions,
        private store: Store<IAppState>
    ) {}


}