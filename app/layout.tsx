import React from "react";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'build-cv',
  description: 'description builder pdf file',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  data-theme="light">
    <body
        className={inter.className}
    >
    <div className="bg-blue-500 text-white p-4">
      This is a blue box!
    </div>
    <div className="bg-blue-500 text-white p-4 text-xl">
      Tailwind CSS is working! 🚀
    </div>
    {children}
    </body>
    </html>
  )
}
