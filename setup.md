## These 4 things should be running when testing:
```bash
mongod # Start mongoDB daemon.
mongo  # Start mongoDB shell.
ng build --watch
nodemon server.js  # Start project server.
```
----------------------------------------------------
### Create Express project
```bash
mkdir express_project_name # Create directory for new project.
npm init -y   # Set up empty package.json file.
```

Install necessary packages using npm

Set up server section of project:
```bash
touch server.js
```

----------------------------------------------------
### Set up Angular (client portion) INSIDE OF Express project:
```bash
ng new angular-app
cd angluar-app
ng build --watch # LEAVE THIS RUNNING!
```

Tell Express where to find static files (this should be in `server.js`)
```javascript
app.use(express.static(path.join(__dirname, 'angular-app', 'dist', 'angular-app')));
```

----------------------------------------------------
### Create Angular Service
From Angular app directory:
```bash
ng g s name_of_service
```
Add to `app/app.module.ts`
```javascript
import { Name_of_serviceService } from ./name_of_service.service;
Name_of_serviceService // providers array.
HttpClientModule // imports
```

Add to `name_of_service.service.ts`
```javascript
import HttpClient from '@angular/common/http';
constructor(private _http: HttpClient) {} // Set up private attribute to use HttpClient. Added to Name_of_serviceService class.
```

Add to `app.component.ts`:
```javascript
import { Name_of_serviceService } from './name_of_service.service'
constructor(private _name_of_serviceService: Name_of_serviceService) {}
```
### Create, and subscribe to, Angular Observable
Add this method to `Name_of_serviceService` class in `name_of_service.service.ts`
```javascript
getSomeThing() {
  let someObservable = this._http.get('some_route/'); // Create Observable
  someObservable.subscribe(data => `functionality here`); // Subscribe to Observable
}
```

Now we need to make sure that method is run when the Service is created. We will do this in the Service's constructor in `name_of_service.service.ts`.
```javascript
this.getSomeThing();
```
----------------------------------------------------
### Set up server routes, controllers, models
```bash
mkdir -p server/config # This will make both directories
mkdir server/controllers
mkdir server/models
mkdir server/config
touch server/config/mongoose.js # contents can be found in express_angular_template on GitHub. NOTE: YOU WILL NEED TO CONNECT TO THE DATABASE YOU'RE USING!
touch server/config/routes.js
```
- Add schema to server/models.
- Add controller to server/controllers.
- Create db and collections in mongoDB.
