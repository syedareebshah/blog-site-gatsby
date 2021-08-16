import React from "react"
import Layout from '../components/Layout';
import style from './home.module.css'

const SinglePage = ({ location }) => {
    console.log(location.state.id,'jjjjj')
    return (
        <div>
            <Layout>
                <div className={style.mainPage}>
                    <h1>Title</h1>
                    <p>Published on</p>
                    <div className={style.ScndMain}>

                        <div className={style.left}>
                            <img width='50%' src='https://i.ytimg.com/vi/dUZaT-yKNg0/maxresdefault.jpg' />
                        </div>
                        <div className={style.right}>
                            text
                        </div>

                    </div>

                </div>
            </Layout>
        </div>
    )
}

export default SinglePage
