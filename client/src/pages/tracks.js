import React from 'react';
// import { Layout } from '../components';
import TrackCard from '../containers/track-card';
import {Layout, QueryResult} from "../components";

import { useQuery, gql } from "@apollo/client"

const HOMEPAGE_TRACKS = gql`
query TrackForHomePage {
  tracksForHome {
    id
    author {
      id
      photo
    }
    title
    thumbnail
    length
    modulesCount
  }
}
`;


/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(HOMEPAGE_TRACKS);

  return <Layout grid>
    <QueryResult error={error} loading={loading} data={data}>
      {data?.tracksForHome?.map((track, index) => {
        return <TrackCard key={track.id} track={track} />
      })}
    </QueryResult>
  </Layout>
};

export default Tracks;
