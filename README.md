<div align="center">
  <h1>👽 portfolio-github 👽</h1>
</div>

## Site
[ut0n.dev](https://ut0n.dev)

## Feature
create-react-app with

- GitHub API v4 (GraphQL)
- styled-components
- GraphQL
- apollo

## A query for get repositories
```
query {
  viewer {
    repositories(first: 6, privacy: PUBLIC, isFork: false, orderBy: { field: CREATED_AT, direction: DESC }) {
      nodes {
        name
        url
        description
        primaryLanguage {
          name
          color
        }
      }
    }
  }
}
```