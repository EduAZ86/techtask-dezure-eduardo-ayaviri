import axios from "axios";

const BASE_URL = "/api";

const fetchData = axios.create({
    baseURL: BASE_URL

});

export const postFileTOTranscription = async (file: File) => {
    try {
        const data = new FormData();
        data.append('file', file);
        const response = await fetchData.post('/transcription', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return response.data
    } catch (error) {
        console.log(error);
    }
}

// export const postTOTranscripcion = async (file: File) => {
//     const formData = new FormData();
//     formData.append('file', file)
//     let response = await fetch('/api/transcription', {
//         method: 'POST',
//         body: formData
//     })
//     return response
// }