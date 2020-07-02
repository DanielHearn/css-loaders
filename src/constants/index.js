// @flow

export const titleRoot = 'CSS Loaders'

export const queryWidths = {
  small: 600,
  medium: 1200
}

export const mediaQueries = {
  small: `(max-width: ${queryWidths.small}px)`,
  medium: `(min-width: ${queryWidths.small+1}px) and (max-width: ${queryWidths.medium-1}px)`,
  large: `(min-width: ${queryWidths.medium}px)`
};

export const links = {
  github: 'https://github.com/DanielHearn/css-loaders',
  creator: 'https://danielhearn.co.uk'
}