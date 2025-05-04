# sciwork seminar 2025 Repository

[![Netlify Status](https://api.netlify.com/api/v1/badges/e715f750-0868-413a-967f-553eaad3da76/deploy-status)](https://app.netlify.com/sites/swseminar2025/deploys)

This repository holds the websites for sciwork seminar 2025. The site is hosted at [https://seminar2025.sciwork.dev](https://seminar2025.sciwork.dev) via Netlify. It is built using [Next.js](https://nextjs.org/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and [Tailwind CSS](https://tailwindcss.com/).

## Getting Started

Before you start, make sure you have the following installed:

- `node` (v18.17.0). We recommend using [nvm](https://github.com/nvm-sh/nvm) to manage your node versions. Once you have `nvm` installed, run `nvm install v18.17.0` to install node. Then use [avn](https://github.com/wbyoung/avn) to automatically switch to the correct node version when you enter the project directory.
- `yarn`

Install the necessary dependencies via:

```bash
yarn install
```

Then run the development server:

```bash
make devserver
```

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

To generate static html files for the site, run:

```bash
make html
```

The generated files will be in the `output/` directory.

## Contribution Guidelines

Please follow these steps for contributing:

1. **Fork and clone the repository**
   Fork the project repository to your own GitHub account and clone it to your local machine.

2. **Create a new branch**
   Use a descriptive name for your branches, such as `feature/add-speaker-bio` or `bugfix/registration-link`. This helps others understand the purpose of a branch at a glance.

3. **Develop and test your changes**
   Make the necessary changes in your local project and commit them. Push your branch and changes to your forked GitHub repository. Then, create a Pull Request (PR) against the `develop` branch. In the PR description, describe the changes you've made, the problem they solve, or the feature they add.

4. **Deploy Previews with Netlify**
   Every PR will trigger a Deploy Preview on Netlify. This allows you and others to preview the changes made in a live environment. You can find the Deploy Preview link in the PR checks section on the GitHub PR page.

5. **Review and merge process**
   Await review of your PR. Incorporate any changes requested by reviewers. Once your PR is approved, it will be merged into the `develop` branch. The sciwork team will periodically merge `develop` into `main`, which will publish the changes.

For specific instructions on how to run and develop the site locally, refer to the README file within each conference's directory.

## Deploying to Netlify

We use Netlify to host our site.

- The `main` branch is deployed to the official website [https://seminar2025.sciwork.dev](https://seminar2025.sciwork.dev) and [https://swseminar2025.netlify.app](https://swseminar2025.netlify.app).

- The `develop` branch is deployed to the under development [https://develop--swseminar2025.netlify.app](https://develop--swseminar2025.netlify.app).

- Other branches are deployed to `https://{branch}--swseminar2025.netlify.app`. Replace `/` in the branch name with `-`.

- Pull requests are deployed to `https://deploy-preview-{id}--swseminar2025.netlify.app`. `{id}` is the PR ID.

To deploy your changes to Netlify, you will need to push your changes to GitHub. Netlify will then automatically detect these changes and rebuild the site.
