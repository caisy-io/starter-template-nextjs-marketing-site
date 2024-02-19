# Caisy Multilingual marketing site starter template with NextJS

## Deploy this template to Vercel

<br>
<br>

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcaisy-io%2Fstarter-template-nextjs-marketing-site&env=CAISY_PROJECT_ID,CAISY_API_KEY&envDescription=CAISY_PROJECT_ID%20and%20CAISY_API_KEY%20is%20required%20for%20the%20tempalte%20to%20work&envLink=https%3A%2F%2Fcaisy.io%2Fdeveloper%2Fdocs%2Fauthentication%2Fapi-keys&project-name=caisy-nextjs-marketing-site&repository-name=caisy-nextjs-marketing-site&demo-title=caisy-nextjs-marketing-site&demo-description=Example%20Deployment%20of%20this%20Template&demo-url=https%3A%2F%2Fcaisy-nextjs-marketing-site.vercel.app)

### Features

- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Dynamic content updates from caisy without redeployment
- ✅ Sitemap support
- ✅ Robots.txt

## Requirements

In order to have the right blueprints configured, make sure to follow the onboarind on [caisy.io](https://caisy.io/) and select the starter template _"Multilingual marketing site"_
To run this project a `.env.local` file like this (with your own projects values) is required:

```
CAISY_PROJECT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxx
CAISY_API_KEY=xxx
```

### To run this project locally

- [ ] `git clone https://github.com/caisy-io/starter-template-nextjs-marketing-site.git`
- [ ] create `.env.local` file with your project id and API key
- [ ] `npm install`
- [ ] `npm run dev`

In order to have the right blueprints configured, make sure to follow the onboarind and select the starter template "Multilingual marketing site"

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
