const getMetadataIndices = (acc, elem, i) => {
  if (/^---/.test(elem)) {
    acc.push(i);
  }
  return acc;
};
const parseMetadata = ({ lines, metadataIndices, obj }) => {
  if (metadataIndices.length > 0) {
    let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1]);
    metadata.forEach((line) => {
      obj[line.split(": ")[0]] = line.split(": ")[1];
    });
    return obj;
  }
};
const parseContent = ({ lines, metadataIndices }) => {
  if (metadataIndices.length > 0) {
    lines = lines.slice(metadataIndices[1] + 1, lines.length);
  }
  return lines.join("\n");
};

module.exports = {
  getMetadataIndices,
  parseMetadata,
  parseContent,
};
