import { createStore } from 'redux'
import rootReducers from './reducer/index.js'

export default function configureStore(initialState) {
    const store = createStore(rootReducers, initialState,
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store
}