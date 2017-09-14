import _ from "lodash";
import marked from "marked";

// Format a string as an anchor tag ("Foo bar" -> "foo-bar")
const toAnchor = (content) => {
  const baseContent = content.toLowerCase();
  return baseContent.replace(/[^\w]+/g, "-");
};

const parseToc = (mdContent) => {
  const toc = [];

  marked(mdContent, {
    renderer: _.extend(new marked.Renderer(), {
      heading: (content, level) => {
        toc.push({ content, level, anchor: toAnchor(content) });
      }
    })
  });

  return toc;
};

const append = (...sections) => sections.join("\n\n");

export default {
  toAnchor,
  append,
  parseToc
};
