import {createStore, applyMiddleware} from 'redux'
import authReducer from './reducers/authReducer'
import {AsyncStorageStatic} from 'react-native'
import {persistStore, persistReducer} from 'react-persist'
import thunk from 'redux-thunk'

const persistConfig = {
    key:"root",
    storage:AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, authReducer)

let store = createStore(authReducer, applyMiddleware(thunk))

let persistor = persistStore(store )

export {store, persistor};