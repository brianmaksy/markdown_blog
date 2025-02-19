import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import postlist from "../posts.json";

const PostList = () => {
  const excerptList = postlist.map((post) => {
    return post.content.split(" ").slice(0, 20).join(" ") + "...";
  });
  const [selectedTag, setSelectedTag] = useState(null);

  // Filter posts by tag
  // const filteredPosts = selectedTag  ? postlist.filter((post) => post.tags.includes(selectedTag)) :postlist;

  return (
    <div className="postlist">

      <h1 className="title">All Posts</h1>

      {postlist.length &&
        postlist.map((post, i) => {
          return (
            <div key={i} className="post-card">
              <h2>
                <Link className="links" to={`/post/${post.id}`}>
                  {post.title}
                </Link>
              </h2>
              <small>
                Published on {post.date} by {post.author}
                <br />
                Tags: {post.tags}
              </small>
              <hr />
              <ReactMarkdown
                children={excerptList[i]}
                ehypePlugins={[rehypeRaw]}
              />
              <small>
                <Link className="links" to={`/post/${post.id}`}>
                  Read more
                </Link>
              </small>
            </div>
          );
        })}
    </div>
  );
};

export default PostList;
