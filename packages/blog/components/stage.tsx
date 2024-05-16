import Link from "next/link"
import { loadHomePage } from "../lib/services"
import Nav from "./nav"

const Stage = async () => {
  let homepage
  try {
    homepage = await loadHomePage()
  } catch (error) {
    console.error("Failed to load homepage data:", error)
    // Handle the error appropriately, e.g., render an error message or redirect
    return <div>Error loading homepage. Please try again later.</div>
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
