const pdf = require('html-pdf')

function gerarPdf() {
    
}

class gerarPdfService{
    
    async gerarPdfByTipo(aluno, tipo){
      return await pdf.create("DECLARAÇÃO",{}).toFile("./arquivos/declaracao.pdf", (err, res) =>{
            if(err){
                console.log("deu ruim")
            }else{
                console.log(res)
            }
        })
    }
}

module.exports = gerarPdfService