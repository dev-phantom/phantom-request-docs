---
sidebar_position: 4

---
# Parameters

## Parameters for `phantomGet`, `phantomPost`, `phantomPatch`, and Related Hooks

| **Parameter**      | **Type**                                                                  | **Default**                | **Hooks**                      | **Description**                                                                                       |
|--------------------|---------------------------------------------------------------------------|----------------------------|--------------------------------|-------------------------------------------------------------------------------------------------------|
| **`baseURL`**      | `string`                                                                 | **Required**               | All                           | The base URL for your API, e.g., `http://localhost:3000/`.                                           |
| **`route`**        | `string`                                                                 | **Required**               | All                           | The API endpoint for the request, e.g., `user/update`.                                               |
| **`id`**           | `string`                                                                 | `undefined`                | `phantomPatch`, `phantomPut`, `phantomDelete` | ID of the resource to be appended to the route, e.g., `user/update/:id`.                              |
| **`token`**        | `string`                                                                 | `undefined`                | All                           | Authorization token sent in the `Authorization` header as `Bearer <token>`.                          |
| **`onUnauthorized`**| `() => void`                                                            | `() => {}`                 | All                           | Callback for handling `401 Unauthorized` responses, such as redirecting to a login page.             |
| **`initialState`** | `T | null`                                                               | `null`                     | All                           | Initial state for the response data.                                                                 |
| **`params`**       | `Record<string, any>`                                                    | `undefined`                | `phantomGet`                  | Query parameters for `GET` requests.                                                                 |
| **`headers`**      | `Record<string, string>`                                                 | `{}`                       | `phantomPost`, `phantomPatch`, `phantomDelete` | Custom headers to include in the request.                                                           |
| **`restHeader`**   | `Record<string, string>`                                                 | `undefined`                | `phantomGet`                  | Custom headers for `GET` requests.                                                                   |
| **`contentType`**  | `"application/json" \| "multipart/form-data" \| "application/x-www-form-urlencoded"` | `"application/json"`        | `phantomPost`, `phantomPatch` | Content-Type of the request body.                                                                    |
| **`fetchOnMount`** | `boolean`                                                                | `true`                     | `phantomGet`                  | Whether to fetch data immediately upon component mount.                                               |
| **`asyncAwait`**   | `boolean`                                                                | `true`                     | `phantomGet`                  | If `true`, uses `async/await` for requests. If `false`, uses Promises.                                |
| **`axiosOptions`** | `AxiosRequestConfig`                                                     | `{}`                       | All                           | Additional Axios options like timeout, base headers, etc.                                             |
| **`cloudinaryUpload`**| `CloudinaryUploadOptions`                                             | `undefined`                | `phantomPost`, `phantomPatch` | Configuration for uploading files to Cloudinary.                                                     |
| **`getLatestData`**| `string`                                                                 | `undefined`                | `phantomPost`, `phantomPatch`, `phantomDelete`, `phantomPut` | Endpoint to refetch updated data after a successful mutation.                                        |

---

### Notes:

1. **Shared Parameters**: `baseURL`, `route`, `token`, `onUnauthorized`, `initialState`, and `axiosOptions` are used across all hooks (`phantomGet`, `phantomPost`, `phantomPatch`, `phantomDelete`, `phantomPut`).
2. **Unique Parameters**: 
   - `params`, `restHeader`, `fetchOnMount`, and `asyncAwait` are specific to `phantomGet`.
   - `contentType` and `cloudinaryUpload` are specific to mutation hooks (`phantomPost`, `phantomPatch`).
   - `id` is required for resource-specific requests (`phantomPatch`, `phantomDelete`, `phantomPut`).
3. **Custom Features**: `getLatestData` allows fetching updated data after a mutation, enhancing reactivity and data consistency.  

