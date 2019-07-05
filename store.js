import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk';
import Reducers from './components/reducer/reducers';


export function initializeStore () {
    return createStore(
        Reducers,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
}
