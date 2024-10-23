#### Q. What is `npm`?

npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

#### Q. Is "npm" an acronym for "Node Package Manager"?

Contrary to popular belief, npm is not in fact an acronym for "Node Package Manager"; It is a recursive bacronymic abbreviation for "npm is not an acronym" (if the project was named "ninaa", then it would be an acronym). The precursor to npm was actually a bash utility named "pm", which was the shortform name of "pkgmakeinst" - a bash function that installed various things on various platforms. If npm were to ever have been considered an acronym, it would be as "node pm" or, potentially "new pm".

#### Q. What is `Parcel/Webpack`? Why do we need it?

Parcel and Webpack are JavaScript bundlers used to bundle, optimize, and manage front-end assets.

Why We Need Them:

- Code Splitting & Bundling: Organize code into smaller chunks, improving efficiency.
- Optimization: Minify and compress files (JS, CSS, images) for faster load times.
- Dependency Management: Automatically handle dependencies between modules.
- Transpiling: Convert modern JavaScript (ES6+) or TypeScript to browser-compatible versions.
- Asset Handling: Manage CSS, images, fonts, etc., within the bundling process.
- Development Features: Support live reloading and hot module replacement (HMR).

Parcel is easy with no config, while Webpack offers more customization for larger projects.

#### Q. What is `.parcel-cache`?

- Parcel caches code all the time.
- When we run the application, a build is created which takes some time in ms.
- If we make any code changes and save the application, another
  build will be triggered which might take even less time than
  the previous build.
- This reduction of time is due to parcel cache.
- Parcel immediately loads the code from the cache every time
  there is a subsequent build.
- On the very first build parcel creates a folder .parcelcache
  where it stores the caches in binary codeformat.
- Parcel gives faster build, faster developer experience
  because of caching.

#### Q. What is `npx` ?

- npx is a command-line tool that comes with Node. It simplifies running Node.js packages.
- Runs Node.js packages directly without installing them globally.
- Installs and executes packages temporarily, avoiding clutter.
- Lets you use CLI tools from npm without manual installation.
- Runs locally installed packages without needing to add them to your PATH.
- Useful for one-time commands or scripts.

#### Q. What is difference between `dependencies` vs `devDependencies`

Dependencies:

- Essential for your app to run in production.
- Installed when running `npm install <package-name>`.
- Examples: frameworks like React, Express.

DevDependencies:

- Needed only during development (e.g., testing, building, linting).
- Installed when running `npm install -D <package-name>`
- Not installed in production environments.
- Examples: Babel, ESLint, Webpack.

#### Q. What is Tree Shaking?

- Tree shaking is a process of removing the unwanted code that
  we do not use while developing the application.
- In computing, tree shaking is a dead code elimination
  technique that is applied when optimizing code.

#### Q. What is Hot Module Replacement?

- It means that parcel will keep a track of all the files which
  you are updating.
- There is File Watcher Algorithm (written in C++). It keeps
  track of all the files which are changing realtime and it
  tells the server to reload.
- These are all done by PARCEL

#### Q. What is the difference between `package.json` and `package-lock.json`

Package.json file is a configuration for NPM. Whatever
packages our project needs, we install those packages using
npm install <packageName>.
Once package installation is complete, their versions and
configuration related information is stored as dependencies
inside package.json file.

<br/>

Package-lock.json locks the exact version of packages being
used in the project.

<br/>

In package. json we have information about generic version
of installed packages whereas in package.lock.json we have
information about the specific or exact version of
installed packages.

#### Q. Why should I not modify `package-lock.json`?

- Ensures consistent dependency versions across environments.
- Manual changes can lead to broken dependencies or bugs.
- Avoids bypassing important security updates.
- npm automatically manages it to reflect the correct dependency tree.

#### Q. What is the `dist` folder?

- It keeps the files minified for us.
- When bundler builds the app, the build goes into a folder
  called dist.
- The `/dist` folder contains the minimized and optimised
  version the source code.
- Along with the minified code, the /dist folder also comprises
  of all the compiled modules that may or may not be used with
  other systems.
- When we run command:

  `npx parcel index.html`

  This will create a faster development version of our project and serves it on the server.

- When I tell parcel to make a production build:
  `npx parcel build index.html`
  It creates a lot of things, minify your file.
- And the parcel will build all the production files to
  the dist folder.

#### Q. What is `browserlists`

- Browserslist is a tool that specifies which browsers should
  be supported/compatible in your frontend app.
- It makes our code compatible for a lot of browsers.
- In package.json file do:

  `"browserslist": [
    "last 2 versions"
]`

  parcel will make sure that the app will work in last 2 versions of all the browsers available.

### IMPORTANT NOTES:

1. [Creating your own create-react-app](https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658)
2. [Parcel Documentation](https://parceljs.org/getting-started/webapp/)
3. [Parcel on Production](https://parceljs.org/features/production/)
4. [BrowsersList](https://browserslist.dev/)
