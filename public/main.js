const {
  getMetadataIndices,
  parseMetadata,
  parseContent,
} = require("../src/utils.js");

const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../src/content");
const dirPathPages = path.join(__dirname, "../src/pages/content");
let postlist = [];
let pagelist = [];

const getPosts = async () => {
  await fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: " + err);
    }
    files.forEach((file, i) => {
      let obj = {};
      let post;
      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
        const lines = contents.split("\n");
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        const metadata = parseMetadata({ lines, metadataIndices, obj });
        const content = parseContent({ lines, metadataIndices });
        const date = new Date(metadata.date);
        const timestamp = date.getTime() / 1000;
        post = {
          id: timestamp,
          title: metadata.title ? metadata.title : "No title given",
          author: metadata.author ? metadata.author : "No author given",
          date: metadata.date ? metadata.date : "No date given",
          tags: metadata.tags? metadata.tags: "No tags given",
          content: content ? content : "No content given",
        };
        postlist.push(post);
        if (i === files.length - 1) {
          const sortedList = postlist.sort((a, b) => {
            return a.id < b.id ? 1 : -1;
          });
          let data = JSON.stringify(sortedList);
          console.log(data);
          fs.writeFileSync("src/posts.json", data);
        }
      });
    });
  });
};
const getPages = () => {
  fs.readdir(dirPathPages, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: " + err);
    }
    files.forEach((file, i) => {
      let page;
      fs.readFile(`${dirPathPages}/${file}`, "utf8", (err, contents) => {
        page = {
          content: contents,
        };
        pagelist.push(page);
        let data = JSON.stringify(pagelist);
        fs.writeFileSync("src/pages.json", data);
      });
    });
  });
  return;
};

getPosts();
getPages();
