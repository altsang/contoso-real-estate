param apiServiceName string = 'contoso-api-service'
param location string = 'East US'
param tags object = {
  'environment': 'production'
}

resource apiService 'Microsoft.Web/sites@2021-02-01' = {
  name: apiServiceName
  location: location
  tags: union(tags, { 'azd-service-name': apiServiceName })
  properties: {
    serverFarmId: resourceId('Microsoft.Web/serverfarms', 'contosoApiServicePlan')
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
