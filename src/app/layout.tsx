
import '@/styles/tailwind.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  return <>{children}</>
}
