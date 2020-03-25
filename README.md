#### DARK SKY GRAPHQL
My version of a DarkSky GraphQL implemenation.

Implemented only has `currently` prop, more props to come

### Prerequisites
* NVM
* DarkSky API Key

### Intallation
* `npm install`

### Server Startup
* `npm start`
* URL: `http://localhost:4000`

#### Example Query
```
{
  forcast(latitude: "42.3601", longitude: "-71.0589"){
    timezone
    latitude
    longitude
    currently{
      summary
      icon
      temperature
    }
  }
}
```