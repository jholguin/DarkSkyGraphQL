const iconPath = ({ icon }) => {
    return `https://darksky.net/images/weather-icons/${icon}.png`
}

const resolvers = {
    Query: {
        forcast: async (parent, { latitude, longitude }, { dataSources })  => {
            return dataSources.darkSky.getForcast(latitude,longitude)
        }
    },
    ForcastData: {
        icon: iconPath
    },
    TimeForcast: {
        icon: iconPath
    }
}

module.exports = resolvers