export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  thumbnail: string;
  videoUrl: string; // MUX playback ID
  size: 'small' | 'medium' | 'large';
  category?: string;
  duration?: string;
  tags?: string[];
}

export interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  initialIndex: number;
}

export interface VideoPlayerProps {
  playbackId: string;
  title?: string;
  autoPlay?: boolean;
  muted?: boolean;
  className?: string;
}

export interface GalleryGridProps {
  items: GalleryItem[];
  onItemClick: (item: GalleryItem, index: number) => void;
  className?: string;
}
