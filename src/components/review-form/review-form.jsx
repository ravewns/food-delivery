import {useForm} from "./use-form.js";
import {Counter} from "../counter/counter.jsx";
import {Button} from "../button/button.jsx";
import {Input} from "../input/input.jsx";
import styles from "./review-form.module.css";

export const ReviewForm = ({onSubmitForm}) => {
    const {form, onNameChange, onTextChange, clear, incrementRating, decrementRating} = useForm()

    const {name, text, rating} = form

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <div className={styles.reviewFormInput}>
                <label className={styles.reviewFormName}>Имя</label>
                <Input value={name} onChange={(event) => {
                    onNameChange(event.target.value)
                }} type="text"/>
            </div>
            <div className={styles.reviewFormInput}>
                <label className={styles.reviewFormName}>Текст</label>
                <Input value={text} onChange={(event) => {
                    onTextChange(event.target.value)
                }} type="text"/>
            </div>
            <div className={styles.reviewFormInput}>
                <label className={styles.reviewFormName}>Рейтинг</label>
            </div>
            <Counter value={rating} decrement={decrementRating} increment={incrementRating}/>
            <Button className={styles.reviewFormButton} onClick={clear}>Сбросить</Button>
            <Button className={styles.reviewFormButton} title='Submit' onClick={() => onSubmitForm(form)}>Отправить</Button>
        </form>
    )
}