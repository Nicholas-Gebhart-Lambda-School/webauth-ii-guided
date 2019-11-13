# Auth notes

- it's about the client (software) connecting to the API, it's NOT about the user that is logged into the server. The same user on the same computer connected from insomnia is different from the same user connected from the browser.

- The server will not remember the client across requests
- HTTP is stateless, there is no common data
- Help the server "rememeber" the client

## Cookies

- A cookie is a container of data
- A browser will automatically send cookies on every reuqest to the **domain** associated with the cookies
- The client will store the cookie in a special place (NOT called the cookie jar)

## Session
