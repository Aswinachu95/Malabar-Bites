import styles from "../Navbar/Navbar.module.css";
import logo from "../assets/Logo.jpeg";
import login from "../assets/account.svg";
function Navbar(){
    return(
        <>
        <div className={styles.containerFluid}>
            <nav className={styles.navbar}>
            <img src={logo} alt="Malabar Bites" />
            <div className={styles.text}>
                <a href="">HOME</a>
                <a href="">ORDER</a>
                <a href="">BOOK A TABLE</a>
                <a href="">GALLERY</a>
                <a href="">AMENITIES</a>
                <a href="">ABOUT US</a>
                <a href="">CONTACT US</a>
            </div>
            <div className={styles.icons}>
                <img src={login} alt="Log In" />
                <a href="">Log In  </a>
                <a href="">Sign Up</a>
            </div>
        </nav>
        <div className={styles.submit}>
            <button className={styles.button}>Menu</button>
            <button className={styles.button}>Order Online</button>
            <button className={styles.button}>Book a Table</button>
        </div>
    </div>
    </>
        
    )
}
export default Navbar;