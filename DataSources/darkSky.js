const { RESTDataSource } = require('apollo-datasource-rest')

class DarkSky extends RESTDataSource {
    constructor(apiKey){
        super()
        this.baseURL = `https://api.darksky.net/forecast/${apiKey}/`
    }

    async getForcast (latitude, longitude) {
        return this.get(`${latitude},${longitude}`)
    }
}

module.exports = DarkSky