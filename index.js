const express = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname, "templates")

app.get('/', (requisicao, resposta) => {
    resposta.send("estou fununciando com expresso")
    console.log(caminhoBase)
})

app.listen(3000, () => {
    console.log("server on no 3000")
})