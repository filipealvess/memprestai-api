import express from "express";

const router = express.Router();

router.get('/leases', (request, response) => {
  return response.send('leases');
});

router.get('/clients', (request, response) => {
  return response.send('clients');
});

router.get('/movies', (request, response) => {
  return response.send('movies');
});

export default router;
