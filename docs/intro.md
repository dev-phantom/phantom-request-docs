---
sidebar_position: 1
---
# phantom-request

## Overview

The **goal** of `phantom-request` is to simplify making API requests with minimal code. This package allows you to make HTTP requests in a single line of code, leveraging the power of **[Axios](https://axios-http.com/)**. It is designed for developers who want to quickly perform requests with built-in support for things like token management, headers, and parameters—without worrying about boilerplate code like handling `useEffect` for data fetching (though it can be used for more control).

---
## Installation

Install the package via npm or yarn:

```bash
npm install phantom-request
```

or

```bash
yarn add phantom-request
```
---

## Features

- **Single-Line Requests:** Makes API requests in just one line of code.  
- **Automatic Axios Integration:** Leverages **[Axios](https://axios-http.com/)** for powerful and flexible HTTP requests.  
- **Error Handling:** Automatically handles common errors like unauthorized access with custom handlers.  
- **Token and Header Management:** Supports automatic token injection and custom headers.  
- **Manual Refetch:** Allows manual triggering of a refetch without needing additional `useEffect` hooks.  
- **Logout and Redirection:** Provides built-in methods to clear cookies and local storage with optional redirection.  
- **Standard JSON POST Requests:** Simplifies sending JSON payloads in POST requests.  
- **File Uploads:** Upload files (e.g., images, videos, PDFs) using `multipart/form-data`.  
- **Cloudinary Integration:** Includes support for media uploads to Cloudinary.  
- **Real-Time Data Fetching:** Automatically fetch the latest data after a POST request.  
- **Authorization Support:** Handles custom headers and authorization seamlessly.  
- **Flexible ID Handling:** Collects `id` as a parameter for PUT and PATCH requests.  
- **DELETE Requests:** Accepts `id` either in the request body or as a parameter for DELETE requests.  

--- 

**Important:** `phantom-request` uses React hooks under the hood, so be mindful not to violate the rules of hooks in React. This means hooks should not be called conditionally or inside loops, and they should always be called at the top level of your components or custom hooks. For proper usage, avoid using it in places where React hooks are not allowed.


