"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useCallback, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';
import type { VideoModalProps } from './types';

export function VideoModal({ isOpen, onClose, items, initialIndex }: VideoModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Handle escape key
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, handleEscape]);

  // Prevent body scroll when modal is open - Aggressive approach
  useEffect(() => {
    if (isOpen) {
      // Store original scroll position
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;

      // Force modal-open class
      document.body.classList.add('modal-open');

      // Aggressive scroll prevention
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = `-${scrollX}px`;
      document.body.style.width = '100vw';
      document.body.style.height = '100vh';
      document.body.style.overflow = 'hidden';
      document.body.style.overscrollBehavior = 'none';

      // Prevent all scroll-related events
      const preventDefault = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };

      const preventWheel = (e: WheelEvent) => {
        e.preventDefault();
        e.stopPropagation();
      };

      const preventTouch = (e: TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
      };

      const preventKey = (e: KeyboardEvent) => {
        const scrollKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'PageUp', 'PageDown', 'Home', 'End', 'Space'];
        if (scrollKeys.includes(e.key) || (e.ctrlKey && ['Home', 'End'].includes(e.key))) {
          e.preventDefault();
          e.stopPropagation();
        }
      };

      // Add all event listeners with capture
      document.addEventListener('wheel', preventWheel, { passive: false, capture: true });
      document.addEventListener('touchmove', preventTouch, { passive: false, capture: true });
      document.addEventListener('touchstart', preventTouch, { passive: false, capture: true });
      document.addEventListener('keydown', preventKey, { capture: true });
      document.addEventListener('scroll', preventDefault, { passive: false, capture: true });

      // Also prevent on window
      window.addEventListener('wheel', preventWheel, { passive: false, capture: true });
      window.addEventListener('touchmove', preventTouch, { passive: false, capture: true });
      window.addEventListener('scroll', preventDefault, { passive: false, capture: true });

      return () => {
        // Remove all event listeners
        document.removeEventListener('wheel', preventWheel, true);
        document.removeEventListener('touchmove', preventTouch, true);
        document.removeEventListener('touchstart', preventTouch, true);
        document.removeEventListener('keydown', preventKey, true);
        document.removeEventListener('scroll', preventDefault, true);

        window.removeEventListener('wheel', preventWheel, true);
        window.removeEventListener('touchmove', preventTouch, true);
        window.removeEventListener('scroll', preventDefault, true);

        // Restore scroll position and styles
        document.body.classList.remove('modal-open');
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.width = '';
        document.body.style.height = '';
        document.body.style.overflow = '';
        document.body.style.overscrollBehavior = '';

        // Restore scroll position
        window.scrollTo(scrollX, scrollY);
      };
    }
  }, [isOpen]);

  // Reset current index when modal opens
  useEffect(() => {
    if (isOpen && items.length > 0) {
      setCurrentIndex(Math.min(initialIndex, items.length - 1));
    }
  }, [isOpen, initialIndex, items.length]);

  // Ensure currentIndex is valid
  const safeIndex = Math.min(currentIndex, items.length - 1);
  const currentItem = items.length > 0 ? items[safeIndex] : null;

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 z-50 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <X size={20} />
              </button>

              {/* Video Container - Vertical format for mobile videos */}
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                {/* Video Player - 9:16 aspect ratio */}
                <div className="relative" style={{ aspectRatio: '9/16' }}>
                  {currentItem ? (
                    <VideoPlayer
                      playbackId={currentItem.videoUrl}
                      title={currentItem.title}
                      autoPlay={true}
                      muted={true}
                      className="w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-black/50 text-white">
                      Carregando vídeo...
                    </div>
                  )}
                </div>

                {/* Navigation arrows */}
                {items.length > 1 && (
                  <>
                    <button
                      onClick={goToPrevious}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Video counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentIndex + 1} / {items.length}
                </div>

                {/* Thumbnail navigation dots */}
                {items.length > 1 && (
                  <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {items.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Simple title */}
              <div className="text-center mt-4">
                <h3 className="text-white text-lg font-semibold">
                  {currentItem?.title || 'Vídeo'}
                </h3>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
