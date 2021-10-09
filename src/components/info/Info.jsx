import React from "react";
import styles from "./info.module.css";
import person from "./../../assets/person.jpg";

function Info() {
  return (
    <div className={`container ${styles.info}`}>
      <div className="row">
        <div className="col-md-6">
          <h2 className={styles.title}>
            we make sure your food arrive on-time
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
            reiciendis quas omnis, exercitationem quam officiis modi repellendus
            iure quaerat quia incidunt possimus et quidem quos nemo voluptatum
            architecto sed voluptatem veritatis beatae quae ad soluta! Veritatis
            facilis numquam officia voluptatum.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
        <div className="col-md-6 text-center">
          <img
            className={`${styles.img} img-fluid`}
            src={person}
            alt="person"
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
