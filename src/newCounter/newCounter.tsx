import { dispatch } from "./redux-store"
import s from './Counter.module.css'
import { CounterContainerType } from "./CounterApiContainer"


export const NewCounter: React.FC<CounterContainerType> = (props) => {

    const plusOnClickHandler = (number:number) => {
       dispatch( props.increesNumber(number))
    }

    const minusOnClickHandler = (number:number) => {
       dispatch( props.decreesNumber(number))
    }

    const zeroOnClickHandler = () => {
        dispatch( props.makeZero())
     }

     const rememberNumberOnClickHandler = (number:number) => {
        dispatch( props.rememberNumber(number))
     }
     const setPreviosNumberOnClickHandler = () => {
        dispatch( props.setToPrevNumber())
     }

    return (
        <div className={s.flexContainer}>
            <div className="">
            <button onClick={()=>minusOnClickHandler(props.number)}>-</button>
            {props.number}
            <button onClick={()=>plusOnClickHandler(props.number)}>+</button>
            </div>
            <button onClick={()=>rememberNumberOnClickHandler(props.number)}>remember</button>
            <button onClick={()=>zeroOnClickHandler()}>0</button>
            <button onClick={()=>setPreviosNumberOnClickHandler()}>remembered</button>

        </div>
    )
}