const data = require('./src/mock/data');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const { projectsData } = data;

  projectsData.forEach((project) => {
    createPage({
      path: `/${project.path}`,
      component: require.resolve(`./src/templates/project-page-template.js`),
      context: { project },
    });
  });
};
