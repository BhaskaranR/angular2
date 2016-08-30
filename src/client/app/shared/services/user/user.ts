export class LoginRequest{
  mail : string;
  password: string;
}


export interface User {
  name: string,
  username: string,
  profile_picture: string,
  last_active: number,
}
