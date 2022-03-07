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
  createRedirect({
    fromPath: "/authentication/*", 
    toPath: "/verify/integrations/:splat", 
    isPermanent: true, 
    force: true
  });
  createRedirect({
    fromPath: "/authentication", 
    toPath: "/verify/integrations", 
    isPermanent: true, 
    force: true
  });
  createRedirect({
    fromPath: "/eid-specifics/*", 
    toPath: "/verify/eid-specifics/:splat", 
    isPermanent: true, 
    force: true
  });
  createRedirect({
    fromPath: "/eid-specifics", 
    toPath: "/verify/eid-specifics", 
    isPermanent: true, 
    force: true
  });
  createRedirect({
    fromPath: "/how-to/get-ready-for-production",
    toPath: "/verify/guides/production",
    isPermanent: true, 
    force: true
  });
  createRedirect({
    fromPath: "/how-to/get-ready-for-production/",
    toPath: "/verify/guides/production",
    isPermanent: true, 
    force: true
  });
  createRedirect({
    fromPath: "/how-to/apply-custom-styling/",
    toPath: "/verify/custom-styling",
    isPermanent: true, 
    force: true
  });
  createRedirect({
    fromPath: "/how-to/test-users/",
    toPath: "/verify/e-ids",
    isPermanent: true, 
    force: true
  });
  
  createRedirect({
    fromPath: "/how-to/*", 
    toPath: "/verify/how-to/:splat", 
    isPermanent: true, 
    force: true
  });
  createRedirect({
    fromPath: "/how-to", 
    toPath: "/verify/how-to", 
    isPermanent: true, 
    force: true
  });
};

