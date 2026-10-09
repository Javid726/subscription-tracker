import type { CSSProperties } from 'react';
import styles from './BrandMark.module.css';
import type { BrandKey } from './staticData';

const brands = {
  apple: { color: '#000000', file: '/brands/apple.svg' },
  figma: { color: '#F24E1E', file: '/brands/figma.svg' },
  notion: { color: '#000000', file: '/brands/notion.svg' },
  spotify: { color: '#1ED760', file: '/brands/spotify.svg' },
} satisfies Record<BrandKey, { readonly color: string; readonly file: string }>;

type BrandMarkProps = {
  readonly brandKey: BrandKey | null;
  readonly label: string;
  readonly size: 'board' | 'hero' | 'panel';
  readonly useBrandColor?: boolean;
};

export function BrandMark({ brandKey, label, size, useBrandColor = false }: BrandMarkProps) {
  const brand = brandKey ? brands[brandKey] : null;

  if (!brand) {
    return (
      <span aria-hidden="true" className={styles.mark} data-size={size}>
        {label.charAt(0).toUpperCase()}
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className={styles.icon}
      data-size={size}
      style={
        {
          '--brand-color': useBrandColor ? brand.color : 'currentColor',
          '--brand-mask': `url(${brand.file})`,
        } as CSSProperties
      }
    />
  );
}
