# Registro de Testes de Usabilidade

O Registro de Testes de Usabilidade é um relatório que contém as evidências dos testes e relatos dos usuários participantes, baseado no Plano de Testes de Usabilidade desenvolvido para os casos de uso desta etapa. Quanto maior for a nota, maior a facilidade no uso da aplicação.

Foi considerada a inclusividade na paleta de cores, de modo que pessoas com daltonismo não tenham dificuldades por causa das cores escolhidas. Assim, foi utilizada a ferramenta Adobe Colors para a verificação da acessibilidade das paletas de cores bem como de seu contraste na interface com o usuário. Os fluxos e uso da paleta de cores podem ser verificados nos protótipos construídos no [Figma](https://www.figma.com/file/j3IXXF3Ovc3VrjcOi2mTeV/TimeUP?node-id=32%3A462). Além disso, foram considerados os seguintes princípios para a construção do fluxo de clientes e funcionários:

   1. Visibilidade do status do sistema;
   2. Correspondência entre o sistema e o mundo real;
   3. Liberdade e controle do usuário;
   4. Consistência e padrões;
   5. Prevenção de erros;
   6. Reconhecer ao invés de lembrar;
   7. Flexibilidade e Eficiência;
   8. Estética e Design minimalista;
   9. Auxiliar usuários a reconhecer, diagnosticar e recuperar erros;
   10. Ajuda e Documentação.


## Testes de usabilidade em sua primeira versão

| Caso de Teste | **CT 01 - Timer** |
| ------ | --------- |
| Registro de teste | - Erro crítico de software a ser revisto na próxima etapa, afetando a experiência do usuário com o timer por impedir o término do fluxo de teste. |
| Nota | 2 | 

| Caso de Teste | **CT 05 - Cadastro de novo usuário** |
| ------ | --------- |
| Registro de teste | - Mensagem de erro confusa, "Erro no Cadastro", sem informar se o erro é no email ou na senha. <br> - Quando o cadastro falha, o usuário é redirecionado para tela de "Login", ao invés de ser direcionado, corretamente, para a tela de "Cadastro". <br> - Requisito não explicitado ao usuário: senha deve ter, no mínimo, 6 dígitos e não pode ter caracteres. <br> - A confirmação de cadastro é confusa: "Algo deu errado. Cadastro Realizado com sucesso!"  |
| Nota | 1 |

| Caso de Teste | **CT 05 - Login de usuário (email)** |
| ------ | --------- |
| Registro de teste | - Usuário entra no aplicativo com seu email e senha cadastrados.  |
| Nota | 5 |

Dessa forma, sugerem-se melhorias na próxima etapa:

| Prioridade/Tipo de Erro | Melhorias e modificações |
| ------ | --------- |
| Prioridade alta (Erros críticos) | 1. Call to action esclarecendo requisitos de senha para cadastro (no mínimo 6 dígitos, sem letras nem caracteres especiais). <br> 2. Em caso de falha de cadastro, aviso de falha seguido por redirecionamento à página de cadastro. <br> 3. Mudança da mensagem de confirmação (Cadastro realizado com sucesso!) |
| Prioridade alta (Erros de fluxo) | 1. Questão de software que afeta diretamente experiência do usuário: apresentação de contagem regressiva do cronômetro. |

