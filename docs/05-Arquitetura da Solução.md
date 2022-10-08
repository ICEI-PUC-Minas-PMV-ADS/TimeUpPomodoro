# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Nesta seção, apresentaremos os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do seu ambiente de hospedagem.

![02-mob-arch](https://user-images.githubusercontent.com/90660755/192877041-2c1ca9d0-b5d0-4ae2-a0ac-20479c7d239f.png)


## Diagrama de Classes

O diagrama de classes a seguir ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![Diagrama de classes](https://user-images.githubusercontent.com/90660755/194677051-c22ec86a-208c-4908-a8aa-d64054d2ecad.jpeg)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

![Modelo ER](https://user-images.githubusercontent.com/90660755/194680468-5db3694f-3b3b-41fb-b649-5cc2fc31fe3d.jpeg)


## Esquema Relacional

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa. Segue abaixo a representação do Modelo ER:

![Esquema Relacional](https://user-images.githubusercontent.com/90660755/194680481-7f0a8f09-db71-435f-8035-b5ccfc53b9bd.jpeg)

## Qualidade de Software 

Se tratando de qualidade de software, podemos listar oito características e trinta subcaracterísticas, seguindo os fundamentos descriminados na norma técnica ISO/IEC 25010, seguem os itens para a avaliação da qualidade mais relevantes para este projeto.

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

### Portabilidade

Por fim a portabilidade será fundamental em nossa aplicação pois ela abrange um público variado e será definida através da capacidade da aplicação ser facilmente transportável, ou seja, se é capaz de executar todas as suas funções em diferentes sistemas operacionais, como Android na versão 9.0 e IOS na versão 10.0. Nosso objetivo é que nossa aplicação possa ser utilizada por tipos de pessoas diferentes em diversos ambientes.


