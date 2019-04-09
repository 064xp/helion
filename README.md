### Seaside

Share your thoughts, ideas and feelings with the world and have them float away into the sea of ideas to land on a stranger's shore.

[See what its all about](https://github.com/064xp/seaside)

This app is made with React, Redux and Firebase Firestore as a backend/database.

#### Run Locally

In a terminal run:

***To clone git repo***

```git clone https://github.com/064xp/seaside/```

```cd seaside```

***Install node modules***

```npm i```


***To start development server***

```npm start```



A `firebaseConfig.js` file in the root of your project is required where you firebase configuration is exported

```javascript
//firebaseConfig.js

var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    projectId: "<PROJECT_ID>",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",

};

export default config;
```

