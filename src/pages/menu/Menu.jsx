import React from "react";
import styles from "./menu.module.css";
import Card from "../../components/card/Card";
import pizza from "./../../assets/pizza.jpg";
import salad from "./../../assets/salad.jpg";
import soup from "./../../assets/soup.jpg";
import hotdog from "./../../assets/hotdog.jpg";
import friedchicken from "./../../assets/friedchicken.jpg";
import burger from "./../../assets/burger.jpg";

let foods = [
  { title: "pizza", id: 1, price: 21, img: { src: pizza, alt: "pizza" } },
  { title: "burger", id: 2, price: 25, img: { src: burger, alt: "burger" } },
  { title: "Hot Dog", id: 3, price: 18, img: { src: hotdog, alt: "hotdog" } },
  { title: "soup", id: 4, price: 6, img: { src: soup, alt: "soup" } },
  {
    title: "fried chicken",
    id: 5,
    price: 20,
    img: { src: friedchicken, alt: "friedchicken" },
  },
  { title: "salad", id: 6, price: 10, img: { src: salad, alt: "salad" } },
];
function Menu() {
  return (
    <div className="container mt-5  d-flex justify-content-center">
      <div className={styles.grid}>
        {foods.map((food) => (
          <Card title={food.title} price={food.price} img={food.img} id={food.id} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
