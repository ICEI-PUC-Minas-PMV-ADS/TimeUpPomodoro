# Arquitetura da Solução



Nesta seção, apresentaremos os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do seu ambiente de hospedagem.

![02-mob-arch](https://user-images.githubusercontent.com/90660755/192877041-2c1ca9d0-b5d0-4ae2-a0ac-20479c7d239f.png)


## Diagrama de Classes

O diagrama de classes a seguir ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![Diagrama de classes](https://user-images.githubusercontent.com/90660755/194677051-c22ec86a-208c-4908-a8aa-d64054d2ecad.jpeg)

## Processos e suas Respectivas Atividades

Nesta sessão, apresentaremos os modelos de gestão do projeto: BPMN, Tabelas, Gráficos ou Dashboards com no mínimo 5 indicadores de desempenho e metas para o processo de negócio e para o processo de desenvolvimento.

Com auxílio das aulas de Modelagem e Gestão de Processos e Negócios, o grupo determinou como método de gestão de processos, o modelo “**Ciclo BPM**”.


![image](https://user-images.githubusercontent.com/78277341/194152367-22ff0c32-7c18-48b0-b2c0-e2d5b7c314c6.png)

É importante destacar a abordagem de que processo é um trabalho ponta a ponta que atravessa a empresa de maneira transversal ou horizontal para criar valor para o cliente. Para Silva (2017, p. 49): “*Processos ponta a ponta são processos que nascem da necessidade do cliente, passam por várias áreas e departamentos, e terminam na entrega do produto ou serviço para o cliente*”.

![image](https://user-images.githubusercontent.com/78277341/194152637-826cfa03-d11a-44e8-abdf-424a775dcc60.png)

Assim, o grupo pretende diminuir a complexidade, fazer o projeto de forma mais ágil e com menos recursos.

![image](https://user-images.githubusercontent.com/78277341/194152816-dfc4f772-8ea0-4d87-b74d-c1afeac9ee60.png)

Para reforçar o comprometimento com o gerenciamento dos processos, iremos realizar um ciclo contínuo, incluindo as seguintes atividades:

1. **Planejamento** = Início do ciclo; orientação estratégica da organização. Quais serão os processos que atenderão esses preceitos da estratégia: detalhamento.
2. **Análise** = compreender as atividades do processos e os resultados que serão entregues. A organização tem condições de realizar? Quais as dificuldades? A análise é realizada por meio de algumas técnicas, com modelagens, entrevistas com as pessoas envolvidas, simulações, etc. Aqui, ainda não se objetiva encontrar soluções, mas apenas analisar eventuais problemas que possam ocorrer. O processo como ele é.
3. **Desenho** = preocupar com as mudanças necessárias do processo que impactarão o alcance das metas e das organizações, visando a satisfação do cliente. Valor do produto que será entregue. O design (desenho) indica algo futuro. Que deverá ser executado. Como o processo será, já incorporadas as melhores detectadas na fase de Análise (To-be)? Em que momento serão implementados os recursos de tecnologias e os responsáveis do processos. Metas e indicadores e como serão suas implementações, como serão executados.
4. **Implementação** = novo as-is. Nessa fase, modelagem, automação, rp, rm, a implementação irá envolver a programação dessas ferramentas. Preparação das bases de dados, etc. Ao seu final, espera-se o processo em execução (automatizado ou manual, ou híbridos)
5. **Monitoriamento e Controle** = a execução do processo será acompanhada. Não só observar, mas é necessário também agir no sentido de controlar as interferências: medições, comparações, indicadores, *Dashboards*, mapas, cartões, etc. Tudo isso para garantir o alinhamento com as estratégias estabelecidas pelo grupo.
6. **Refinamento** = Os ajustes, aperfeiçoar a implementação. Por mais que seja bem planejado, o processo muitas vezes necessita de refinamentos. O refinamento fecha o ciclo BPM de gerenciamento de processos de negócios.

A imagem abaixo demonstra o monitoramento e controle dos 6 elementos, gerados através de dados no Planner, registrados pelos membros, de suas respectivas atividades:

![image](https://user-images.githubusercontent.com/78277341/194153089-17408fe4-229e-4fc3-911f-f0ab0736ab9e.png)


### Modelo e Notação de Processos de Negócio
O modelo *Business Process Model and Notation* (BPMN ou em português Modelo e Notação de Processos de Negócio), foi utilizado para descrever o processo de metodologia adotado para o processo de desenvolvimento e para o processo de negócios. Por ser padronizada, a notação BPMN facilitará o entendimento das pessoas envolvidas no projeto.
Neste sentido, com o modelo BPMN, utilizaremos o seu conjunto de elementos gráficos para representar aquelas atividades de trabalho, agrupadas em processos, para indicar como eles serão executados.

![image](https://user-images.githubusercontent.com/78277341/194153306-c319bd9c-0ccb-4e65-a2d9-3dd235171d4b.png)
                                

Da mesma forma, construímos a modelagem do processo de negócios, facilitando a visão e valorização do cliente.

![image](https://user-images.githubusercontent.com/78277341/194153457-cf062b4c-30d4-4184-ada1-8d5cd1123956.png)
                                 
### Metas e Indicadores

A BPMN utiliza o seu conjunto de elementos gráficos para representar aquelas atividades de trabalho, agrupadas em processos, para indicar como eles são executados:


![image](https://user-images.githubusercontent.com/78277341/194154347-06506bbc-662f-43fc-a011-3124266b0553.png)

Diante disso, o grupo estabeleceu as seguintes metas e indicadores nesse processo de desenvolvimento:

1. Separar regras de negócio das aplicações - **visibilidade e processos mais inteligentes**.
2. Automatizar as regras - **Consistência**
3. Gerenciar um repositório de regras - **Regras como ativos**.
4. Expressar regras de negócio em termos que as pessoas de negócio compreendam - **Visibilidade dos modelos de decisão**
5. Estimular a colaboração entre pessoas de negócio e TI - **Agilidade**

Como meta de negócio, sabe-se que o cliente utilizará o produto com o fim de otimizar o tempo.
Não faz sentido, portanto, que ele gaste muito tempo configurando o serviço. Assim, o grupo estabeleceu que o procedimento de instalar, logar, ver tutorial de uso, determinar tempo e alarme, não deverá ultrapassar 10 minutos.

O objetivo é criar um produto simples e rápido, onde o tempo de instalação e configurações de uso fiquem dentro da margem de aceite (MA) estabelecida pela meta.


| Classificação <br/>de Indicadores | Métrica      |
| ------------- |--------------|
| Viável  | Dentro da Meta |
| Aceitável  | Meta + MA |
| Inviável  | Acima de Meta + MA |

| Evento                    | Descrição                                                        | Meta       | Margem de Aceite (MA) |
|---------------------------|------------------------------------------------------------------|------------|-----------------------|
| Instalação                | Período entre a compra do produto até a completa instalação (**) | 5 minutos  | 3 minutos             |
| Configuração              | Acesso ao app, configurações de conta e configurações de uso      | 5 minutos | 3 minutos             |
| Instalação e Configuração | até 10 minutos                                                   | 10 minutos | 3 minutos             |


| Metas de Negócio | Meta      |      MA      | 
| ------------- |--------------|--------------|      
| downloads  | aumento de 35% em downloads no app |    3.0   |
| receita  | aumento de 25% na receita de anúncios no app |     3.0  |
| retenção  | nenhuma redução na retenção |   3.0    |

Para acompanhar as metas de negócio, o grupo irá integrar o app ao Google Analytics para Firebase, que permite criar um registro quando os usuários abrem o app. O núcleo do Firebase é o Google Analytics, uma solução de análise ilimitada disponível sem custos financeiros. O Analytics se integra a recursos do Firebase e oferece geração ilimitada de relatórios para até 500 eventos distintos que podem ser definidos usando o SDK do Firebase. Com os relatórios do Analytics, o grupo poderá compreender a compenhar claramente o comportamento dos usuários, podendo assim, obter melhores decisões sobre otimizações de desempenho do app.

![image](https://user-images.githubusercontent.com/78277341/194724407-77a13510-ee1a-4743-baae-b1dc860d8f09.png)


Para alcançar as metas, o grupo utilizará o método **_SMART_**, estabelecendo-se 5 indicadores de desempenho:

![image](https://user-images.githubusercontent.com/78277341/194154472-573a0947-e7ed-41dc-b421-821696eb8017.png)

1. **Specific/Específico** = Projeto completo até a data 07/12/2022. Utilização do aplicativo em 10 minutos pelo usuário.

2. **Measurable/Mensurável** = em quanto tempo o resultado deve ser alcançado alcançado? Em 3 meses.

3. **Attainable/Atingível** = considerando a capacidade produtiva dos membros do grupo, é viável a construção de um pomodoro cuja utilização e configuração para uso, não ultrapasse 10 minutos até a data final da conclusão do projeto.

4. **Relevante/Relevant** = a meta é importante pois o serviço está relacionado à administração de tempo e produtividade. Caso o produto atrase o usuário em seus estudos ou tarefas, o produto torna-se completamente inútil. É importante que os membros estabeleçam funcionalidades simples e de fácil usuabilidade para que o principal objetivo do cliente seja atingido: não disperdiçar tempo.

5. **Time Base** = Os membros do grupo deverão ser consultados sobre os prazos de cada etapa do processo, de modo que o cronograma seja definido de forma conjunta entre todos os envolvidos. Cada atividade deverá constar o nome do responsável e data de conclusão.

As etiquetas SMART são definidas no momento em que as atividades são criadas e distribuídas no backlog:

![image](https://user-images.githubusercontent.com/78277341/194154610-2f76d56b-9228-4427-a1cf-eac78fad6698.png)

A figura a seguir mostra uma visão geral e atual do método SMART no backlog do projeto:

![image](https://user-images.githubusercontent.com/78277341/194154699-bb023b9a-ed16-4b6c-8ac8-fcf5a0bb33f3.png)

Para acompanhar o custo e a dificuldade de cada atividade desenvolvida no projeto, foi criado também 3 indicadores de medida: Difícil, Média e Fácil.

![image](https://user-images.githubusercontent.com/78277341/194154763-cbbc3d01-b14c-477d-b4c6-75a6c163b7db.png)

Assim, é possível visualizar as tarefas que irão requerer maior atenção e maior gasto de tempo, servindo inclusive de parâmetro para futuras medições ou atualizações de processos existêntes. Outra vantagem, é a possibilidade de se visualizar possível excesso ao atribuir tarefas à um determinado membro, de modo a distribuir as atividades de forma mais justa e eficiênte de acordo com o grau de dificuldade, sem sobrecarregar os integrantes.


![image](https://user-images.githubusercontent.com/78277341/194154881-76115c79-61d2-45cf-b829-062723d60521.png)


### Quadro Visual Atual de Gestão de Trabalho
Conforme estabelecido na "Figura Processo de Desenvolvimento", após cada integrante chamar uma atividade, ele realizará também o registro do andamento e os indicadores já demonstrados.
A figura a seguir, demonstra o atual quadro de divisão de tarefas, conforme a segunda etapa do projeto. O acompanhamento dinâmico desse quadro, pode ser acessado em nosso Planner [aqui](https://tasks.office.com/sgapucminasbr.onmicrosoft.com/pt-BR/Home/Planner/#/plantaskboard?groupId=ca2f5986-86cc-4dbf-9c21-b586a491ced9&planId=h_Q9NmwXaUijvknhEUY8bWQAEcmA).

![image](https://user-images.githubusercontent.com/78277341/194154961-43eb1136-bd9a-45dc-83bb-ab54cc3d22b0.png)

Na mesma ferramenta, podemos ainda visualizar o  gráfico geral do controle de desempenho dos integrantes:

![image](https://user-images.githubusercontent.com/78277341/194155031-c748b400-d575-4efb-8fd6-df7901f21894.png)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

![Modelo ER](https://user-images.githubusercontent.com/90660755/194680468-5db3694f-3b3b-41fb-b649-5cc2fc31fe3d.jpeg)


## Esquema Relacional

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa. Segue abaixo a representação do Modelo ER:
![Esquema Relacional](https://user-images.githubusercontent.com/90660755/194680481-7f0a8f09-db71-435f-8035-b5ccfc53b9bd.jpeg)

## Modelo Físico

O arquivo modelo.sql contendo o script de criação da tabela do banco de dados do projetio TimeUp  está incluído dentro da pasta src\bd.

Abaixo segue a representação do modelo físico:

![modeloSql](https://user-images.githubusercontent.com/90660755/198830705-1df47cfc-e17c-408e-9320-e538d04b5044.png)


## Qualidade de Software 

O grupo definiu as sub-características para o projeto TimeUP seguindo os fundamentos descriminados na norma técnica ISO/IEC 25010, seguem os itens para a avaliação da qualidade de software.

### Adequação funcional

O público-alvo para qual a aplicação móvel será ofertada são estudantes e profissionais que precisam gerenciar melhor o seu tempo e que utilizem computadores e dispositivos móveis conectados à internet como ferramentas de trabalho e estudo de maneira frequente, através de pesquisas de satisfação será averiguado se a aplicação atende as expectativas dos usuários. 

### Segurança de acesso

Optamos por tratar a segurança com muita seriedade pois nós desenvolvedores dessa aplicação somos os grandes responsáveis pelo sigilo das informações inseridas pelos usuários no sistema.

### Confiabilidade

Ao longo do desenvolvimento do projeto a aplicação será testada por nossos desenvolvedores para identificar algum tipo de falha durante sua execução. Ou ainda se ocorre algum comportamento inesperado durante seu funcionamento após alguma modificação.

### Usabilidade

Durante as reuniões em grupo foi discutido a praticidade do uso do aplicativo e chegamos à conclusão de que um design simples, porém funcional é um dos pilares para uma experiência prazerosa para o usuário. 

### Apreensibilidade

O software apresentará telas de tutorias para evitar ao máximo possíveis dificuldades na execução de determinadas tarefas ao longo de toda a experiência que o usuário tiver enquanto estiver fazendo uso da aplicação.

### Eficiência

Será avaliada a relação entre a performance do software e os mecanismos utilizados como login, tutorial, contador, alarme e o tempo mínimo de resposta para cada funcionalidade do software e máxima velocidade de execução de cada tarefa.  

### Manutenabilidade

A reusabilidade da aplicação significará reduzir custos e tempo no processo de desenvolvimento, aumentar a qualidade, entre outras diversas vantagens. Como nossa aplicação será desenvolvida em React Native, será possível reutilizar componentes para se obter agilidade no desenvolvimento.



Por fim a portabilidade será fundamental em nossa aplicação pois ela abrange um público variado e será definida através da capacidade da aplicação ser facilmente transportável, ou seja, se é capaz de executar todas as suas funções em diferentes sistemas operacionais, como Android na versão 9.0 e IOS na versão 10.0. Nosso objetivo é que nossa aplicação possa ser utilizada por tipos de pessoas diferentes em diversos ambientes.




