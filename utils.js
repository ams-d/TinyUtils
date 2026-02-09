/**
 * Converts a string into a URL-friendly slug.
 * @param {string} str - The input string to slugify.
 * @returns {string} A lowercase, hyphen-separated slug with only alphanumeric characters.
 * @example
 * slugify("Hello, World!"); // "hello-world"
 */
export function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')   // Remove special chars
    .trim()
    .replace(/\s+/g, '-');           // Replace spaces with hyphens
}

/**
 * Generates a random alphanumeric ID of specified length.
 * @param {number} len - Length of the ID (default: 6).
 * @returns {string} Random ID string.
 * @example
 * randomId(5); // "x9k2m"
 */
export function randomId(len = 6) {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Formats a Date object into a custom string pattern.
 * Supported tokens: YYYY, MM, DD, HH, mm, ss.
 * @param {Date} date - The date to format.
 * @param {string} format - Format string (e.g., "YYYY-MM-DD").
 * @returns {string} Formatted date string.
 * @example
 * formatDate(new Date(2026, 1, 10), "DD/MM/YYYY"); // "10/02/2026"
 */
export function formatDate(date, format = 'YYYY-MM-DD') {
  const pad = (num) => String(num).padStart(2, '0');
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hour = pad(date.getHours());
  const minute = pad(date.getMinutes());
  const second = pad(date.getSeconds());

  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hour)
    .replace('mm', minute)
    .replace('ss', second);
}

/**
 * Debounces a function call to limit how often it executes.
 * @param {Function} func - The function to debounce.
 * @param {number} delay - Delay in milliseconds (default: 300).
 * @returns {Function} A debounced version of the input function.
 */
export function debounce(func, delay = 300) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

/**
 * Groups an array of objects by a given key.
 * @param {Array<Object>} array - The array to group.
 * @param {string} key - The object property to group by.
 * @returns {Object} Grouped object with keys as group names.
 * @example
 * groupBy([{cat: 'A'}, {cat: 'B'}, {cat: 'A'}], 'cat');
 * // { A: [{cat: 'A'}, {cat: 'A'}], B: [{cat: 'B'}] }
 */
export function groupBy(array, key) {
  return array.reduce((acc, item) => {
    const group = item[key];
    acc[group] = acc[group] || [];
    acc[group].push(item);
    return acc;
  }, {});
}

/**
 * Performs a deep clone of an object (supports nested objects and arrays).
 * @param {*} obj - The object/array to clone.
 * @returns {*} Deep copy of the input.
 */
export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof Array) return obj.map(deepClone);
  if (typeof obj === 'object') {
    const cloned = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = deepClone(obj[key]);
      }
    }
    return cloned;
  }
}
