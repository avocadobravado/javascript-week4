# Geocaching app

#### Week 4 Independent Project - JavaScript

#### By **Rose Sponseller, July 21, 2017**

## Description

This is a web application built with Angular 2, Firebase, Google's Geocode API, and Typescript. The app allows users to search for geocaches in the existing database, as well as add new geocaches if they like. Users are able to view the details of an individual cache (latitude, longitude, physical address, and submitter/creator of the cache) by clicking on the "See Details" button of each cache.

### Installation

#### Prerequisites

* Web browser with ES6 compatibility
* Node.js
* npm
* Firebase
* Angular
* TypeScript
* Git

Open your terminal and clone this repository with the following command:

```
$ git clone https://github.com/avocadobravado/javascript-week4
```

Move into the cloned repository:

```
$ cd javascript-week4
```

Create an api-keys.ts file:

```
$ touch src/app/api-keys.ts
```

* Go to http://firebase.google.com and sign up for an account
* Once signed up, click on "Go to Console"
* Then, "Add project" and add your project's name
* From there, click on "Add Firebase to your Web App"
* Finally, add the information from the pop up modal from Firebase to your api-keys.ts file (it should look something like this, but replace the information inside the masterFirebaseConfig with your own unique information):

```

export var geoKey = "YOUR_KEY_HERE";

export var masterFirebaseConfig = {
  apiKey: "xxxxx",
  authDomain: "xxxxx",
  databaseURL: "xxxxx",
  projectId: "xxxxx",
  storageBucket: "",
  messagingSenderId: "xxxxx"
};
```

Install npm and Bower by typing:

```
$ npm install
$ bower install
```

Set up the build:

```
$ ng build
```

Start the server:

```
$ ng serve
```

The previous step should immediately open up a web browser such as Google Chrome and take you to the site, but if not, visit the following address in your preferred browser:

```
localhost:4200
```

## Built With

### Code
* HTML
* CSS
* Bootstrap
* JavaScript
* TypeScript
* Angular 2

### Tools &amp; Dependencies
* Node
* Bower
* npm
* Angular CLI
* Firebase
* Google's Geocode API

### Design
* Google Fonts

## Support and contact details

* Feel free to reach out with suggestions at rosesponseller@gmail.com

## License

This project is licensed under the MIT License

**_Rose Sponseller_** Copyright (c) 2017
