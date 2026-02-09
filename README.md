# TinyUtils

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A **lightweight**, **zero-dependency** collection of reusable utility functions for JavaScript.  
No frameworks. No bloat. Just clean, well-tested helpers you can copy or import.

Perfect for:
- Small projects
- Coding interviews
- Quick prototyping
- Learning JavaScript best practices

## 📦 Installation

### Option 1: Use via CDN (for browsers)
```
html
<script type="module">
  import { slugify, randomId } from 'https://cdn.jsdelivr.net/gh/your-username/TinyUtils@main/dist/tinyutils.js';
</script>
```
### Option 2: Download & include locally
```
git clone https://github.com/your-username/TinyUtils.git
```
Then import in your project:
```
import { formatDate, debounce } from './TinyUtils/utils.js';
```

### Option 3: Copy-paste what you need!
All functions are self-contained — feel free to copy individual utilities into your codebase.
| Function        | Description |
|-----------------|-------------|
| `slugify(str)`  | Converts a string into a URL-friendly slug (e.g., `"Hello World!"` → `"hello-world"`) |
| `randomId(len)` | Generates a random alphanumeric ID of given length |
| `formatDate(date, format)` | Formats a Date object into a readable string (`"YYYY-MM-DD"`, `"DD/MM/YYYY"`, etc.) |
| `debounce(func, delay)` | Debounces a function call (useful for search inputs, resize events) |
| `groupBy(array, key)` | Groups array of objects by a given property |
| `deepClone(obj)` | Performs a deep clone of an object (supports nested objects & arrays) |

✨ More utilities coming soon! See `utils.js` for full source.

💡 Example Usage
```
import { slugify, randomId, formatDate } from './utils.js';

console.log(slugify("Hello, World! 🌍")); // "hello-world"
console.log(randomId(8));                  // e.g., "a3x9k2m1"
console.log(formatDate(new Date(), "YYYY-MM-DD")); // "2026-02-10"
```

🧪 Testing

```
node test.js
```
📜 License
MIT
