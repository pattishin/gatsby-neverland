import React from 'react'
import Link from 'gatsby-link'
import g from 'glamorous'

import { rhythm } from '../utils/typography'

const HomePage = ({ data }) => (
  <div>
    <g.H1 display={"inline-block"} borderBottom={"1px solid"}>
      Off to Neverland
    </g.H1>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <g.H3 marginBottom={rhythm(1 / 4)}>
          {node.frontmatter.title}{" "}
          <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
        </g.H3>
        <p>{node.excerpt}</p>
      </div>
    ))}
    <Link to="/filelist/">Go to file list</Link>
  </div>
);

export default HomePage

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
