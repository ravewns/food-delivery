import {NavLink, Outlet, useParams} from "react-router";
import styles from "./restaurant-info.module.css"
import {useGetRestaurantsQuery} from "../../redux/api/index.js";

export const RestaurantInfo = () => {
    const {restaurantId} = useParams();

    const {data: restaurant, isLoading, isError} = useGetRestaurantsQuery(undefined, {
        selectFromResult: (result) => ({
            ...result,
            data: result.data.find(({id}) => id === restaurantId),
        }),
    })

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error: {isError.message}</div>
    }

    return (
        <div>
            <h1 className={styles.title}>{restaurant.name}</h1>
            <div className={styles.tabs}>
                <NavLink to={'menu'} className={styles.tab}>Меню</NavLink>
                <NavLink to={'reviews'} className={styles.tab}>Отзывы</NavLink>
            </div>
            <div className="container">
                <h2>{restaurant.description}</h2>
                <img className={styles.image} src={restaurant.img} alt="Restaurant Image"/>
                <Outlet/>
            </div>
        </div>
    )
}