const pdf = require('html-pdf')
const tipoAtendimento = require('../utils/tipoAtendimento');
const pathAtendimento = require('../utils/pathAtendimentos')
const documentoService = require('../services/documentoService')

function gerarPdf(conteudo, matricula, path) {
    return pdf.create(conteudo, {}).toFile(`${path}-${matricula}.pdf`, (err, res) => {
        if (err) {
            console.log("Erro ao gerar PDF", err)
        } 
    })
}

class gerarPdfService {

    async gerarPdfByTipo(aluno, tipo) {
        if (tipo === tipoAtendimento.DECLARACAO) {
            const conteudo = await new documentoService().conteudoDeclaracao(aluno);
            gerarPdf(conteudo, aluno.matricula, pathAtendimento.PATH_DECLARACAO);
        }
    }
}

module.exports = gerarPdfService