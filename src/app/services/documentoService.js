class DocumentoService {
    async conteudoDeclaracao(aluno) {
        const conteudo = ` 
            <div style="margin: 0 auto; width: 90%;">
                <div style="text-align: center;">
                    <div>
                        <div>
                            <img width="150px;" src="https://images.educamaisbrasil.com.br/content/superior/instituicao/logo/g/unidesc.png">
                        </div>
                        <h4 style="font-size:14px; font-family: 'Roboto', sans-serif;"> Centro Univesitário de Desenvolvimento do Centro Oeste</h4>
                    </div><br><br>
                </div>
                <div style="text-align: center; margin: 0 auto; width: 85%; text-indent: 3ch;">
                    <h2 style="font-size:14px; font-family: 'Roboto', sans-serif;"> Declaração de Matrícula</h2><br>
                    <div >
                        <p style="text-align: justify; line-height: 1.9; font-size:12px; font-family: 'Roboto', sans-serif;">
                            Declaramos para os devidos fins, que o aluno(a) <b>${aluno.nome}</b>, portador do CPF: <b>${aluno.cpf}</b>, RG:
                            <b>${aluno.rg}</b> encontra-se regularmente matriculado no Centro Universitário de Desenvolvimento do
                            Centro Oeste sobe o nº <b>${aluno.matricula}</b> e está no <b>${aluno.semestre}</b> do curso de <b>${aluno.curso}</b>,
                            Por ser verdade firmo a presente declaração.
                        </p>
                    </div>
                </div>
            </div>
            <footer style="text-align: center; width:100%; height: 100px; position: absolute; font-size:12px; bottom: 0; left: 0;">
                <h3>Luziânia-GO</h3>
                <div>
                    <h3 style="font-size:11px; font-family: 'Roboto', sans-serif;" > 07-Jun-2021</h3>
                </div>
            </footer>
         `;
        return conteudo;
    }

    async conteudoEmailDeclaracao(aluno) {
        const conteudo = ` 
            <div style="margin: 0 auto; width: 50%;">
                <div style="text-align: center; background-color: rgb(1, 120, 218); color: rgb(250, 250, 250); height: 70px; line-height: 60px; border-radius: 5px">
                        <h1 style="text-shadow: rgb(32, 32, 32) 0.1em 0.1em 0.2em"> Atendimento Acadêmico Unidesc </h1>
                        
                </div>
                <div style="text-align: center; margin-bottom: 50px;">
                        <p style="font-size: 11px;"><b>Esta mensagem foi enviada a partir do atendimento virtual do AgileBot </b></p><br>
                </div>
                <div style="text-align: left; margin-bottom: 50px;">
                        <p>Olá <b>${aluno.nome}</b>!<br></p>
                        <p> Em anexo se encontra o documento solicitado de <b>Declaração</b> no atendimento virtual.<br><br>
                                O Unidesc Centro Universitário agradece o seu contato!
                        </p><br><br><br>
                        
                </div>
                <div style="text-align: center;">
                        <img style="width: 80px;" src="https://assets.change.org/photos/5/cn/ek/HgCnekdQlZMnqdJ-400x225-noPad.jpg?1585064943">
                        <h1 style="font-size: 20px;">Central de Atendimento ao Aluno</h1>
                        <p style="font-size: 12px;">CAMPUS II (61) 3627-0250 <br>Quadra 00, Esp. Lote 0, Area Especial,<br> 
                        Parque Rio Branco CEP 72.870-000 - Valparaíso de Goiás - GO
                        </p>
                </div>
                <div style="text-align: center; margin-bottom: 100px;">
                        <h4 style="background-color: rgb(1, 120, 218); text-shadow: rgb(46, 46, 46) 0.1em 0.1em 0.2em; color: rgb(252, 252, 252); height: 60px; line-height: 50px; border-radius: 5px"> Agile Bot® - 2021 Carlos Eduardo & Wanderson Rafael</h4>
                </div>
            </div>
       `;
        return conteudo;
    }


}

module.exports = DocumentoService