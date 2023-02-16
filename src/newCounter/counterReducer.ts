
type ActionType = ReturnType<typeof increesNumber> | ReturnType<typeof decreesNumber>|ReturnType<typeof makeZero>|ReturnType<typeof setToPrevNumber>|ReturnType<typeof rememberNumber>

const INCREECE_NUMBER = 'INCREECE_NUMBER'
const DECREECE_NUMBER = 'DECREECE_NUMBER'
const REMEMBER_NUMBER = 'REMEMBER_NUMBER'
const SET_TO_PREV_NUMBER = 'SET_TO_PREV_NUMBER'
const MAKE_ZERO = 'MAKE_ZERO'

type initialStateType = {
    counter: number
}

let initialState: initialStateType = {
    counter: 0
}




export const counterReducer = (state: initialStateType = initialState, action: ActionType):initialStateType => {

    switch (action.type) {
        case INCREECE_NUMBER:
            return { ...state, counter: action.number + 1 };
        case DECREECE_NUMBER:
            return { ...state, counter: action.number - 1 };
        case REMEMBER_NUMBER:
            alert(action.number+' is saved')
           localStorage.setItem('key',action.number.toString())
            return { ...state};
        case SET_TO_PREV_NUMBER:
            let newNum=localStorage.getItem('key')
           
            return { ...state, counter:  Number(newNum) };
        case MAKE_ZERO:
            return { ...state, counter: 0 };
        default: { return { ...state } }
    }
}

export const increesNumber = (number: number) => {
    return { type: INCREECE_NUMBER, number: number } as const
}

export const decreesNumber = (number: number) => {
    return { type: DECREECE_NUMBER, number: number } as const
}

export const rememberNumber = (number: number) => {
    return { type: REMEMBER_NUMBER, number: number } as const
}

export const setToPrevNumber = () => {
    return { type: SET_TO_PREV_NUMBER } as const
}


export const makeZero = () => {
    return { type: MAKE_ZERO } as const
}
