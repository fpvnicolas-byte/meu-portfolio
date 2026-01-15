"use client";

import { useState, useCallback } from 'react';
import type { GalleryItem } from '@/components/gallery/types';

export function useGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback((item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setCurrentIndex(index);
    setIsModalOpen(true);

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedItem(null);

    // Restore body scroll
    document.body.style.overflow = 'unset';
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % (selectedItem ? 1 : 0));
  }, [selectedItem]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + (selectedItem ? 1 : 0)) % (selectedItem ? 1 : 0));
  }, [selectedItem]);

  const goToIndex = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return {
    selectedItem,
    currentIndex,
    isModalOpen,
    openModal,
    closeModal,
    goToNext,
    goToPrevious,
    goToIndex,
  };
}
