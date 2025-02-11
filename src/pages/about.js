import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Layout from "../components/Layout";
import aboutText from "../pages.json";

const About = () => {
  return (
    <Layout>
      <div className="aboutPage">
        <h1>Hi there, I am an Assyriology Student in Germany.</h1>
        <div className="about-page-content">
          <ReactMarkdown
            children={aboutText[0].content}
            rehypePlugins={[rehypeRaw]}
          />
        </div>
      </div>
    </Layout>
  );
};

export default About;
