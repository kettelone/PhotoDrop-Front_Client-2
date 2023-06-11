import React from 'react'

import Cookies from 'universal-cookie'

import { $host } from '.'
const cookies = new Cookies()

class Selfie {
	public async signSelfie() {
		try {
			const token = cookies.get('jwt_auth')
			const data: { data: Array<any> } = await $host.post(
				'/api/user/selfie',
				{
					photos: [ 'filename.png' ]
				},
				{
					headers: {
						Authorization: `Bearer ${token}`
					}
				}
			)
			console.log(data)
			return data
		} catch (e) {
			console.log(e)
			return false
		}
	}
}

export default new Selfie()
