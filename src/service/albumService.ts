import Cookies from 'universal-cookie'

import { $host } from '.'
const cookies = new Cookies()

class Album {
	public async getAlbums() {
		try {
			const token = cookies.get('jwt_auth')
			const data = await $host.get('/api/albums', {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			return data
		} catch (e) {
			return false
		}
	}
}

export default new Album()
