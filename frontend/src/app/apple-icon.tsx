import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f172a',
          borderRadius: 36,
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path d="M16 3L28 9.5L16 16L4 9.5L16 3Z" fill="#60a5fa" />
          <path d="M4 9.5L16 16V28.5L4 22V9.5Z" fill="#2563eb" />
          <path d="M28 9.5L16 16V28.5L28 22V9.5Z" fill="#1d4ed8" />
          <rect x="20" y="17" width="3.5" height="2.5" rx="0.5" fill="white" fillOpacity="0.2" />
          <rect x="20" y="21" width="3.5" height="2.5" rx="0.5" fill="white" fillOpacity="0.15" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
