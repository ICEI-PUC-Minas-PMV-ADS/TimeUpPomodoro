# Registro de Testes de Software

O presente relatório demonstra as evidências dos testes de software realizados no sistema pela equipe e é baseado no plano de testes definido no [item 8 deste projeto](https://github.com/ICEI-PUC-Minas-PMV-ADS/TimeUpPomodoro/blob/main/docs/08-Plano%20de%20Testes%20de%20Software.md).

## 1. Tela de Apresentação e Login:
Seguindo o plano de testes, iniciamos as verificações pela tela de login.
Inicialmente, o sistema mostra uma tela de apresentação "TimeUp" com o botão "Acessar". Ao clicar, o usuário é remetido pra tela de login.

Vejamos:

![image](https://user-images.githubusercontent.com/78277341/198857623-23cb24f0-70bf-49b3-9c7f-bafb1aa3cb78.png)
Verificamos que a tela mostra um campo para que o usuário informe seus dados, para realizar o login.


Na tela de login, o usuário não cadastrado pode clicar na opção "Cadastre-se".

![image](https://user-images.githubusercontent.com/78277341/198857630-5f141719-078d-42e6-9b0c-697670c66c45.png)

>**Observaçoes:** 
> 1. As telas são apresentadas corretamente, e os botões de acesso apresentam-se visíveis, rápidos e dinâmicos.


## Tela de Cadastro
Caso não seja cadastrado, o usuário é redirecionado para a tela de Cadastro.
O usuário deve informar seus dados para ter acesso ao sistema.

- caso a senha esteja errada, uma mensagem de erro é informada: "*Algo deu errado! Erro no Cadastro."*

![image](https://user-images.githubusercontent.com/78277341/198857944-242f388c-5ff6-4647-98c9-323e86dc424d.png)

>**Observações:** ao tentar acessar com senha sem realizar o cadastro:
>1. O sistema não informa ao usuário que ele não possui cadastro.
>2. O sistema ainda não emite mensagem descrevendo o tipo de erro: "Erro ao acessar o cadastro", "Senha incorreta", ou "Usuário incorreto".
>3. O teclado não está dinâmico e persiste na tela, dificultando o acessar ao botão iniciar.

## Fazendo Cadastro
- Ao clicar em "Cadastre-se" o usuário é remetido para a tela "Cadastro".
- Nesta tela, o usuário informa seu email e senha.
- Após preencher os dados, o usuário pode clicar em "Cadastrar", onde será remetido para tela de Login.
- Caso o usuário já seja cadastrado, ele poderá clicar em "Logar".

![image](https://user-images.githubusercontent.com/78277341/198858060-07419cbf-b2cd-45ac-acc4-150a51b25c6d.png)

>**Observações:** Ao realizar os testes para cadastro, verificamos o seguinte:
1. O sistema realiza o login corretamente.
2. Se o usuário insere e-mail incorreto/inexistente: O sistema não é capaz de identificar.
3. Se o usuário não é cadastrado, o sistema emite mensagem: _Usuário inexistente_.
4. Se o cadastro já existe, o sistema não emite o erro.

![image](https://user-images.githubusercontent.com/78277341/198858108-1d3e4abe-a582-4ea8-a292-eb2a93693e2c.png)

Ao clicar em "Ok" da mensagem de erro, o usuário é novamente dirigido para a tela de cadastro.
Nela, foi realizado os seguintes comandos para verificação de testes:
1. Em email, digitamos endereço inexistênte.
2. Em senha, preenchemos com uma senha fraca, sem numeração.
3. Clicamos em cadastrar.

![image](https://user-images.githubusercontent.com/78277341/198858142-ab7c4630-85af-4437-b225-2ba581f4f0f1.png)

>**Observações:**
1. O sistema não é capaz de identificar e-mails inexistentes. Uma solução seria cadastrar um usuário. Contudo, o sistema deve ser capaz de identificar cadastros já existentes.  

##  Navegando no tutorial:

Após realizarmos o cadastro e o login, a primeira tela é iniciada, e o usuário acompanha o tutorial clicando nos botões "Vamos lá" e "Próximo":

As telas com as instruções são apresentadas de forma simples e com uma animação graciosa:

![image](https://user-images.githubusercontent.com/78277341/198858510-26a33ba6-895b-4d8f-995c-6bb5978a59c7.png)

![image](https://user-images.githubusercontent.com/78277341/198858518-cc3fbbe6-5bec-4882-a45b-41afca78b5b6.png)

![image](https://user-images.githubusercontent.com/78277341/198858524-f57aa76b-8510-476f-b8d5-d6764d7a9ee2.png)

![image](https://user-images.githubusercontent.com/78277341/198858528-b4f967e5-6093-4525-b4e3-de8b8345912f.png)


 

![image](https://user-images.githubusercontent.com/78277341/198858556-07e2bda2-4878-447a-98a5-476a636a6941.png)

>**Observações:**
>1. O tutorial está instrutivo e receptivo, possuindo graciosa animação. As cores são agradáveis e combinam com o tema proposto. 
>2. O usuário poderá retornar a tela quando quiser, clicando no botão "retornar" do Android. Contudo, alguns dispositivos não possuem tal função.
>3. Poderia-se criar um botão "voltar". 


## Cronômetro 

Após o tutorial, a tela do cronômetro Pomodoro é exibida. Apresenta-se o tempo de 25 minutos como sugestão.
Na tela, o usuário consegue:
- apertar play, para iniciar o tempo, pausar ou continuar.
- Editar o tempo que deseja trabalhar e para o intervalo de descanso.
- Acessar o menu para editar suas "Atividades" ou escrever anotações no "Bloco de Notas."
- Modificar o tema para "Dark", no botão do campo superior da tela. 

![image](https://user-images.githubusercontent.com/78277341/204142018-05300acd-0a51-4a77-9c30-8c25fbbeff20.png)
![image](https://user-images.githubusercontent.com/78277341/204142063-289c7459-02c8-4311-9b4a-c56e9f1a6889.png)

>**Observações:**
>1. O cronômetro realiza a contagem regressiva do tempo corretamente. 
>2. Os botões de pause e continuar também funcionam corretamente.
>3. O sistema toca o alarme ao finalizar a contagem.
>4. O usuário consegue editar o tempo de estudos e de intervalo, conforme desejar. 
>
> 
> ## Menu: Atividades

No menu, pode-se acessar a ferramenta atividades, onde é possível: 
- Registrar uma atividade que o usuário deseja realizar durante o tempo estabelecido: uma meta de estudos, por exemplo.
  ![image](https://user-images.githubusercontent.com/78277341/204143922-b3d3bcf8-1c91-4c64-b230-f9cd8183f541.png)

- Para registrar a Atividade, o usuário deve inserir o nome dela no campo e clicar no botão de adicionar, na parte inferior da tela.
  ![image](https://user-images.githubusercontent.com/78277341/204143701-8ad63003-5eb1-4ad2-95ba-8d2df431f9d9.png)

- É possível excluir a atividade, clicando na lixeirinha que aparece ao lado de cada evento.
- Se o usuário digita uma Atividade já existente, o sistema informa o erro: "_Atividade já existente, insira um novo nome para a atividade_"
- Se o usuário tentar inserir atividade sem preencher  campo, o sistema informa o erro:
  ![image](https://user-images.githubusercontent.com/78277341/204144000-c989bf60-6837-4853-a113-76195d7a4845.png)
- Se o usuário clicar na lixeira acidentalmente, o sistema solicita confirmação antes de deletar a atividade: "_Tem certeza que deseja excluir esta atividade?_"
  ![image](https://user-images.githubusercontent.com/78277341/204144141-524af63e-2632-4ef3-a08a-286e9f8f9e40.png)

>**Observações:**
>1. É necessário fazer um tratamento de cores e harmonizá-las conforme as demais telas do aplicativo.
>2. Mostrar o slogan do App no campo superior da tela e o título "_Minhas Atividades_" no meio.
>3. O usuário poderá retornar a tela quando quiser, clicando no botão "retornar" do Android. Contudo, alguns dispositivos não possuem tal função.
>4. Poderia-se criar um botão "voltar".
>5. Poderia-se implementar a ferramenta "modo escuro", conforme a tela do cronômetro. 

## Conclusões: 

Apesar das dificuldades, o grupo conseguiu desenvolver as metas e apresentar as funções planejadas, faltando pouco para completarmos o projeto conforme o esperado. 
Para a próxima entrega, será tratado os erros detectados no registro de testes. O grupo também pretende melhorar a aparência e a usuabilidade de cada tela, tornando a aplicação mais harmônica e intuitiva.
Desta forma, acreditamos que iremos tornar a experiência do usuário satisfatória: o que trará êxito ao nosso projeto. 


