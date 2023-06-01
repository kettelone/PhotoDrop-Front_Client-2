import axios from "axios";

export async function uploadToS3(fileContents: Blob, presignedPostUrl: any) {
  const formData = new FormData();
  Object.entries(presignedPostUrl.fields).forEach(([k, v]) => {
    //@ts-ignore
    formData.append(k, v);
  });
  formData.append("file", fileContents); // The file has be the last element
  const response = await axios.post(presignedPostUrl.url, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response;
}
