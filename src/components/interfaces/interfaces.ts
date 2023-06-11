export interface Response {
	data: {
		user: {
			avatar: string
			name: string
			phone: string
			email: string
		}
		albums: {
			albumID: string
			createdAt: string
			isPaid: boolean
			location: string
			name: string
			url: string
		}[]
		allPhotos: {
			albumID: string
			photoID: string
			url: string
			largePhotoURL: string
		}[]
	}
}
