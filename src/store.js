import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { todos } from './todos/reducers';

const reducers = {
    todos
};
const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
}

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configStore = () => 
    configureStore(
        {reducer: persistedReducer}, window.__REDUX_DEVTOOLS_EXTENTION && window.__REDUX_DEVTOOLS_EXTENTION()
    );