import Cookies from 'universal-cookie'

import { $host } from '.'
const cookies = new Cookies()

class Account {
	public async editName(name: string) {
		try {
			const token = cookies.get('jwt_auth')
			const data = await $host.post(
				'/user/changeName',
				{},
				{
					params: {
						name: name
					},
					headers: {
						Authorization: `Bearer ${token}`
					}
				}
			)
			return data
		} catch (e) {
			return false
		}
	}

	public async editEmail(email: string) {
		try {
			const token = cookies.get('jwt_auth')
			const data = await $host.post(
				'/user/changeEmail',
				{},
				{
					params: {
						email: email
					},
					headers: {
						Authorization: `Bearer ${token}`
					}
				}
			)
			return data
		} catch (e) {
			return false
		}
	}
	public async editPhone(newPhone: string) {
		try {
			const token = cookies.get('jwt_auth')
			const data = await $host.post(
				'/user/changePhone/request',
				{},
				{
					params: {
						newPhone: newPhone
					},
					headers: {
						Authorization: `Bearer ${token}`
					}
				}
			)
			return data
		} catch (e) {
			return false
		}
	}

	public async phoneVerify(newPhone: string, otp: string) {
		try {
			const token = cookies.get('jwt_auth')
			const response = await $host.post(
				'/user/changePhone/verify',
				{},
				{
					params: {
						newPhone: newPhone,
						otp: otp
					},
					headers: {
						Authorization: `Bearer ${token}`
					}
				}
			)
			const { accessToken } = response.data
			// Set cookie
			cookies.set('jwt_auth', accessToken)
			return true
		} catch (e) {
			return false
		}
	}

	public async editInfo(email: string, name: string, phoneNumber: string) {
		try {
			let body
			if (!email && !name) {
				body = { phoneNumber: `+${phoneNumber}` }
			} else if (!email && !phoneNumber) {
				body = { name: name }
			} else if (!phoneNumber && !name) {
				body = { email: email }
			}
			const token = cookies.get('jwt_auth')
			const response = await $host.patch('/api/user', body, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			console.log(response)
			return true
		} catch (e) {
			console.log(e)
			return false
		}
	}
}

export default new Account()
