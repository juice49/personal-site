interface PostsByYear {
  postsByYear: Record<number, any[]>
  sortedYears: number[]
}

export default function usePostsByYear(posts: any[]): PostsByYear {
  const postsByYear = posts.reduce((reduced, post) => {
    if (!post.date) {
      return reduced
    }

    const date = new Date(post.date)
    const year = date.getFullYear()

    if (typeof reduced[year] === 'undefined') {
      reduced[year] = []
    }

    reduced[year].push(post)

    return reduced
  }, {})

  const sortedYears = Object.keys(postsByYear)
    .map(year => Number(year))
    .sort()
    .reverse()

  return {
    postsByYear,
    sortedYears,
  }
}
