Task 3. Serverless API

<h3>Main task:</h3>
- getProductsList and getProductById services are done.
1. getProductsList API (GET) - https://7f1t0szo2e.execute-api.eu-west-1.amazonaws.com/dev/products
2. getProductById API (GET, should output "Red Dead Redemption 2") - https://7f1t0szo2e.execute-api.eu-west-1.amazonaws.com/dev/7567ec4b-b10c-48c5-9345-fc73c48a80a0
- Both endpoints are connected to the Frontend application.

<h3>Optional tasks:</h3>
- Async/await is used in lambda functions
- ES6 modules are used for Product Service implementation
- Unit tests written
- Lambda handlers written in separate files
- Error are handled with try-catch or throws block

Product schema:
<code>
{<br>
id: string;<br>
title: string;<br>
imageUrl: string;<br>
count: number;<br>
price: number;<br>
}
</code>

<h3>Frontend repo:</h3>

