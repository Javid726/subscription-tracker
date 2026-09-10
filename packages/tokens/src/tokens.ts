export const tokens = {
  colors: {
    chrome: '#FFD400',
    chalk: '#FBFAF6',
    rule: '#D9A400',
    ink: '#14140F',
    platform: '#2E2E28',
    signal: '#C81E14',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    baseline: 8,
  },
  typography: {
    families: {
      standard: 'Archivo Variable',
      narrow: 'Archivo Narrow Variable',
    },
    sizes: {
      label: 11,
      row: 13,
      body: 14,
      display: 40,
    },
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    tracking: {
      boardHeader: 0.08,
      panelHeader: 0.1,
    },
    widths: {
      expanded: 125,
    },
  },
  layout: {
    columns: 12,
    gutter: 6,
    boardRowHeight: 44,
  },
  shape: {
    radius: 0,
    hairline: 1,
    signalBar: 3,
  },
} as const;

export type DesignTokens = typeof tokens;
