import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'

interface InitiaState {
	albumID: string
	url: string
	name: string
	isPaid: boolean
}
const initialState: Array<InitiaState> = []

export const albumsSlice = createSlice({
	name: 'albums',
	initialState,
	reducers: {
		updateAlbum: (state, { payload: { albums } }) => {
			return (state = albums)
		}
	}
})

export const { updateAlbum } = albumsSlice.actions

export const selectAlbums = (state: RootState) => state.albumsUpdate

export default albumsSlice.reducer
