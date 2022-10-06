const express = require('express')
const path = require('path')
const app = express()

// Definindo o template engine
app.set('view engine', 'ejs')

// Definindo os arquivos estáticos
//app.use(express.static(path.join(__dirname, 'views')))


// Definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))


// rotas
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/sobre', (req, res) => {
  res.send('Estamos na página sobre')
})


// 404 Error Not Found - Middleware
app.use((req, res) => { 
  res.send('404 Not Found')
})


// executando o servidor
const port = process.env.PORT || 5500
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})