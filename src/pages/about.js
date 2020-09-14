import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import InfoBlock from "../components/Reuseable/InfoBlock"
import DualInfoblock from "../components/Reuseable/DualInfoblock"
import TeamPhotoSection from "../components/About/TeamPhotoSection"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home"/>
    <HeroSection 
    img ={data.img.childImageSharp.fluid}
    title="About Us"
    subtitle=""
    heroclass="about-background"
    />
    
    <InfoBlock heading="About Us"/>
    <TeamPhotoSection/>   
    <DualInfoblock heading="A message from CEO"/>
  </Layout>
)

export const query =graphql`
{
  img: file(relativePath: {eq: "back.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default AboutPage
