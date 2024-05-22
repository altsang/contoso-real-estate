export const environment = {
  production: true,

  // Note: this placeholder will be replaced by the actual URL during the build process.
  // If you hard-code the URL here, it will be used instead of the placeholder and
  // no replacement will be made.
  blogUrl: "{{SERVICE_BLOG_URI_PLACEHOLDER}}",
  strapiGraphQlUri: "{{SERVICE_CMS_URI_PLACEHOLDER}}/graphql",
  aiEnableChat: "{{AI_ENABLE_CHAT_PLACEHOLDER}}",
  aiChatApiUri: "{{AI_CHAT_API_URI_PLACEHOLDER}}",
  notificationUrl: process.env['SERVICE_WEB_PUB_SUB_URL'] || "{{SERVICE_WEB_PUB_SUB_URL_PLACEHOLDER}}",
  notificationPath: process.env['SERVICE_WEB_PUB_SUB_PATH'] || "{{SERVICE_WEB_PUB_SUB_PATH_PLACEHOLDER}}",
};
