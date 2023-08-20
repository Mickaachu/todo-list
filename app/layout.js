import './globals.css'

export const metadata = {
  title: 'Todo-oo loo-oo',
  description: 'A todo app built with React and Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
