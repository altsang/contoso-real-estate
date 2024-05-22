import Link from "next/link"
import { useEffect, useState } from "react"
import { loadCategories } from "../lib/services"

const Nav = () => {
  const [categories, setCategories] = useState<any[]>([])
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await loadCategories()
        setCategories(categoriesData)
      } catch (error) {
        console.error("Failed to load categories:", error)
        setError(true)
      }
    }

    fetchCategories()
  }, [])

  if (error) {
    return <div>Error loading categories. Please try again later.</div>
  }

  if (categories.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <nav className="nav" data-uk-navbar>
        <p className="text">
          Welcome to our Blog! Choose your favorite category.
        </p>
        <ul className="uk-navbar-nav">
          {/* TODO Highlight the current nav item */}
          {categories.map((category) => {
            return (
              <li key={category.id}>
                <Link
                  href={`/category/${category.attributes.slug}`}
                  className="category label"
                >
                  {category.attributes.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Nav
