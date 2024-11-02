
# REST API: Detailed Notes

## 1. What is REST?
REST (Representational State Transfer) is an architectural style for distributed systems and web services. REST is commonly used for designing networked applications that communicate over HTTP. The core idea is to use stateless, client-server communication where each request from the client to the server must contain all the information the server needs to fulfill the request.

---

## 2. REST Principles
1. **Stateless**: Each request from the client to the server must contain all the information needed to understand and process the request. The server does not store client context between requests.
2. **Client-Server Separation**: The client and server should be independent. The client does not need to know anything about the server’s data storage or implementation details, and vice versa.
3. **Cacheable**: Responses should be labeled as cacheable or non-cacheable to improve network efficiency and performance.
4. **Uniform Interface**: A consistent way of interacting with resources, including conventions for resource URIs, HTTP methods, and response formats.
5. **Layered System**: The client should be unaware if it is connected directly to the end server or to an intermediary along the way.

---

## 3. HTTP Methods in REST

- **GET**: Retrieve data from the server. Should not alter any server-side data.
- **POST**: Create a new resource on the server.
- **PUT**: Update or replace an existing resource.
- **PATCH**: Partially update a resource, modifying only specified fields.
- **DELETE**: Remove a resource from the server.

### Example:
| Method  | Purpose                      | Example Endpoint      |
|---------|-------------------------------|------------------------|
| GET     | Retrieve data                 | /api/users            |
| POST    | Create new resource           | /api/users            |
| PUT     | Update entire resource        | /api/users/{id}       |
| PATCH   | Partial resource update       | /api/users/{id}       |
| DELETE  | Remove resource               | /api/users/{id}       |

---

## 4. RESTful URI Design
- **Base URL**: Standard URL format for accessing API endpoints.
  - Example: `https://api.example.com`
- **Nouns, Not Verbs**: Use nouns in endpoints to represent resources (e.g., `/users`, `/posts`) instead of actions.
- **Sub-resources**: Use sub-resources for hierarchical relationships (e.g., `/users/{id}/posts`).
- **Query Parameters**: For filtering, sorting, or pagination, use query parameters (e.g., `/users?sort=asc&limit=10`).

---

## 5. Status Codes
HTTP status codes indicate the result of the HTTP request:
- **200 OK**: Success.
- **201 Created**: Resource created successfully.
- **400 Bad Request**: Client error in the request.
- **401 Unauthorized**: Authentication required.
- **403 Forbidden**: Client is authenticated but not authorized.
- **404 Not Found**: Resource does not exist.
- **500 Internal Server Error**: Server encountered an error.

---

## 6. REST API Best Practices
- **Use JSON format** for request and response bodies (commonly used in REST APIs).
- **Use descriptive HTTP verbs** and maintain consistency across endpoints.
- **Handle errors gracefully**: Return meaningful error messages and appropriate status codes.
- **Versioning**: Include version numbers in the API URL to handle changes (e.g., `/v1/users`).
- **Documentation**: Provide thorough API documentation to guide developers on usage.

---

## 7. Example JSON Response Structure
```json
{
  "status": "success",
  "data": {
    "user": {
      "id": "123",
      "name": "Prashant Kumar",
      "email": "prashant@example.com"
    }
  }
}
```

---

## 8. REST vs. Other Architectures
- **REST vs SOAP**: REST is lightweight, uses JSON, and has simpler design, while SOAP is protocol-based and uses XML.
- **REST vs GraphQL**: REST has fixed endpoints, whereas GraphQL provides flexible data retrieval with fewer endpoints.

---

**Summary**: REST API design is based on principles that improve scalability, maintainability, and ease of use. It leverages standard HTTP methods and status codes to ensure consistent communication between clients and servers.

