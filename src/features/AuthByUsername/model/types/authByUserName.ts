export type TUserData = {
    username: string;
    password: string;
}

export type TAuthByUsernameSchema = TUserData & {
    error: TNullable<string>;
}