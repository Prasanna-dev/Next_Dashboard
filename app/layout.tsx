// @ts-expect-error Global CSS is handled by Next.js, not TypeScript.
import '@/app/ui/global.css';
import { inter, lusitana } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}
