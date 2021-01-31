interface Track {
  name: string
  album: {
    name: string
    appleMusicImageUrl: string
    color?: string
  }
  artists: {
    name: string
  }[]
  appleMusicUrl?: string
  spotifyUrl?: string
  youtubeUrl?: string
}

export default Track
