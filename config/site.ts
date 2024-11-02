import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";

const OPEN_SOURCE_URL = 'https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev'

const baseSiteConfig = {
  name: "Cline AI & Cline vscode",
  description:
    "cline vscode extension.cline ai for cline code. A dedicated learning platform focused on CLine tutorials, reviews, practical tips, user feedback, and the latest news",
  url: "https://landingpage.weijunext.com",
  ogImage: "https://landingpage.weijunext.com/og.png",
  metadataBase: '/',
  keywords: ["cline ai", "cline code", "cline vscode", "cline github"],
  authors: [
    {
      name: "weijunext",
      url: "https://www.aibesttop.com/",
      twitter: 'https://twitter.com/weijunext',
    }
  ],
  creator: '@weijunext',
  openSourceURL: 'https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: 'repo', href: OPEN_SOURCE_URL, icon: BsGithub },
    { name: 'twitter', href: "https://twitter.com/weijunext", icon: BsTwitterX },
    { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: SiBuymeacoffee }
  ],
  footerLinks: [
    { name: 'email', href: "mailto:weijunext@gmail.com", icon: MdEmail },
    { name: 'twitter', href: "https://twitter.com/weijunext", icon: BsTwitterX },
    { name: 'github', href: "https://github.com/cline/cline", icon: BsGithub },
    { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: SiBuymeacoffee },
    { name: 'juejin', href: "https://juejin.cn/user/26044008768029", icon: SiJuejin },
    { name: 'weChat', href: "https://www.aibesttop.com/", icon: BsWechat }
  ],
  footerProducts: [
    { url: 'https://phcopilot.ai/', name: 'Product Hunt Copilot' },
    { url: 'https://smartexcel.cc/', name: 'Smart Excel' },
    { url: 'https://landingpage.weijunext.com/', name: 'Landing Page Boilerplate' },
    { url: 'https://www.aibesttop.com//', name: 'J实验室' },
    { url: 'https://nextjscn.org/', name: 'Next.js 中文文档' },
    { url: 'https://nextjs.weijunext.com/', name: 'Next.js Practice' },
    { url: 'https://github.com/cline/clineindie-hacker-tools', name: 'Indie Hacker Tools' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
