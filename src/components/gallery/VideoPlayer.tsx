"use client";

import { useEffect, useState } from 'react';
import type { VideoPlayerProps } from './types';

export function VideoPlayer({
  playbackId,
  title,
  autoPlay = false,
  muted = true,
  className = ''
}: VideoPlayerProps) {
  const [isMuxLoaded, setIsMuxLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Import MuxPlayer dynamically to avoid SSR issues
    const loadMuxPlayer = async () => {
      try {
        await import('@mux/mux-player');
        setIsMuxLoaded(true);
      } catch (error) {
        console.error('Failed to load MuxPlayer:', error);
        setHasError(true);
      }
    };

    loadMuxPlayer();
  }, []);

  // Show loading state until MuxPlayer is loaded
  if (!isMuxLoaded) {
    return (
      <div className={`relative w-full h-full bg-black rounded-2xl flex items-center justify-center ${className}`}>
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-sm opacity-80">Carregando player...</p>
        </div>
      </div>
    );
  }

  // Show error state if MuxPlayer failed to load
  if (hasError) {
    return (
      <div className={`relative w-full h-full bg-black rounded-2xl flex items-center justify-center ${className}`}>
        <div className="text-white text-center">
          <p className="text-sm opacity-80">Erro ao carregar player</p>
        </div>
      </div>
    );
  }

  // Render MuxPlayer only after it's loaded - using dangerouslySetInnerHTML to avoid TypeScript issues
  const muxPlayerHtml = `
    <mux-player
      playback-id="${playbackId}"
      stream-type="on-demand"
      controls
      ${muted ? 'muted' : ''}
      ${autoPlay ? 'autoplay' : ''}
      preload="auto"
      style="width: 100%; height: 100%; aspect-ratio: 9/16; border-radius: 16px; display: block;"
      css="
        --mux-player-primary-color: #667eea;
        --mux-player-secondary-color: #764ba2;
        --mux-player-accent-color: #667eea;
        --mux-player-control-bar-height: 48px;
        --mux-player-control-bar-background: rgba(0, 0, 0, 0.8);
        --mux-player-control-bar-border-radius: 8px;
      "
    ></mux-player>
  `;

  return (
    <div
      className={`relative w-full h-full bg-black rounded-2xl ${className}`}
      dangerouslySetInnerHTML={{ __html: muxPlayerHtml }}
    />
  );
}
