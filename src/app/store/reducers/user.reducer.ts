import { initialUserState,IUserState } from '../state/user.state';
import { UserActions, EUserAction } from '../actions/user.action';

export const userReducers = (state = initialUserState,action:UserActions):IUserState =>{
    switch(action.type)
    {
        case EUserAction.GetUsersSuccess:{
            return {...state,users:action.payload};
        }
        case EUserAction.GetUserSuccess:{
            return {...state,selectedUser:action.payload};
        }
        case EUserAction.AddUserFailed:{
            return {...state,error : action.payload};
        }
        case EUserAction.AddUserSuccess:{
            return {...state,users:[action.payload]};
        }
        case EUserAction.DeleteUserSuccess:{
            return {...state,users:state.users.filter(x=>x.id != action.payload)};
        }
        case EUserAction.DeleteUserFailed:{
            return {...state,error:action.payload};
        }
        default: return state;
    }
}