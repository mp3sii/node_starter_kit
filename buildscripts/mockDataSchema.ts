export const userSchema = {
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "faker": "name.findName"
    },
    "email": {
      "type": "string",
      "faker": "internet.email"
    },
    "password": {
      "type": "string",
      "faker": "internet.password"
    }

  },
  "required": [
    "name",
    "email",
    "password"
  ]
};
