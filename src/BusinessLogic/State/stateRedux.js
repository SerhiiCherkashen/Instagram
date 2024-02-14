import { stateConst } from "./StateConst";
import { stateAccounts } from "./stateAccounts";

export const stateRedux = {
  stateAccounts: stateAccounts,
  reelsScroll: 0,
  addSelectedPhoto: stateConst.addPhoto[0].photo,
  testStateVideo: [
    {
      id: "video1",
      video: stateConst.video.video,
      muted: true,
      autoplay: false,
    },
    {
      id: "video2",
      video: stateConst.video.motoVideo,
      muted: true,
      autoplay: false,
    },
    {
      id: "video3",
      video: stateConst.video.video,
      muted: true,
      autoplay: false,
    },
    {
      id: "video4",
      video: stateConst.video.motoVideo2,
      muted: true,
      autoplay: false,
    },
    {
      id: "video5",
      video: stateConst.video.motoVideo3,
      muted: true,
      autoplay: false,
    },
    {
      id: "video6",
      video: stateConst.video.motoVideo4,
      muted: true,
      autoplay: false,
    },
    {
      id: "video7",
      video: stateConst.video.motoVideo5,
      muted: true,
      autoplay: false,
    },
    {
      id: "video8",
      video: stateConst.video.motoVideo6,
      muted: true,
      autoplay: false,
    },
    {
      id: "video9",
      video: stateConst.video.motoVideo7,
      muted: true,
      autoplay: false,
    },
  ],
  general: {},
  asd: "HYI /2",
  main: {
    name: "Insta 2.0",
    lastScroll: 0,
    isScrollingUp: true,
    count: 0,
    countFirstRender: true,
    stateLikeDoubleClick: false,
  },
  search: {},
  add: {},
  reels: {},
  profile: {
    isOpen: false,
  },
  array: [],
  countPX: 0,
  urlParams: [],
  urlBack: "",
  color: true,
  // pressBack: false,
};
// {
//   accountsIndex: 3,
//   postIndex: 3,
//   image:
//     "https://i.guim.co.uk/img/media/0f786c915e12366d53dd9e60a7c48d19ebde103a/0_148_5879_3529/master/5879.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=97e332f0321dc8f44ad6ec4ec54fa0d4",
//   text: "asd",
//   likes: 10,
//   comments: 3,
//   save: 2,
// },
// {
//   accountsIndex: 3,
//   postIndex: 3,
//   image:
//     "https://i.eurosport.com/2023/11/12/3824703-77726988-2560-1440.jpg",
//   text: "asd",
//   likes: 10,
//   comments: 3,
//   save: 2,
// },
// {
//   accountsIndex: 3,
//   postIndex: 3,
//   image:
//     "https://www.sportspromedia.com/wp-content/uploads/2023/11/News-story-template-8.jpg",
//   text: "asd",
//   likes: 10,
//   comments: 3,
//   save: 2,
// },
