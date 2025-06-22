// components/Card.tsx
import { ReactNode } from 'react'

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white shadow rounded-2xl p-6">
      {children}
    </div>
  )
}
