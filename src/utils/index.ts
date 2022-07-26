export function isIndexPage(node: {fileAbsolutePath: string}) {
  return node.fileAbsolutePath.endsWith('index.mdx');
}