import express from "express";
import getSpreadsheetData from "./functions.js";

const router = express.Router();

router.get('/leases', (request, response) => {
  const leasesPageIndex = 0;

  return response.json(getSpreadsheetData(leasesPageIndex));
});

router.get('/clients', (request, response) => {
  const clientsPageIndex = 1;

  return response.json(getSpreadsheetData(clientsPageIndex));
});

router.get('/movies', (request, response) => {
  const moviesPageIndex = 2;

  return response.json(getSpreadsheetData(moviesPageIndex));
});

export default router;
