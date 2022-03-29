import { v4 as uuid } from "uuid";
/**
 * Database of Videos 
 * */

export const videos = [
  {
    _id: uuid(),
    img_src: "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/a8a149db6f4b78b1cf36e6483798164b/original",
    url: "https://www.youtube.com/embed/-c3L90nsesw",
    title: "Learn to Draw: Daily Practices to Improve Your Drawing Skills",
    creator: "Gabrielle Brickey, Portrait Artist",
    creator_pic: "https://static.skillshare.com/uploads/users/9431446/user-image-small.jpg?1061042872",
    views: 1000,
    tag: 'Staff Pick',
    duration: '1h24m',
    rating: 4,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    img_src: "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/1c61db4ed1ff443ede2d2b0c8c8c07dc/original",
    url: "https://www.youtube.com/embed/-c3L90nsesw",
    title: "Basic Skills: Getting Started with Drawing",
    creator: "Brent Eviston, Master Artist & Instructor",
    creator_pic: "https://static.skillshare.com/uploads/users/9431446/user-image-small.jpg?1061042872",
    views: 4250,
    tag: 'New',
    duration: '4h21m',
    rating: 3,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    img_src: "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/171d2bc265d34936d86ecf0981832270/original",
    url:"https://www.youtube.com/embed/-c3L90nsesw",
    title: "Procreate Animation: Make Fun GIFs & Videos",
    creator: "Rich Armstrong",
    creator_pic: "https://static.skillshare.com/uploads/users/9431446/user-image-small.jpg?1061042872",
    views: 4250,
    tag: 'Staff Pick',
    duration: '4h 21m',
    rating: 3,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    img_src: "https://static.skillshare.com/uploads/video/thumbnails/cfa4f7b3e8b769ebacbe9348a8b55c35/original",
    url: "https://www.youtube.com/embed/-c3L90nsesw",
    title: "Neural Networks from Scratch - P.1 Intro and Neuron Code",
    creator: "Sentdex",
    creator_pic: "https://static.skillshare.com/uploads/users/9431446/user-image-small.jpg?1061042872",
    views: 4250,
    tag: 'Trending',
    duration: '4h 21m',
    rating: 2,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
];
{/* <iframe width="661" height="372" src="https://www.youtube.com/embed/-c3L90nsesw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}