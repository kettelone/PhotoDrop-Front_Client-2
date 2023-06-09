import axios from 'axios'

export async function uploadToS3(fileContents: Blob, presignedPostUrl: any) {
	console.log(presignedPostUrl)
	const formData = new FormData()
	Object.entries(presignedPostUrl.data[0].fields).forEach(([ k, v ]) => {
		// @ts-ignore
		formData.append(k, v)
	})
	formData.append('file', fileContents) // The file has be the last element
	const response = await axios.post(presignedPostUrl.data[0].url, formData, {
		headers: { 'Content-Type': 'multipart/form-data' }
	})
	return response
}
