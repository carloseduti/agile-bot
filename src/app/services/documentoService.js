class DocumentoService {
    async conteudoDeclaracao(aluno) {
        const conteudo = ` <div style="text-align: center;">
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
            <p style="text-align: justify;">
                Declaramos para os devidos fins, que o aluno(a) <b>${aluno.nome}</b>, portador do CPF: <b>${aluno.cpf}</b>, RG:
                <b>${aluno.rg}</b> encontra-se regularmente matriculado no Centro Universitário de Desenvolvimento do
                Centro Oeste sobe o nº <b>${aluno.matricula}</b> e está no <b>${aluno.semestre}</b> do curso de <b>${aluno.curso}</b>,
                com inicio em <b>${aluno.inicio}</b> e previsão de término em <b>${aluno.conclusao}</b>.
            </p>
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
        <div style="margin: 0 auto; width: 50%;">
            <div style="text-align: center; background-color: rgba(35, 38, 216, 0.808); color: antiquewhite; height: 120px; line-height: 8px; border-radius: 5px">
                    <img style="width: 60px; height: 6opx; margin-top: 10px;" src="https://static.crozdesk.com/web_app_library/providers/logos/000/003/155/original/chatbots-builder-1559230712-logo.png?1559230712">
                    <h1 style="text-shadow: rgb(119, 116, 116) 0.1em 0.1em 0.2em"> Atendimento academico unidesc </h1>
                    
            </div>
            <div style="text-align: center; margin-bottom: 50px;">
                    <h3>Esta mensagem foi enviada a partir do atendimento virtual do AgileBot </h3>
            </div>
            <div style="text-align: left; margin-bottom: 50px;">
                    <p>Olá <b>${aluno.nome}</b>!<br></p>
                    <p> Em anexo se encontra o documento solicitado de aluno.tipo no Atendiemento virtual</p><br><br>
                    <p>Atenciosamente,</p>
            </div>
            <div style="text-align: center;">
                    <img style="width: 80px;" src="https://assets.change.org/photos/5/cn/ek/HgCnekdQlZMnqdJ-400x225-noPad.jpg?1585064943">
                    <h1 style="font-size: 20px;">Central de atendimento ao Aluno</h1>
                    <p style="font-size: 12px;">CAMPUS II (61) 3627-0250 <br>Quadra 00, Esp. Lote 0, Area Especial,<br> 
                    Parque Rio Branco CEP 72.870-000 - Valparaíso de Goiás - GO
                    </p>
            </div>
            <div style="text-align: center; margin-bottom: 100px;">
                    <h4 style="background-color: rgba(12, 9, 9, 0.808);color: antiquewhite; height: 60px; line-height: 50px; border-radius: 5px"> Agile Bot® - 2021 Carlos Eduardo & Wanderson Rafael</h4>
            </div>
        </div>
       `;
        return conteudo;
    }


}

module.exports = DocumentoService