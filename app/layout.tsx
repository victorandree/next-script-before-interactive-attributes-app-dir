import Script from 'next/script';

/**
 * A root layout that demonstrates https://github.com/vercel/next.js/issues/49830 and a possible workaround:
 *
 * - The bug is that `Script` does not include the additional attributes passed
 * - The workaround is that `script` does
 *
 * A surprising behavior is that `Script` is not inserted as part of the rendered HTML from the server, but is only sent as a JavaScript payload: `(self.__next_s = self.__next_s || []).push(["https://example.com/script.js"])`.
 */
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <script src="https://example2.com/script2.js" data-test="script2" />
      </head>
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
