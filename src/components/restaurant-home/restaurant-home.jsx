import {Link} from "react-router";
import styles from "./restaurant-home.module.css";

export const RestaurantHome = () => {
    return (
        <div className="container">
            <Link to={'/restaurants'} className={styles.title}>
                Рестораны
            </Link>
        </div>
    )
}