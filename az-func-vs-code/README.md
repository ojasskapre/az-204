# Create Local Azure Function in VS Code and Publish from VS Code

1. Create a Function Project and a function using the VSCode `Azure Function` Extension

2. Before publishing, create a function app in Azure using Azure cloudshell

```bash
az functionapp create \
  --resource-group <resource group name> \
  --name <function-app-name> \
  --storage-account <storage-account> \
  --consumption-plan-location <azure-region> \
  --runtime node \
  --functions-version 4
```
