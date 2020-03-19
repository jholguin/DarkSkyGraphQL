require('dotenv').config()
const { ApolloServer } = require('apollo-server')
const typeDefs = require('./TypeDefs')
const resolvers = require('./Resolvers')
const DarkSkyDataSource = require('./DataSources/darkSky')

const DARKSKY_API_KEY = process.env.DARKSKY_API_KEY

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            darkSky: new DarkSkyDataSource(DARKSKY_API_KEY)
        }
    }
})

server.listen().then(({ url }) => {
    console.log(`Server is ready on ${url}`)
})