# federation-cross-platform


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

Features

- [x] Connect Node Gateway to one SpringBoot server
- [x] Connect Node Gateway to one Node server
- [x] Connect Node Gateway to two SpringBoot servers
- [x] Connect Node Gateway to two Node servers
- [x] Connect Node Gateway to one SpringBoot server and one Node server with dependency in schema(SpringBoot schema extends Node schema)
- [x] Connect Node Gateway to one SpringBoot server and one Node server with dependency in schema(Node schema extends SpringBoot schema)
