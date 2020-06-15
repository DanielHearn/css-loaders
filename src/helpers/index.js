import { useEffect } from 'react';

export const links = {
  github: 'https://github.com/DanielHearn/css-loaders',
  creator: 'https://danielhearn.co.uk'
}

export function slugify(string : string) {
  return string.toLowerCase().replace(' ', '_')
}

export function unslugify(string: string) {
  return string.toLowerCase().replace('_', ' ')
}

export function capitaliseWords(title: string) {
  return title.split(/ /g).map(word => 
    `${word.substring(0,1).toUpperCase()}${word.substring(1)}`)
  .join(' ');
}

export function useTitle(title: string) {
  useEffect(() => {
    title && (document.title = title);
  });
};