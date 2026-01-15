// Example usage of the Gallery component
import { Gallery } from './Gallery';
import type { GalleryItem } from './types';

// Sample data - replace with your actual video data
const sampleGalleryItems: GalleryItem[] = [
  {
    id: 'video-1',
    title: 'Behind the Scenes - ROM Concept',
    description: 'Um olhar exclusivo nos bastidores da produção audiovisual para o maior salão do mundo.',
    thumbnail: '/thumbnails/rom-concept.jpg',
    videoUrl: 'your-mux-playback-id-1', // Replace with actual MUX playback ID
    size: 'large',
    category: 'Corporate',
    duration: '3:45',
    tags: ['Produção', 'Corporate', '4K']
  },
  {
    id: 'video-2',
    title: 'Making Of - Record TV',
    description: 'Como criamos conteúdo de alta performance para emissoras nacionais.',
    thumbnail: '/thumbnails/record-tv.jpg',
    videoUrl: 'your-mux-playback-id-2', // Replace with actual MUX playback ID
    size: 'medium',
    category: 'Broadcast',
    duration: '5:20',
    tags: ['TV', 'Conteúdo', 'Produção']
  },
  {
    id: 'video-3',
    title: 'PodPorco - Case Study',
    description: 'A estratégia por trás do viral de 4 milhões de visualizações.',
    thumbnail: '/thumbnails/podporco.jpg',
    videoUrl: 'your-mux-playback-id-3', // Replace with actual MUX playback ID
    size: 'medium',
    category: 'Content',
    duration: '2:15',
    tags: ['Viral', 'Social Media', 'Case Study']
  },
  {
    id: 'video-4',
    title: 'Tecnohidro - Documentário Técnico',
    description: 'Engenharia ambiental e geologia através das lentes da FVA.',
    thumbnail: '/thumbnails/tecnohidro.jpg',
    videoUrl: 'your-mux-playback-id-4', // Replace with actual MUX playback ID
    size: 'small',
    category: 'Industrial',
    duration: '8:30',
    tags: ['Documentário', 'Engenharia', 'Industrial']
  },
  {
    id: 'video-5',
    title: 'Ethereum Brasil - Tech Innovation',
    description: 'Explorando blockchain e Web3 com a comunidade brasileira.',
    thumbnail: '/thumbnails/ethereum-brasil.jpg',
    videoUrl: 'your-mux-playback-id-5', // Replace with actual MUX playback ID
    size: 'small',
    category: 'Tech',
    duration: '4:10',
    tags: ['Blockchain', 'Web3', 'Tecnologia']
  },
  {
    id: 'video-6',
    title: 'SMC Corporation - Business Solutions',
    description: 'Soluções empresariais através de narrativa visual premium.',
    thumbnail: '/thumbnails/smc-corporation.jpg',
    videoUrl: 'your-mux-playback-id-6', // Replace with actual MUX playback ID
    size: 'small',
    category: 'Corporate',
    duration: '6:45',
    tags: ['Corporate', 'Business', 'Soluções']
  }
];

// Example component usage
export function GalleryExample() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Nossa <span className="gradient-text">Galeria</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore nossos trabalhos através de uma experiência visual imersiva.
          </p>
        </div>

        <Gallery
          items={sampleGalleryItems}
          className="mb-16"
        />
      </div>
    </section>
  );
}
