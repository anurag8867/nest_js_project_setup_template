## Installation
```bash
$ npm ci
```

# Directory Structure: 
* [Refer](https://medium.com/the-crowdlinker-chroniclebest-way-to-structure-your-directory-code-nestjs-a06c7a641401)
* There may be few vacant files and flders, let them be like it, it will help us to structure


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

```bash
command for new Module:
$ nest g resource users
```  

GuideLines: (Open for inputs)
API:
* Follow REST Standards/Method
* 

Node:
* [Refer](https://www.tatvasoft.com/blog/node-js-best-practices)
* Try to use higher order function and avoid legacy for loop
* process manager pm2

NestJS:
* [Refer](https://wanago.io/2020/06/08/api-nestjs-serializing-response-interceptors/)
* Try to use higher order function and avoid legacy for loop
* process manager pm2

Testing:
* Jest
* controller, service and db layer(>80%)
* Integration test[For Future]
* Unit test cases[For Future]

Software Practices:
* Try to make variables as private as possible
* Put some common function into util folder
* Check existence of same function before creating new function
* Install eslint module in vs code
* SOLID Principle

Config Management:
* .env

* Project Structure:
    src
        frontend
        modules
            middlewares
                auth.middleware.ts
            user            
                dto
                    create-user.dto.ts
                    update-user.dto.ts
                entities
                    user.entity.ts
                controllers
                    user.controller.ts                
                services
                    user.services.ts
                repositories
                    user.repository.ts         
                user.module.ts
            util            
                request                
                logger
                constants