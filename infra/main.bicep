resource apiService 'Microsoft.Web/sites@2021-02-01' = {
  name: apiServiceName
  location: location
  tags: union(tags, { 'azd-service-name': apiServiceName })
  properties: {
    serverFarmId: '/subscriptions/1d77402e-10e7-4ca3-8994-ced9d1a1a333/resourceGroups/rg-ContosoEnv/providers/Microsoft.Web/serverfarms/contosoApiServicePlan'
    siteConfig: {
      appSettings: [
        {
          name: 'FUNCTIONS_WORKER_RUNTIME'
          value: 'node'
        }
        {
          name: 'WEBSITE_NODE_DEFAULT_VERSION'
          value: '~14'
        }
        // Add additional application settings as required
      ]
    }
  }
}
