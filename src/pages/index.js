import * as React from "react"
import Layout from '../components/Layout';
import style from './home.module.css'

const IndexPage = ({data}) => {
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
          </div>
        </div>
      </Layout>
    </div>
  )
}



export default IndexPage
