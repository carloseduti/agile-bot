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
        <div style="text-align: center; margin-bottom: 100px; ">
        <h1 style="background-color: rgb(44, 102, 226); color: antiquewhite; height: 60px; line-height: 60px;"> Bem vindo academico unidesc </h1><br>
        <h3>Esta mensagem foi enviada a partir do atendimento virtual do AgileBot </h3>
        <p>Olá ${aluno.nome}, em anexo se encontra o documento solicitado de Declaração no Atendiemento virtual,</p>
        </div>
        <div style="text-align: center;">
        <img style="width: 80px;" src="https://assets.change.org/photos/5/cn/ek/HgCnekdQlZMnqdJ-400x225-noPad.jpg?1585064943">
        <h1 style="font-size: 20px;">Central de atendimento ao Aluno</h1>
        <p style="font-size: 12px;">CAMPUS II (61) 3627-0250 Quadra 00, Esp. Lote 0, Area Especial,<br> 
        Gleba D1, Campus Universitário Bairro: Parque Rio Branco CEP 72.870-000 - Valparaíso de Goiás - GO
        </p>
        </div>
        <div style="text-align: center; margin-bottom: 100px;">
        <h5 style="background-color: rgb(44, 102, 226); color: antiquewhite; height: 60px; line-height: 50px;"> Agile Bot® - 2021 Carlos Eduardo & Wanderson Rafael</h5>
        </div>
       `;
        return conteudo;
    }


}

module.exports = DocumentoService