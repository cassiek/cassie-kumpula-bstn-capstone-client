# Project Title

** will update **

## Overview

What is your app? Give a brief description in a couple of sentences.

My application manages inventory and warehouse data for a clothing store.

### Problem Space

Why is your app needed? Give any background information around any pain points or other reasons.

Manages inventory and warehouse data.

### User Profile

Who will use your app? How will they use it? Add any special considerations that your app must take into account.

Employees tasked with managing inventory and warehouse data will use this app.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

- view inventory
- view warehouses
- add inventory 
- add warehouses
- edit warehouses
- edit inventory
- delete inventory 
- delete warehouses

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

- React
- Node
- Express
- MySQL

Client preprocessor: sass

Client libraries: axios, react-router, react-router-dom, CORS, potentially more/less

** will update **

Server libraries: knex, express, potentially more/less

** will update **

### APIs

List any external sources of data that will be used in your app.

Not sure, may potentially find an API to provide inventory item data

** will update **

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

Inventory Page:
- view inventory
    
Warehouses Page:
- view warehouses

Modals or Pages for:
- view inventory details
- view warehouse details
- add inventory
- add warehouses
- edit warehouses
- edit inventory
- delete inventory 
- delete warehouses

** will update when decided **

### Mockups

Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma.

Paper sketch, Figma mockup.

** will update to add this info **

### Data

Describe your data and the relationships between the data points. You can show this visually using diagrams, or write it out. 

Inventory I Table
- item id
- warehouse id
- name
- variant (ie colour)
- status
- quantity

Inventory II Table
- name
- variants (ie colours)
- description
- category 

Warehouse Table
- warehouse id
- address
- warehouse name?
- city
- country
- contact name
- contact position
- contact phone
- contact email

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

GET /warehouses
 - get an array of all warehouses

GET /inventory-i
 - get an array of all inventory from inventory-i

GET /inventory-ii
 - get an array of all inventory from inventory-ii

GET /warehouses/:id
 - get a single warehouse

GET /inventory-i/:id
 - get a single inventory

POST /inventory-i
 - create new inventory item

POST /warehouses
 - create new warehouse

PUT /inventory-i/:id
 - edit inventory item

PUT /warehouses/:id
 - edit warehouse item

DELETE /inventory/:id
 - delete inventory item

DELETE /warehouses/:id
 - delete warehouse

** will update to display sample objects for data **

### Auth

** will update **

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date. 

Sprint-1: Wed., Oct. 16, 2024 -- Sun., Oct. 20, 2024
- initial structure, install dependencies (client and server) (done Sun., Oct. 20)
move the following to sprint-2:
- create mixins, variables, fonts
- create database, tables
- connect database, knex migrations and seeds
- create header
- create footer
- create inventory page with inventory list
- create warehouse page with warehouse list
- create API to GET all inventory
- create API to GET all warehouses
- create inventory details
- create warehouse details
- create API to GET a single inventory item
- create API to GET a single warehouse

Sprint-2: Mon., Oct. 21, 2024 -- Sun., Oct. 27, 2024
- create mixins, variables, fonts (done Mon., Oct. 21)
- create database (done Wed., Oct. 23)
- initial structure, install dependencies (server) (done Wed., Oct. 23)
- connect database, knex migrations and seeds (done Thurs., Oct. 24)
- create header
- create footer
- create inventory page with inventory list
- create warehouse page with warehouse list
- create API to GET all inventory (done Thurs., Oct. 24)
- create API to GET all warehouses (done Thurs., Oct. 24)
- create inventory details
- create warehouse details
- create API to GET a single inventory item (done Thurs., Oct. 24)
- create API to GET a single warehouse (done Thurs., Oct. 24)
- create add inventory item component
- create API to POST a new inventory item (done Thurs., Oct. 24)
- create add warehouse component
- create API to POST a new warehouse (done Thurs., Oct. 24)
- create delete inventory item component
- create API to DELETE single inventory item (done Thurs., Oct. 24)
- create delete warehouse component
- create API to DELETE single warehouse component (done Thurs., Oct. 24)
- create edit inventory component
- create API to PUT (edit) single inventory item (done Thurs., Oct. 24)
- create edit warehouse component
- create API to PUT (edit) single warehouse (done Thurs., Oct. 24)
- implement sorting
- implement searching
- implement animations in another project
- pre-deployment, project-wide testing
- deployment

---

## Future Implementations
Your project will be marked based on what you committed to in the above document. Here, you can list any additional features you may complete after the MVP of your application is built, or if you have extra time before the Capstone due date.

- add, edit, and delete functionality for prodoucts (inventory-ii data)
- user account with login/logout
- not sure what else... 

** might update **