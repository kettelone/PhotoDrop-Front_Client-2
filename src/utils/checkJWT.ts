import Cookies from 'universal-cookie'
import jwtDecode from 'jwt-decode'
export const cookies = new Cookies()

const checkToken = () => {
	const token = cookies.get('jwt_auth')
	if (token) {
		const { exp }: { exp: number } = jwtDecode(token)
		const valid = exp * 1000 > Date.now()
		return valid
	}
	return false
}

export default checkToken
