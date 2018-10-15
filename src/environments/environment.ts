// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAnVR-6BeNChzM-hRd_a4HcYo4rowUG6PU',
    authDomain: 'realtime-fitness-monitor.firebaseapp.com',
    databaseURL: 'https://realtime-fitness-monitor.firebaseio.com',
    projectId: 'realtime-fitness-monitor',
    storageBucket: 'realtime-fitness-monitor.appspot.com',
    messagingSenderId: '65482972755'
  }
};
