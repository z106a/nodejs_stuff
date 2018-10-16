const https = require('https');

const compose = function (...fns) {
  return function (args) {
    console.log(args);
    return fns.reduce(function (acc, fn) {
      console.log(acc, fn);
      return acc.then(fn);
    }, 
      Promise.resolve(args)
    );
  };
};
// const compose = (...fns) => (args) => 
//   fns.reduce(
//     (acc, f) => 
//     acc.then(f), Promise.resolve(args));
//----------------------------
const sum = compose(
  (x) => x + 1, 
  (x) => new Promise((resolve) => setTimeout(() => resolve(x + 2), 1000)),
  (x) => x + 3,
  async (x) => (await x) + 4
);

// sum(5).then(console.log);

//----------------------------
const request = compose(
  (options) => {
    return { ...options, headers: { ...options.headers, 'user-agent': 'request-compose' } }
  },
  (options) => new Promise((resolve, reject) => {
    https.request(options)
      .on('response', resolve)
      .on('error', reject)
      .end();
  }),
  (res) => new Promise((resolve, reject) => {
    let body = '';
    res
      .on('data', (chunk) => body += chunk)
      .on('end', () => resolve({ res, body }))
      .on('error', reject);
  }),
  ({ res, body }) => ({ res, body: JSON.parse(body) }),
);
request({
  protocol: 'https:',
  hostname: 'api.github.com',
  path: '/users/simov',
}).then((res, body) => 
console.log(res, body))
.catch(e => console.log(e));

const search = ((
  github = compose(
    ({ query }) => request({
      url: 'https://api.github.com/search/repositories',
      qs: { q: query },
      headers: { 'user-agent': 'request-compose' },
    }),
    ({ body }) => body.items.slice(0, 3)
      .map(({ full_name, html_url }) => ({ name: full_name, url: html_url })),
  ),
  gitlab = compose(
    ({ query, token }) => request({
      url: 'https://gitlab.com/api/v4/search',
      qs: { scope: 'projects', search: query },
      headers: { 'authorization': `Bearer ${token}` },
    }),
    ({ body }) => body.slice(0, 3)
      .map(({ path_with_namespace, web_url }) =>
        ({ name: path_with_namespace, url: web_url })),
  ),
  bitbucket = compose(
    ({ query }) => request({
      url: 'https://bitbucket.org/repo/all',
      qs: { name: query },
    }),
    ({ body }) => body.match(/repo-link" href="[^"]+"/gi).slice(0, 3)
      .map((match) => match.replace(/repo-link" href="\/([^"]+)"/i, '$1'))
      .map((path) => ({ name: path, url: `https://bitbucket.org/${path}` })),
  ),
  search = compose(
    ({ query, cred }) => Promise.all([
      github({ query }),
      // gitlab({query, token: cred.gitlab}),
      bitbucket({ query }),
    ]),
    (results) => results.reduce((all, results) => all.concat(results)),
  )) => Object.assign(search, { github, bitbucket })
)();

search({ query: 'request' }).then(res => 
  console.log(res))
  .catch(e => 
    console.log(e));
// var results = await search({query: 'request', {gitlab: '[TOKEN]'}})

