import Articles from "../../../components/articles"
import Stage from "../../../components/stage"

// TODO: add meta data support
export async function generateMetadata() {
  return {
    title: "homepage.seo.,",
  }
}

export default async function CategoryPage({ params }) {
  return (
    <>
      <Stage />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <Articles slug={params.slug} />
        </div>
      </div>
    </>
  )
}
