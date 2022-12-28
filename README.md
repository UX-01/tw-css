tw-css
---

### Install the Tailwind CSS forms package
`npm install -D @tailwindcss/forms`

### Don't forget to add it to your config

```
// tailwind.config.js
module.exports = {
  theme: {
    // ...
    },
    plugins: [
    require('@tailwindcss/forms'),
    // ...
    ],
    }
    ```
```

### Generate the CSS for distribution
`npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch`

### Optimize for production
`npx tailwindcss -o .dist/build.css --minify`
