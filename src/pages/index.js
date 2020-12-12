import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { ApolloProvider } from '@apollo/client';
import { client } from '../backend/client';
import FolderNavigation from '../components/Folder'

const IndexPage = () => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <FolderNavigation />
        <SEO title="Home" />
      </Layout>
    </ApolloProvider>
  );
};

export default IndexPage;
