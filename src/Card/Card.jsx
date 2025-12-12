import card1 from"../assets/card1.png";
import card2 from"../assets/card2.png";
import card3 from"../assets/card3.png";
import card4 from"../assets/card4.png";
import styles from "../Card/Card.module.css";
function Card(){

    return(
        <div className={styles.cardContainer}>
            <h1>We Serve</h1>
            <div className={styles.card}>
                <img src={card1} alt="Card 1" />
                <h2>Starters</h2>
                <p>Relish our wide range of smacking starters.</p>
            </div>
            <div className={styles.card}>
                <img src={card2} alt="Card 2" />
                <h2>Main Course</h2>
                <p>Tantalise your taste buds with our variety of main course dishes.</p>
            </div>
            <div className={styles.card}>
                <img src={card3} alt="Card 3" />
                <h2>Desserts</h2>
                <p>Satiate your palate and take yourself on a culinary treat.</p>
            </div>
            <div className={styles.card}>
                <img src={card4} alt="Card 4" />
                <h2>Drinks</h2>
                <p>Try the most authentic and refreshing drink at our restaurant.</p>
            </div>
        </div>
    )
}
export default Card;