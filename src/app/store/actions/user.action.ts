import { Action } from '@ngrx/store';
import { IUser } from 'src/app/models/user.interface';


export enum EUserAction {
    GetUsers = '[User] Get Users',
    GetUsersSuccess = '[User] Get Users Success',
    GetUser = '[User] Get User',
    GetUserSuccess = '[User] Get User Success',
    AddUser = '[User] Add User',
    AddUserSuccess = '[User] Add User Success',
    AddUserFailed = '[User] Add User Failed',
    DeleteUser ="[User] Delete User",
    DeleteUserSuccess ="[User] Delete User Success",
    DeleteUserFailed ="[User] Delete User Failed",
  }
  
  export class GetUsers implements Action {
    public readonly type = EUserAction.GetUsers;
  }

  export class GetUsersSuccess implements Action {
    public readonly type = EUserAction.GetUsersSuccess;
    constructor(public payload: IUser[]) {}
  }
  
  export class GetUser implements Action {
    public readonly type = EUserAction.GetUser;
    constructor(public payload: number) {}
  }
  
  export class GetUserSuccess implements Action {
    public readonly type = EUserAction.GetUserSuccess;
    constructor(public payload: IUser) {}
  }
  
  export class AddUser implements Action {
    public readonly type = EUserAction.AddUser;
    constructor(public payload: IUser) {}

  }

  export class AddUserSuccess implements Action {
    public readonly type = EUserAction.AddUserSuccess;
    constructor(public payload: IUser) {}

  }
  export class AddUserFailed implements Action {
    public readonly type = EUserAction.AddUserFailed;
    constructor(public payload: Error) {}

  }

  export class DeleteUser implements Action {
    public readonly type = EUserAction.DeleteUser;
    constructor(public payload: number) {}

  }

  export class DeleteUserSuccess implements Action {
    public readonly type = EUserAction.DeleteUserSuccess;
    constructor(public payload: number) {}

  }
  export class DeleteUserFailed implements Action {
    public readonly type = EUserAction.DeleteUserFailed;
    constructor(public payload: Error) {}

  }

export type UserActions =  GetUsers |
 GetUsersSuccess |
  GetUser |
   GetUserSuccess |
    AddUser | 
    AddUserSuccess | 
    AddUserFailed |
    DeleteUser |
    DeleteUserSuccess | 
    DeleteUserFailed ;