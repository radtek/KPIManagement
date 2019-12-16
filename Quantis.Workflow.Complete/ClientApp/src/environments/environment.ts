// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  API_URL: 'http://10.10.10.102/api', //cloud
  //API_URL: window.location.protocol !== 'https:' ? 'http://localhost:5000/api' : 'https://localhost:5001/api', //localhost
  //API_URL: window.location.protocol !== 'https:' ? 'https://kpimanagement.posteitaliane.it/api' : 'http://localhost:5000/api', //web poste collaudo
  //API_URL: 'http://10.183.139.86/api' //web poste collaudo
};