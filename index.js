

const { GoogleSpreadsheet } = require('google-spreadsheet');
const credenciais = require('./credentials.json');
const file = require('./file.json');

const getDoc = async () => {
  const doc = new GoogleSpreadsheet(file.id);
  
  await doc.useServiceAccountAuth({
      client_email: credenciais.client_email,
      private_key: credenciais.private_key.replace(/\\n/g, '\n')
  })
  await doc.loadInfo();
  return doc;
}

getDoc().then(doc => {
  console.log(doc.title)
})

getDoc().then(doc => {
  sheet = doc.sheetsByIndex[0];
  sheet.getRows().then(rows => {
    rows.map(row => {
      console.log(row.produto)
    })
  })
})




