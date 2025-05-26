import {useForm} from "./use-form.js";
import {Counter} from "../counter/counter.jsx";

export const ReviewForm = () => {
    const {form, onNameChange, onTextChange, clear, onRatingChange} = useForm()

    const {name, text, rating} = form

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <div>
                <span>Имя</span>
                <input value={name} onChange={(event) => {
                    onNameChange(event.target.value)
                }} type="text"/>
            </div>
            <div>
                <span>Текст</span>
                <input value={text} onChange={(event) => {
                    onTextChange(event.target.value)
                }} type="text"/>
            </div>
            <div>
                <span>Рейтинг</span>
                <Counter value={rating} onChange={onRatingChange}/>
            </div>
            <button onClick={clear}>Clear
            </button>
        </form>
    )
}