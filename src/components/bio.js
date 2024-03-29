/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
//import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {

  return (
    <div className="bio">
      <StaticImage
        className="bio-img"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/main.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {/* {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You should follow them on Twitter
          </a>
        </p>
      )} */}
    </div>
  )
}

export default Bio
