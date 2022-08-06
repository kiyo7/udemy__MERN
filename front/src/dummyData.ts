import { User, PostType } from "./types/type";

export const Users: User[] = [
  {
    id: 1,
    profilePicture: "/person/1.jpeg",
    username: "Kiyo",
  },
  {
    id: 2,
    profilePicture: "/person/2.jpeg",
    username: "Yamaki",
  },
  {
    id: 3,
    profilePicture: "/person/3.jpeg",
    username: "Koga",
  },
  {
    id: 4,
    profilePicture: "/person/4.jpeg",
    username: "Matukubo",
  },
  {
    id: 5,
    profilePicture: "/person/5.jpeg",
    username: "Kikukawa",
  },
];

export const Post = [
  {
    _id: 1,
    desc: "コツコツの積み重ねが大事。",
    img: "/post/1.jpeg",
    date: "5分前",
    userId: 1,
    likes: [20],
    comment: 4,
  },
  {
    _id: 2,
    desc: "MERNスタックが楽しすぎる",
    img: "/post/2.jpeg",
    date: "2分前",
    userId: 2,
    likes: [140],
    comment: 13,
  },
  {
    _id: 3,
    desc: "ShinCodeさんの解説が分かりやすい。",
    img: "/post/3.jpeg",
    date: "10分前",
    userId: 3,
    likes: [230],
    comment: 29,
  },
  {
    _id: 4,
    desc: "定期的に散歩した方が生産性が上がる。",
    img: "/post/4.jpeg",
    date: "1分前",
    userId: 4,
    likes: [10],
    comment: 1,
  },
  {
    _id: 5,
    desc: "定期的に散歩した方が生産性が上がる。",
    img: "/post/5.jpeg",
    date: "1分前",
    userId: 5,
    likes: [100],
    comment: 3,
  },
];
