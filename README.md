# modelman

A Simple Model Manager

## Usage

0. Pre-requisites

- Make sure that Node and MongoDB is installed.
- MongoDB should be running at `localhost:27017`. Otherwise, change `./config/db.config.js` file.
- MongoDB should have a DB named `betterdata`. Otherwise, create one or change `./config/db.config.js` file.

1. Install the project and it's dependencies

```bash
npm install
```

2. Run the API server

```bash
DEBUG=modelman:* npm start
```

API server will be available at: http://localhost:3000

## API Documentation

### Create User

Request:

```
POST http://localhost:3000/users
```

Body:

```json
{
  "id": "unsuitable001",
  "name": "Soumyadip Mondal"
}
```

Response:

```json
{
  "name": "Soumyadip Mondal",
  "id": "unsuitable001"
}
```

### Create Project

Request:

```
POST http://localhost:3000/projects
```

Body:

```json
{
  "title": "project-1",
  "real_data": ["real.csv"],
  "created_by": "unsuitable001",
  "models": [
    {
      "title": "model-1",
      "parameters": {
        "batch_size": 32,
        "training_cycles": 32
      },
      "synthetic_data": ["synthetic.csv"]
    },
    {
      "title": "model-2",
      "parameters": {
        "batch_size": 64,
        "training_cycles": 64
      },
      "synthetic_data": ["synthetic.csv"]
    }
  ]
}
```

Response:

```json
{
  "title": "project-1",
  "real_data": ["real.csv"],
  "created_by": "unsuitable001",
  "models": [
    {
      "title": "model-1",
      "parameters": {
        "batch_size": 32,
        "training_cycles": 32
      },
      "synthetic_data": ["synthetic.csv"],
      "_id": "6164209264b065a2b4ad3aff"
    },
    {
      "title": "model-2",
      "parameters": {
        "batch_size": 64,
        "training_cycles": 64
      },
      "synthetic_data": ["synthetic.csv"],
      "_id": "6164209264b065a2b4ad3b00"
    }
  ],
  "id": "6164209264b065a2b4ad3afe"
}
```

### List Projects

Request:

```
GET http://localhost:3000/users/unsuitable001/projects
```

Response:

```json
[
  {
    "title": "project-1",
    "real_data": ["real.csv"],
    "created_by": "unsuitable001",
    "models": [
      {
        "parameters": {
          "batch_size": 32,
          "training_cycles": 32
        },
        "title": "model-1",
        "synthetic_data": ["synthetic.csv"],
        "_id": "6164209264b065a2b4ad3aff"
      },
      {
        "parameters": {
          "batch_size": 64,
          "training_cycles": 64
        },
        "title": "model-2",
        "synthetic_data": ["synthetic.csv"],
        "_id": "6164209264b065a2b4ad3b00"
      }
    ],
    "id": "6164209264b065a2b4ad3afe"
  }
]
```

### Update Project

Request:

```
PATCH http://localhost:3000/projects/PROJECT_ID
```

Body:

```json
{
  "title": "My New Project Name"
}
```

Response:

```json
{
  "title": "My New Project Name",
  "real_data": ["real.csv"],
  "created_by": "unsuitable001",
  "models": [
    {
      "title": "model-1",
      "parameters": {
        "batch_size": 32,
        "training_cycles": 32
      },
      "synthetic_data": ["synthetic.csv"],
      "_id": "6164209264b065a2b4ad3aff"
    },
    {
      "title": "model-2",
      "parameters": {
        "batch_size": 64,
        "training_cycles": 64
      },
      "synthetic_data": ["synthetic.csv"],
      "_id": "6164209264b065a2b4ad3b00"
    }
  ],
  "id": "6164209264b065a2b4ad3afe"
}
```

### Create Model

Request:

```
POST http://localhost:3000/models/PROJECT_ID
```

Body:

```json
{
  "title": "model-3",
  "parameters": {
    "batch_size": 128,
    "training_cycles": 128
  },
  "synthetic_data": ["synthetic.csv"]
}
```

Response:

```json
{
  "title": "My New Project Name",
  "real_data": ["real.csv"],
  "created_by": "unsuitable001",
  "models": [
    {
      "parameters": {
        "batch_size": 32,
        "training_cycles": 32
      },
      "title": "model-1",
      "synthetic_data": ["synthetic.csv"],
      "_id": "6164209264b065a2b4ad3aff"
    },
    {
      "parameters": {
        "batch_size": 64,
        "training_cycles": 64
      },
      "title": "model-2",
      "synthetic_data": ["synthetic.csv"],
      "_id": "6164209264b065a2b4ad3b00"
    },
    {
      "title": "model-3",
      "parameters": {
        "batch_size": 128,
        "training_cycles": 128
      },
      "synthetic_data": ["synthetic.csv"],
      "_id": "616422e564b065a2b4ad3b10"
    }
  ],
  "id": "6164209264b065a2b4ad3afe"
}
```

### Update Model

Request:

```
PATCH http://localhost:3000/models/PROJECT_ID/MODEL_ID
```

Body:

```json
{
  "parameters": {
    "batch_size": 16,
    "training_cycles": 16
  }
}
```

Response:

```json
{
  "parameters": {
    "batch_size": 16,
    "training_cycles": 16
  },
  "title": "model-1",
  "synthetic_data": ["synthetic.csv"],
  "id": "6164209264b065a2b4ad3aff"
}
```

### Remove Model

Request:

```
PATCH http://localhost:3000/models/PROJECT_ID/MODEL_ID/remove
```

Response:

```json
{
  "parameters": {
    "batch_size": 64,
    "training_cycles": 64
  },
  "title": "model-2",
  "synthetic_data": ["synthetic.csv"],
  "id": "6164209264b065a2b4ad3b00"
}
```

### Upload Real Data

Request:

```
POST http://localhost:3000/projects/PROJECT_ID/upload
```

Body:

```
multipart/form-data file: <data.csv>
```

Response:

```json
{
  "message": "file uploaded",
  "file": "drug.csv"
}
```
