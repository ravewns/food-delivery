import styles from "./restaurant-tabs.module.css";
import clsx from "clsx";
import {Link} from "react-router";

export const RestaurantTabs = ({data}) => {
    return (
        <div className={clsx(styles.restaurantsList)}>
            {data.map(({id, name}) => {
                return (
                    <div key={id}>
                        <Link to={id} className={styles.restaurantName}>
                            {name}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};
