import React from 'react'
import Link from 'gatsby-link'

const HomePage = () => (
  <div>
    <h1>Off to Neverland</h1>
    <img
      src="https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/peter-pan-2-e1517847563688-700x340.jpg"
      alt="Peter Pan"
    />
    <Link to="/filelist/">Go to file list</Link>
  </div>
);

export default HomePage
