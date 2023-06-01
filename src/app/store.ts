import { configureStore } from '@reduxjs/toolkit'
import countryReducer from './countrySlice/countrySlice'
import albumsReducer from './albumsSlice/albumsSlice'
import selfieReducer from './selfieSlice/selfieSlice'
import photosReducer from './photosSlice/photosSlice'

export const store = configureStore({
	reducer: {
		countryUpdate: countryReducer,
		albumsUpdate: albumsReducer,
		selfieUpdate: selfieReducer,
		photosUpdate: photosReducer
	}
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
