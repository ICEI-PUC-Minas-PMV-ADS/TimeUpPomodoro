
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

A metodologia engloba ferramentas, ambientes de trabalho e processos utilizados pela equipe. São descritas as ferramentas de gestão, implementação e manutenção dos códigos e demais artefatos, bem como ferramentas de divisão de tarefas e gerenciamento do projeto.

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o [Git](https://git-scm.com/), sendo utilizado o [Github](https://github.com) para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

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

O grupo utilizou um board no GitHub Projects a fim de acompanhar andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução. Foram consideradas as seguintes listas:

- **Product Backlog:** é uma lista detalhada de todas as tarefas (entregas) que serão feitas durante o projeto. Caso surja a necessidade de incorporar novas atividades ao projeto, estas devem ser adicionadas a esta lista.
- **Kanban:** é um Scrum Board que mostra o progresso da realização das Sprints Backlogs. Este quadro é delimitado em: To Do, Doing e Done.
- **To Do:** É a lista dos Backlogs que serão trabalhados na Sprint em curso.
- **Doing (In progress):** É a lista de tarefas que estão sendo executadas no momento pela equipe.
- **Done:** É a lista de tarefas da Sprint que já foram concluídas e estão prontas para serem entregues ao usuário.

No Github Projects, o quadro Kanban é atualizado após a realização de commits associados a tarefas nas sprints, demonstrado na imagem:
![GitProjects](https://github.com/ICEI-PUC-Minas-PMV-ADS/Pomodoro/blob/main/docs/img/kanban.jpg)

Já o [Microsoft Planner: ](https://tasks.office.com/sgapucminasbr.onmicrosoft.com/pt-BR/Home/Planner/#/plantaskboard?groupId=ca2f5986-86cc-4dbf-9c21-b586a491ced9&planId=h_Q9NmwXaUijvknhEUY8bWQAEcmA) permite o gerenciamento de pessoal, conforme explicitado na seção anterior.



### Ferramentas

Já as ferramentas empregadas no projeto e suas respectivas funções são:

|Função     |Ferramentas          | Justificativa|
|-----------|---------------------|---------------|
|Ferramenta de repositório e documentação | [Github](https://github.com) | A ferramenta foi escolhida por ter modelos do curso, bem como uma integração robusta com boards de acompanhamento de projetos, facilitando a gestão de processos|
|Editor de código |Visual Studio Code | Foi escolhido por sua integração com o sistema de versão, bem como extensões que agilizam o desenvolvimento de uma aplicação |
|Ferramentas de comunicação |Github, Microsoft Teams, WhatsApp | Foram ferramentas escolhidas por conveniência: conexão direta ao código, contato com o professor e demais membros e acesso diário - nessa ordem. |
|Ferramentas de diagramação |Figma | Foi escolhida por seus recursos de wireframing bem como prototipagem de telas. |
|Ferramentas de modelagem de processos |Astah, BPMN.iO | |
|Ferramentas de gestão de projetos |GitHub Projects, Notion, [Microsoft Planner: ](https://tasks.office.com/sgapucminasbr.onmicrosoft.com/pt-BR/Home/Planner/#/plantaskboard?groupId=ca2f5986-86cc-4dbf-9c21-b586a491ced9&planId=h_Q9NmwXaUijvknhEUY8bWQAEcmA) | O Projects auxilia na integração de tarefas atribuídas à sua execução em commits, ao passo que o Microsoft Planner permite a avaliação das sprints e um melhor gerenciamento de colaboradores. |

