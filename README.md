# Statistics Service
This service counts the number of current users browsing the frontend dentist web server. When a user connects, it opens a websocket which increments the current users count. When a user disconnects, the count is decremented. There is a GET endpoint that bash scripts can use via the API gateway to obtain a JSON object with the current user count.

# Setup

## Local installation

```
git clone git@git.chalmers.se:courses/dit355/2023/student-teams/dit356-2023-04/statistics-service.git
```

# Run locally
In root run:
```
npm install
npm start
```

# Docker

In root directory, run:
```
# docker build -t statistics-service .
# docker run -p 5177:5177 statistics-service
```
