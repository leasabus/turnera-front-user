import local1 from "../../public/assets/centers/local1.jpg";
import local2 from "../../public/assets/centers/local2.jpg";

export interface Centers {
  id: number;
  image: string;
  title: string;
  street: string;
  isOpen: boolean;
}

export interface Services {
  id: string;
  name: string;
  price: number;
  time: string;
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

export const services: Services[] = [
  {
    id: "1",
    name: "Corte de pelo",
    price: 7000,
    time: "30 min",
  },

  {
    id: "2",
    name: "Corte de pelo + barba",
    price: 9000,
    time: "40 min",
  },
  {
    id: "3",
    name: "Corte + color",
    price: 15000,
    time: "2 hr",
  },
];
