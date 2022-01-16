import { GrNotes, GrGamepad } from "react-icons/gr";
import { FaGuilded, FaSearch } from "react-icons/fa";

export const routes = [
  { name: "Today", link: "/", icon: <GrNotes /> },
  { name: "Games", link: "/games", icon: <GrGamepad /> },
  { name: "Guild", link: "/guild", icon: <FaGuilded /> },
  { name: "Search", link: "/search", icon: <FaSearch /> },
];
