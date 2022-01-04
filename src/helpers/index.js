// @flow

export function slugify(string : string) {
  return string.toLowerCase().replace(/\s+/g, '_')
}

export function unslugify(string: string) {
  return string.toLowerCase().replace(/_/g, ' ')
}

export function capitaliseWords(title: string) {
  return title.split(/ /g).map(word => 
    `${word.substring(0,1).toUpperCase()}${word.substring(1)}`)
  .join(' ');
}

export function capitaliseAll(title: string) {
  return title.replace(/\w/g, letter => letter.toUpperCase())
}