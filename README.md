## ⚠️ Atenção

Todos os dados inseridos nos relatórios **não infringem as normas da LGPD (Lei Geral de Proteção de Dados)**,  
tendo em vista que o sistema **armazena apenas informações básicas necessárias para a identificação interna**,  
como o **nome** e o **código do usuário**.  

Nenhum dado sensível, pessoal ou sigiloso é coletado ou compartilhado fora do ambiente autorizado da Secretaria Geral.

# 🏛️ Form ADMCN

## 📖 Sobre o projeto
Criei este projeto com o intuito de nos ajudar na igreja, promovendo uma padronização dos relatórios entregues pelas congregações nas reuniões ministeriais.  
Atualmente o sistema está sendo implementado em sua **versão beta**, com foco em evoluções futuras que aprimorem a experiência e a automação dos processos administrativos.

O **Form ADMCN** é uma aplicação web voltada para o gerenciamento e geração de formulários oficiais, facilitando o preenchimento e a organização de dados das congregações de forma prática e centralizada.

---

## ⚙️ O que o projeto faz
O **Form ADMCN** foi desenvolvido para **auxiliar a Secretaria Geral** na padronização e organização dos relatórios entregues pelas congregações.  
Seu principal objetivo é **facilitar a visualização, o preenchimento e o tratamento dos dados**, tornando o processo de registro mais ágil e confiável.

Uma das funcionalidades mais importantes é a **integração com inteligência artificial**, que permite transformar automaticamente os dados enviados em **textos formatados prontos para inserção nas atas das reuniões ministeriais**.  
Isso resolve um problema recorrente: anteriormente, muitos relatórios eram entregues de forma incorreta, incompleta ou até mesmo via **WhatsApp**, o que dificultava o processo de conferência e atrasava o fechamento das atas.

Além das automações, o projeto também foi pensado para oferecer uma **interface simples, direta e funcional**.  
Como o público-alvo é formado por secretários locais e líderes que muitas vezes acessam o sistema pelo celular, a prioridade foi desenvolver um **design limpo e intuitivo**, evitando elementos visuais desnecessários e mantendo o foco na **usabilidade e eficiência**.  
O resultado é uma plataforma leve, acessível e ideal para o dia a dia da administração ministerial.

---

## 🧩 Por que criar um projeto do zero?
O projeto foi criado com o intuito de **padronizar e organizar as folhas de alterações** entregues pelas congregações.  
Com a melhoria do nosso sistema de reuniões, o processo acabou ficando mais dinâmico e corrido, o que dificultava o controle e a baixa das alterações — especialmente pela **falta de padronização** nos documentos.

Cada congregação apresentava os relatórios de forma diferente, o que tornava o trabalho de conferência e arquivamento mais demorado e sujeito a erros.  
Pensando nisso, nasceu a ideia de desenvolver uma **ferramenta web centralizada**, que permitisse gerar formulários padronizados, rápidos de preencher e prontos para impressão, tornando o processo mais eficiente e organizado.

---

## 🤔 Por que não usar o Google Forms ou um arquivo pronto?
Durante o planejamento, tentamos implementar diversas ferramentas para facilitar o processo, como o uso de **Google Forms**, **planilhas** e **modelos prontos**.  
No entanto, encontramos algumas dificuldades práticas:

- Muitas pessoas não tinham familiaridade com o **Excel** ou **Word**, o que dificultava a edição correta dos formulários.  
- Grande parte dos secretários locais realiza os serviços **diretamente pelo celular**, e esses formatos não são práticos para uso em dispositivos móveis.  
- O **Google Forms**, embora útil, **entrega os dados de forma bruta**, exigindo tratamento manual e transferência das informações para folhas oficiais.  
- Além disso, os relatórios precisam conter **assinaturas físicas** do Pastor Presidente, Vice-Presidente, Pastor Local e Secretário Geral — o que inviabiliza um processo totalmente digital via formulário online.  

Com isso, surgiu a necessidade de criar **uma solução personalizada**, que unisse praticidade, padronização e suporte à geração de documentos prontos para assinatura, agilizando o trabalho das congregações e do ministério.

---

## 🚀 Tecnologias utilizadas
Este projeto foi desenvolvido utilizando tecnologias modernas do ecossistema web:

- **Next.js 15** – Framework React para renderização híbrida (SSR/SSG)
- **React** – Biblioteca para criação de interfaces dinâmicas
- **Tailwind CSS** – Estilização rápida e responsiva com utilitários CSS
- **TypeScript** – Tipagem estática e maior confiabilidade no código
- **HTML-to-PDF** – Conversão dos formulários em PDF para impressão e arquivamento

---

## ⚙️ Funcionalidades principais
- 📄 Geração de relatórios padronizados das congregações  
- 🏠 Cadastro e gerenciamento de congregações e responsáveis  
- 🕊️ Exportação de formulários em PDF para reuniões ministeriais  
- 🔒 Estrutura preparada para autenticação e controle de acesso (em breve)  
- 💡 Interface limpa, responsiva e de fácil utilização  

---

## 🧑‍💻 Como executar o projeto

### Pré-requisitos
Antes de começar, você precisa ter instalado:
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) ou [pnpm](https://pnpm.io/)

### Passos
```bash
# Clone o repositório
git clone https://github.com/eliaberr/formAdmcn.git

# Acesse a pasta do projeto
cd formAdmcn

# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
npm run dev

# O projeto estará disponível em:
http://localhost:3000
