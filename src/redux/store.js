import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga';

import { workouts, currentWorkout, timer, messages, user } from './reducers';
import watcherSaga from './sagas'
import { AsyncStorage } from 'react-native';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['workouts', 'user']
}

const rootReducer = combineReducers({
    workouts,
    currentWorkout,
    timer,
    messages,
    user
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware)
);
let persistor = persistStore(store);

sagaMiddleware.run(watcherSaga)

export { store, persistor, sagaMiddleware }



