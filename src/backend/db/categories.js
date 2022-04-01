import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Sketching",
    img_src: "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/d80cdb6085507d8f48b11282021eaf5c/original",
  },
  {
    _id: uuid(),
    categoryName: "Painting",
    img_src: "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/d80cdb6085507d8f48b11282021eaf5c/original",
  },
  {
    _id: uuid(),
    categoryName: "Digital Art",
    img_src: "https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/d80cdb6085507d8f48b11282021eaf5c/original",
  },
];
