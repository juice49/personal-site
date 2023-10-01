'use client'

import React from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
import Jam from '../types/jam'
import text from '../styles/text.css'
import ExternalLinkIcon from './external-link-icon'
import HeadingLevel from './heading-level'
import { container, actionList, albumArtwork } from '../styles/track.css'

interface Props {
  jam: Jam
}

const Track: React.FC<Props> = ({ jam }) => {
  return (
    <article className={container()}>
      <div
        style={{
          color: jam.track.album.color,
          gridArea: 'image',
        }}
      >
        <Image
          className={albumArtwork()}
          src={getAppleMusicImageUrl(jam.track.album.appleMusicImageUrl, 160)}
          alt={`The album art for "${
            jam.track.album.name
          }" by ${jam.track.artists.map(({ name }) => name).join(', ')}`}
          width={140}
          height={140}
        />
      </div>
      <div
        style={{
          gridArea: 'info',
          stackBlock: '$small',
        }}
      >
        <div>
          <HeadingLevel>
            <span className={text({ size: 'milli', weight: 'bold' })}>
              {jam.track.name}
            </span>
          </HeadingLevel>
          <p className={text({ size: 'micro', variant: 'mono' })}>
            {jam.track.artists.map(({ name }) => name).join(', ')}
          </p>
        </div>
        <time
          dateTime={jam.date}
          className={text({ size: 'micro', variant: 'mono' })}
          style={{
            display: 'block',
            color: 'var(--color, $bodySubtle)',
          }}
        >
          {format(new Date(jam.date), 'd MMMM yyyy')}
        </time>
        <ul className={actionList()}>
          {jam.track.appleMusicUrl && (
            <li className={text({ size: 'micro', variant: 'mono' })}>
              <a href={jam.track.appleMusicUrl}>
                Apple Music <ExternalLinkIcon />
              </a>
            </li>
          )}
          {jam.track.spotifyUrl && (
            <li className={text({ size: 'micro', variant: 'mono' })}>
              <a href={jam.track.spotifyUrl}>
                Spotify <ExternalLinkIcon />
              </a>
            </li>
          )}
          {jam.track.youtubeUrl && (
            <li className={text({ size: 'micro', variant: 'mono' })}>
              <a href={jam.track.youtubeUrl}>
                YouTube <ExternalLinkIcon />
              </a>
            </li>
          )}
        </ul>
      </div>
    </article>
  )
}

export default Track

type AppleMusicImageDimensions =
  | 30
  | 40
  | 100
  | 110
  | 130
  | 150
  | 160
  | 170
  | 190
  | 200
  | 220
  | 230
  | 240
  | 250
  | 340
  | 400
  | 440
  | 450
  | 460
  | 480
  | 600
  | 1200
  | 1400

function getAppleMusicImageUrl(
  baseUrl: string,
  dimensions: AppleMusicImageDimensions,
): string {
  const APPLE_MUSIC_DOMAIN = 'mzstatic.com'

  if (!baseUrl.includes(APPLE_MUSIC_DOMAIN)) {
    const params = new URLSearchParams({
      w: '160',
    })

    return `${baseUrl}?${params}`
  }

  return `${baseUrl}/${dimensions}x${dimensions}bb.jpg`
}
