# Publish Local Azure Function to Function App

1. Make sure you are logged in to azure

```bash
az login
```

2. Make sure correct subscription is selected

```bash
az account list -output table
```

```bash
az account set --subscription <subscription-id>
```

3. Publish the function to your function app

```bash
func azure functionapp publish <function-app-name>
```
