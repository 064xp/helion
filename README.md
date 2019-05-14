### Helion :rocket:

Send your thoughts and ideas away on a capsule to traverse the universe and arrive upon a stranger.

#### #breakInterGalacticBoundaries :milky_way:

[See what its all about](https://www.helion.ga)

This app is made with React, Redux and Firebase Firestore as a backend/database.

#### :computer: Run Locally

In a terminal run:

**_To clone git repo_**

`git clone https://github.com/064xp/helion/`

`cd helion`

**_Install node modules_**

`npm install`

**_To start development server_**

`npm start`

## :fire: Firebase Config

A `firebaseConfig.js` file in the root of your project is required where you firebase configuration is exported

```javascript
//firebaseConfig.js

const config = {
  apiKey: "<API_KEY>",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  projectId: "<PROJECT_ID>",
  storageBucket: "<BUCKET>.appspot.com",
  messagingSenderId: "<SENDER_ID>"
};

export default config;
```

### Firebase Firestore Structure

```
── floaters
   └── [docId]
       ├── author
       │   └── "064xp"
       ├── content
       │   └── "Hello world"
       ├── date
       │   └── "Apr 30  2019"
       └── time
           └── "1556682311385"
```
