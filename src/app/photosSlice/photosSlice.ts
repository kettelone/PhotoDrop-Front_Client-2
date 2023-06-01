import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface IntialState {
	photoID: string
	albumID: string
	url: string
}

const initialState: Array<IntialState> = []

export const photosSlice = createSlice({
	name: 'photos',
	initialState,
	reducers: {
		updatePhoto: (state, { payload: { allPhotos } }) => {
			state = allPhotos
		}
	}
})

export const { updatePhoto } = photosSlice.actions

export const selectPhotos = (state: RootState) => state.photosUpdate

export default photosSlice.reducer
