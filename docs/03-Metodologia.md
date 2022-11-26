
# Metodologia

As metologias de desenvolvimento de software consistem, basicamente, no conjunto de abordagens que podem ser utilizadas para a criação de sistemas de processamento de informações, nesse caso, códigos. Tendo em vista que existe uma infinade de projetos a serem, ou sendo executados, é coerente que cada um tenha sua particularidade; sendo assim é evidente que ha diversos métodos e que cada um deles possui vantagens e desvantagens, nesse contexto é importante conhecer as metas, os objetivos, prazos e orçamentos envolvidos no projeto para determinar qual é a abordagem mais alinhada. Tal escolha, dependerá do perfil do projeto em questão.

## Relação de Ambientes de Trabalho

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela a seguir.

Ambiente   | Plataforma 
:--------- | :------:
Repositório de código fonte | [GitHub](https://github.com/ICEI-PUC-Minas-PMV-ADS/TimeUpPomodoro)
Projeto de Interface e Wireframes | [Figma](https://www.figma.com/file/j3IXXF3Ovc3VrjcOi2mTeV/TimeUP?node-id=5%3A66) 
Gerenciamento do Projeto | [Planner](https://tasks.office.com/sgapucminasbr.onmicrosoft.com/pt-BR/Home/Planner/#/plantaskboard?groupId=ca2f5986-86cc-4dbf-9c21-b586a491ced9&planId=h_Q9NmwXaUijvknhEUY8bWQAEcmA) e [GitHub](https://github.com/ICEI-PUC-Minas-PMV-ADS/Pomodoro/projects?type=classic) 
Ambiente de desenvolvimento integrado (IDE) | [Visual Studio Code](https://code.visualstudio.com/docs) 
Tecnologias para comunicação | [Teams](https://teams.microsoft.com/_#/school/conversations/Geral?threadId=19:LalckUyFc6HlgnKcRQrdHL5O64qQNmAdV5lP8mI4UsI1@thread.tacv2&ctx=channel) e [Whatsapp](https://www.whatsapp.com/?lang=pt_br)

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o [Git](https://git-scm.com/), sendo utilizado o [Github](https://github.com) para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `develop`: versão de desenvolvimento do software
- `testing`: versão em testes do software

Quanto à gerência de issues, a cada alteração realizada pelos membros do grupo é realizado o upload dentro de sua respectiva branch, conforme abaixo:

- `Allana Tavares`
- `Gabriel Garcia`
- `Kaique Rocha`
- `Leonardo Filter`
- `Mariane Serapião`
- `Sabrina Gomes`

### Gestão do código fonte

Para a gestão do código fonte do software desenvolvido neste projeto, a equipe utilizará um processo baseado no Git Flow. Todas as manutenções no código serão realizadas em branches separados, identificados como Hotfix, Release, Develop e Feature.  A imagem a seguir exemplifica a metodologia do Git Flow.

![GitFlow](https://user-images.githubusercontent.com/64492902/184781117-0f8a8e4c-5847-46ad-8d48-3b5f890d9c34.png)

## Gerenciamento de Projeto

### Divisão de Papéis

A divisão de papéis entre os membros é:

- **Product Owner**: Kaique Rocha
- **Scrum Master**: Sabrina Gomes
- **Design**: Allana Tavares
- **Desenvolvimento**: Allana Tavares, Gabriel Garcia, Kaique Rocha, Leonardo Filter, Mariane Serapião, Sabrina Gomes

### Processo

O grupo utilizou um board no [GitHub Projects](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/182/views/1) e o [Microsoft Planner](https://tasks.office.com/sgapucminasbr.onmicrosoft.com/pt-BR/Home/Planner/#/plantaskboard?groupId=ca2f5986-86cc-4dbf-9c21-b586a491ced9&planId=h_Q9NmwXaUijvknhEUY8bWQAEcmA) a fim de acompanhar andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução. Foram consideradas as seguintes listas:

- **Não iniciada:** para tarefas a serem desenvolvidas dentro da sprint atual.
- **Em andamento:** para tarefas em processo de desenvolvimento dentro da sprint atual.
- **Concluída** para tarefas concluídas dentro da sprint atual.

Segue abaixo, os modelos de soluções adotadas.

No [GitHub Projects](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/182/views/1), o quadro Kanban é atualizado após a realização de commits associados a tarefas nas sprints, demonstrado na imagem:

![GitProjects](https://github.com/ICEI-PUC-Minas-PMV-ADS/TimeUpPomodoro/blob/Mariane-Serapi%C3%A3o/docs/img/gitProjects.png?raw=true)

Já o [Microsoft Planner: ](https://tasks.office.com/sgapucminasbr.onmicrosoft.com/pt-BR/Home/Planner/#/plantaskboard?groupId=ca2f5986-86cc-4dbf-9c21-b586a491ced9&planId=h_Q9NmwXaUijvknhEUY8bWQAEcmA) permite o gerenciamento de pessoal, conforme explicitado na seção anterior.

![Tarefas listadas no Planner](https://github.com/ICEI-PUC-Minas-PMV-ADS/TimeUpPomodoro/blob/Mariane-Serapi%C3%A3o/docs/img/microsoftPlanner.png?raw=true)

### Ferramentas

Já as ferramentas empregadas no projeto e suas respectivas funções são:

|Função     |Ferramentas          | Justificativa|
|-----------|---------------------|---------------|
|Ferramenta de repositório e documentação | [Github](https://github.com) | A ferramenta foi escolhida por ter modelos do curso, bem como uma integração robusta com boards de acompanhamento de projetos, facilitando a gestão de processos|
|Editor de código |[Visual Studio Code](https://code.visualstudio.com/docs) | Foi escolhido por sua integração com o sistema de versão, bem como extensões que agilizam o desenvolvimento de uma aplicação |
|Ferramentas de comunicação |[Visual Studio Code](https://code.visualstudio.com/docs), [Teams](https://teams.microsoft.com/_#/school/conversations/Geral?threadId=19:LalckUyFc6HlgnKcRQrdHL5O64qQNmAdV5lP8mI4UsI1@thread.tacv2&ctx=channel) e [Whatsapp](https://www.whatsapp.com/?lang=pt_br) | Foram ferramentas escolhidas por conveniência: conexão direta ao código, contato com o professor e demais membros e acesso diário - nessa ordem. |
|Ferramentas de diagramação |[Figma](https://www.figma.com/file/j3IXXF3Ovc3VrjcOi2mTeV/TimeUP?node-id=5%3A66) | Foi escolhida por seus recursos de wireframing bem como prototipagem de telas. |
|Ferramentas de modelagem de processos |[BPMN.iO](https://demo.bpmn.io/new) | Foi escolhido por ser uma ferramenta própria para o desenvolvimento desse modelo de fluxograma, focada em fazer mapeamento dos processos, vinculando a estratégia de negócios ao desenvolvimento do sistema para garantir o valor do negócio. |
|Ferramentas de gestão de projetos |[GitHub Projects](https://github.com/ICEI-PUC-Minas-PMV-ADS/Pomodoro/projects?type=classic), [Notion](https://sabrinagomes.notion.site/Projeto-dbadc2074520499f9150314c37507642), [Microsoft Planner: ](https://tasks.office.com/sgapucminasbr.onmicrosoft.com/pt-BR/Home/Planner/#/plantaskboard?groupId=ca2f5986-86cc-4dbf-9c21-b586a491ced9&planId=h_Q9NmwXaUijvknhEUY8bWQAEcmA) | O Projects auxilia na integração de tarefas atribuídas à sua execução em commits, ao passo que o Microsoft Planner permite a avaliação das sprints e um melhor gerenciamento de colaboradores. |

