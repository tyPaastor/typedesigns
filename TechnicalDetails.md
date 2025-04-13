# Typedesigns Site Technical Details

This website is built using Next.js's [static site generation](https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates) feature using Markdown files as the data source.

The project pages are stored in `/_projects` as Markdown files with front matter support. Adding a new Markdown file in there will create a new project page & add it to the frontpage.

Styling uses [Tailwind CSS](https://tailwindcss.com).

## How to run

Before you can run anything you will need to run `npm install` which will download all the required dependencies your site needs to build/run. They all get placed in `node_modules` directory.

To operate from the CLI use these commands:
* `npm run dev` Starts the development server.
* `npm run build` Builds the app for production.
* `npm start` Runs the built app in production mode.

You should just be able to run the website by pressing F5 in VSCode. The run/debug configuration is in `.vscode/launch.json`.