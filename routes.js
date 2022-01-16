import express from "express";
import getSpreadsheetData from "./functions.js";

const router = express.Router();

router.get('/leases', (_, response) => {
  const leasesPageIndex = 0;
  const parseColumns = ['Data_Locacao', 'Data_Devolucao'];

  return response.json(getSpreadsheetData(leasesPageIndex, parseColumns));
});

router.get('/clients', (_, response) => {
  const clientsPageIndex = 1;
  const parseColumns = ['Data_Nascimento'];

  return response.json(getSpreadsheetData(clientsPageIndex, parseColumns));
});

router.get('/movies', (_, response) => {
  const moviesPageIndex = 2;

  return response.json(getSpreadsheetData(moviesPageIndex));
});

export default router;
