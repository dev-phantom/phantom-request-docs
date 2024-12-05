---
sidebar_position: 1
---

# GET Request

Add **phantomGet** to **fetch API data** without manually managing **useEffect** for fetching data. 


```tsx
import React from "react";
import { phantomGet } from "phantom-request";
import { logout, logoutRedirect } from "phantom-request";

function App() {
  const { data, loading, error } = phantomGet({
    baseURL: "http://localhost:3000/",
    route: "customers",
    // token: "your-auth-token", // Optional
    onUnauthorized: logout, // Clear local storage and cookies
    // initialState: null, // Optional, default is `null`
    // params: { page: 3, limit: 20 }, // Optional query parameters
    // restHeader: { "X-Custom-Header": "CustomValue" }, // Optional headers
    // asyncAwait: true, // Optional, default is `true`
    // restOptions: { timeout: 5000 }, // Optional Axios config
    // fetchOnMount: true, // Optional, default is `true`
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default App;
```

### Example with Manual Refetch

You can trigger a manual refetch using the `refetch` method:

```tsx
import React from "react";
import { phantomGet } from "phantom-request";

function App() {
  const { data, loading, error, refetch } = phantomGet({
    baseURL: "http://localhost:3000/",
    route: "product",
    fetchOnMount: true, // Automatically fetches data on mount
  });

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <div>{JSON.stringify(data)}</div>}
      <button onClick={refetch}>Refresh Data</button>
    </div>
  );
}

export default App;
```

### Logout and Redirection

- **`logout`**: Clears all local storage and cookies.

  ```js
  logout();
  ```

- **`logoutRedirect`**: Clears all local storage and cookies, and redirects the user to `/`.

  ```js
  logoutRedirect();
  ```

## API

### Parameters

| Parameter        | Type                           | Default        | Description                                                                                 |
| ---------------- | ------------------------------ | -------------- | ------------------------------------------------------------------------------------------- |
| **`baseURL`**     | `string`                       | -              | **(Required)** Base URL of the API.                                                         |
| **`route`**       | `string`                       | -              | **(Required)** API route to request.                                                        |
| **`token`**       | `string`                       | -              | **(Optional)** Authorization token (e.g., for Bearer token).                               |
| **`onUnauthorized`** | `() => void`                | -              | **(Optional)** Callback triggered on a 401 Unauthorized response (e.g., `logout`).          |
| **`initialState`** | `T | null`                    | `null`         | **(Optional)** Initial state for the response data.                                          |
| **`params`**      | `Record<string, any>`          | -              | **(Optional)** Query parameters for the request.                                            |
| **`restHeader`**  | `Record<string, string>`       | -              | **(Optional)** Custom headers for the request.                                              |
| **`asyncAwait`**  | `boolean`                      | `true`         | **(Optional)** If `true`, the request will be made with `async/await`. If `false`, it will use promises. |
| **`restOptions`** | `AxiosRequestConfig`           | -              | **(Optional)** Additional Axios config options, like timeouts, etc.                         |
| **`fetchOnMount`** | `boolean`                     | `true`         | **(Optional)** Whether to fetch data immediately upon component mount (default is `true`).  |

### Returns

| **Return**   | **Type**            | **Description**                                                                           |
|--------------|---------------------|-------------------------------------------------------------------------------------------|
| `data`       | `T \| null`         | The fetched data or `null` if no data has been fetched yet.                              |
| `res`        | `T \| null`         | The fetched response.                                                                    |
| `error`      | `any`               | Any error that occurred during the request.                                              |
| `loading`    | `boolean`           | Indicates whether the request is still loading.                                          |
| `refetch`    | `() => void`        | A function to manually trigger a refetch of the data.                                    |

## Optional Parameters

- **`fetchOnMount`** (default: `true`): If set to `false`, the request will not be automatically made when the component mounts. This is useful if you need more control over when the request happens (e.g., based on user interaction).
  
### Customizing Requests

If you prefer to add `useEffect` manually for more complex behaviors, you can still do so, but it is not required for basic usage:

```tsx
import React, { useEffect } from "react";
import { phantomGet } from "phantom-request";

function App() {
  const { data, loading, error, refetch } = phantomGet({
    baseURL: "http://localhost:3000/",
    route: "product",
    fetchOnMount: false, // Control when to fetch data
  });

  useEffect(() => {
    refetch(); // Manually trigger refetch
  }, []); // Can be customized to refetch based on other dependencies

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
}

export default App;
```
