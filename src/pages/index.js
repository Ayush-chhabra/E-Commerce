import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home"/>
    <HeroSection 
    img ={data.img.childImageSharp.fluid}
    title="I write code"
    subtitle="LearnCodeOnline.in"
    heroclass="hero-background"
    />
  </Layout>
)
export const query =graphql`
{
  img: file(relativePath: {eq: "heromain.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default IndexPage
