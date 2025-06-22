import Sidebar from '@/components/Sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar /> {/* Sidebar tetap dirender */}
      <div className="bg-white min-h-screen ml-64 p-3">
        <main className="p-6">{children}</main>
      </div>
    </>
  )
}