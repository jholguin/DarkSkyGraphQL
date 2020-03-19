const resolvers = {
    Query: {
        forcast: async (parent, { latitude, longitude }, { dataSources })  => {
            return dataSources.darkSky.getForcast(latitude,longitude)
        }
    },
    Today: {
        icon: ({ icon }) => {
            return `https://darksky.net/images/weather-icons/${icon}.png`
        }
    }
}

module.exports = resolvers