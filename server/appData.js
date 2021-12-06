const appsList = [
  {
    key: 'app1',
    title: 'App 1',
    userCount: 5
  },
  {
    key: 'app2',
    title: 'App 2',
    userCount: 24
  },
  {
    key: 'app3',
    title: 'App 3',
    userCount: 7
  },
  {
    key: 'app4',
    title: 'App 4',
    userCount: 5
  }
]

const appsDetails = {
  app1: {
    description: 'Full description for App 1',
    key: 'app1',
    title: 'App 1',
    totalUsers: 5,
    usage: 1534,
    usageLimit: 3000,
    userLimit: 10,
  },
  app2: {
    description: 'Full description for App 2',
    key: 'app2',
    title: 'App 2',
    totalUsers: 24,
    usage: 17585,
    usageLimit: 20000,
    userLimit: 50,
  },
  app3: {
    description: 'Full description for App 3',
    key: 'app3',
    title: 'App 3',
    totalUsers: 7,
    usage: 200,
    usageLimit: 3000,
    userLimit: 10,
  },
  app4: {
    description: 'Full description for App 4',
    key: 'app4',
    title: 'App 4',
    totalUsers: 5,
    usage: 1000,
    usageLimit: 1000,
    userLimit: 5,
  }
}

module.exports = {appsList, appsDetails}
