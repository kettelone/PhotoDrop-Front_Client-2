import React from 'react'

import jwtDecode from 'jwt-decode'
import Cookies from 'universal-cookie'

import { $host } from '.'

export const cookies = new Cookies()

class Payment {
	public async requestPayment(albumID: string) {
		try {
			const token = cookies.get('jwt_auth')
			const decoded: { phone: string } = jwtDecode(token)

			const response = await $host.post(
				'/stripe/payment',
				{
					// successLink: `https://c137-86-99-243-248.ngrok-free.app/success`,
					successLink: `https://photo-drop-front-client.vercel.app/success`,
					failLink: `https://photo-drop-front-client.vercel.app/failed`,
					albumID: albumID,
					phoneNumber: decoded.phone
				},
				{
					headers: {
						Authorization: `Bearer ${token}`
					}
				}
			)
			return response.data
		} catch (e) {
			return false
		}
	}
}

export default new Payment()
