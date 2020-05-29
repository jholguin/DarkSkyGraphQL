const { gql } = require('apollo-server')

const typeDefs = gql`
    
    type ForcastData{
        time: Int,
        summary: String,
        icon: String,
        nearestStormDistance: Float,
        precipIntensity: Float,
        precipIntensityError: Float,
        precipProbability: Float,
        precipType: String,
        temperature: Float,
        apparentTemperature: Float,
        dewPoint: Float,
        humidity: Float,
        pressure: Float,
        windSpeed: Float,
        windGust: Float,
        windBearing: Int,
        cloudCover: Float,
        uvIndex: Int,
        visibility: Float,
        ozone: Float
    }

    type TimeForcast{
        summary: String,
        icon: String,
        data: [ForcastData]
    }
    
    type Forcast{
        latitude: Float,
        longitude: Float,
        timezone: String,
        currently: ForcastData,
        minutely: TimeForcast,
        hourly: TimeForcast,
        daily: TimeForcast 
    }

    type Query{
        forcast(latitude: String!, longitude: String!): Forcast
    }
`

module.exports = typeDefs