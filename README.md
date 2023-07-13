# Project 12 - SportSee Front-end

This front-end project is connected to a micro API backend that you have to run on local.
The back-end can be founded here: https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard

## Organise your work space

To have a good organization, you can create a folder sportsee-app in which you will clone the back-end and front-end project

Clone the back-end project in your folder sportsee-app : 
git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git

sportsee-app/
   - P9-front-end-dashboard-master

Clone the front-end project in your folder sportsee-app :
git clone https://github.com/hamyngn/P12-SportSee.git

sportsee-app/
   - P12-SportSee

## How to launch this project on local

1. Launche the back-end

Follow indications in the README of back-end project

2. Install json server
 ```sh
npm install -g json-server
 ```

3. Launche json server to access mockData

sportsee-app/
   - P12-SportSee/
      -src
 ```sh
json-server data.json --routes routes.json --port 8000
 ```
4. Install npm packages

sportsee-app/
   - P12-SportSee
 ```sh
npm install
 ```
5. Launch the application :
 ```sh
npm start
 ```
6. Switch between Mock and real API

sportsee-app/
   - P12-SportSee/
      -src/
         -services/
            getData.js

- To use real API: Set the value of `let api = true`
- To use Mock: Set the value of `let api = false`