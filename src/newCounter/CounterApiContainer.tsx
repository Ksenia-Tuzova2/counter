import { connect } from "react-redux";
import { decreesNumber, increesNumber, makeZero, rememberNumber, setToPrevNumber } from "./counterReducer";
import { NewCounter } from "./newCounter";
import { Rootstate } from "./redux-store";

type MapStateToPropsType = {
    number: number
}

type DispatchStateToPropsType = {
    increesNumber: (number: number) => any,
    decreesNumber: (number: number) => any,
    rememberNumber: (number: number) => any,
    setToPrevNumber: () => any,
    makeZero: () => any,
}

export type CounterContainerType = MapStateToPropsType & DispatchStateToPropsType

const mapStateToProps=(state: Rootstate):MapStateToPropsType => {
    return{number: state.counter}
}

export const CounterApiContainer = connect(mapStateToProps, {
    increesNumber: increesNumber,
    decreesNumber: decreesNumber,
    rememberNumber: rememberNumber,
    setToPrevNumber: setToPrevNumber,
    makeZero: makeZero
})(NewCounter)