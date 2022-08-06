export interface User {
  id: number;
  profilePicture: string;
  username: string;
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
