import React from "react";
import { Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Layout from "../components/Layout";
import postlist from "../posts.json";
import { useParams } from "react-router";

const Post = () => {
  const { id } = useParams();
  if (!id) {
    return <Navigate to="/404" />;
  }
  const fetchedPost = {};
  let postExists = false;
  postlist.forEach((post, i) => {
    if (Number(id) === post.id) {
      fetchedPost.title = post.title ? post.title : "No title given";
      fetchedPost.date = post.date ? post.date : "No date given";
      fetchedPost.author = post.author ? post.author : "No author given";
      fetchedPost.content = post.content ? post.content : "No content given";
      postExists = true;
    }
  });
  if (postExists === false) {
    return <Navigate to="/404" />;
  }
  return (
    <Layout>
      <div className="post">
        <h2 className="postTitle">{fetchedPost.title}</h2>
        <small className="postDetails">
          Published on {fetchedPost.date} by {fetchedPost.author}
        </small>
        <hr />
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            img: ({ node, ...props }) => (
              <img
                className="postImage"
                {...props}
                style={{ maxWidth: "100%", height: "auto" }} // Custom styling for images
                alt={props.alt}
              />
            ),
          }}
        >
          {fetchedPost.content}
        </ReactMarkdown>
      </div>
    </Layout>
  );
};

export default Post;
