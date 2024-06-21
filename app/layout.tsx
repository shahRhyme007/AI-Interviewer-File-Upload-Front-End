// app/layout.tsx
import '../styles/global.css';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>My Application</title>
        {/* Add other meta tags, links, scripts here */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
