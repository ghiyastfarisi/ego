/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docs: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'intro'
    },
    {
      type: 'category',
      label: 'Getting started',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'doc',
          label: 'Install',
          id: 'getting-started/install',
        },
        {
          type: 'doc',
          label: 'Examples',
          id: 'getting-started/examples',
        },
        {
          type: 'doc',
          label: 'Troubleshooting',
          id: 'getting-started/troubleshoot',
        },
      ],
    },
    {
      type: 'category',
      label: 'Workflows',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'doc',
          label: 'Build your app',
          id: 'workflows/build',
        },
        {
          type: 'doc',
          label: 'Debug your app',
          id: 'workflows/debug',
        },
      ],
    },
    {
      type: 'category',
      label: 'Knowledge',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'doc',
          label: 'Programming model',
          id: 'knowledge/model',
        },
        {
          type: 'doc',
          label: 'Limitations',
          id: 'knowledge/limitations',
        },
        {
          type: 'doc',
          label: 'Secure storage',
          id: 'knowledge/storage',
        },
        {
          type: 'doc',
          label: 'TLS inside the enclave',
          id: 'knowledge/tls',
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'doc',
          label: 'CLI',
          id: 'reference/cli',
        },
        {
          type: 'doc',
          label: 'Configuration file',
          id: 'reference/config',
        },
        {
          type: 'link',
          label: 'Go library',
          href: 'https://pkg.go.dev/github.com/edgelesssys/ego',
        },
        {
          type: 'doc',
          label: 'Remote attestation',
          id: 'reference/attest',
        },
      ],
    },
  ],
};

module.exports = sidebars;
