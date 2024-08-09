## Projeto To Do List

Olá equipe BTG, 👏

Aqui está um resumo detalhado do projeto de lista de tarefas (To-Do List) que desenvolvi, focando em boas práticas de codificação, princípios SOLID e design patterns. Este projeto é uma demonstração das minhas habilidades técnicas e capacidade para criar uma aplicação escalável com React e Next.js.

Me sinto orgulhoso de conseguir entregar mesmo com pouco tempo e tentando sempre manter as boas práticas de programação, me desculpem algum commit comentado como letras erradas ou coisas estranhas no código rsrs, eu fiz esse projeto na madrugada pois não tive tempo durante o dia pq fui no detran e no cartório mas o tempo que tive foi dedicado 100% a esse projeto. 🙂

O projeto foi um desafio para entregar o máximo de funcionalidades em 1 dia, porém tive q sair pq já tinha o detran marcado para resolver o chassi do carro, mas conseguir fazer todas as funcionalidades e um pouco a mais como modo dark e light, edição de tasks, menu drawer mobile e tecnologias de ponta

## Link do Deploy Você pode visualizar a aplicação em produção no seguinte link: [Aplicação To-Do List - BTG](https://to-do-list-with-solid-and-designers-patterns-1xwt.vercel.app/task-btg)

### Visão Geral do Projeto

O objetivo principal deste projeto foi criar uma aplicação de lista de tarefas utilizando React, aplicando boas práticas de codificação, princípios SOLID e design patterns. A aplicação permite ao usuário:

- **Adicionar novas tarefas** com uma descrição.
- **Marcar tarefas como concluídas**.
- **Remover tarefas**.
- **Filtrar tarefas** por status (todas, pendentes, concluídas).
- **Persistência** das tarefas no local storage do navegador.

### Tecnologias Utilizadas

Para desenvolver este projeto, utilizei as seguintes tecnologias:

- **React**: Utilizado para criar a interface de usuário dinâmica e interativa.
- **Next.js**: Proporciona renderização do lado do servidor e funcionalidades de roteamento, essencial para a escalabilidade e SEO.
- **Chakra UI**: Framework de design que facilita a criação de uma UI acessível e responsiva com componentes prontos.
- **Redux Toolkit**: Gerenciamento de estado centralizado e eficiente, aplicando o padrão de arquitetura Flux.
- **Firebase**: Utilizado para persistência de dados e autenticação, garantindo que as tarefas sejam salvas e recuperadas entre sessões.
- **Framer Motion**: Adiciona animações suaves e interativas à aplicação.
- **React Hook Form**: Facilita o gerenciamento de formulários com validação e manipulação de estado.
- **Tailwind CSS**: Framework utilitário para estilização rápida e responsiva.

### Imagens do Projeto

## Desktop 
<img src="../app/public/img desktop to do list.png" alt="Descrição da Imagem" />

## Desktop Modo Light
<img src="../app/public/moddo light to do list.png" alt="Descrição da Imagem" />

## Modal Adicionar Tarega 
<img src="../app/public/adicionar uma tarefa.png" alt="Descrição da Imagem" />

## Menu Mobile
<img src="../app/public/menu mobile to do list.png" alt="Descrição da Imagem" />



### Uso do TypeScript

Para garantir a robustez e a segurança do código, optei por utilizar **TypeScript** no desenvolvimento deste projeto. O TypeScript oferece uma série de vantagens que ajudam a criar uma base de código mais confiável e fácil de manter:

- **Segurança de Tipos**: Com TypeScript, é possível definir tipos explícitos para variáveis, funções e objetos, o que ajuda a prevenir muitos tipos de erros comuns em tempo de compilação. Isso reduz significativamente a ocorrência de bugs relacionados a tipos e melhora a segurança geral da aplicação.

- **IntelliSense e Autocompletar**: A integração com IDEs e editores de código é aprimorada com TypeScript, fornecendo autocompletar e sugestões de código baseadas em tipos. Isso acelera o desenvolvimento e reduz a probabilidade de erros.

- **Melhor Manutenção**: A tipagem estática facilita a compreensão do código, especialmente em projetos maiores ou quando outros desenvolvedores estão envolvidos. Isso torna a manutenção e a evolução da base de código mais gerenciáveis.

- **Refatoração Segura**: A capacidade de realizar refatorações com confiança é aprimorada, pois as ferramentas de TypeScript ajudam a identificar erros que podem ser introduzidos durante a alteração de tipos e estruturas de dados.

O uso do TypeScript neste projeto não só melhorou a qualidade do código, mas também alinhou a aplicação com as melhores práticas de desenvolvimento, tornando-a mais segura e escalável.

## Autenticação com Firebase

O Firebase Authentication fornece uma maneira simples e segura de autenticar usuários em seu aplicativo. Ele suporta vários métodos de autenticação, incluindo email/senha, redes sociais (Google, Facebook, Twitter), e provedores de identidade federados.

### Passos Básicos:

1. **Configuração**: 
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
   - Adicione o SDK do Firebase ao seu projeto e configure-o com as credenciais do seu projeto.

2. **Habilitar Métodos de Autenticação**:
   - No Firebase Console, vá para a seção "Authentication" e ative os métodos de login desejados.

3. **Implementar Autenticação**:
   - Utilize os métodos fornecidos pelo SDK para registrar, fazer login e gerenciar usuários. Exemplo para login com email e senha:
     ```javascript
     import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

     const auth = getAuth();
     signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
         // Login bem-sucedido
         const user = userCredential.user;
       })
       .catch((error) => {
         // Erro ao fazer login
         console.error(error.message);
       });
     ```

4. **Gerenciar Sessões**:
   - O Firebase gerencia sessões de usuário automaticamente, facilitando a autenticação persistente.

### Benefícios:

- **Segurança**: Protege os dados dos usuários com autenticação robusta.
- **Facilidade de Implementação**: APIs fáceis de usar e integração rápida.
- **Escalabilidade**: Suporta um grande número de usuários e métodos de autenticação.

Para mais informações, consulte a [documentação oficial do Firebase Authentication](https://firebase.google.com/docs/auth).



### Arquitetura e Boas Práticas

**Princípios SOLID e Design Patterns**: Na implementação, fiz o meu melhor para aplicar princípios SOLID e design patterns, embora o tempo limitado tenha restringido a aplicação completa desses conceitos. Abaixo estão alguns detalhes sobre como esses princípios foram integrados:

1. **Single Responsibility Principle (SRP)**: Cada componente e módulo da aplicação possui uma única responsabilidade. Por exemplo, o `TaskList` é responsável apenas pela exibição de tarefas e o `TaskForm` pela manipulação de entradas de usuário.

2. **Open/Closed Principle (OCP)**: A arquitetura permite que a aplicação seja estendida (por exemplo, adicionando novos filtros ou funcionalidades) sem modificar o código existente, facilitando futuras melhorias.

3. **Liskov Substitution Principle (LSP)**: Componentes e funções foram projetados para serem substituíveis por suas implementações derivadas sem alterar o comportamento esperado da aplicação.

4. **Interface Segregation Principle (ISP)**: As interfaces e tipos utilizados são específicos e não forçam a implementação de métodos desnecessários, promovendo a coesão e a modularidade.

5. **Dependency Inversion Principle (DIP)**: A dependência de abstrações (interfaces e tipos) em vez de implementações concretas foi aplicada para garantir que os módulos de alto nível não dependam diretamente de módulos de baixo nível.

**Design Patterns**:
- **Factory Pattern**: Utilizado na criação de novos componentes de tarefas e filtros, permitindo a criação flexível e extensível de objetos.
- **Observer Pattern**: Implementado no gerenciamento de estado com Redux, permitindo que componentes se atualizem em resposta a alterações de estado.

## Dicas de Instalação Para rodar o projeto localmente, siga os seguintes passos: 1. **Clone o repositório:** ```bash git clone <URL_DO_REPOSITÓRIO>

Instale as dependências:
```npm install```

### Considerações Finais

Embora o tempo tenha sido um fator limitante, fiz o possível para aplicar conceitos de design patterns e princípios SOLID na construção desta aplicação. A escolha das tecnologias foi feita para garantir que o projeto seja escalável e de fácil manutenção.

Estou no aguardo para discutir mais sobre este projeto e como minhas habilidades podem agregar valor à equipe BTG.

Atenciosamente,  
Wilhams Junior


