# Insighta Labs+ Web Portal

A simple, secure, and user-friendly web interface for interacting with the Insighta Labs+ backend. This portal allows non-technical users to authenticate, explore demographic profiles, perform searches, and view insights in real time.

---

## Overview

The web portal is the human-facing interface of the Insighta Labs+ system. It connects directly to the backend API and reflects live data.

---

## Features

* GitHub OAuth login (PKCE)
* Secure authentication using HTTP-only cookies
* CSRF protection
* View profiles with filtering and pagination
* Natural language search
* Profile detail view
* Dashboard (basic overview)
* Account page

---

## System Architecture

```
User (Browser)
      ↓
Next.js Web Portal
      ↓
Insighta Backend API
      ↓
MongoDB
```

---

## Tech Stack

* Next.js (App Router)
* React
* Axios
* Node.js (Backend API)

---

## Project Structure

```
app/
├── page.js              # Dashboard
├── login/page.js        # Login page
├── profiles/page.js     # Profiles list
├── search/page.js       # Search page

components/
├── Navbar.js
├── ProfileTable.js

lib/
├── api.js               # Axios instance
```

---

## Authentication Flow (Web)

1. User clicks **Login with GitHub**
2. Browser calls:
   ```
   /api/v1/auth/github/start
   ```
3. Backend generates PKCE + redirects to GitHub
4. User authorizes
5. GitHub redirects to backend callback
6. Backend:
   * Issues access + refresh tokens
   * Stores them in HTTP-only cookies
7. User is now authenticated

---

## Security Features

* HTTP-only cookies (tokens not accessible via JS)
* CSRF protection via `csurf`
* Secure OAuth PKCE flow
* SameSite cookie protection

---

## API Configuration

### Axios Setup

```js
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  withCredentials: true,
  headers: {
    'X-API-Version': '1'
  }
});
```

---

## Pages

### 1. Login Page

* Initiates GitHub OAuth

### 2. Dashboard

* Basic landing page
* Future metrics support

### 3. Profiles Page

* Lists profiles
* Supports:
  * Filters
  * Pagination

### 4. Search Page

* Natural language queries

Example:

```
young males from nigeria
```

### 5. Account Page *(Optional)*

* Shows user info

---

## Important Requirements

### API Version Header (MANDATORY)

All requests must include:

```
X-API-Version: 1
```

### Credentials

All requests must use:

```js
withCredentials: true
```

---

## Running the Project

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

App runs on:

```
http://localhost:3001
```

---

## Backend Requirement

Ensure backend is running at:

```
http://localhost:3000
```

---

## Common Issues

### 1. No Data Showing

* Missing `X-API-Version` header
* Not authenticated
* Backend not running

### 2. Login Not Redirecting

* Incorrect GitHub OAuth redirect URI
* Cookies not enabled

### 3. 401 / 403 Errors

* Missing cookies
* CSRF token issues

---

## Stage 3 Compliance

* Uses backend APIs
* Secure authentication
* Role-based access supported
* Real-time data rendering
* Works alongside CLI and API

---
