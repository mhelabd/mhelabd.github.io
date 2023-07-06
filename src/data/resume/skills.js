// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Bash',
    competency: 2,
    url: 'https://www.gnu.org/software/bash/',
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services (AWS)',
    competency: 4,
    url: 'https://aws.amazon.com/',
    category: ['Machine Learning', 'Data Engineering', 'Web Development', 'Tools'],
  },
  {
    title: 'Microsoft Azure',
    competency: 4,
    url: 'https://azure.microsoft.com/en-us',
    category: ['Machine Learning', 'Data Engineering', 'Web Development', 'Tools'],
  },
  {
    title: 'Google Cloud Platform (GCP)',
    competency: 4,
    url: 'https://cloud.google.com/',
    category: ['Machine Learning', 'Data Engineering', 'Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    url: 'https://www.mongodb.com/',
    category: ['Web Development', 'Data Engineering'],
  },
  {
    title: 'SQL',
    competency: 4,
    url: 'https://www.microsoft.com/en-us/sql-server',
    category: ['Web Development', 'Data Engineering', 'Languages'],
  },
  {
    title: 'Git/Mercurial',
    competency: 3,
    url: 'https://git-scm.com/',
    category: ['Tools'],
  },
  {
    title: 'Numpy',
    competency: 5,
    url: 'https://numpy.org/',
    category: ['Machine Learning', 'Data Engineering', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 5,
    url: 'https://www.tensorflow.org/',
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'Pytorch',
    competency: 5,
    url: 'https://pytorch.org/',
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'GraphQL',
    competency: 2,
    url: 'https://graphql.org/',
    category: ['Web Development', 'Data Engineering'],
  },
  {
    title: 'Pandas',
    competency: 5,
    url: 'https://pandas.pydata.org/',
    category: ['Data Engineering', 'Machine Learning', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    url: 'https://matplotlib.org/',
    category: ['Data Engineering', 'Machine Learning', 'Python'],
  },
  {
    title: 'Apache Spark',
    competency: 2,
    url: 'https://spark.apache.org/',
    category: ['Data Engineering', 'Machine Learning'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    url: 'https://nodejs.org/en',
    category: ['Web Development'],
  },
  {
    title: 'React.JS',
    competency: 3,
    url: 'https://react.dev/',
    category: ['Web Development'],
  },
  {
    title: 'React Native',
    competency: 3,
    url: 'https://react.dev/',
    category: ['Web Development'],
  },
  {
    title: 'HTML + CSS',
    competency: 4,
    url: 'https://en.wikipedia.org/wiki/HTML',
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'JavaScript',
    competency: 4,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/',
    category: ['Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    url: 'https://www.python.org/',
    category: ['Languages', 'Python'],
  },
  {
    title: 'C++',
    competency: 4,
    url: 'https://cplusplus.com/',
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 4,
    url: 'https://cplusplus.com/',
    category: ['Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
