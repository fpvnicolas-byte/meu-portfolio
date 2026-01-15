// Type declarations for MUX web components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mux-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'playback-id'?: string;
        'stream-type'?: string;
        'controls'?: boolean;
        'muted'?: boolean;
        'autoplay'?: boolean;
        'preload'?: string;
        'css'?: string;
      };
    }
  }
}

export {};
