import './globals.css';

export const metadata = {
  title: 'Test title - Browser title goes here',
  description: 'example description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
