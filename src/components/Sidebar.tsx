"use client"

import { LayoutDashboard, BarChart2, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menu = [
  { label: 'Dashboard', icon: <LayoutDashboard size={20} />, href: '/dashboard' },
  { label: 'Analysis', icon: <BarChart2 size={20} />, href: '/dashboard/analysis' },
  { label: 'Test', icon: <MessageSquare size={20} />, href: '/dashboard/test' },
]

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="fixed top-0 left-0 w-64 bg-[#A3BCA6] min-h-screen p-6 border-r z-50">
      <div className="text-2xl font-bold mb-10 text-black">Sentiment Analysis</div>
      <nav className="space-y-3">
        {menu.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 p-2 rounded-lg transition text-black hover:bg-gray-200 ${
                isActive ? 'bg-white' : ''
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
