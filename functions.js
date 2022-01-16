import reader from "xlsx";

function getSpreadsheetData(sheetPageIndex = 0, parseColumns = []) {
  const file = reader.readFile('./spreadsheet.xlsx');
  const sheetNames = file.SheetNames;
  const sheets = file.Sheets[sheetNames[sheetPageIndex]];
  const sheetData = reader.utils.sheet_to_json(sheets);

  return parseSheetData(sheetData, parseColumns);
}

function parseSheetData(sheetData, parseColumns) {
  const data = sheetData.map(row => {
    for (const columnName in row) {
      parseColumns.forEach(parseColumn => {
        if (columnName === parseColumn) {
          const { y, m, d } = reader.SSF.parse_date_code(row[columnName]);
          const date = new Date(y, m, d);

          row[columnName] = date;
        }
      });
    }

    return row;
  });

  return data;
}

export default getSpreadsheetData;
