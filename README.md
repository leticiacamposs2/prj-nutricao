## Projeto Aparecida Nutrição

A nutricionista Aparecida fazia controle dos clientes com fichas cadastrais, preenchidas manualmente, nas quais eram armazenados dados como "Nome", "Peso", "Gordura Corporal" e outros. Com a criação do site, ela conseguirá armazenar as informações, a serem exibidas em uma tabela, em que novos cadastros serão adicionados dinamicamente por meio do JavaScript, e poderão ser filtrados posteriormente. Ela também não precisará mais fazer cálculos manualmente, como os de IMC e da porcentagem de gordura corporal dos clientes. Todos serão realizados utilizando-se o JavaScript. 

#### O objetivo vai ser a criação de um site que realmente facilitará o trabalho da Aparecida!

![](/img/tabela-aparecida-nutricao.png)

#### Funcionalidades:

1. Inclusão de um novo paciente e o seu IMC é cálcula:

![](/img/tabela-pacientes.png)
![](/img/cadastro-paciente.png)
![](/img/nova-lista-pacientes.png)

2. Validação de campos:

- Não permite o cadastro de paciente em branco;
- Não permite cadastrar peso inválido;
- Não permite cadastrar altura inválido;
- Não permite cadastrar gordura inválido;

![](/img/valida-campo-em-branco.png)
![](/img/valida-valores-invalidos.png)

3. Remoção de paciente:

- Através de um clique duplo em cima de qualquer campo da tabela, a linha é excluida por inteiro.

![](/img/tabela-pacientes.png)
![](/img/remove-pacientes.png)


4. Filtrando paciente:

![](/img/filtrando-paciente.png)

5. Buscando paciente através de uma requisição HTTP:

- Api: http://api-pacientes.herokuapp.com/pacientes

![](/img/buscar-paciente.png)
![](/img/buscar-paciente-api.png)
