### **RESTful API Rules & Best Practices**
A well-designed RESTful API follows these key rules and best practices:

---

### **1. Use Meaningful & Consistent Resource URIs**
- URIs should represent **nouns (resources)**, not verbs (actions).
- Use **plural nouns** for collections.
  
  **Example:**
  ```
  ✅ GET /users       -> Fetch all users
  ✅ GET /users/123   -> Fetch a specific user (ID: 123)
  ✅ POST /users      -> Create a new user
  ✅ PUT /users/123   -> Update a specific user
  ✅ DELETE /users/123 -> Delete a specific user
  ```

  **Avoid:**
  ```
  ❌ GET /getUser?id=123
  ❌ POST /createUser
  ❌ PUT /updateUser/123
  ```

---

### **2. Use HTTP Methods Correctly**
Each HTTP method should perform the expected operation:

| HTTP Method | Purpose |
|------------|---------|
| **GET**    | Retrieve data (Read) |
| **POST**   | Create a new resource |
| **PUT**    | Update an existing resource (Full update) |
| **PATCH**  | Partially update a resource |
| **DELETE** | Remove a resource |

---

### **3. Use Proper Status Codes**
Return the correct **HTTP status codes** to indicate the result of an API call:

| Status Code | Meaning |
|------------|---------|
| **200 OK** | Request successful |
| **201 Created** | Resource successfully created |
| **204 No Content** | Successful request, but no response body |
| **400 Bad Request** | Invalid request (e.g., missing parameters) |
| **401 Unauthorized** | Authentication required |
| **403 Forbidden** | Permission denied |
| **404 Not Found** | Resource not found |
| **500 Internal Server Error** | Server encountered an error |

---

### **4. Use Query Parameters for Filtering, Sorting, & Pagination**
- **Filtering:** `/users?role=admin`
- **Sorting:** `/products?sort=price_desc`
- **Pagination:** `/posts?page=2&limit=10`

---

### **5. Use JSON as the Response Format**
- Responses should be in **JSON** format.
- Keep it **structured and readable**.

  **Example Response:**
  ```json
  {
    "is_success": true,
    "user_id": "john_doe_17091999",
    "email": "john@xyz.com",
    "roll_number": "ABCD123",
    "numbers": ["1", "334", "4"],
    "alphabets": ["M", "B"],
    "highest_alphabet": ["M"]
  }
  ```

---

### **6. Secure API with Authentication & Authorization**
- Use **JWT (JSON Web Token)** or OAuth for authentication.
- Protect sensitive endpoints using authentication.

  **Example:**
  ```
  Authorization: Bearer <your_jwt_token>
  ```

---

### **7. Version Your API**
- Keep APIs **backward compatible**.
- Use versioning in the URL or headers.

  **Example:**
  ```
  ✅ /api/v1/users
  ✅ /api/v2/users
  ```

---

### **8. Handle Errors Gracefully**
Always return **clear error messages** with proper status codes.

**Example Error Response:**
```json
{
  "error": {
    "message": "User not found",
    "code": 404
  }
}
```

---

### **9. Implement Rate Limiting**
Prevent abuse by **limiting API requests per user/IP**.

**Example:**
- Allow **100 requests per minute** for normal users.
- Allow **1000 requests per minute** for premium users.

Tools: **Express-rate-limit**, API Gateway (AWS, Nginx)

---

### **10. Use HATEOAS (Optional - Hypermedia as the Engine of Application State)**
Add **links** to related resources in responses.

**Example:**
```json
{
  "user_id": "123",
  "name": "John Doe",
  "links": {
    "self": "/users/123",
    "posts": "/users/123/posts"
  }
}
```

---

### **Final Thoughts**
Following these **RESTful API rules** will make your API **efficient, scalable, and easy to use**. It will also improve **developer experience** and **maintainability**. 🚀