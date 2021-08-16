import React from "react"
import Layout from '../components/Layout';
import style from '../pages/home.module.css'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


const SinglePage = ({ pageContext }) => {

    console.log(pageContext)
    return (
        <div>
            <Layout>
                <div className={style.mainPage}>
                    <h1>{pageContext.itemDetails.title}</h1>
                    <p>Published on {pageContext.itemDetails.date}</p>
                    <div className={style.ScndMain}>

                        <div className={style.left}>
                            <img width='50%' src={pageContext.itemDetails.image.fixed.src} />
                        </div>
                        <div className={style.right}>
                            {documentToReactComponents(pageContext.itemDetails.blogText.json)}

                        </div>

                    </div>

                </div>
            </Layout>
        </div>
    )
}

export default SinglePage
