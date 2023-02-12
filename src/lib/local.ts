const posts = files.map((fileName) => {
  const slug = fileName.replace('.md', '');
  const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
  const { data: frontmatter } = matter(readFile);

  return {
    slug,
    frontmatter,
  };
});
