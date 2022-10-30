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
| 2 | O usuário encontrou erros não-críticos nos fluxos ou precisou de ajudas. |
| 1 | O usuário encontrou erros críticos ou obteve valores incorretos em um caso de teste. |

Assim, quando maior a nota, maior a facilidade de uso para o usuário. Abaixo, temos, em forma de tabela, os casos de testes de usabilidade:
|Caso de teste 01     | CT 01 - Timer |
|-------|-------------------------
|Objetivo do teste| Verificar se o timer regressivo do app está funcionando corretamente  |
|Ações esperadas | 1) Acessar a aplicação. 2) Clicar em "Começar tarefa". 3) Visualizar se o tempo esta regredindo conforme configuração inicial definida pelo usuário. |
|Critérios de êxito| O timer deverá começar com o tempo pré definido pelo usuário e regredir ate 00:00. |

|Caso de teste 02     | CT 02 - Alarme |
|-------|-------------------------
|Objetivo do teste|  Verificar se o alarme soa quando o timer chega a 00:00  |
|Ações esperadas |	1) Acessar a aplicação. 2) Clicar em "Começar tarefa". 3) Quando chegar em 00:00 um alerta sonoro deverá ser emitido. |
|Critérios de êxito| O alarme disparar apos o timer zerar. |

|Caso de teste 03     | CT 03 -  Alternância de tema. |
|-------|-------------------------
|Objetivo do teste| Verificar se o tema altera corretamente entro claro e escuro.|
|Ações esperadas | 1) Acessar a aplicação. 2) Clicar em editar tema. 3) Seleceionar o tema desejado. |
|Critérios de êxito| O tema deve ser alterado quando selecionado no app. |

|Caso de teste 04     | CT 04 -  Adicionar meta |
|-------|-------------------------
|Objetivo do teste| Verificar se a meta pré definida para a atividade vai ser registreada.  |
|Ações esperadas |	1) Acessar a aplicação. 2) Clicar em "Atividade". 3) Selecionar a meta para execução da atividade.|
|Critérios de êxito| A meta deve ser registrada pelo app conforme criterios do usuário. |




