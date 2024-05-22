import Articles from "../components/articles"
import Stage from "../components/stage"

export default async function HomePage() {
  return (
    <div>
      <div className="uk-section">
        <Stage />
        <section className="section results">
          <Articles />
        </section>
      </div>
    </div>
  )
}
