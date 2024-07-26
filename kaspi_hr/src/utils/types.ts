export type NameTitleType = {
  [key: string]: string
}

export type UserDataType = {
  email: string
  password: string
  name?: string
}

export type User =  {
  username: string,
  email: string
}

export type UserResponseType = {
  token: string,
  user: User
}

export type PostType =  {
  _id: string
  image: string
  title: string
  email: string
  body: string 
}