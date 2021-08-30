import axios from 'axios'

//'http://192.168.0.200:5000'
//

const api = axios.create({
    baseURL: 'https://example-ecommerce.herokuapp.com/'
})

export default api