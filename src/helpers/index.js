import { useEffect } from 'react';

export const links = {
  github: 'https://github.com/DanielHearn/css-loaders',
  creator: 'https://danielhearn.co.uk'
}

export function slugify(string) {
  return string.toLowerCase().replace(' ', '_')
}

export function useTitle(title) {
  useEffect(() => {
    title && (document.title = title);
  });
};