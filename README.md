# README

![](demo.gif)

To run this application

```
$ npm install
```
```
$ bundle install
```
```
# start the rails application and then run the UI application.
$ rails s
$ npm start
``` 
NOTE: the client application expects the UI application to run at localhost:3000

To run tests (Jest)
Scenarios are available in [test suite](ui/selectors/seat.selector.spec.js)

```
$ npm test
```

To run lint (ESLint)

```
$npm run lint
``` 

To change venue information edit [this file.](public/venues/1.json)

ruby version : 2.6.3
node version : 12.13.1


TODO
* Enforce Prop Types
* Improve Code Coverage
* Improve JS Doc