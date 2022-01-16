import reader from "xlsx";

function getSpreadsheetData(sheetPageIndex = 0) {
  const file = reader.readFile('./spreadsheet.xlsx');
  const sheetNames = file.SheetNames;
  const sheets = file.Sheets[sheetNames[sheetPageIndex]];
  const data = reader.utils.sheet_to_json(sheets);

  return data;
}

export default getSpreadsheetData;
