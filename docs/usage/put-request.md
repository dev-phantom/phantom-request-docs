---
sidebar_position: 4
---

# PUT Request

Add `phantomPut` with an ID, headers, token, and refetching the latest data after a successful patch

### Example 

```tsx
import { phantomPut } from "phantom-request"; // Import the hook

function App() {
  const { put, latestData, loading, error, response } = phantomPut({
    baseURL: "http://localhost:3000/", // Base URL for your API
    route: "user/update", // API route for the PUT request
    id: "12345", // ID of the resource to update (optional)
    getLatestData: "user", // Refetch this route after the PUT request
    token: "your-auth-token", // Authorization token
    onUnauthorized: () => {
      alert("Session expired. Please log in again.");
    }, // Handle 401 errors
    headers: {
      "X-Custom-Header": "MyValue",
    }, // Custom headers
    contentType: "application/json", // Content-Type of the request body
  });

  const handleUpdate = () => {
    put({
      username: "newUsername", // Updated data
      email: "newEmail@example.com",
    });
  };

  return (
    <div>
      <button onClick={handleUpdate}>Update User</button>
      {loading && <p>Loading...</p>} {/* Show a loading indicator */}
      {error && <p>Error: {error.message}</p>} {/* Display errors */}
      {latestData && <pre>{JSON.stringify(latestData, null, 2)}</pre>} {/* Display the latest fetched data */}
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>} {/* Display the API response */}
    </div>
  );
}

export default App;
```

### Example with File Upload (e.g., Profile Picture)

```tsx
const App = () => {
  const { put, latestData, loading, error } = phantomPut({
    baseURL: "http://localhost:3000/",
    route: "profile/update",
    id: "12345",
    cloudinaryUpload: {
      cloud_base_url: "https://api.cloudinary.com/v1_1/your-cloud-name",
      
      upload_preset: "preset-name",
    },
    getLatestData: "profile",
  });

  const handleUpdate = () => {
    put({
      avatar: { value: "path/to/profile.jpg", CloudinaryImage: true },
    });
  };

  return (
    <div>
      <button onClick={handleUpdate}>Update Profile</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {latestData && <pre>{JSON.stringify(latestData, null, 2)}</pre>}
    </div>
  );
};
```

---

### Features and Parameters

| Parameter          | Type                              | Description                                                                 |
|--------------------|-----------------------------------|-----------------------------------------------------------------------------|
| `baseURL`          | `string`                         | Base URL for your API, e.g., `http://localhost:3000/`.                      |
| `route`            | `string`                         | API endpoint route for the `PUT` request, e.g., `user/update`.              |
| `id`               | `string` (optional)              | Resource ID to append to the route, e.g., `user/update/:id`.                |
| `token`            | `string` (optional)              | Authorization token sent in `Authorization: Bearer <token>`.                |
| `onUnauthorized`   | `() => void` (optional)          | Callback for 401 Unauthorized responses, e.g., redirecting to login.        |
| `headers`          | `Record<string, string>` (optional) | Additional headers for the request.                                        |
| `contentType`      | `"application/json" \| "multipart/form-data" \| "application/x-www-form-urlencoded"` | Content-Type of the request. Default is `application/json`.|
| `getLatestData`    | `string` (optional)              | Refetch the latest data from this route after a successful PUT.             |

---

### Return Parameters

| Parameter         | Type                  | Description                                                                 |
|-------------------|-----------------------|-----------------------------------------------------------------------------|
| `response`        | `R \| null`           | Response from the PUT request, e.g., updated resource data.                |
| `error`           | `any`                | Error object if the PUT request fails.                                     |
| `loading`         | `boolean`            | Indicates whether the PUT request is in progress.                          |
| `put`             | `(data: any) => void` | Function to trigger the PUT request with the provided data.                |
| `latestData`      | `R \| null`           | Refreshed data fetched after a successful PUT request (if `getLatestData`).|