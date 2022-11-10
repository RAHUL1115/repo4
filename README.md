# Repo4


## Docker build for development
```docker build -t <tag_name:version> --build-args BUILD_ARG='dev'```

## Docker build for production (default)
```docker build -t <tag_name:version>```

or

```docker build -t <tag_name:version> --build-args BUILD_ARG='prod'```

## Passing runtime environment
```docker run <tag_name:version> --name=<custom_container_name> --env <ENV_NAME>=<value>```