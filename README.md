# **Repo4**


## **Introduction**

This repository is just for testing purposes to check the working of the tracker repository.

    The basic work of this repository is is to download packages from npm based on the tracker repository and package.json file.

&nbsp;

## **Usage**

- clone the repository

- run ```BUILD=dev npm install``` to install dependencies for development environment.

- run ```BUILD=production npm install``` or ```npm install``` to install dependencies for production environment.


- you can check the installed packages version by running ```node index.js```

&nbsp;

## **Building with docker**

---

### **Docker build for development**

```docker build -t <tag_name:version> --build-args BUILD_ARG='dev'```

&nbsp;

### Docker build for production (default)
  
```docker build -t <tag_name:version>```

or

```docker build -t <tag_name:version> --build-args BUILD_ARG='prod'```

&nbsp;

### Passing runtime environment

```docker run <tag_name:version> --name=<custom_container_name> --env <ENV_NAME>=<value>```