import React from "react"
import Layout from "../components/Layout"
import PostList from "../components/PostList"

const Home = () => {
    return (
        <div>
            <Layout>
                <PostList />
            </Layout>
        </div>
    )
}

export default Home
