import * as React from "react"
import Layout from '../components/Layout';
import style from './home.module.css'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { graphql } from 'gatsby';


const IndexPage = ({data}) => {
  console.log(data.allContentfulBlogPost.edges[0].node.blogText.blogText,"ye wala")
  return (
    <div>
      <Layout>
        <div className={style.main}>
          <div className={style.innerDiv}>
            <p>Hello, Welcome to</p>
            <h2>Areeb's Blog Site</h2>
            <p>
              This blog site is developed using JAMstack Serverless and Headless CMS
            </p>
            <div>
              {documentToReactComponents(data.allContentfulBlogPost.edges[0].node.blogText.json)}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}



export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          date
          title
          image {
            title
            fixed {
              src
            }
          }
          blogText {
            json
          }
        }
      }
    }
  }
`



export default IndexPage
