---
sidebar_position: 5

---

# Return Parameters

| **Return Parameter** | **Type**                                | **Hooks**                                    | **Description**                                                                                   |
|-----------------------|-----------------------------------------|---------------------------------------------|---------------------------------------------------------------------------------------------------|
| **`data`**            | `T \| null`                            | `phantomGet`                                | The fetched data or `null` if no data has been retrieved yet.                                    |
| **`response`**        | `R \| null`                            | `phantomPost`, `phantomPatch`, `phantomPut`, `phantomDelete` | The data returned from the server after a successful mutation.                                   |
| **`res`**             | `R \| null`                            | All                                         | The raw server response, typically including headers, status codes, and body.                    |
| **`error`**           | `any`                                  | All                                         | Error object, including error message, status code, and other details, if the request fails.     |
| **`loading`**         | `boolean`                              | All                                         | Indicates whether the request is currently in progress.                                          |
| **`refetch`**         | `() => void`                           | `phantomGet`                                | Function to manually trigger a refetch of the data.                                              |
| **`post`**            | `(data: any) => void`                  | `phantomPost`                               | Function to send a POST request with the specified body.                                         |
| **`patch`**           | `(data: any) => void`                  | `phantomPatch`                              | Function to send a PATCH request with the specified body.                                        |
| **`put`**             | `(data: any) => void`                  | `phantomPut`                                | Function to send a PUT request with the specified body.                                          |
| **`deleteRequest`**   | `(options?: { id?: string; body?: Record<string, any>; }) => void` | `phantomDelete`                             | Function to trigger a DELETE request, optionally including an `id` or a request body.            |
| **`latestData`**      | `R \| null`                            | `phantomPost`, `phantomPatch`, `phantomPut`, `phantomDelete` | The latest data fetched after a successful mutation, if `getLatestData` is set.                 |

---

### Additional Notes:

1. **Shared Parameters**: 
   - `response`, `res`, `error`, and `loading` are common across all hooks, simplifying state handling.
2. **Unique Parameters**:
   - `data` and `refetch` are exclusive to `phantomGet`, as they relate to fetching data.
   - `post`, `patch`, `put`, and `deleteRequest` are specific to their respective mutation hooks.
3. **`latestData`**: Used for hooks with the `getLatestData` feature. Ensures consistent reactivity by retrieving updated information after mutations.

