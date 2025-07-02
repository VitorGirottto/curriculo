# 🚀 Currículo Cyberpunk - Alex Cyber

## 📖 Sobre o Projeto

Este é um site de currículo com tema cyberpunk futurístico, criado com React e estilizado com Tailwind CSS. O site é totalmente responsivo e otimizado para hospedagem estática no GitHub Pages.

## ✨ Características

- **Design Cyberpunk**: Cores cyan, azul escuro e preto com efeitos neon
- **Efeitos Especiais**: Matrix rain, partículas flutuantes, carro voador animado
- **Responsivo**: Layout adaptativo para desktop e mobile
- **Navegação Suave**: Single Page Application com roteamento interno
- **Performance**: Otimizado para carregamento rápido

## 🛠️ Tecnologias Utilizadas

- React 19
- Tailwind CSS
- Lucide React (ícones)
- React Router DOM
- CSS Animations
- Responsive Design

## 📱 Páginas Incluídas

1. **Perfil**: Informações pessoais, competências e contato
2. **Cursos**: Certificações e especializações
3. **Experiências**: Histórico profissional com timeline
4. **Projetos**: Portfolio com filtros e links

## 🚀 Como Hospedar no GitHub Pages

1. Faça fork deste repositório
2. Vá em Settings > Pages
3. Configure a source como "GitHub Actions" ou "Deploy from a branch"
4. Se usar branch, selecione `main` e pasta `/` (root)
5. O site estará disponível em: `https://seuusuario.github.io/nome-do-repo`

## 📝 Como Personalizar

1. Edite os dados em `src/data/mockData.js`
2. Substitua as informações pessoais
3. Atualize links das redes sociais
4. Modifique projetos, cursos e experiências
5. Faça commit e push - o site será atualizado automaticamente

## 🎨 Customização de Cores

Para alterar o esquema de cores, edite as classes CSS em:
- `src/App.css` (efeitos especiais)
- `src/index.css` (tema base)
- Tailwind classes nos componentes

## 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── effects/
│   │   └── CyberEffects.jsx    # Efeitos visuais de fundo
│   ├── layout/
│   │   └── Navigation.jsx      # Menu de navegação
│   └── ui/                     # Componentes de interface
├── data/
│   └── mockData.js            # Dados do currículo
├── pages/
│   ├── Profile.jsx            # Página de perfil
│   ├── Courses.jsx            # Página de cursos
│   ├── Experience.jsx         # Página de experiências
│   └── Projects.jsx           # Página de projetos
├── App.js                     # Componente principal
├── App.css                    # Estilos cyberpunk
└── index.css                  # Estilos base
```

## 🔧 Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm start

# Fazer build para produção
npm run build

# Deploy para GitHub Pages (se configurado)
npm run deploy
```

## 📊 Performance

- ✅ Otimizado para dispositivos móveis
- ✅ CSS e JS minificados
- ✅ Imagens otimizadas
- ✅ Carregamento assíncrono
- ✅ SEO friendly

## 🎯 Browser Support

- Chrome (recomendado)
- Firefox
- Safari
- Edge

## 📧 Contato

Desenvolvido com 💙 por Alex Cyber

---

**Nota**: Este é um template de currículo. Personalize com suas próprias informações antes de usar profissionalmente.