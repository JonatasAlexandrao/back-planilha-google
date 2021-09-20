

const express = require("express")
const app = express()

/*
app.get('/user', (req, res) => {
  res.send('Listar usuário')
})

app.post('/user', (req, res) => {
  res.send('Incluir usuário')
})

app.put('/user/:id', (req, res) => {
  res.send(`editar o usuário ${req.params.id}`)
})

app.delete('/user/:id', (req, res) => {
  res.send(`excluir o usuário ${req.params.id}`)
})

*/


app.get('/planilha', async (req, res) => {
  res.send(await title())
})


app.listen(3001, () => {
  console.log('rodando! Olá server')
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

//const title = getDoc().then(doc => doc.title)

const products = getDoc().then(doc => {
  sheet = doc.sheetsByIndex[0];
  return sheet.getRows().then(rows => {
    return produto = rows.map(row => {
      return row.produto
    })
  })
})



/*
title.then(res => {
  console.log('titulo:', res)
})
*/

async function title(){
  const res = getDoc().then(doc => doc.title)
  return res
} 

/*const t = title()

console.log(t)*/