class DocumentoService {
    async conteudoDeclaracao(aluno) {
        const conteudo = `
         <div style="text-align: center;">
            <div>
                <div>
                    <img width="250px;" src="https://images.educamaisbrasil.com.br/content/superior/instituicao/logo/g/unidesc.png">
                </div>
                <h1>Centro Univesitário de Desenvolvimento do Centro Oeste</h1>
            </div>
            <div>
                <h2></h2>
            </div>

        </div>
        <div style="text-align: center;">
            <h1>Declaração de Matrícula</h1>
            <div>
                <h3 style="text-align: justify;">
                    Declaramos para os devidos fins, que o aluno(a) ${aluno.nome}, portador do CPF: ${aluno.cpf}, RG:
                    ${aluno.rg} encontra-se regularmente matriculado no Centro Universitário de Desenvolvimento do
                    Centro Oeste sobe o nº ${aluno.matricula} e está no ${aluno.semestre} do curso de ${aluno.curso},
                    com inicio em ${aluno.inicio} e previsão de término em ${aluno.conclusao}.
                </h3>
            </div>
        </div>
        <footer style="
                text-align: center; 
                width: 100%;
                height: 100px;
                position: absolute;
                bottom: 0;
                left: 0;"
                >
            <h3>Luziânia-GO</h3>
            <div>
                <h3>-Preencher data-</h3>
            </div>
        </footer>
         `;
        return conteudo;
    }

    async conteudoEmailDeclaracao(aluno) {
        const conteudo = ` 
        <h1> teste de email com conteudo html</h1>
       `;
        return conteudo;
    }

    
}

module.exports = DocumentoService