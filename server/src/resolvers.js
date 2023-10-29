const resolvers = {
    Query: {
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksFoHome();
        },
        track: (_, { id }, { dataSources }) => {
            return dataSources.trackAPI.getTrack(id);
        }

    },
    Mutation: {
        incrementTrackViews: async (_, { id }, { dataSources }) => {
            try {
                const track = await dataSources.trackAPI.incrementTrackViews(id);
                return {
                    code : 200,
                    success : true,
                    message: "views Updated",
                    track
                }
            } catch(error) {
                return {
                    code : error.extensions.response.status,
                    success : false,
                    message: error.extensions.response.body,
                    track: null
                }
            }
            
        }
    },
    Track: {
        author: ({ authorId }, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
        modules: ({ id }, _, {dataSources}) => {
            return dataSources.trackAPI.getTrackModules(id);
        }
    }

}

module.exports = resolvers;