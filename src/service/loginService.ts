import React from 'react'

import Cookies from 'universal-cookie'

import { $host } from '.'
export const cookies = new Cookies()

class Login {
	public async requestOtp(login: string) {
		try {
			console.log(`+${login}`)
			const response = await $host.post('/api/auth/singIn', {
				phoneNumber: `+${login}`
			})

			return true
		} catch (e) {
			console.log(e)
			return false
		}
	}

	public async regenerate(login: string) {
		try {
			const resposne = await $host.post('/api/auth/regenerate', {
				phoneNumber: `+${login}`
			})
			console.log(resposne)
			return true
		} catch (e) {
			console.log(e)
			return false
		}
	}

	public async login(login: string, otp: string) {
		try {
			const response = await $host.post('/api/auth/verify', {
				phoneNumber: `+${login}`,
				code: otp
			})
			const { token } = response.data
			// Set cookie
			cookies.set('jwt_auth', token)
			return true
		} catch (e) {
			return false
		}
	}
}

export default new Login()
