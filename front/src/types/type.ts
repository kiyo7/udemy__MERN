export interface User {
  id: number;
  profilePicture: string;
  username: string;
}

export interface User2 {
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  coverPicture: string;
  followers: string[];
  followings: string[];
  isAdmin: boolean;
  desc: string;
  city: string;
}

export interface PostType {
  _id: number;
  desc: string;
  img: string;
  date: string;
  userId: number;
  likes: number[];
  comment: number;
  createdAt: string;
}
