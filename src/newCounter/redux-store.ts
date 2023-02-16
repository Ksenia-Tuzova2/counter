import { legacy_createStore as createStore} from 'redux'
import { Store } from 'redux'
import { counterReducer } from './counterReducer';


export type Rootstate=ReturnType<typeof counterReducer>

export const store:Store<Rootstate>=createStore(counterReducer)

export const dispatch=store.dispatch