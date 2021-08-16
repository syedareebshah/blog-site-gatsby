import React, { useEffect, useState } from "react"
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import style from './home.module.css'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link,navigate } from "gatsby";


const Blog = ({ data }) => {
  // console.log(data.allContentfulBlogPost.edges)

  const [id,setID] = useState<number>()
  console.log("ind",id);
  

  const handleSubmit =(ind:number)=>{
    setID(ind)
    console.log("ind",id);
    
    navigate('/SinglePage/', {state:{id}})
  }


  return (
    <div>
      <Layout>
        {
          data.allContentfulBlogPost.edges.map((obj: any, ind: number) => {
            // console.log(obj.node.image.fixed.src, "...",ind)
            return (
              <div key={ind} className={style.blog}>
                <h2>{obj.node.title}</h2>
                <p>Published on : {obj.node.date}</p>
                <img src={obj.node.image.fixed.src} alt='image' />
                <br />
                <button>
                  <Link to={`/Blog/${obj.node.title}`}>Read Blog!</Link>
                </button>
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
            json
          }
        }
      }
    }
  }
`

export default Blog
