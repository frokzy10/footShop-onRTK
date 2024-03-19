type TUsername = string;
type TuserId = number

export interface IUser {
    username:TUsername;
    id:TuserId;
}

export interface IUserSchema {
    authData?: IUser;
    _inited: boolean;
}
