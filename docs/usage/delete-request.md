---
sidebar_position: 5
---

# DELETE Request

- **Dynamic Routing:** You can pass `id` dynamically in the request or configure it globally when initializing the hook.
- **Error Handling:** Handle server errors gracefully with the `error` property.
- **Global State:** Use `getLatestData` for automatic updates to global or shared data after a delete.


### DELETE Request Using Params

```tsx
import { phantomDelete } from "phantom-request";

function App() {
  const { deleteRequest, loading, error, response, latestData } = phantomDelete({
    baseURL: "http://localhost:3000/",
    route: "driver/delete", // Base route
    id: "673d19b1017652a1564ff2ca", // ID to delete
    getLatestData: "driver", // Optional route to fetch the latest data after delete
  });

  const handleDelete = () => {
    deleteRequest(); // ID from the hook configuration is used
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Driver</button>
      {loading && <p>Deleting...</p>}
      {error && <p>Error: {error.message}</p>}
      {response && <pre>{JSON.stringify(latestData, null, 2)}</pre>}
    </div>
  );
}

export default App;
```

---

### DELETE Request Using Body

```tsx
import { phantomDelete } from "phantom-request";

function App() {
  const { deleteRequest, loading, error, response, latestData } = phantomDelete({
    baseURL: "http://localhost:3000/",
    route: "driver/delete",
    getLatestData: "driver", // Optional route to fetch updated data
  });

  const handleDelete = () => {
    deleteRequest({
      body: { id: "673d292c8b1d5b094f5eb2df" }, // Send ID in the body
    });
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Driver</button>
      {loading && <p>Deleting...</p>}
      {error && <p>Error: {error.message}</p>}
      {response && <pre>{JSON.stringify(latestData, null, 2)}</pre>}
    </div>
  );
}

export default App;
```

---

### `phantomDelete`

The `phantomDelete` hook provides an interface for handling DELETE requests. It supports dynamic routing, token-based authentication, custom headers, and additional options.

### Hook Parameters

| Parameter        | Type                     | Default       | Description                                                                 |
|------------------|--------------------------|---------------|-----------------------------------------------------------------------------|
| `baseURL`        | `string`                | **Required**  | The base URL for the API.                                                  |
| `route`          | `string`                | **Required**  | The endpoint for the DELETE request.                                       |
| `id`             | `string`                | `undefined`   | Default ID for the request (used for dynamic routes).                      |
| `token`          | `string`                | `undefined`   | Token for `Authorization` header (Bearer token).                           |
| `onUnauthorized` | `() => void`            | `() => {}`    | Callback triggered when a `401 Unauthorized` error occurs.                 |
| `initialState`   | `any`                   | `null`        | Initial state for the response data.                                       |
| `headers`        | `Record<string, string>`| `{}`          | Additional headers for the request.                                        |
| `axiosOptions`   | `AxiosRequestConfig`    | `{}`          | Custom Axios configuration for advanced use cases.                         |
| `getLatestData`  | `string`                | `undefined`   | Endpoint to fetch updated data after a successful delete.                  |

---

### Return Values

The hook returns the following properties:

| Property        | Type                                | Description                                                       |
|------------------|-------------------------------------|-------------------------------------------------------------------|
| `deleteRequest`  | `(options?: { id?: string; body?: Record<string, any>; }) => void` | Function to trigger the DELETE request.                         |
| `loading`        | `boolean`                          | Indicates if the request is in progress.                         |
| `error`          | `any`                              | Error object from the request (if any).                          |
| `response`       | `any`                              | Response data from the DELETE request.                           |
| `res`       | `any`                              | Response from the DELETE request.                           |
| `latestData`     | `any`                              | Data from the `getLatestData` route (if configured).             |
