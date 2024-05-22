"use client"

import { notFound } from "next/navigation"
import { loadArticles, loadArticlesByCategory } from "../lib/services"
import Card from "./card"
import { useEffect, useState } from "react"

interface IProp {
  slug?: string
}

function Articles(props: IProp) {
  const [articles, setArticles] = useState<any[]>([])
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesData = props.slug
          ? await loadArticlesByCategory(props.slug)
          : await loadArticles()
        if (!articlesData) {
          notFound()
        } else {
          setArticles(articlesData)
        }
      } catch (error) {
        console.error("Failed to load articles:", error)
        setError(true)
      }
    }

    fetchArticles()
  }, [props.slug])

  if (error) {
    return <div>Error loading articles. Please try again later.</div>
  }

  if (articles.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="grid">
        {articles.map((article) => {
          return (
            <Card
              article={article}
              key={`article__left__${article.attributes.slug}`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Articles
