import React from "react"
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import style from './home.module.css'


const Blog = ({ data }) => {
  console.log(data.allContentfulBlogPost.edges)

  return (
    <div>
      <Layout>
        {
          data.allContentfulBlogPost.edges.map((obj: any, ind: number) => {
            console.log(obj.node.image.fixed.src,"...")
            return (

              <div key={ind} className={style.blog}>
                <h2>{obj.node.title}</h2>
                <p>Published on : {obj.node.date}</p>
                <img src={obj.node.image.fixed.src} alt='image' />
                <br />
                <p>
                  {obj.node.blogText.blogText}
                </p>
                <button>Read Blog!</button>
                <hr />
              </div>

            )
          })
        }
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
            blogText
          }
        }
      }
    }
  }
`

export default Blog
