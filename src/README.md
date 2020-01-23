Capacitor [App Plugin](https://capacitor.ionicframework.com/docs/apis/app) bug reproduction.

What happens:

- This bugs is happening on version later than `4.11.0`.
- It could be related to one of the packages:
```
"@ionic/react": "^4.11.8",
"@ionic/react-router": "^4.11.8",
"@types/react": "^16.9.17",
"@types/react-dom": "^16.9.4",
```

- Open the app and navigate though tabs. Then if you press hardware back button, it will go back sometimes two screens (pages) and sometime one screen (page).



## Installation

It assumes you have `node` `ionic` `npx`

`npm i`


## Build for Android

`ionic build`

`npx cap init`

Navigate to `capacitor.config.json` and change `"webDir": "www",` to `"webDir": "build",`

`npx cap add android && npx cap sync`


