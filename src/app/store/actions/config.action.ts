import { Action } from '@ngrx/store';
import { IConfig } from 'src/app/models/config.interface';

export enum EConfigAction {
    GetConfig = '[CONFIG] GET CONFIG',
    GetConfigSuccess = '[CONFIG] GET CONFIG SUCCESS',
}
export class GetConfig implements Action{
    public readonly type = EConfigAction.GetConfig;
}

export class GetConfigSuccess implements Action{
    public readonly type = EConfigAction.GetConfigSuccess;
    /**
     *
     */
    constructor(public payload:IConfig) {}
}

export type ConfigActions = GetConfig | GetConfigSuccess;