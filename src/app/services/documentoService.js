class DocumentoService {
    async conteudoDeclaracao(aluno) {
        const conteudo = ` <div style="margin: 0 auto; width: 90%;">
        <div style="text-align: center;">
            <div>
                <div>
                    <img width="150px;" src="https://images.educamaisbrasil.com.br/content/superior/instituicao/logo/g/unidesc.png">
                </div>
                <h3 style="font-size:14px">Centro Univesitário de Desenvolvimento do Centro Oeste</h3>
            </div><br><br>
            <div>
                <h2></h2>
            </div>
    
        </div>
        <div style="text-align: center; margin: 0; text-indent: 3ch;">
            <h3 style="font-size:14px">Declaração de Matrícula</h3>
            <div><br>
                <p style="text-align: justify; font-size:11px; line-height: 1.8;">
                    Declaramos para os devidos fins, que o aluno(a) <b>${aluno.nome}</b>, portador do CPF: <b>${aluno.cpf}</b>, RG:
                    <b>${aluno.rg}</b> encontra-se regularmente matriculado no Centro Universitário de Desenvolvimento do
                    Centro Oeste sobe o nº <b>${aluno.matricula}</b> e está no <b>${aluno.semestre}</b> do curso de <b>${aluno.curso}</b>,
                    com inicio em <b>${aluno.inicio}</b> e previsão de término em <b>${aluno.conclusao}</b>.
                </p>
            </div>
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
        <h3 style="font-size:14px">Luziânia-GO</h3>
        <div>
            <h3 style="font-size:14px">07-Jun-2021</h3>
        </div>
    </footer>
         `;
        return conteudo;
    }

    async conteudoEmailDeclaracao(aluno) {
        const conteudo = ` 
        <div style="margin: 0 auto; width: 50%;">
            <div style="text-align: center; background-color: rgba(1, 65, 241, 0.808); color: antiquewhite; height: 70px; line-height: 60px; border-radius: 5px">
                    <h1 style="text-shadow: rgb(0, 0, 0) 0.1em 0.1em 0.2em"> Atendimento academico unidesc </h1>
                    
            </div>
            <div style="text-align: center; margin-bottom: 50px;">
                    <h3>Esta mensagem foi enviada a partir do atendimento virtual do AgileBot </h3><br>
            </div>
            <div style="text-align: left; margin-bottom: 50px;">
                    <p>Olá <b>${aluno.nome}</b>!<br></p>
                    <p> Em anexo se encontra o documento solicitado de ${aluno.tipo} no Atendiemento virtual,<br>
                            O centro Universitario Unidesc agradece o seu contato!
                    </p><br><br><br>
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
                    <h4 style="background-color: rgba(1, 65, 241, 0.808); text-shadow: rgb(0, 0, 0) 0.1em 0.1em 0.2em; color: antiquewhite; height: 60px; line-height: 50px; border-radius: 5px"> Agile Bot® - 2021 Carlos Eduardo & Wanderson Rafael</h4>
            </div>
        </div>
       `;
        return conteudo;
    }


}

module.exports = DocumentoService