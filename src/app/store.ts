import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import albumsReducer from './albumsSlice/albumsSlice'
import authReducer from './authSlice/authSlice'
import countryReducer from './countrySlice/countrySlice'
import originalPhotosReducer from './originalPhotosSlice/originalPhotosSlice'
import paidAlbumsReducer from './paidAlbumSlice/PaidAlbumSlice'
import photosReducer from './photosSlice/photosSlice'
import userReducer from './userSlice/userSlice'

const persistConfig = {
	key: 'root',
	storage
}

const rootReducer = combineReducers({
	countryUpdate: countryReducer,
	authUpdate: authReducer,
	albumsUpdate: albumsReducer,
	userUpdate: userReducer,
	photosUpdate: photosReducer,
	originalPhotosUpdate: originalPhotosReducer,
	paidAlbumsUpdate: paidAlbumsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [ thunk ]
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
