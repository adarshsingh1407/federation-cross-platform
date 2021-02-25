# federation-cross-platform


### Starter pack for cross-platform Apollo Federation setup using SpringBoot and Node servers

---

#### Configurations covered in this
   
Case 1: Connect Node Gateway to one SpringBoot server

Case 2: Connect Node Gateway to one Node server

Case 3: Connect Node Gateway to two SpringBoot servers - with dependency in the schema

Case 4: Connect Node Gateway to two Node servers - with dependency in the schema

Case 5: Connect Node Gateway to one SpringBoot server and one Node server - with dependency in schema(SpringBoot schema extends Node schema)

Case 6: Connect Node Gateway to one SpringBoot server and one Node server - with dependency in schema(Node schema extends SpringBoot schema)

---

How to run?

### Requirement

Node >= 12 LTS
Gradle > 6.8.3

1. Terminal 1: `sb-product/gradlew bootrun`
2. Terminal 2: `sb-inventory/gradlew bootrun`
3. Terminal 3: `cd node-product && npm start`
4. Terminal 4: `cd node-inventory && npm start`
5. Terminal 5: `cd gateway && npm start`

This will run the following servers

PORT | TYPE | SERVER
------------ | ------------ | -------------
5003 | SpringBoot | Product
5004 | SpringBoot | Inventory
8001 | Node | Product
8002 | Node | Inventory
4000 | Node | Apollo Gateway

Open http://localhost:4000/graphql in browser

*Note: To change between SpringBoot and Node Implementing Services, go to __gateway.js__ and comment/uncomment the relevant services.*

---

