
# Basic Informational Site

A simple Node.js project that serves a basic informational website with 4 pages:

* Home (`index.html`)
* About (`about.html`)
* Contact (`contact-me.html`)
* 404 page (`404.html`)

## Usage

1. Make sure [Node.js](https://nodejs.org/en/) is installed.
2. Run the server:

   ```bash
   node index.js
   ```
3. Open your browser at: `http://localhost:8080`

Paths:

* `/` → Home
* `/about` → About
* `/contact-me` → Contact
* Anything else → 404 page

## Project Structure
```
Basic-Informational-Site/
├── src/
│   ├── index.html
│   ├── about.html
│   ├── contact-me.html
│   └── 404.html
└── index.js
```

## Notes

* Simple Node.js HTTP server using `fs` and `path`
* Serves static HTML files based on URL
* 404 page shown for undefined routes