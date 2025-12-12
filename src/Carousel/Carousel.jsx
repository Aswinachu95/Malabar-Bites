import styles from "../Carousel/Carousel.module.css";
import img1 from "../assets/food1.jpg";
import img2 from "../assets/food2.png";
import img3 from "../assets/food3.jpg";
import img4 from "../assets/food4.jpeg";
import img5 from "../assets/food5.jpg";
import img6 from "../assets/food6.webp";
import img7 from "../assets/food7.jpg";
import img8 from "../assets/food8.avif";
import img9 from "../assets/food9.jpg";
import img10 from "../assets/food10.jpeg";
function Carousel(){
    return(
        <>
        <div className={styles.gallery}>
            <h1 className={styles.title}>Gallery</h1>
    <div className={styles.item}>
        <img src={img1} alt="" />
    </div>
    <div className={styles.item}>
        <img src={img2} alt="" />
    </div>
    <div className={styles.item}>
        <img src={img3} alt="" />
    </div>
    <div className={styles.item}>
        <img src={img4} alt="" />
    </div>
    <div className={styles.item}>
        <img src={img5} alt="" />
    </div>
    <div className={styles.item}>
        <img src={img6} alt="" />
    </div>
    <div className={styles.item}>
        <img src={img7} alt="" />
    </div>
    <div className={styles.item}>
        <img src={img8} alt="" />
    </div>
    <div className={styles.item}>
        <img src={img9} alt="" />
    </div>
    <div className={styles.item}>
        <img src={img10} alt="" />
    </div>
</div>
</>

    )
}
export default Carousel;