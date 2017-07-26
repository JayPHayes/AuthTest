// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB9oZ5m14YfIBYBLNBPCiGG9FPdob0QkuA",
    authDomain: "authtest-f1a7e.firebaseapp.com",
    databaseURL: "https://authtest-f1a7e.firebaseio.com",
    projectId: "authtest-f1a7e",
    storageBucket: "authtest-f1a7e.appspot.com",
    messagingSenderId: "420037426750"
  }
};
