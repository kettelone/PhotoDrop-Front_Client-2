import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'

interface IntialState {
	albumID: string
}

const initialState: IntialState = {
	albumID: ''
}

export const paidAlbumSlice = createSlice({
	name: 'paidAlbum',
	initialState,
	reducers: {
		update: (state, { payload }) => {
			return { ...state, ...payload }
		}
	}
})

export const { update } = paidAlbumSlice.actions

export const selectPhotos = (state: RootState) => state.paidAlbumsUpdate

export default paidAlbumSlice.reducer
