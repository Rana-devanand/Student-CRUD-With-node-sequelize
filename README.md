# install Packages--

        - express, -> for server
        - nodemon, -> for auto-restart the server
        - body-parse, -> for handle incoming request
        - sequelize-cli, -> for sql database
        - sequelize, -> for sql query
        - dotenv, -> make variable private
        - mysql2

### folders Which we setup first --

- index.js/ server
  - config/
  - controllers/
  - middlewares/
  - Migration/
  - models/
  - repository/
  - services/
  - utils/

## Important -->

Creating the first Model (and Migration)

        step 1: [Create the config.json] inside this our database details are exist.

- run -> `npx sequelize init`
- it create the /config/config.json.
- it creates a by default folders /models , /seeders ,/Migration

```
   {
       "development": {
           "username": "root",
           "password": "root",
           "database": "Student",
           "host": "127.0.0.1",
           "dialect": "mysql"
       },
   }
```

- Change the username,password,and database name as your specific need.

#

       step 2: [create the database ].

- run -> `npx sequelize db:create`

- check the mysql database there are new database is name create [student]

#

          step 3:[Now create the database attributes]

- run --> `npx sequelize-cli model:generate --name [db_name] --attributes First-name:[datatype] etc`

- `example` --> npx sequelize-cli model:generate --name Student --attributes firstName:string , lastName : string , Subject:string

#

        step 4 : [Any changes in the Migration file ]

- if we have a doing any changes inside the our migration folder than we run the command.
- run -> `npx sequelize db:migrate`
  -> This command changes the migrations of our database like : database constraints , unique , not-null etc.

- After run the above command our database is successfully created.

#

        step 5: [Create student repository] /repository/student-repository.js

- Inside this repository folder we created a student-repository.js.
- we create the method to insert the data
