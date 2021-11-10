import axios from 'axios'

class EmployeeDataService {
    
    retrieveAllTexts() {
        return axios.get(`http://localhost:8080/retrieveAllTexts`);
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
}

export default new EmployeeDataService()