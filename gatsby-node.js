exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: '/',
    toPath: '/document-signatures/getting-started/register-application',
    isPermanent: true,
    redirectInBrowser: true
  });
}