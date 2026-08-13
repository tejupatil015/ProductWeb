import Hoddie from "../assets/hoodie.png";
import Shirt from "../assets/shirt.png";
import Skirt from "../assets/skirt.png";
import Combo from "../assets/shirt-dress.png";
import Baby from "../assets/baby-shirt.png";
import babyShirt from "../assets/dress.png";
import LatherJacket from "../assets/leather-jacket.png";
import Skater from '../assets/skater.png'

const products = [
  {
    id: 1,
    name: "Hoodie",
    price: 890,
    oldPrice: 1000,
    Onsale: true,
    newArrival: false,
    image: Hoddie,
    category: "Mens",
  },

  {
    id: 2,
    name: "Shirt",
    price: 345,
    oldPrice: 689,
    onsale: false,
    newArrival: true,
    image: Shirt,
    category: "Mens",
  },

  {
    id: 3,
    name: "Fancy Skirt",
    price: 500,
    oldPrice: 600,
    onsale: false,
    newArrival: true,
    image: Skirt,
    category: "Womens",
  },

  {
    id: 4,
    name: "Combo",
    price: 600,
    oldPrice: 800,
    onsale: true,
    newArrival: false,
    image: Combo,
    category: "Womens",
  },

  {
    id: 5,
    name: "Baby Top",
    price: 400,
    oldPrice: 550,
    onsale: true,
    newArrival: false,
    image: Baby,
    category: "Kids",
  },
   {
    id: 6,
    name: "Baby Shirt",
    price: 300,
    oldPrice: 550,
    onsale: false,
    newArrival: true,
    image: babyShirt,
    category: "Kids",
  },
   {
    id: 7,
    name: "Pretyy Dress",
    price: 1300,
    oldPrice: 900,
    onsale: true,
    newArrival: false,
    image: Skater,
    category: "Womens",
  },

];

export default products;