import styles from "../Banner/Banner.module.css";
import About from "../assets/About.png";
function Banner(){
    return(
        <div className={styles.banner}>
            <img src={About} alt="" />
            <div className={styles.bannertext}>
                <h1>About Us</h1>
                <p>We are a cafe that loves food!</p>
            </div>
        </div>
    )
}
export default Banner;