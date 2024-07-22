import local1 from "../../public/assets/centers/local1.jpg";
import local2 from "../../public/assets/centers/local2.jpg";

interface Centers {
  id: number;
  image: string;
  title: string;
  street: string;
  isOpen: boolean;
}

export const centers: Centers[] = [
  {
    id: 1,
    image: local1,
    title: "Barbería centro",
    street: "Calle 1231, centro",
    isOpen: false,
  },
  {
    id: 2,
    image: local2,
    title: "Barbería costanera",
    street: "Calle 2222, costanera",
    isOpen: true,
  },
];
