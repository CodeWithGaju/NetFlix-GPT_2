<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
 -->

<!--===================================================================================== -->
# Note-1 step-1: To solve the below problem you can handle it like i did below:
PS C:\JavaScript Code\Gaju coding tuturorial\JavaScript Practice\Namaste React Project-2\netflix-gpt_2> firebase login
firebase : File C:\Users\gajen\AppData\Roaming\npm\firebase.ps1 cannot be loaded because running scripts is  
disabled on this system. For more information, see about_Execution_Policies at
https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ firebase login
+ ~~~~~~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
PS C:\JavaScript Code\Gaju coding tuturorial\JavaScript Practice\Namaste React Project-2\netflix-gpt_2>      
 *  History restored 

PS C:\JavaScript Code\Gaju coding tuturorial\JavaScript Practice\Namaste React Project-2\netflix-gpt_2>      
 *  History restored 

PS C:\JavaScript Code\Gaju coding tuturorial\JavaScript Practice\Namaste React Project-2\netflix-gpt_2> Set-ExecutionPolicy Unrestricted
PS C:\JavaScript Code\Gaju coding tuturorial\JavaScript Practice\Namaste React Project-2\netflix-gpt_2> firebase login
i  Firebase optionally collects CLI and Emulator Suite usage and error reporting information to help improve our products. Data is collected in accordance with Google's privacy policy (https://policies.google.com/privacy) and is not used to identify you.

? Allow Firebase to collect CLI and Emulator Suite usage and error reporting information? No

Visit this URL on this device to log in:
https://accounts.google.com/o/oauth2/auth?client_id=563584335869-fgrhgmd47bqnekij5i8b5pr03ho849e6.apps.googleusercontent.com&scope=email%20openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloudplatformprojects.readonly%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffirebase%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloud-platform&response_type=code&state=373441298&redirect_uri=http%3A%2F%2Flocalhost%3A9005

Waiting for authentication...

+  Success! Logged in as gajendragurjar878@gmail.com
PS C:\JavaScript Code\Gaju coding tuturorial\JavaScript Practice\Namaste React Project-2\netflix-gpt_2>  

# step-2 :After that for creating a firebase Config file we have to run the next command is below mentioned
PS C:\JavaScript Code\Gaju coding tuturorial\JavaScript Practice\Namaste React Project-2\netflix-gpt_2> firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:
Before we get started, keep in mind:

  * You are currently outside your home directory

? Are you ready to proceed? Yes
? Which Firebase features do you want to set up for this directory? Press Space to select features, then     
Enter to confirm your choices. Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub  
Action deploys

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: netflixgpt-7e017 (NetflixGPT)
i  Using project netflixgpt-7e017 (NetflixGPT)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? build
? Configure as a single-page app (rewrite all urls to /index.html)? No
? Set up automatic builds and deploys with GitHub? No
+  Wrote build/404.html
+  Wrote build/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

+  Firebase initialization complete!

# it create an two files in our directory are firebase.json and firebaserc file 

# step-3 : Before deploying a project you have to run build command to which create a folder inside our directory
 
 PS C:\JavaScript Code\Gaju coding tuturorial\JavaScript Practice\Namaste React Project-2\netflix-gpt_2> npm run build

> netflix-gpt@0.1.0 build
> react-scripts build

Creating an optimized production build...
One of your dependencies, babel-preset-react-app, is importing the
"@babel/plugin-proposal-private-property-in-object" package without
declaring it in its dependencies. This is currently working because
"@babel/plugin-proposal-private-property-in-object" is already in your
node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which
is not maintianed anymore. It is thus unlikely that this bug will
ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
your devDependencies to work around this error. This will make this message
go away.

Compiled with warnings.

[eslint]
src\components\Login.js
  Line 30:14:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
  Line 56:7:   Block is redundant                                                                            
             no-lone-blocks
  Line 59:5:   Block is redundant                                                                            
             no-lone-blocks
  Line 69:5:   Block is redundant                                                                            
             no-lone-blocks

src\utils\Validate.js
  Line 1:8:   'React' is defined but never used  no-unused-vars
  Line 4:33:  Unnecessary escape character: \.   no-useless-escape

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

File sizes after gzip:

  66.29 kB  build\static\js\main.b44e280d.js
  2.24 kB   build\static\css\main.d33bbfef.css
  1.78 kB   build\static\js\453.67699da7.chunk.js

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  https://cra.link/deployment
# step-4: And then comes Deploy project on firebase command

PS C:\JavaScript Code\Gaju coding tuturorial\JavaScript Practice\Namaste React Project-2\netflix-gpt_2> firebase deploy

=== Deploying to 'netflixgpt-7e017'...

i  deploying hosting
i  hosting[netflixgpt-7e017]: beginning deploy...
i  hosting[netflixgpt-7e017]: found 14 files in build
+  hosting[netflixgpt-7e017]: file upload complete
i  hosting[netflixgpt-7e017]: finalizing version...
+  hosting[netflixgpt-7e017]: version finalized
i  hosting[netflixgpt-7e017]: releasing new version...
+  hosting[netflixgpt-7e017]: release complete

+  Deploy complete!

Project Console: https://console.firebase.google.com/project/netflixgpt-7e017/overview
Hosting URL: https://netflixgpt-7e017.web.app
PS C:\JavaScript Code\Gaju coding tuturorial\JavaScript Practice\Namaste React Project-2\netflix-gpt_2> 

<!-- -======================================================================================= -->

# Netflix GPT
- create react app
- Configure TailwindCSS
- Header
- Routing of App
- Login Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create Sign-Up User Account API
- Implement Sign-In User API
- Install Reduxjs Toolkit using command==> npm i -D @reactjs/toolkit library
- Install React-Redux library using command ==> npm i react-redux
- created Redux Store like appStore.js with userSlice.js
- Implement Sign Out
- Update Profile
- BugFix: Sign up User displayName and profile picture update
- BugFix: if the user is not logged in Redirect/ browse to login Page vice-versa
- Unsubscribed to the onAuthStateChanged Callback
- Add Hardcoded values to the Constants file.
- Register TMDB API & create an App and access token
- Geta Data from TMDB now playing movie list API
- Custom hook for nowPlayingMovies
- create movieSlice
- Update store with Movie Data
- plannig for creting MainContainer & SecondaryContainer
- fetch data for Trailer Video
- update store with trailer Video Data
- Embedded the Youtube Video and make it autoplay and mute
- using Tailwind classes to make our MainContainer look Awesome
- Build a SecondaryContainer Component
- Build movie List
- Build Movie card
- Tmdb Image CDN url
- made the Browse Page amazing with tailwind CSS
- usePopularMovies custom hook
- GPT Search Feature
 # Features
- Login-Sign Up
    - sign-In/sign-Up Form
    - redirect Browse Page
- Browse (after Authentication)
    - Header
    - Main Movie
       - Trailer Background
       - Title & Description
       - Movie Suggestions
          - Movie Lists * N

- NetflixGPT
     - Search Bar
     - Movie Suggestions




