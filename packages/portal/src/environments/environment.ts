// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  blogUrl: process.env["CODESPACE_NAME"] ? `https://${process.env["CODESPACE_NAME"]}-3000.${process.env["GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN"]}` : 'http://localhost:3000',
  strapiGraphQlUri: process.env["CODESPACE_NAME"] ? `https://${process.env["CODESPACE_NAME"]}-1337.${process.env["GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN"]}/graphql` : 'http://localhost:1337/graphql',
  aiEnableChat: process.env["AI_ENABLE_CHAT"],
  aiChatApiUri: process.env["AI_CHAT_API_URI"],
  // Set placeholder values for notification URL and Path
  notificationUrl: 'https://placeholder-notification-url',
  notificationPath: '/placeholder-notification-path',
  // Set AZURE_ENV to false for local development
  AZURE_ENV: 'false',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
