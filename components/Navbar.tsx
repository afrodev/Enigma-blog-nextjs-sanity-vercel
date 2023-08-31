import BlogHeader from './BlogHeader'

interface NavbarProps {
  title: string
  description?: any[]
  level: 1 | 2
}

export default function Navbar({ title, description, level }: NavbarProps) {
  return (
    <nav className="bg-black text-white p-4">
      <BlogHeader 
        title={title}
        description={description}
        level={1}
      />
      {/* Add more navbar content here */}
    </nav>
  )
}