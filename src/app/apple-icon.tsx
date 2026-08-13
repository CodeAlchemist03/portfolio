import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

/** Home-screen icon for iOS, which ignores SVG favicons. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1B1C1F',
          color: '#C8783C',
          fontSize: 116,
          fontWeight: 700,
        }}
      >
        S
      </div>
    ),
    size,
  );
}
