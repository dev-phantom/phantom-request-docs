---
sidebar_position: 2
---

# POST Request

Add **phantomPost** to **post API data** with a single line. 

- Supports various content types (`application/json`, `multipart/form-data`, etc.)
- Automatic Cloudinary file uploads
- Customizable headers and token-based authorization
- Automatic refetching of latest data after a successful POST
- Error handling for unauthorized requests (`401`) with a callback

---

## Examples

### 1. **Basic JSON POST Request**
```jsx
import { phantomPost } from "phantom-request";

const App = () => {
  const { response, error, loading, post } = phantomPost({
    baseURL: "http://localhost:3000/",
    route: "driver/create",
  });

  const handleSubmit = () => {
    post({ first_name: "Fred", last_name: "Flintstone" });
  };

  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default App;
```

---

### 2. **File Upload with `multipart/form-data`**
**Backend Requirement:** Use a library like `Multer` to handle file uploads on the server.
```jsx
import { useRef, useState } from "react";
import { phantomPost } from "phantom-request";

const App = () => {
  const fileInputRef = useRef(null);
  const { response, error, loading, post } = phantomPost({
    baseURL: "http://localhost:3000/",
    route: "driver/create",
    contentType: "multipart/form-data",
  });

  const handleUpload = () => {
    const file = fileInputRef.current?.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("first_name", "Fred");
      formData.append("last_name", "Flintstone");

      post(formData);
    }
  };

  return (
    <div>
      <input type="file" ref={fileInputRef} />
      <button onClick={handleUpload}>Upload</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default App;
```

---

### 3. **Cloudinary File Upload**
```jsx
import { useRef, useState } from "react";
import { phantomPost } from "phantom-request"; // Import the hook

const App = () => {
  const fileInputRef = useRef(null); // Create a ref for the file input
  const [errorMessage, setErrorMessage] = useState(null); // For client-side error handling

  const { response, error, loading, post } = phantomPost({
    baseURL: "http://localhost:3000/",
    route: "driver/create",
    cloudinaryUpload: {
      cloud_base_url: "https://api.cloudinary.com/v1_1/your_username",
      cloud_route: "/upload", 
      upload_preset: "your upload preset e.g h2bjt9bc",
    },
  });

  const handleUpload = () => {
    const file = fileInputRef.current?.files?.[0]; // Access the file from the ref

    if (file) {
      const data = {
        first_name: "phantom", // Add first name
        last_name: "Flintstone", // Add last name
        image: { value: file, CloudinaryImage: true }, // Tag the image for Cloudinary upload
      };

      post(data); // Send the data object with tagged image
    } else {
      setErrorMessage("Please select a file before uploading.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <input type="file" ref={fileInputRef} /> {/* Use ref to access the file input */}
      <button onClick={handleUpload}>Upload</button>

      {/* Display client-side error if any */}
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}

      {/* Display the response data */}
      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;

```

## API

### `phantomPost`

#### Parameters
| Parameter        | Type                                  | Default                | Description                                                                                                   |
|------------------|---------------------------------------|------------------------|---------------------------------------------------------------------------------------------------------------|
| `baseURL`        | `string`                             | **Required**           | Base URL of the API.                                                                                          |
| `route`          | `string`                             | **Required**           | API endpoint for the POST request.                                                                            |
| `token`          | `string`                             | `undefined`            | Authorization token, included as a `Bearer` token in the headers.                                             |
| `onUnauthorized` | `() => void`                         | `() => {}`             | Callback executed when the server returns a `401 Unauthorized` response.                                      |
| `initialState`   | `R` or `null`                        | `null`                 | Initial state for the response data.                                                                          |
| `headers`        | `Record<string, string>`             | `{}`                   | Additional headers to include in the request.                                                                |
| `contentType`    | `"application/json" \| "multipart/form-data" \| "application/x-www-form-urlencoded"` | `"application/json"` | Content-Type of the request body.                                                                             |
| `axiosOptions`   | `AxiosRequestConfig`                 | `{}`                   | Additional configuration options for Axios.                                                                   |
| `cloudinaryUpload`| `CloudinaryUploadOptions`           | `undefined`            | Configuration for Cloudinary integration, enabling media uploads.                                             |
| `getLatestData`  | `string`                             | `undefined`            | API route to fetch the latest data after a successful POST request.                                           |

---

### Return Value

The hook returns an object with the following:

| Property      | Type                  | Description                                                                 |
|---------------|-----------------------|-----------------------------------------------------------------------------|
| `response`    | `R \| null`           | The server response data.                                                   |
| `res`    | `R \| null`           | The server response                                                    |
| `error`       | `any`                 | Error object if the request fails.                                          |
| `loading`     | `boolean`             | Indicates if the request is in progress.                                    |
| `post`        | `(data: any) => void` | Function to send a POST request. Accepts the request body as its parameter. |
| `latestData`  | `R \| null`           | The latest data fetched after a successful POST (if `getLatestData` is set).|
