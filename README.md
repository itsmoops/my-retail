# react-redux-firebase

A React, Redux and Firebase boilerplate with user Authentication 99% set up.

## Setup

#### Create a Database

Log in to the [Firebase console](https://console.firebase.google.com) and create a new project if
you don't already have one.

#### Enable Authentication

In the left nav of your database console, under Develop, click "Authentication", and then click the
"Set Up Sign-In Method" button. This project requires that Email/Password is enabled. Enable any
other auth providers you might want to use.

#### Enable Realtime Database

In the left nav of your database console, under Develop, click "Database", and then click the "Get
Started" button. The default rules require that a user be authenticated to read or write data. Info
about security rules can be found
[here](https://firebase.google.com/docs/database/security/quickstart?authuser=0).

#### Enable Database Storage

In the left nav of your database console, under Develop, click "Storage", and then click the "Get
Started" -> "Got It" buttons. This will enable your database to use file storage (can be used for
profile pictures, etc.).

#### Add Database Config to Project

In the left nav of your database console, click "Project Overview", and then click the "Add Firebase
to your web app" button. This should launch a modal with your database config options.

You will want to copy the config object and place it in the `./src/firebase-config.js` file under
the appropriate environment key.

#### Configure Email Templates to Use Auth Actions (Optional)

If you want to utilize the custom email action handler pages, you will need to update the Action URL
in the Firebase email templates.

In the left nav of your database console, under Develop, click "Authentication", and then click
"Templates". Click the pencil icon to edit the email template, and change Action URL from the
default URL to use the 'auth-action' route.

Example:

Change from:

* https://boilerplate-18625.firebaseapp.com/__/auth/action

To:

* http://localhost:8080/auth-action (local dev only)

Or:

* https://boilerplate-18625.firebaseapp.com/auth-action

#### Install Dependencies

```
yarn global add firebase-tools
yarn install
yarn firebase-init
```

The `firebase-init` command will log you in to your Firebase account and walk you through a command
prompt to get set up.

Select the following options during the `firebase init` prompts:

* Which Firebase CLI features do you want to setup for this folder? \* Select Database, Hosting and
	Storage
* Select a default Firebase project for this directory: \* Select the project you just created
* What file should be used for Database Rules? \* Default or named is fine
* What do you want to use as your public directory? \* dist
* Configure as a single-page app (rewrite all urls to /index.html)? \* y
* File dist/index.html already exists. Overwrite? \* N
* What file should be used for Storage Rules? \* Default or named is fine

Update your personal database settings under `./src/firebase-config.js`.

#### Environment Assumptions:

This repository is set up to deploy to 3 different Firebase environments with the following aliases:
`dev`, `staging` and `prod`.

You can associate additional Firebase databases with your project from the firebase cli tools using
`firebase use --add`, which will prompt you to select another project and give it an alias.

You will want to make sure that your generated `.firebaserc` file looks something like this in order
for deploys to work:

```
{
  // use your own db names
  "projects": {
	"dev": "boilerplate",
	"staging": "boilerplate-staging",
	"prod": "boilerplate-prod"
  }
}
```

You can now switch databases by using one of the 3 aliases, ex: `firebase use prod`

## Usage

### Develop

Webpack dev server running at <http://localhost:8080>.

```
yarn start
```

### Build

Outputs to `dist` folder.

```
yarn build-dev
yarn build-staging
yarn build-prod
```

### Deploy

Assuming you used the database aliases above, you now have simple yarn commands to deploy your app
to your three environments.

```
yarn deploy-dev
yarn deploy-staging
yarn deploy-prod
yarn deploy-all
```

### Additional Resources:

#### Firebase Web Documentation:

<https://firebase.google.com/docs/reference/js/>

#### The Firebase YouTube channel has a ton of great videos for getting up to speed on Firebase:

[Getting Started with the Firebase Realtime Database on the Web, Part 1 - Firecasts](https://www.youtube.com/watch?v=noB98K6A0TY)

[Getting Started with the Firebase Realtime Database on the Web, Part 2 - Firecasts](https://www.youtube.com/watch?v=dBscwaqNPuk)

[Getting Started with Firebase Hosting on the Web - Firecasts](https://www.youtube.com/watch?v=meofoNuK3vo)

[Getting Started with Firebase Storage on the Web - Firecasts](https://www.youtube.com/watch?v=SpxHVrpfGgU)

[Node.js apps on Firebase Hosting Crash Course - Firecasts](https://www.youtube.com/watch?v=LOeioOKUKI8)
