// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlug from "rehype-slug";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    slug: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      description: "Post short description",
      required: true
    },
    image: {
      type: "string",
      description: "Post image url",
      required: false
    },
    updated: {
      type: "date",
      description: "Date of the latest of edits of the post",
      required: false
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: false
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post.slug}`
    },
    img: {
      type: "string",
      resolve: (post) => {
        console.log("post->", post);
        return "";
      }
    }
  }
}));
var TodayILearned = defineDocumentType(() => ({
  name: "TIL",
  filePathPattern: "TIL/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "Title of the TIL record",
      required: true
    },
    description: {
      type: "string",
      description: "Short description",
      required: true
    },
    image: {
      type: "string",
      description: "TIL image url",
      required: false
    },
    updated: {
      type: "date",
      description: "Date of the latest update",
      required: false
    },
    date: {
      type: "date",
      required: true
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: false
    },
    emoji: {
      type: "string",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/til/${post._raw.flattenedPath}`
    },
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath
    },
    img: {
      type: "string",
      resolve: (post) => {
        return "";
      }
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post, TodayILearned],
  mdx: {
    remarkPlugins: [remarkGfm, [remarkToc, { maxDepth: 4, tight: true }]],
    rehypePlugins: [rehypeSlug, rehypeExternalLinks]
  }
});
export {
  Post,
  TodayILearned,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-WZ2HPXBM.mjs.map
