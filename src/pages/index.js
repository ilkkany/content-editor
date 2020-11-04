import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ApolloProvider } from '@apollo/client';
import { client } from '../backend/client'

const IndexPage = () => {
  return(
    <ApolloProvider client={client}>
      <Layout>
        <SEO title="Home" />
        <Link to="/grid-editor/">Grid Editor</Link>
      </Layout>
    </ApolloProvider>
  )
}

export default IndexPage
