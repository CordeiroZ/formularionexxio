function doPost(e) {
    try {
        var ss = SpreadsheetApp.getActiveSpreadsheet();
        var sheet = ss.getSheetByName("Dados");
        var data = e.parameter;

        Logger.log(JSON.stringify(data)); // Log dos dados recebidos

        sheet.appendRow([data.nome, data.celular, data.veiculo, data.ano_veiculo]);

        return ContentService.createTextOutput("success");
    } catch (error) {
        Logger.log("Erro: " + error.toString());
        return ContentService.createTextOutput("error");
    }
}