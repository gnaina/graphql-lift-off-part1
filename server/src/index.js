const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
// const { addMocksToSchema } = require("@graphql-tools/mock");
// const { makeExecutableSchema } = require("@graphql-tools/schema")

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const TrackAPI = require('./datasources/track-api');


// const mocks = {
//     Query: () => ({
//         spaceCats: () => [...new Array(6)],
//         tracksForHome: () => [...new Array(5)],
//     }),
//     SpaceCat: () => ({
//         id: () => "spaceCat_01",
//         name: () => "Astro Kitty, Space Explorer",
//         age: () => 12,
//         missions: () => {
//             return {
//                 name: "Grumpy Cat Mission",
//                 description: "Basic Description",
//             };
//         }
//     }),
//     Track: () => ({
//         id: () => "tracks_01",
//         title: () => "Astro Kitty, Space Explorer",
//         thumbnail: () => "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
//         length: () => 1200,
//         modulesCount: () => 7,
//         author: () => {
//             return {
//                 name: "Grumpy Cat",
//                 photo: "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
//             };
//         },

//     })
// };


async function startApolloServer() {

    // const server = new ApolloServer({
    //     schema: addMocksToSchema({
    //         schema: makeExecutableSchema({ typeDefs }),
    //         mocks: mocks,
    //     })
    // });
    // const { url } = await startStandaloneServer(server);

    const server = new ApolloServer({
        typeDefs,
        resolvers,
      });
      const { url } = await startStandaloneServer(
        server,
        {
          // pass server options
          context: async () => {
            // this object will become resolvers contextValue
            const { cache } = server;
            return {
              dataSources: {
                trackAPI: new TrackAPI({ cache }),
    
              }
            }
          }
        }
      );


    console.log(`
    Server is running .....
    Query at ${url}
    
    `);
}

startApolloServer();