import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        {children}
        <Script
          strategy="beforeInteractive"
          src="https://example.com/script.js"
          id="example-script"
          nonce="XUENAJFW"
          data-test="script"
        />
      </body>
    </html>
  );
}
