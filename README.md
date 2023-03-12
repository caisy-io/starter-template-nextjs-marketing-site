# Caisy demo project with NextJS

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcaisy-io%2Fdemo-project-nextjs&env=NEXT_PUBLIC_BASE_URL,CAISY_PROJECT_ID,CAISY_TOKEN&envDescription=NEXT_PUBLIC_BASE_URL%20is%20your%20later%20public%20url%20like%20https%3A%2F%2Fexample.com.%CAISY_PROJECT_ID%20is%20your%20project%20ID%20in%20caisy.%20And%20CAISY_TOKEN%20has%20to%20be%20a%20API%20key%20you%20created%20for%20your%20project.%20)

## ENV File

`.env.sample >> .env.local`

To deploy, this two environment variables are required:

```bash
CAISY_PROJECT_ID=xxx
CAISY_API_KEY=xxx
```

in vercel or in your local `.env.local`

#### DEVELOPMENT

1. Coding Style

- Prefix Interfaces with I
- Prefix StyledComponents with S
- Prefix StyledComponents CSS snippets that are exported with CSS

2. Plop introduction

Generate new Component

```
yarn plop fc ImageWithText
```

Generate new Style for Component

```
yarn plop s ImageWithText Headline
```
