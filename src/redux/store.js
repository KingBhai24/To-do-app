import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {taskListReducer} from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  taskList: taskListReducer,
});

const rootPersistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: rootPersistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export const persistor = persistStore(store);
