import api from '../services/api';

export default {
    async get(req, res) {
        
        let data = req.query || {};

        data = Object.assign(data, api.defaults.params);
        
        const request = await api.get('/v1/public/characters', { params: data });
        const requestData = JSON.stringify(request.data).replace(/http(s|):\/\/gateway\.marvel\.com\/v1\/public/gi, '');

        res.json(JSON.parse(requestData));
    }
}