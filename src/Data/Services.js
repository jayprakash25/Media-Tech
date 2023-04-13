import { BsGraphUp, BsGlobe2 } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { SlPeople } from "react-icons/sl";
import { VscGraph } from "react-icons/vsc";
import { CiSaveUp1 } from "react-icons/ci";

const Services = [
  {
    icon: <BsGraphUp size={40} color="#4ef0ed" />,
    Tittle: "Digital Strategy",
    Para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.",
  },
  {
    icon: <BiPencil size={40} color="#4ef0ed" />,
    Tittle: "UX Designs",
    Para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.",
  },
  {
    icon: <BsGlobe2 size={40} color="black" />,
    Tittle: "Ecommerce Website",
    light: true,
    Para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.",
  },
  {
    icon: <VscGraph size={40} color="#4ef0ed" />,
    Tittle: "Social Media",
    Para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus. ",
  },
  {
    icon: <SlPeople size={40} color="#4ef0ed" />,
    Tittle: "UI Designs",
    Para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.",
  },
  {
    icon: <CiSaveUp1 size={40} color="#4ef0ed" />,
    Tittle: "Media Pairing",
    Para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.",
  },
];

export default Services;
