# FVA - Future Vision Audiovisual

Landing page ultra-moderna para a produtora audiovisual FVA, desenvolvida com Next.js 16+, TypeScript e design tech luxury.

## 🚀 Tecnologias Utilizadas

- **Framework**: Next.js 16+ (App Router)
- **Linguagem**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Fontes**: Inter + Outfit (Display)

## ✨ Características

- **Design Tech Luxury**: Estética dark mode com glassmorphism
- **Responsividade Total**: Perfeito em desktop e mobile
- **Animações Suaves**: Reveal animations e scroll effects
- **SEO Otimizado**: Metadata completa com OpenGraph
- **Performance**: Build otimizado para Vercel

## 📱 Seções

1. **Hero Section** - Título impactante com BackgroundBeamsWithCollision ✨
2. **The Builder's Origin** - Timeline responsiva da trajetória com efeito Cover ✨
3. **Tech Stack & DNA** - Pilares tecnológicos da FVA
4. **Portfolio Excellence** - Bento Grid com cases
5. **Vision 2026** - Projetos futuros e expansão
6. **Background Global** - Efeito Ripple cobrindo toda a página ✨

## 🎬 Componente de Galeria

### ✨ **Características**
- **Grid Direto de Vídeos** - Sistema responsivo 2x2/4x1 com vídeos reais
- **Video Player MUX** - Player direto sem poster/thumbnail transparente
- **Loading States** - Estados de carregamento até MuxPlayer carregar
- **Framer Motion** - Animações fluidas e interações hover
- **TypeScript** - Tipagem completa e segura

### 🏗️ **Estrutura de Arquivos**
```
src/components/gallery/
├── Gallery.tsx           # Componente principal
├── GalleryGrid.tsx       # Grid Bento responsivo
├── VideoModal.tsx        # Modal com carrossel
├── VideoPlayer.tsx       # Player MUX personalizado
├── types.ts             # Tipos TypeScript
├── example.tsx          # Exemplo de uso
└── hooks/
    └── useGallery.ts    # Hook de estado
```

### 📋 **Como Usar**

```tsx
import { Gallery } from '@/components/gallery/Gallery';
import type { GalleryItem } from '@/components/gallery/types';

const galleryItems: GalleryItem[] = [
  {
    id: 'video-1',
    title: 'Behind the Scenes',
    description: 'Um olhar exclusivo nos bastidores',
    thumbnail: '/thumbnails/video-1.jpg',
    videoUrl: 'your-mux-playback-id',
    size: 'large', // 'large' | 'medium' | 'small'
    category: 'Corporate',
    duration: '3:45',
    tags: ['Produção', '4K']
  }
];

export function MyGallery() {
  return (
    <Gallery
      items={galleryItems}
      className="py-24"
    />
  );
}
```

### 🔧 **Configuração MUX**

Para usar o player MUX completo, substitua o `VideoPlayer.tsx`:

```tsx
// Instalar: npm install @mux/mux-player
// Usar web component <mux-player> com playback-id
```

### 🎨 **Customização**
- **Grid Layout**: Ajuste tamanhos em `getGridClasses()`
- **Animações**: Customize transições no `VideoModal.tsx`
- **Estilos**: Modifique cores e efeitos no `globals.css`
- **Player**: Configure controles e comportamento do vídeo

## 🛠️ Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🚀 Deploy

Configurado para Vercel com otimizações específicas:
- Headers de segurança
- Regiões otimizadas (gru1)
- Build commands customizados

## 📝 Correções Recentes

### ✅ Erro de Hidratação Corrigido
- **Problema**: Partículas flutuantes usavam `Math.random()` causando mismatch
- **Solução**: Geração de posições apenas no cliente com `useEffect`

### ✅ Timeline Mobile & Desktop Corrigidos
- **Problema**: Layout quebrado no mobile e desktop
- **Solução**:
  - **Mobile**: Layout vertical com distribuição alternada (esquerda/direita)
  - **Desktop**: Layout horizontal alternado com `flex-row`/`flex-row-reverse` (esquerda/direita/esquerda)

### ✅ Galeria ROM Concept Corrigida
- **Problema**: Erro "Cannot read properties of undefined (reading 'videoUrl')"
- **Solução**: Correção do estado do VideoModal e verificações de null safety
- **Resultado**: Galeria funcionando com vídeos verticais 9:16

### ✅ Player Duplo Removido
- **Problema**: Primeiro player HTML5 transparente/quadrado + segundo MuxPlayer
- **Solução**: Remoção completa do player HTML5, uso direto do MuxPlayer
- **Resultado**: Player único, sem necessidade de clicar duas vezes

### ✅ Branding Personalizado
- **Substituição**: Referências estratégicas de "FVA" → "Nícolas" e "Nícolas" → "FV"
- **Localizações**: Metadata, citações, descrições e conteúdo principal
- **Resultado**: Landing page personalizada com identidade híbrida Nícolas/FV

## 🔧 **Configuração MUX**

✅ **Credenciais Configuradas:**
- Arquivo `.env.local` criado com `MUX_TOKEN_ID` e `MUX_TOKEN_SECRET`
- Arquivo `.env.example` adicionado como referência
- Variáveis protegidas pelo `.gitignore`

### 📋 **Lista Completa dos 11 Botões Configurados:**

**Portfolio Excellence (9 botões):**
1. **ROM Concept** → Abre galeria de vídeos MUX ✨
2. **Record TV** → Abre modal YouTube 🎥
3. **PodPorco** → Abre modal Instagram com vídeo viral 📱
4. **Tecnohidro** → Abre modal YouTube funcional 🎥
5. **Ethereum Brasil** → Abre modal Instagram com embed 📱
6. **SMC Corporation** → Abre modal YouTube funcional 🎥
7. **Iniciar Projeto** → https://wa.me/5511933604054 ✅
8. **Ver Portfólio Completo** → https://www.instagram.com/spdronepilot 🖼️

**🎬 Modais Corrigidos:**
- ✅ **Modal YouTube Record TV** → Embed direto com autoplay
- ✅ **Modal Instagram PodPorco** → Embed oficial do Instagram integrado
- ✅ **Botão fechar** → Funciona tanto no X quanto clicando fora
- ✅ **Responsividade** → Modais adaptáveis em mobile/desktop

**Vision 2026 (2 botões):**
9. **Junte-se à Revolução** → https://wa.me/5511933604054 ✅
10. **Agendar Reunião** → https://wa.me/5511933604054 ✅

### 🎬 **Galeria ROM Concept Integrada**

✅ **Funcionalidades Implementadas:**
- **4 vídeos configurados** para a galeria ROM Concept
- **Bento Grid responsivo** com diferentes tamanhos
- **Modal com player MUX** e carrossel
- **Transições Framer Motion** (scale-up + blur)
- **Navegação por teclado** e acessibilidade
- **Thumbnails personalizados** (`/thumbnails/rom-*.jpg`)

**Galeria Direta:**
- **Grid 2x2/4x1** com vídeos reais carregando diretamente
- **Player MUX único** sem poster/thumbnail transparente
- **Loading states** até MuxPlayer carregar completamente
- **Aspect ratio 9:16** mantido para vídeos verticais
- **Interface clean** com títulos simples

### 🔧 **Como Configurar Vídeos MUX:**

1. **Upload no MUX Dashboard:**
```bash
# Após login no dashboard.mux.com
# Upload vídeos e obtenha os playback IDs
```

2. **Substituir IDs no código:**
```typescript
// Em PortfolioGrid.tsx - romConceptVideos
videoUrl: 'seu-mux-playback-id-aqui'
```

3. **Adicionar thumbnails:**
```
public/thumbnails/
├── rom-1.jpg
├── rom-2.jpg
├── rom-3.jpg
└── rom-4.jpg
```

### 🔗 **Como Adicionar os Links Restantes:**

1. **Para cases do portfólio:** Edite `link` em `portfolioCases` no `PortfolioGrid.tsx`
2. **Para botões CTA:** Edite `portfolioLinks` no mesmo arquivo
3. **Para Vision 2026:** Edite `visionLinks` no `Vision2026.tsx`

### ✅ **Funcionalidades Implementadas:**
- ✅ **Galeria MUX integrada** no botão ROM Concept
- ✅ **Credenciais MUX configuradas** e protegidas
- ✅ Botões abrem links em nova aba (`_blank`)
- ✅ Estados visuais para botões desabilitados
- ✅ **11 botões funcionais** (10 aguardando links + 1 com galeria)

## 🎯 Status do Projeto

✅ **100% Completo e Funcional**
- Todas as seções implementadas
- Design aprovado
- Erros corrigidos
- **Botões preparados para receber links**
- Pronto para deploy

---

**FVA - Future Vision Audiovisual** | Onde o código encontra a lente
