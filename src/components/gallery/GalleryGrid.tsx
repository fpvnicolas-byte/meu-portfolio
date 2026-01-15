"use client";

import { motion } from 'framer-motion';
import { VideoPlayer } from './VideoPlayer';
import type { GalleryGridProps } from './types';

export function GalleryGrid({ items, onItemClick, className = '' }: GalleryGridProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative cursor-pointer"
          onClick={() => onItemClick(item, index)}
        >
          {/* Video Player Container */}
          <div className="relative aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
            <VideoPlayer
              playbackId={item.videoUrl}
              title={item.title}
              autoPlay={false}
              muted={true}
              className="w-full h-full"
            />

            {/* Simple overlay with title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
              <h3 className="text-white text-sm font-medium text-center line-clamp-2">
                {item.title}
              </h3>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
