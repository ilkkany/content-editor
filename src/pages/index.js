import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { ApolloProvider } from '@apollo/client';
import { client } from '../backend/client'

const IndexPage = () => {
  return(
    <ApolloProvider client={client}>
      <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
        <Link to="/mapblock-creator/">MapblockCreator</Link>
      </Layout>
    </ApolloProvider>
  )
}

export default IndexPage
