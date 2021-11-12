import axios from 'axios'

class TextDataService {
    
    retrieveAllTexts() {
        return axios.get(`http://localhost:8080/retrieveAllTexts`);
    }

    retrieveText(id) {
        return axios.get(`http://localhost:8080/retrieveText/${id}`);
    }
    
    deleteText(id) {
        return axios.delete(`http://localhost:8080/deleteText/${id}`)
    }

    updateText(text) {
        return axios.put(`http://localhost:8080/updateText/`, text)
    }

    createText(text) {
        return axios.post(`http://localhost:8080/addText/`, text)
    }

    searchText(content) {
        return axios.get(`http://localhost:8080/findText/${content}`)
    }
}

export default new TextDataService()