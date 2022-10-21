module.exports = [
  {
    collapsible: false,
    label: "Getting Started",
    type: "category",
    items: ["self-hosted", "self-hosted/intro"],
  },
  {
    type: 'category',
    label: 'Guides',
    link: {
      type: 'generated-index',
      title: 'Docusaurus Guides',
      description: 'Learn about the most important Docusaurus concepts!',
      slug: '/category/docusaurus-guides',
      keywords: ['guides'],
      image: '/img/docusaurus.png',
    },
    items: ['self-hosted'],
  },
];