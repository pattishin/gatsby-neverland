import React from 'react'
import Link from 'gatsby-link'

const AboutPage = ({ data }) => {
  return (
    <div>
      <h1>About { data.site.siteMetadata.title }</h1>
      <p>Lorem Ipsum Captain Hook</p>
      <Link to="/index/">Home</Link>
    </div>
  );
}

export default AboutPage

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
