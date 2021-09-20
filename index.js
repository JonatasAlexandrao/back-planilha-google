

const http = require('http')
const server = http.createServer((req, res) => {
  
  res.end( 'j.toString()' )
})

server.listen(3001, 'localhost', () => {
  console.log('Servidor: http://localhost:3001')
  console.log('Para desligar: ctrl + c')

})





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

const title = getDoc().then(doc => doc.title)

const products = getDoc().then(doc => {
  sheet = doc.sheetsByIndex[0];
  return sheet.getRows().then(rows => {
    return produto = rows.map(row => {
      return row.produto
    })
  })
})

/*products.then(res => {
  console.log('produto:', res)
})
title.then(res => {
  console.log('titulo:', res)
})*/









