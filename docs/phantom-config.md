---
sidebar_position: 3

---

# Phantom Config Guide

The `phantom-request` library allows you to configure global settings for your API requests in a centralized way. By setting up a `phantom.config.js` file or configuring directly in `main.jsx`, you can ensure that all your API calls are made with consistent settings while still providing flexibility for per-call overrides.

## Installation

Before setting up the configuration, make sure you have installed `phantom-request`:

```bash
npm install phantom-request
```

## Setup

### Creating `phantom.config.js`

You can create a file named `phantom.config.js` in your `config` directory (or wherever it fits your project structure). This file will hold your global configuration for all `phantomGet`, `phantomPost`, `phantomPut`, `phantomDelete`, and `phantomPatch` requests.

Here’s an example of what the `phantom.config.js` might look like:

```javascript
// config/phantom.config.js
import { setPhantomConfig } from "phantom-request";

// Set global configuration for API requests
setPhantomConfig({
  baseURL: "http://localhost:3000/",
  params: { page: 2, limit: 20 }, // Default parameters for all requests
  getLatestData: "driver/", // Define default route for latest data
});
```

You can also add any valid `phantom-request` parameters to this config file. These parameters will apply globally unless overridden in individual API calls.

### Setting Up Config in `main.jsx`

Alternatively, if you prefer, you can set up your configuration directly in your `main.jsx` (or equivalent entry point) file. This is especially useful if you want to keep everything in one place, or if you don't want a separate configuration file.

Here’s how you can set it up directly in `main.jsx`:

```javascript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { setPhantomConfig } from "phantom-request";

// Set global configuration for API requests directly in main.jsx
setPhantomConfig({
  baseURL: "http://localhost:3000/",
  params: { page: 2, limit: 20 }, // Default parameters for all requests
  getLatestData: "driver/", // Define default route for latest data
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

You can choose either method (a separate `phantom.config.js` file or setting it up directly in `main.jsx`) depending on your project's needs.

### Importing Global Config

If you choose the `phantom.config.js` method, you’ll need to import it into your `main.jsx` (or equivalent entry point) to ensure the configuration is applied globally.

Here’s how you can import the `phantom.config.js` in `main.jsx`:

```javascript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import "./config/phantom.config.js";  // Import global config

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

By importing `phantom.config.js`, you ensure that all your requests made using `phantomGet`, `phantomPost`, `phantomPut`, `phantomDelete`, or `phantomPatch` will use the global configuration settings.

## Usage

Once the global configuration is set, you can make API calls using `phantomGet`, `phantomPost`, `phantomPut`, `phantomDelete`, and `phantomPatch`. Here are some examples:

### Example of `phantomPost`

```javascript
import { phantomPost } from "phantom-request";

const App = () => {
  const { response, error, loading, post, latestData } = phantomPost({
    route: "driver/create", // Route for this specific POST request
  });

  const handleSubmit = () => {
    post({ fullName: "Fred", email: "phr@gmail.com" }); // Sending data on form submission
  };

  console.log(response);

  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {latestData && <pre>{JSON.stringify(latestData, null, 2)}</pre>}
    </div>
  );
};

export default App;
```

### Example of `phantomGet`

```javascript
import { phantomGet } from "phantom-request";

// Basic usage with global config
const { data: customersData, loading } = phantomGet({
  route: "customers", // API endpoint for getting customers data
});

// Override global config for a specific call
const { data: productsData } = phantomGet({
  baseURL: "http://localhost:3001/", // Override base URL for this request
  route: "products", // API endpoint for products
  params: { limit: 10 }, // Override parameters
  restHeader: { "X-Custom-Header": "CustomValue" }, // Custom headers
});

// Minimal setup (uses global config settings)
const { data: ordersData } = phantomGet({
  route: "orders", // API endpoint for orders
});
```

### Supported Methods

The configuration can be used across all `phantom-request` methods, including:

- **`phantomPost`**: For sending data via POST requests.
- **`phantomGet`**: For fetching data via GET requests.
- **`phantomPut`**: For updating data via PUT requests.
- **`phantomPatch`**: For partially updating data via PATCH requests.
- **`phantomDelete`**: For deleting data via DELETE requests.

These methods can all take advantage of the global configuration, and any specific method can be customized with its own parameters when necessary.

### Example of `phantomPut`

```javascript
import { phantomPut } from "phantom-request";

const App = () => {
  const { response, error, loading, put, latestData } = phantomPut({
    route: "driver/update", // Route for this specific PUT request
    id: "1",
  });

  const handleUpdate = () => {
    put({ fullName: "Fred", email: "newemail@gmail.com" }); // Sending updated data
  };

  return (
    <div>
      <button onClick={handleUpdate}>Update</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {latestData && <pre>{JSON.stringify(latestData, null, 2)}</pre>}
    </div>
  );
};

export default App;
```

### Example of `phantomDelete`

```javascript
import { phantomDelete } from "phantom-request";

const App = () => {
  const { response, error, loading, remove, latestData } = phantomDelete({
    route: "driver/delete", // Route for this specific DELETE request
    id: "1"
  });

  const handleDelete = () => {
    remove(); // Perform delete action
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {latestData && <pre>{JSON.stringify(latestData, null, 2)}</pre>}
    </div>
  );
};

export default App;
```

### Example of `phantomPatch`

```javascript
import { phantomPatch } from "phantom-request";

const App = () => {
  const { response, error, loading, patch, latestData } = phantomPatch({
    route: "driver/patch/1", // Route for this specific PATCH request
    id: "1"
  });

  const handlePatch = () => {
    patch({ fullName: "Fred", email: "updatedemail@gmail.com" }); // Sending patch data
  };

  return (
    <div>
      <button onClick={handlePatch}>Update</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {latestData && <pre>{JSON.stringify(latestData, null, 2)}</pre>}
    </div>
  );
};

export default App;
```

## API Reference

### `setPhantomConfig`

```typescript
function setPhantomConfig(config: PhantomConfig): void;
```

Sets the global configuration that will be used by `phantomGet`, `phantomPost`, `phantomPut`, `phantomDelete`, and `phantomPatch`.

#### Parameters: any valid phantom-request parameter will work in your config