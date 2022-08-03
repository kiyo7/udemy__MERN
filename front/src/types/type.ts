export interface User {
  id: number;
  profilePicture: string;
  username: string;
}

export interface PostType {
  id: number;
  desc: string;
  photo: string;
  date: string;
  userId: number;
  like: number;
  comment: number;
}
