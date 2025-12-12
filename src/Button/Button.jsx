import style from "../Button/Button.module.css"
import icon1 from "../assets/delivery.png"
import icon2 from "../assets/take-away.png"
import icon3 from "../assets/Dine in.png"
import icon4 from "../assets/Payment.png"

function Button(){

    return(
    <>
    <div className={style.button}>
        <h1>Amenities</h1>
        <div className={style.icon}>
            <img src={icon1} alt="Home Delivery" />
            <p>Home Delivery</p>
        </div>

        <div className={style.icon}>
            <img src={icon2} alt="Take Away" />
            <p>Take Away</p>
        </div>

        <div className={style.icon}>
            <img src={icon3} alt="Dine In" />
            <p>Dine In</p>
        </div>
        <div className={style.icon}>
            <img src={icon4} alt="Multiple Payment Modes" />
            <p>Multiple Payment Modes</p>
        </div>
    </div>
    </>
    )
}
export default Button;