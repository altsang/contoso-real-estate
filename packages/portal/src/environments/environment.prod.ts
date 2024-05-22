export const environment = {
  production: true,

  // Note: this placeholder will be replaced by the actual URL during the build process.
  // If you hard-code the URL here, it will be used instead of the placeholder and
  // no replacement will be made.
  blogUrl: process.env['SERVICE_BLOG_URI'] || "{{SERVICE_BLOG_URI_PLACEHOLDER}}",
  strapiGraphQlUri: process.env['SERVICE_CMS_URI'] ? `${process.env['SERVICE_CMS_URI']}/graphql` : "{{SERVICE_CMS_URI_PLACEHOLDER}}/graphql",
  aiEnableChat: process.env['AI_ENABLE_CHAT'] || "{{AI_ENABLE_CHAT_PLACEHOLDER}}",
  aiChatApiUri: process.env['AI_CHAT_API_URI'] || "{{AI_CHAT_API_URI_PLACEHOLDER}}",
  notificationUrl: process.env['SERVICE_WEB_PUB_SUB_URL'] || "{{SERVICE_WEB_PUB_SUB_URL_PLACEHOLDER}}",
  notificationPath: process.env['SERVICE_WEB_PUB_SUB_PATH'] || "{{SERVICE_WEB_PUB_SUB_PATH_PLACEHOLDER}}",
};
