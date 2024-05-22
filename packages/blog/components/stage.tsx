"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { loadHomePage } from "../lib/services"
import Nav from "./nav"

// Define the type for the homepage data
interface HomePageData {
  attributes: {
    hero: {
      title: string
    }
  }
}

const Stage = () => {
  const [homepage, setHomepage] = useState<HomePageData | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await loadHomePage()
        setHomepage(data)
      } catch (error) {
        console.error("Failed to load homepage data:", error)
        setError(error)
      }
    }

    fetchData()
  }, [])

  if (error) {
    return <div>Error loading homepage. Please try again later.</div>
  }

  if (!homepage) {
    return <div>Loading...</div>
  }

  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || "/"
  return (
    <div className="stage">
      <img
        src="/images/contoso-real-estate-logo.svg"
        alt="Contoso Real Estate Fictional Company Logo"
        width="200px"
      />
      <h1>{homepage.attributes.hero.title}</h1>
      <Link href={portalUrl} className="button">
        Visit the portal
      </Link>
      <Nav />
    </div>
  )
}

export default Stage
