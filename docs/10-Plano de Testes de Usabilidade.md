# Plano de Testes de Usabilidade

A principal função do plano de testes de usabilidade é avaliar a qualidade de de interação do app pré definida pela equipe de desenvolvimento. Iremos utilizar o modelo de descobertas de problemas. Serão selecionados usurários com conhecimentos diversos sobre tecnologia para avaliação do app. O teste será realizado individualmente por um criador e um usuário testador, considerando:

- Finalização da tarefa
- Quantidade de erros por tarefa
- Tempo para completar a tarefa
- Feedback de como foi a experiência para os participantes, em uma pergunta aberta de modo a não influenciar sua resposta.

## Avaliação

Será considerada a escala Likert para avaliação, de 1 a 5, sendo:

| Nota | Facilidade de uso (deduções por erros) |
| ---- |---- |
| 5 | O usuário não apresentou erros nem demora. |
| 4 | O usuário não apresentou erros, mas demorou para a finalização do teste. |
| 3 | O usuário encontrou 1 erro não-crítico nos fluxos ou precisou de uma ajuda simples. |
| 2 | O usuário encontrou erros não-críticos nos fluxos ou precisou de ajuda. |
| 1 | O usuário encontrou erros críticos ou obteve valores incorretos em um caso de teste. |

Assim, quando maior a nota, maior a facilidade de uso para o usuário. Abaixo, temos, em forma de tabela, os casos de testes de usabilidade:


|Caso de teste 01     | CX 01 - Timer                                                                                                                                                   |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------
|Objetivo do teste| Verificar se o timer regressivo do app está funcionando corretamente                                                                                            |
|Ações esperadas | 1) Acessar a aplicação. <br> 2) Clicar em "Começar tarefa". <br> 3) Visualizar se o tempo esta regredindo, conforme configuração inicial definida pelo usuário. |
|Critérios de êxito| O timer deverá começar com o tempo pré definido pelo usuário e regredir ate 00:00.                                                                              |

|Caso de teste 02     | CX 02 - Alarme |
|-------|-------------------------
|Objetivo do teste|  Verificar se o alarme soa quando o timer chega a 00:00  |
|Ações esperadas |	1) Acessar a aplicação. <br>  2) Clicar em "Começar tarefa".  <br> 3) Quando chegar em 00:00 um alerta sonoro deverá ser emitido. |
|Critérios de êxito| O alarme disparar apos o timer zerar. |

|Caso de teste 03     | CX 03 -  Alternância de tema                                                                 |
|-------|----------------------------------------------------------------------------------------------
|Objetivo do teste| Verificar se o tema altera para modo noturno.                                                |
|Ações esperadas | 1) Acessar a aplicação.  <br> 2) Clicar em editar tema.  <br> 3) Selecionar o tema desejado. |
|Critérios de êxito| O tema deve ser alterado quando selecionado um botão no campo superio do app.                |

|Caso de teste 04     | CX 04 -  Adicionar Meta/Atividade                                                                                                                                                    |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
|Objetivo do teste| Verificar se a meta pré definida para a atividade vai ser registrada.                                                                                                                |
|Ações esperadas | 	1) Acessar a aplicação.  <br>  2) Clicar em "Atividade".  <br> 3) Inserir um nome para a meta. <br> 4) Excluir a meta.<br> 5) As atividades ficam salvas no dispositivo do usuário. |
|Critérios de êxito| A meta deve ser registrada pelo app conforme critérios do usuário.                                                                                                                   |
|Critérios de êxito| O usuário poderá excluir a meta.                                                                                                                                                     |
|Critérios de êxito| Se  usuário sair do sistema, as metas permanecerão salvas no dispositivo.                                                                                                            |

|Caso de teste 05    | CX 05 -  Cadastro de novo usuário |
|-------|-------------------------
|Objetivo do teste| Verificar se as CTA (_call to action_) e fluxo de cadastrar os serviços disponibilizados são claros para o usuário.  |
|Ações esperadas |	1) Acessar a aplicação.  <br>  2) Clicar em "Cadastro de novo usuário".  <br> 3)Inserir email e senha de acordo com requisitos. <br> 4) Notificação de sucesso e login automático na nova conta. |
|Critérios de êxito| O usuário registra e acessa sua nova conta. |

|Caso de teste 06     | CX 06 -  Login de usuário (email) |
|-------|-------------------------
|Objetivo do teste| Verificar o fluxo de login de usuário cadastrado no aplicativo.  |
|Ações esperadas |	1) Acessar a aplicação.  <br>  2) Clicar em "Login".  <br> 3) Inserir email e senha cadastrados. <br> 4) Login na conta. |


