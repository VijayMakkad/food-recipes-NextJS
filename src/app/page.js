import Image from 'next/image'
import photo from '../../public/recipe.jpg'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <h1 className="text-4xl">Welcome to Recipe Store</h1>
      <Image src={photo} className="max-w-xs" />
      <Link
        href="/recipe-list"
        className="text-3xl text-gray-500 hover:scale-[1.1] transition-all"
      >
        Explore Recipes
      </Link>
    </main>
  )
}
