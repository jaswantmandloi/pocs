# Data fetch example

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/segmentio/create-next-app) with [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) or [npx](https://github.com/zkat/npx#readme) to bootstrap the example:

```bash
npx create-next-app --example data-fetch data-fetch-app
# or
yarn create next-app --example data-fetch data-fetch-app
```

### Download manually

Download the example:

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/data-fetch
cd data-fetch
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example

Next.js was conceived to make it easy to create universal apps. That's why fetching data
on the server and the client when necessary is so easy with Next.

Using `getInitialProps` fetches data on the server for SSR and then on the client when the component is re-mounted (not on the first paint).




1. React.forwardRef
2. POC for ref the component
3. Santry R&D
4. nextjs server configurations & config webpack config
5. jest config css processing
6. next module working === server to client
7. next config module
8. icu-data requirement ?
9. cypress ?
10. File loader for performance
11. React.Memo
12. ShouldComponentUpdate alternative for react hooks
13. Redux with hooks and what are performance benefits
14. How big virtual dom is to be optimized / How reconciler diff works ( Does it diff the big whole tree against the new created OR updated tree parts are created and diffed  )
15. Tools for optimization 
16. Mounting unmounting strategy (Top-Bottom or Bottom to Top)
17. How to grab the react fiber
18. How reconciler works




https://reactjs.org/docs/reconciliation.html


https://reactjs.org/docs/profiler.html