import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'getting-started',
      label: 'Getting Started',
    },
    {
      type: 'category',
      label: 'Utilities',
      collapsed: false,
      items: [
        'display',
        'grid',
        'spacing',
        'typography',
        'borders',
        'shadows',
        'extras',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      collapsed: false,
      items: [
        'responsive',
        'layout',
        'customization',
      ],
    },
  ],
};

export default sidebars;
