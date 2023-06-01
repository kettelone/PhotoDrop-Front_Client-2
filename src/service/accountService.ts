import { $host } from '.'
import Cookies from 'universal-cookie'
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
			console.log({ accessToken })
			//Set cookie
			cookies.set('jwt_auth', accessToken)
			return true
		} catch (e) {
			return false
		}
	}
}

export default new Account()
