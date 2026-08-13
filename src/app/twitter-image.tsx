import { ogContentType, ogSize, renderOgImage } from './og-image';

export const alt = 'Sumit Chavda — Software Engineer';
export const size = ogSize;
export const contentType = ogContentType;

export default function TwitterImage() {
  return renderOgImage();
}
