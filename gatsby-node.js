exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: "/getting-started/*", 
    toPath: "/verify/getting-started/:splat", 
    isPermanent: true, 
    force: true
  });
  createRedirect({
    fromPath: "/getting-started", 
    toPath: "/verify/getting-started", 
    isPermanent: true, 
    force: true
  });
};

