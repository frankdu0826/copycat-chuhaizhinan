import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: '跨境指南 - 最懂出海人的工具导航栏',
    template: '%s | 跨境指南'
  },
  description: '跨境指南是专为跨境电商出海企业打造的知识分享平台，提供亚马逊、独立站、TikTok等平台的运营教程和工具资源。',
  keywords: ['跨境电商', '亚马逊', '独立站', 'Shopify', 'TikTok', '跨境指南'],
  authors: [{ name: '跨境指南' }],
  creator: '跨境指南',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://chuhaizhinan.com',
    siteName: '跨境指南',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <header className="border-b">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center justify-between">
                <div className="text-2xl font-bold text-primary">
                  跨境指南
                </div>
                <div className="flex items-center space-x-6">
                  <a href="/" className="hover:text-primary">首页</a>
                  <a href="/articles" className="hover:text-primary">文章</a>
                  <a href="/tools" className="hover:text-primary">工具</a>
                  <a href="/services" className="hover:text-primary">服务商</a>
                </div>
              </nav>
            </div>
          </header>
          
          <main>{children}</main>
          
          <footer className="border-t bg-muted/50 mt-16">
            <div className="container mx-auto px-4 py-8">
              <div className="text-center text-muted-foreground">
                <p>&copy; 2024 跨境指南. All rights reserved.</p>
                <p className="mt-2">专为跨境电商出海企业打造的知识分享平台</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
} 