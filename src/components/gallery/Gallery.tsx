"use client";

import { useGallery } from '@/hooks/useGallery';
import { GalleryGrid } from './GalleryGrid';
import { VideoModal } from './VideoModal';
import type { GalleryItem } from './types';

interface GalleryProps {
  items: GalleryItem[];
  className?: string;
}

export function Gallery({ items, className }: GalleryProps) {
  const { selectedItem, isModalOpen, openModal, closeModal } = useGallery();

  const handleItemClick = (item: GalleryItem, index: number) => {
    openModal(item, index);
  };

  return (
    <>
      <GalleryGrid
        items={items}
        onItemClick={handleItemClick}
        className={className}
      />

      <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        items={items}
        initialIndex={items.findIndex(item => item.id === selectedItem?.id) || 0}
      />
    </>
  );
}

// Export individual components for more control
export { GalleryGrid } from './GalleryGrid';
export { VideoModal } from './VideoModal';
export { VideoPlayer } from './VideoPlayer';
export { useGallery } from '../../hooks/useGallery';
export type { GalleryItem, GalleryGridProps, VideoModalProps, VideoPlayerProps } from './types';
