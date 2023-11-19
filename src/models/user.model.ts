export interface UserModel {
  id: string;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  avatar?: Object;
}
export interface SignUpDto {
  username: string;
  email: string;
  password: string;
}
export interface SignInDto {
  email: string;
  password: string;
}
