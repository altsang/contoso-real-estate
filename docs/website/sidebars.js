// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {

  homeSidebar: {
    'About This Project': [
      'intro',
      'architecture',
      'azure',
    ]
  },

  specSidebar: {
    'Specification': [
        {
          type: 'autogenerated',
          dirName: 'specification',
        },
      ],
  },
  
  scenariosSidebar:{
    'Scenarios': [
        'scenarios/index',
        {
          type: 'category',
          label: '1. Template',
          items: [{
              type: 'autogenerated',
              dirName: 'scenarios/scenario-1',
          }],
        },
      ]
  }
};

module.exports = sidebars;