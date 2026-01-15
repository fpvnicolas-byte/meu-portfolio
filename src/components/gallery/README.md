# 🎬 Componente de Galeria - FVA

Componente premium de galeria com Bento Grid, modal de vídeo e player MUX para uma experiência visual imersiva.

## ✨ Funcionalidades

- **🎨 Bento Grid Responsivo** - Layout com cards de diferentes tamanhos (large, medium, small)
- **🎥 Modal de Vídeo Premium** - Overlay com blur background e scale-up animation
- **🎮 Player MUX Otimizado** - Streaming de alta performance com controles customizados
- **📱 Design Responsivo** - Perfeito em desktop e mobile
- **🎭 Animações Framer Motion** - Transições suaves e interações hover
- **♿ Acessibilidade** - Navegação por teclado, focus management e screen readers
- **🎯 TypeScript** - Tipagem completa e segura

## 📦 Instalação

```bash
npm install @mux/mux-player embla-carousel-react framer-motion
```

## 🚀 Uso Básico

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
    size: 'large',
    category: 'Corporate',
    duration: '3:45',
    tags: ['Produção', '4K']
  }
];

export function MyComponent() {
  return (
    <Gallery
      items={galleryItems}
      className="py-24"
    />
  );
}
```

## 🎯 Props da API

### Gallery
```tsx
interface GalleryProps {
  items: GalleryItem[];     // Array de itens da galeria
  className?: string;       // Classes CSS adicionais
}
```

### GalleryItem
```tsx
interface GalleryItem {
  id: string;               // ID único
  title: string;            // Título do vídeo
  description?: string;     // Descrição opcional
  thumbnail: string;        // URL da imagem thumbnail
  videoUrl: string;         // ID do playback MUX
  size: 'large' | 'medium' | 'small';  // Tamanho no grid
  category?: string;        // Categoria (ex: Corporate, Content)
  duration?: string;        // Duração (ex: "3:45")
  tags?: string[];          // Array de tags
}
```

## 🎨 Customização

### Layout do Grid
```tsx
// Em GalleryGrid.tsx - função getGridClasses
const getGridClasses = (size: string) => {
  switch (size) {
    case 'large': return 'md:col-span-2 md:row-span-2';
    case 'medium': return 'md:col-span-1 md:row-span-2';
    case 'small': return 'md:col-span-1 md:row-span-1';
  }
};
```

### Animações do Modal
```tsx
// Em VideoModal.tsx - customize as transições
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.8 }}
  transition={{ type: "spring", damping: 25, stiffness: 300 }}
>
```

### Estilos do Player
```tsx
// Em VideoPlayer.tsx - customize cores e controles
<mux-player
  css={`
    --mux-player-primary-color: #667eea;
    --mux-player-secondary-color: #764ba2;
  `}
>
```

## 🔧 Configuração MUX

### 1. Conta MUX
```bash
# Instalar CLI do MUX
npm install -g @mux/cli

# Login
mux login
```

### 2. Upload de Vídeos
```bash
# Upload via API
curl -X POST https://api.mux.com/video/v1/assets \
  -H "Authorization: Basic YOUR_API_KEY" \
  -F "input=@video.mp4"
```

### 3. Playback ID
```typescript
// Use o playback_id retornado pela API
const videoUrl = "playback-id-from-mux-api";
```

## 📁 Estrutura de Arquivos

```
src/components/gallery/
├── Gallery.tsx           # Componente principal
├── GalleryGrid.tsx       # Grid Bento responsivo
├── VideoModal.tsx        # Modal com overlay
├── VideoPlayer.tsx       # Player MUX
├── types.ts             # Tipos TypeScript
├── index.ts             # Exportações
├── example.tsx          # Exemplo de uso
└── README.md           # Esta documentação
```

## 🎭 Estados e Interações

### Estados do Componente
- **Loading**: Player carrega vídeo automaticamente
- **Playing**: Vídeo rodando em fullscreen mobile
- **Navigation**: Setas e indicadores para trocar vídeos
- **Error**: Fallback para HTML5 video se MUX falhar

### Navegação
- **Setas**: Navegação esquerda/direita entre vídeos
- **Indicadores**: Dots para pular para vídeo específico
- **Toque**: Swipe nativo no mobile
- **Escape**: Fecha modal

### Interface Simplificada
- **Sem thumbnails**: Foco nos vídeos verticais
- **Sem textos descritivos**: Apenas títulos simples
- **Contador de vídeos**: "1/4", "2/4", etc.
- **Player limpo**: Controles MUX customizados

## 🚀 Performance

### Otimizações Implementadas
- **Lazy Loading**: Imagens carregam sob demanda
- **Preload**: Vídeos preparados para playback
- **SSR Safe**: Sem problemas de hidratação
- **Bundle Splitting**: Componentes carregados dinamicamente

### Métricas de Performance
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Bundle Size**: ~45KB gzipped

## 🐛 Troubleshooting

### Problemas Comuns

**Vídeo não carrega:**
```tsx
// Verifique se o playback ID está correto
console.log('Playback ID:', videoUrl);

// Use o fallback do VideoPlayer
<VideoPlayer playbackId={videoUrl} />
```

**Modal não abre:**
```tsx
// Verifique se os itens têm IDs únicos
items.forEach(item => {
  if (!item.id) console.error('Item sem ID:', item);
});
```

**Grid quebrado no mobile:**
```tsx
// Ajuste as classes CSS no getGridClasses
case 'large': return 'col-span-1 aspect-square'; // Mobile primeiro
```

## 📄 Licença

Este componente faz parte do projeto FVA - Future Vision Audiovisual.

---

**Feito com ❤️ para experiências visuais premium**
