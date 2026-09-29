import { ImageResponse } from 'next/og';
import { site } from '@/data/site';

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

/**
 * Shared social card, used by both opengraph-image and twitter-image so the
 * two never drift apart.
 */
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#1B1C1F',
          padding: '72px 80px',
        }}
      >
        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 44, height: 4, backgroundColor: '#C8783C' }} />
          <div
            style={{
              fontSize: 24,
              letterSpacing: 4,
              color: '#909399',
              textTransform: 'uppercase',
            }}
          >
            {site.location}
          </div>
        </div>

        {/* Name + role */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 116,
              fontWeight: 700,
              color: '#FAFAFB',
              letterSpacing: -4,
              lineHeight: 1,
            }}
          >
            {site.name}
          </div>
          <div style={{ fontSize: 40, color: '#E0975A', marginTop: 24 }}>{site.role}</div>
          <div
            style={{
              fontSize: 30,
              color: '#B9BBC1',
              marginTop: 18,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Founder of LeelaRam Technologies, maker of SellRank. Headless commerce on
            Next.js and the Shopify APIs.
          </div>
        </div>

        {/* Metrics footer */}
        <div style={{ display: 'flex', gap: 64 }}>
          {[
            ['500K', 'monthly sessions'],
            ['SellRank', 'our Shopify app'],
            ['IEEE', 'IGARSS 2025'],
          ].map(([value, label]) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 44, fontWeight: 700, color: '#E0975A' }}>{value}</div>
              <div style={{ fontSize: 22, color: '#909399', marginTop: 6 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    ogSize,
  );
}
