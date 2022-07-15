# Url Shortner API

## usage

- create a new url short-link

```json
{
  "method": "POST",
  "path": "/api",

  // what you are sending
  "body": {
    "path": "https://www.google.coom"
  },

  // all is ok  (200)
  "payload": {
    "path": "https://www.google.coom",
    "pureId": "1492432",
    "encodedId": "gqpE"
  }
}
```

- get a shortened-link

```json
{
  "method": "GET",
  "path": "/api/gqpE",

  // what you are recieving
  "response": "https://www.google.com"
}
```

## Done
