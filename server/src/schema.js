const gql = require("graphql-tag");

const typeDefs = gql`
"Gets spaceCats array used in Home page"
  type Query {
    spaceCats: [SpaceCat!]!
    tracksForHome: [Track!]!
    track(id: ID!): Track
  }

  type Mutation {
    incrementTrackViews(id: ID!) : IncrementTrackViewsResponse!

  }


  "Mutation Response Object Schema"
  type IncrementTrackViewsResponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Track

  }

"SpaceCat represent each space cat card with required feilds"
  type SpaceCat {
    id: ID!
    name: String!
    age: Int
    " lit items and list cant be null"
    missions: [Mission!]!
  }

  "Mission get array of mission participated by each space cat"
  type Mission {
    id: ID!
    name: String!
    description: String!
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!
}

type Module {
  id: ID!
  title: String!
  length: Int
}

type Author {
    id: ID!
    name: String!
    photo: String
}

`;

// console.log("from File", typeDefs);

module.exports = typeDefs;