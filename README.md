# 🌐 Url Shortener API

## 🚀 Usage

- Create a new URL short-link

```json
{
  "method": "POST",
  "path": "/api",

  // What you are sending
  "body": {
    "path": "https://www.google.coom"
  },

  // All is ok (200)
  "payload": {
    "path": "https://www.google.coom",
    "pureId": "1492432",
    "encodedId": "gqpE"
  }
}
```

- Get a shortened-link

```json
{
  "method": "GET",
  "path": "/api/gqpE",

  // What you are receiving
  "response": "https://www.google.com"
}
```

## ✅ Done
`;

console.log(readmeUrlShortener);
