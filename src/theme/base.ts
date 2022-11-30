import { MediaQueries, Breakpoints, Spacing, ZIndices } from './types';

export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
  xxl: 1200,
};

const breakpoints: Breakpoints = Object.values(breakpointMap).map(
  (breakpoint) => `${breakpoint}px`,
);

const mediaQueries: MediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
  xxl: `@media screen and (min-width: ${breakpointMap.xxl}px)`,
  nav: `@media screen and (min-width: ${breakpointMap.lg}px)`,
};

const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64];

const zIndices: ZIndices = {
  ribbon: 9,
  dropdown: 10,
  modal: 100,
};

const result = {
  siteWidth: 1200,
  border: {
    width: '0.2rem',
    color: 'black',
  },
  padding: '1.6rem',
  breakpoints,
  mediaQueries,
  spacing,
  zIndices,
  fontSize: {
    itemTitle: '2rem',
    formItemTitle: '1.6rem',
  },
};

export default result;
