import { createStore } from 'redux'
import reducer from '../reducers/root-reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from '@react-native-async-storage/async-storage'

const persistConfig = {
    key : 'root',
    storage,
    blacklist : []
}

const persistedReducer = persistReducer(persistConfig,reducer)
const store = createStore(
    persistedReducer
)
const persistor = persistStore(store)

export { store, persistor }
