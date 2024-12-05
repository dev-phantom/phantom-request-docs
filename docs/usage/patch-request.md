---
sidebar_position: 3
---

# PATCH request

Add `phantomPatch` with an ID, headers, token, and refetching the latest data after a successful patch

### Example 

```tsx
import { phantomPatch } from "phantom-request"; // Import the hook

function App() {
  const { patch, latestData, loading, error, response } = phantomPatch({
    baseURL: "http://localhost:3000/", // Base URL for your API
    route: "driver/update", // API route for the PATCH request
    id: "673d31b498e6ebb73305e6fd", // ID of the resource to update
    getLatestData: "driver", // Will refetch this data after the PATCH request
    token: "your-auth-token", // Authorization token
    onUnauthorized: () => {
      alert("Unauthorized! Please log in.");
    }, // Callback when the server returns a 401 error
    headers: {
      "X-Custom-Header": "CustomValue",
    }, // Additional custom headers
    contentType: "application/json", // Content-Type of the request body
  });

  const handlePatch = () => {
    patch({
      first_name: "phantom", // The data you want to patch
      last_name: "request",
    });
  };

  return (
    <div>
      <button onClick={handlePatch}>Update Driver</button>

      {loading && <p>Updating...</p>} {/* Show loading state while the PATCH request is in progress */}
      {error && <p>Error: {error.message}</p>} {/* Display error if the PATCH request fails */}
      {latestData && <pre>{JSON.stringify(latestData, null, 2)}</pre>} {/* Display the latest data after the PATCH request */}
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>} {/* Display response from the PATCH request */}
    </div>
  );
}

export default App;
```

### Example with Cloudinary

```tsx
const App = () => {
  const { patch, latestData, loading, error } = phantomPatch({
    baseURL: "http://localhost:3000/",
    route: "media/update",
    id: "673d31b498e6ebb73305e6fd",
    cloudinaryUpload: {
      cloud_base_url: "https://api.cloudinary.com/v1_1/your-cloud-name",
      upload_preset: "your-upload-preset",
    },
    getLatestData: "media",
  });

  const handlePatch = () => {
    patch({
      image: { value: "path/to/image.jpg", CloudinaryImage: true },
    });
  };

  return (
    <div>
      <button onClick={handlePatch}>Update Image</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {latestData && <pre>{JSON.stringify(latestData, null, 2)}</pre>}
    </div>
  );
};
```

---

### Parameters in `phantomPatch`

Below are the parameters you can pass to `phantomPatch` and their descriptions:

| Parameter          | Type                              | Description                                                                                                                                 |
|--------------------|-----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| `baseURL`          | `string`                         | Base URL for your API, e.g., `http://localhost:3000/`.                                                                                      |
| `route`            | `string`                         | API endpoint route for the `PATCH` request, e.g., `driver/update`.                                                                          |
| `id`               | `string` (optional)              | ID of the resource to be updated. Will be appended to the route, e.g., `driver/update/:id`.                                                 |
| `token`            | `string` (optional)              | Authorization token to be sent in the `Authorization` header as `Bearer <token>`.                                                           |
| `onUnauthorized`   | `() => void` (optional)          | Callback function to handle 401 Unauthorized responses, such as redirecting to a login page.                                                |
| `initialState`     | `R \| null` (optional)            | Initial state for the `response`. Useful for setting a default value.                                                                       |
| `headers`          | `Record<string, string>` (optional) | Custom headers to include in the request, e.g., `{ "X-Custom-Header": "value" }`.                                                           |
| `contentType`      | `"application/json" \| "multipart/form-data" \| "application/x-www-form-urlencoded"` | Content type of the request. Default is `application/json`.                                          |
| `axiosOptions`     | `AxiosRequestConfig` (optional)  | Additional Axios options, such as timeouts or custom response handling.                                                                     |
| `cloudinaryUpload` | `CloudinaryUploadOptions` (optional) | Configuration for uploading files to Cloudinary.                                                                                            |
| `getLatestData`    | `string` (optional)              | API route to fetch the latest data after a successful patch. Uses `phantomGet` internally to retrieve this data.                           |

---

### Explanation of Features

- **`id`**: Allows appending an identifier to the endpoint, useful for updating specific resources. For example, if `id` is `673d31b498e6ebb73305e6fd`, the final route will be `driver/update/673d31b498e6ebb73305e6fd`.
  
- **`token`**: Useful for secured endpoints. Automatically sets the `Authorization` header with `Bearer <token>`.

- **`onUnauthorized`**: Executes a callback (e.g., redirect to login) if the server returns a 401 Unauthorized response.

- **`headers`**: Add any additional headers, such as `X-Custom-Header`.

- **`getLatestData`**: Refetches data from the provided route after a successful patch operation. For instance, after updating a driver, you can retrieve the updated driver data.

- **`contentType`**: Allows selecting the content type for the request body. Supports `application/json`, `multipart/form-data`, and `application/x-www-form-urlencoded`.

- **`cloudinaryUpload`**: If included, processes data containing Cloudinary image uploads. Images are uploaded to Cloudinary before sending the patch request.

---

### Return Parameters for `phantomPatch`

| Parameter         | Type                         | Description                                                                                              |
|-------------------|------------------------------|----------------------------------------------------------------------------------------------------------|
| `response`        | `R \| null`                    | The data returned from the API after a successful PATCH request. This contains the updated resource data. |
| `res`        | `R \| null`                    | The response returned from the API after a successful PATCH request. |
| `error`           | `any`                         | The error object if the PATCH request fails. Can contain error message, status code, or other details.    |
| `loading`         | `boolean`                     | Indicates whether the PATCH request is in progress. `true` when loading, `false` when the request is complete. |
| `patch`           | `(data: any) => void`         | A function that you call to trigger the PATCH request with the specified `data`. It sends the data to the server to be updated. |
| `latestData`      | `R \| null`                    | Contains the most recent data fetched from the server (if `getLatestData` was provided and refetched). This value is updated after a successful PATCH request. |
