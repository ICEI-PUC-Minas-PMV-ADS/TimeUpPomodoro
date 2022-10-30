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

>**Observaçoes:** As telas são mostradas corretamente, e os botões de acesso apresentam-se visíveis, rápidos e dinâmicos.

## Tela de Cadastro
Caso não seja cadastrado, o usuário é redirecionado para a tela de Cadastro.
O usuário deve informar seus dados para ter acesso ao sistema.

- caso a senha esteja errada, uma mensagm de erro é informada: "*Algo deu errado! Erro no Cadastro."*

![image](https://user-images.githubusercontent.com/78277341/198857944-242f388c-5ff6-4647-98c9-323e86dc424d.png)

>**Observações:** ao tentar acessar com senha sem realizar o cadastro:
>1. O sistema não informa ao usuário que ele não possui cadastro.
>2. O sistema ainda não emite mensagem descrevendo o tipo de erro: "Erro ao acessar o cadastro", "Senha incorreta", ou "Usuário incorreto".

## Fazendo Cadastro
- Ao clicar em "Cadastre-se" o usuário é remetido para a tela "Cadastro".
- Nesta tela, o usuário informa seu email e senha.
- Após preencher os dados, o usuário pode clicar em "Cadastrar", onde será remetido para tela de Login.
- Caso o usuário já seja cadastrado, ele poderá clicar em "Logar".

![image](https://user-images.githubusercontent.com/78277341/198858060-07419cbf-b2cd-45ac-acc4-150a51b25c6d.png)

>**Observações:** Ao realizar os testes para cadastro, verificamos o seguinte:
1. Tentando com email inexistente e sem preencher a senha: O sistema não é capaz de identificar que o email é inexistente ou se o cadastro já existe. Não é emitido nenhuma mensagem nesse sentido ao usuário.
3. O sistema informa corretamente que há erro no cadastro.

![image](https://user-images.githubusercontent.com/78277341/198858108-1d3e4abe-a582-4ea8-a292-eb2a93693e2c.png)

Ao clicar em "Ok" da mensagem de erro, o usuário é novamente dirigido para a tela de cadastro.
Nela, foi realizado os seguintes comandos para verificação de testes:
1. Em email, digitamados endereço inexistênte.
2. Em senha, preenchemos com uma senha fraca, sem numeração.
3. Clicamos em cadastrar.

![image](https://user-images.githubusercontent.com/78277341/198858142-ab7c4630-85af-4437-b225-2ba581f4f0f1.png)

>**Observações:**
>1. O sistema emite mensagem: Erro no Cadastro, mas não informa se o erro é no email ou na senha.
>2. Existe o requisito de senha de 6 dígitos, mas o sistema não informa o requisito ao usuário.
>3. Se o usuário digitar senha em palavras, o sistema mostra mensagem de erro mas não informa o requisito ao usuário.
>4. Caso realize o cadastro corretamente, o sistema mostra uma mensagem incongruente: "Algo deu errado. Cadastro Realizado com sucesso!"
>5. Se cadastro não é realizado por causa dos erros no cadastro, o usuário é remetido novamente para tela de "Login", mas o usuário deve ser remetido para tela de "Cadastro".


![image](https://user-images.githubusercontent.com/78277341/198858203-34377d47-1cb6-41d2-ac4b-c981a7f8d1c0.png)


##  Navegando no tutorial:

A primeira tela é mostrada, e o usuário acompanha o tutorial clicando nos botões "Vamos lá" e "Próximo":

As telas com as instruções são mostradas de forma simples e com uma animação graciosa:

![image](https://user-images.githubusercontent.com/78277341/198858510-26a33ba6-895b-4d8f-995c-6bb5978a59c7.png)

![image](https://user-images.githubusercontent.com/78277341/198858518-cc3fbbe6-5bec-4882-a45b-41afca78b5b6.png)

![image](https://user-images.githubusercontent.com/78277341/198858524-f57aa76b-8510-476f-b8d5-d6764d7a9ee2.png)

![image](https://user-images.githubusercontent.com/78277341/198858528-b4f967e5-6093-4525-b4e3-de8b8345912f.png)

- O usuário poderá retornar a tela quando quiser, clicando no botão "retornar" do Android.

![image](https://user-images.githubusercontent.com/78277341/198858556-07e2bda2-4878-447a-98a5-476a636a6941.png)

>**Observações:**
>1. O tutorial não está instrutivo, apenas receptivo. Algumas mensagens podem ser trocadas ou novas telas podem ser inseridas para esclarecer o que é Pomodoro e como utilizar. Exemplo: _A Técnica Pomodoro é um método de gerenciamento de tempo desenvolvido por Francesco Cirillo no final dos anos 1980. A técnica consiste na utilização de um cronômetro para dividir o trabalho em períodos de 25 minutos, separados por breves intervalos._

## Cronômetro

Após o tutorial, a tela de cronômetro Pomodoro é exibida. Apresenta-se o tempo de 25 minutos.
Na tela, o usuário pode apertar play, para iniciar o tempo, pausar ou continuar.

![image](https://user-images.githubusercontent.com/78277341/198858568-4801571c-9f65-43e1-bbf0-16aaf292577f.png)


>**Observações:**
>1. O cronômetro possui erro na contagem.
>2. Os botões de pause e continuar não funcionam corretamente.
>3. As funções de alarme e alterar alarme não foram implementadas.

## Conclusões: 

Após verificação, observamos que será necessário realizar uma retrospectiva do planejamento da sprint, realizando uma revisão das telas de implementação e a possibilidade de sua execução até a data final do projeto. 

Observamos também que as telas apresentadas encontram-se dinâmicas e agradáveis. O acesso do usuário está fácil e intuitivo, de modo que, após algumas alterações de lógica e funcionalidade, será possível efetivar a entrega do objetivo do projeto: um app pomodoro. 

