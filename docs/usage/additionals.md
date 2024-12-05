---
sidebar_position: 6
---

# Additional Parameters


### Token Header
- **Type:** `string`
- **Description:** A Bearer token for authentication. Automatically added to the `Authorization` header.
  
### Custom Headers
- **Type:** `Record<string, string>`
- **Description:** Additional headers to include in the request. Example:

  ```jsx
  headers: {
    "Content-Type": "application/json",
    "X-Custom-Header": "customValue",
  }
  ```

### `onUnauthorized`
- **Type:** `() => void`
- **Description:** Callback invoked when a `401 Unauthorized` response is received.

### `axiosOptions`
- **Type:** `AxiosRequestConfig`
- **Description:** Advanced Axios configurations such as timeouts or interceptors.

---


### Explanation of **Cloudinary Upload Options**

The `cloudinaryUpload` parameter allows seamless integration with Cloudinary for file uploads. Below are the supported options:

| Parameter        | Type                  | Description                                                                                               |
|------------------|-----------------------|-----------------------------------------------------------------------------------------------------------|
| `cloud_base_url` | `string`             | The base URL for your Cloudinary account, e.g., `https://api.cloudinary.com/v1_1/your-cloud-name`.        |
| `cloud_route`    | `string` (optional)  | The Cloudinary API endpoint route. Defaults to `/upload`.                                                |
| `upload_preset`  | `string`             | A preset configured in your Cloudinary account for handling uploads.                                     |

---

### How Cloudinary Upload Works

1. **Detection of Cloudinary Fields**: If any field in your patch request contains an object with `CloudinaryImage: true` and a `value` property, the hook uploads it to Cloudinary.
   
2. **Upload to Cloudinary**: 
   - The file (`value`) is uploaded to the Cloudinary endpoint (`cloud_base_url + cloud_route`) using the specified `upload_preset`.
   - The upload returns the URL of the uploaded asset.

3. **Replace Field Value**: 
   - The original field is replaced with the Cloudinary URL returned from the upload.
   - Example: `{ profile_image: { value: "path/to/image.jpg", CloudinaryImage: true } }` becomes `{ profile_image: "https://cloudinary-url.com/image.jpg" }`.

4. **Send Updated Data**: The modified data is sent in the `PATCH` or `POST` or `PUT` request body.

---

### Example with Multiple Cloudinary Fields

```tsx
const App = () => {
  const { patch, latestData, loading, error } = phantomPatch({
    baseURL: "http://localhost:3000/",
    route: "media/update",
    cloudinaryUpload: {
      cloud_base_url: "https://api.cloudinary.com/v1_1/your-cloud-name",
      upload_preset: "your-upload-preset",
    },
    getLatestData: "media",
  });

  const handlePatch = () => {
    patch({
      profile_image: { value: "path/to/profile.jpg", CloudinaryImage: true }, // Upload to Cloudinary
      cover_image: { value: "path/to/cover.jpg", CloudinaryImage: true }, // Upload to Cloudinary
      name: "User Name", // Regular field
    });
  };

  return (
    <div>
      <button onClick={handlePatch}>Update Media</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {latestData && <pre>{JSON.stringify(latestData, null, 2)}</pre>}
    </div>
  );
};
```
