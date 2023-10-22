import React from 'react';
import CatCard from '../containers/cat-card';
import { Layout, QueryResult } from '../components';

import { useQuery, gql } from "@apollo/client"


const SPACE_CATS = gql`
query myFirstQueryMocked {
  spaceCats {
    id
    name
    age
    missions {
      id
      name
      description
    }
  }
}
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const SpaceCats = () => {
  const { loading, error, data } = useQuery(SPACE_CATS);

  return <Layout grid>
    <QueryResult error={error} loading={loading} data={data}>
      {data?.spaceCats?.map((cat, index) => {
        return <CatCard key={cat.id} cat={cat} />
      })}
    </QueryResult>
    </Layout>
};

export default SpaceCats;
