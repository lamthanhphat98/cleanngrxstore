import { initialConfigState, IConfigState, } from '../state/config.state';
import { ConfigActions, EConfigAction } from '../actions/config.action';

export const configReducers = (state = initialConfigState,action: ConfigActions) : IConfigState =>{
   switch(action.type)
   {
     case EConfigAction.GetConfigSuccess :{
         return {...state,config:action.payload};
     }
     default : return state;
   }
}