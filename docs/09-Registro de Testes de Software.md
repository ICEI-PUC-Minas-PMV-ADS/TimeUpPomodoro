# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)

![image](https://user-images.githubusercontent.com/78277341/198857623-23cb24f0-70bf-49b3-9c7f-bafb1aa3cb78.png)
![image](https://user-images.githubusercontent.com/78277341/198857630-5f141719-078d-42e6-9b0c-697670c66c45.png)
ao tentar acessar sem senha
![image](https://user-images.githubusercontent.com/78277341/198857944-242f388c-5ff6-4647-98c9-323e86dc424d.png)
ao tentar acessar com senha sem realizar o cadastro
obs: o sistema não informa ao usuário que ele não possui cadastro
O sistema ainda não emite mensagem descrevendo o tipo de erro: Erro ao acessar o cadastro, Senha incorreta, ou usuário incorreto. 
Fazendo Cadastro
![image](https://user-images.githubusercontent.com/78277341/198858060-07419cbf-b2cd-45ac-acc4-150a51b25c6d.png)

1. tentando com email inexistente e sem preencher a senha: 
2. O sistema não é capaz de identificar que o email é inexistente 
3. O sistema informa corretamente que há erro no cadastro. 

![image](https://user-images.githubusercontent.com/78277341/198858108-1d3e4abe-a582-4ea8-a292-eb2a93693e2c.png)

Ao clicar emm ok, o usuário é novamente dirigido para a tela de cadastro. 
Preenchendo os campos:
1. Em email, digitmados endereço inexistênte. 
2. Em senha, preenchemos com uma senha fraca, sem numeração. 
3. Clicamos em cadastrar. 

![image](https://user-images.githubusercontent.com/78277341/198858142-ab7c4630-85af-4437-b225-2ba581f4f0f1.png)


![image](https://user-images.githubusercontent.com/78277341/198858133-629f2548-acf3-4ac5-8b4e-3ceeaac0bd77.png)

O sistema emite mensagem: Erro no Cadastro, mas não informa se o erro é no email ou na senha 

email correto: e senha de palavras se números: nirvana

![image](https://user-images.githubusercontent.com/78277341/198858203-34377d47-1cb6-41d2-ac4b-c981a7f8d1c0.png)

o sistema mostra uma mensagem  incongruente: Algo deu errado ao mesmo tempo que mostra: Cadastro realizado com sucesso!

![image](https://user-images.githubusercontent.com/78277341/198858227-3b3fcc5e-c187-4ed4-8623-6ef6ec49e85e.png)

O cadastro não é realizado e o usuário é remetido novamente para tela de Login.
O usuário deve ser remetido para tela de Cadastro e não de Login

Efetuando cadastro com email correto e senha com no mínimo 6 dígitos: 123456
![image](https://user-images.githubusercontent.com/78277341/198858267-99d3ac1a-b843-4cd9-a91e-543db4a44720.png)

Cadastro email e senha com 6 dígitos: 
![image](https://user-images.githubusercontent.com/78277341/198858404-5be3da41-05fc-4e08-a672-7360be07604c.png)

![image](https://user-images.githubusercontent.com/78277341/198858412-769847c4-f333-40ea-834f-8b06e0299e62.png)

![image](https://user-images.githubusercontent.com/78277341/198858471-e60408cc-8762-495f-8233-fe2d0cb4173d.png)

Navegando no tutorial:

A primeira tela é mostrada, e o usuário acompanha o tutorial clicando nos botões vamos lá e próximo:

As telas com as instruções são mostradas de forma simples e animação graciosa:
![image](https://user-images.githubusercontent.com/78277341/198858510-26a33ba6-895b-4d8f-995c-6bb5978a59c7.png)

![image](https://user-images.githubusercontent.com/78277341/198858518-cc3fbbe6-5bec-4882-a45b-41afca78b5b6.png)

![image](https://user-images.githubusercontent.com/78277341/198858524-f57aa76b-8510-476f-b8d5-d6764d7a9ee2.png)

![image](https://user-images.githubusercontent.com/78277341/198858528-b4f967e5-6093-4525-b4e3-de8b8345912f.png)

O usuário poderá retornar a tela quando quiser, clicando no botão retornar do Android. 

![image](https://user-images.githubusercontent.com/78277341/198858556-07e2bda2-4878-447a-98a5-476a636a6941.png)

Obs: O tutorial não está instrutivo, apenas receptivo. Algumas mensagens podem ser trocadas ou novas telas podem ser inseridas para esclarecer o que é Pomodoro e como utilizar. Exemplo: A Técnica Pomodoro é um método de gerenciamento de tempo desenvolvido por Francesco Cirillo no final dos anos 1980. A técnica consiste na utilização de um cronômetro para dividir o trabalho em períodos de 25 minutos, separados por breves intervalos.

Cronômetro

![image](https://user-images.githubusercontent.com/78277341/198858568-4801571c-9f65-43e1-bbf0-16aaf292577f.png)

Após 
A Técnica Pomodoro é um método de gerenciamento de tempo desenvolvido por Francesco Cirillo no final dos anos 1980. A técnica consiste na utilização de um cronômetro para dividir o trabalho em períodos de 25 minutos, separados por breves intervalos.

![image](https://user-images.githubusercontent.com/78277341/198858803-924cabf4-8fcd-46bf-b2ee-9ff66d4f68c0.png)


