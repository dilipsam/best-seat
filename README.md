# README

![](demo.gif)

The solution consists of a simple API only Rails application, that exposes the venue details at GET api/v1/venue/:id.
The venue configuration is stored as a JSON file (1.json) in the public/venues directory for the purpose of this solution

The UI is implemented as a SPA using React, Redux. 

To find the optimal seat, each seat is provided a positive integer weight. The seats at the extremes of a row have 1 as 
their weight, increasing in steps of 1 towards the center of the row.

The best seats are the ones having the highest cumulative weight. This method is implemented a pure function in [this selector.](ui/selectors/seat.selector.js)  

Jest runner is used for the test scenarios [ in this test suite.](ui/selectors/seat.selector.spec.js)  


## Run

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

## Test

```
$ npm test
```

## Lint

```
$npm run lint
``` 

To change venue information edit [this file.](public/venues/1.json)

ruby version : 2.6.3
node version : 12.13.1


TODO
* Enforce Prop Types
* Support more venues with routes
* Improve Code Coverage
* Improve JS Doc
