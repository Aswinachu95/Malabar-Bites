import styles from "../Footer/Footer.module.css";
import icon1 from "../assets/gps.png";
import icon2 from "../assets/phone-call.png";
import icon3 from "../assets/email.png";
import icon4 from "../assets/time.png";



function Footer(){

    return(
        <div className={styles.footer}>
            <div className={styles.contact}>
                <h1>Contact Us</h1>
                <img src={icon1} alt="" />
                <p>Manorama Junction, Panampilly Nagar, Ernakulam, Kerala, India, Pin Code: 682036</p>
                <img src={icon2} alt="" />
                <p>+91 12345 67890</p>
                <img src={icon3} alt="" />
                <p>info@foodlecafe.com</p>
                <img src={icon4} alt="" />
                <p>Mon - Sun: 9:00 AM - 10:00 PM</p>
            </div>
            <div className={styles.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7941.276625407904!2d76.29062889161546!3d9.958575410578726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0872c7abe6c9e7%3A0x7138a08633b8c9dd!2sPanampilly%20Nagar%2C%20Kochi%2C%20Ernakulam%2C%20Kerala%20682036!5e1!3m2!1sen!2sin!4v1758129610751!5m2!1sen!2sin" style={{ width: "100%", height: "300px", marginTop: "20px", display: "flex", justifyContent: "center" }}></iframe>
            </div>
            <div className={styles.endinfo}>
                <div className={styles.useful}>

                </div>
                <div className={styles.info}>

                </div>
                <div className={styles.connect}>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <p>© 2024 Foodle Cafe. All rights reserved.</p>
            </div>
        </div>
    )
}
export default Footer;