import { BiGame } from "react-icons/bi";
import { FaGuilded, FaSearch } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";

export const routes = [
  {
    name: "Today",
    link: "/",
    icon: <IoNewspaperOutline className='icon-color' />,
  },
  { name: "Games", link: "/games", icon: <BiGame className='icon-color' /> },
  { name: "Guild", link: "/guild", icon: <FaGuilded className='icon-color' /> },
  {
    name: "Search",
    link: "/search",
    icon: <FaSearch className='icon-color' />,
  },
];
