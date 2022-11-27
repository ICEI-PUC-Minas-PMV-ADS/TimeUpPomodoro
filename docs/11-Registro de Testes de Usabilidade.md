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

| Caso de Teste | **CT 01 - Timer**                                                          |
| ------ |----------------------------------------------------------------------------|
| Registro de teste | - O relógio cronometra corretamente e aceita edição do tempo pelo usuário. |
| Nota | 5                                                                          | 


| Caso de Teste | **CT 02 - Alarme**                                                        |
| ------ |---------------------------------------------------------------------------|
| Registro de teste | - Um som é emitido ao fim da execução do tempo cronometrado. |
| Nota | 5                                                                         |

| Caso de Teste | **CT 03 - Alternância de tema**                               |
| ------ |---------------------------------------------------------------|
| Registro de teste | - É possível alternar para o modo Dark na tela de cronômetro. |
| Nota | 5                                                             |


| Caso de Teste | **CT 04 - Registro de Meta/atividade**                                                                        |
| ------ |---------------------------------------------------------------------------------------------------------------|
| Registro de teste | - É possível registrar metas. <br> - É possível excluir as metas.  <br> - As metas são salvas no dispositivo. |
| Nota | 5                                                                                                             


| Caso de Teste | **CT 05 - Cadastro de novo usuário**                                                                                                                                                                                     |
| ------ |--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Registro de teste | - O usuário registra e acessa sua nova conta. <br> - Notificação de sucesso e login automático na nova conta.  <br> - Requisito não explicitado ao usuário: O sistema não é capaz de identificar usuários já existentes. |
| Nota | 3                                                                                                                                                                                                                       |


| Caso de Teste | **CT 06 - Login de usuário (email)**                                                                                                                                                                                                                                               |
| ------ |------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Registro de teste | - Usuário entra no aplicativo com seu email e senha cadastrados. <br> - Notificação de sucesso e login automático na nova conta.  <br> - Requisito não explicitado ao usuário: O sistema não é capaz de informar qual foi o erro realizado pelo usuário: se na senha ou no e-mail. |
| Nota | 5                                                                                                                                                                                                                                                                                  |

Dessa forma, sugerem-se melhorias na próxima etapa:

| Prioridade/Tipo de Erro | Melhorias e modificações                                                                                                                                                                                                                                                                                                   |
| ------ |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Prioridade alta (Erros críticos) | 1. Call to action esclarecendo requisitos de senha para cadastro (no mínimo 6 dígitos, sem letras nem caracteres especiais). <br> 2. Em caso de falha de cadastro, aviso de falha seguido por redirecionamento à página de cadastro. <br> 3. Identificação precisa do erro do usuário: se erro está na senha ou no e-mail. |
| Prioridade alta (Erros de fluxo) | 1. Questão de software que afeta diretamente experiência do usuário: apresentação de contagem regressiva do cronômetro.                                                                                                                                                                                                    |

