import React from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
import { styled } from '../stitches.config'
import Jam from '../types/jam'
import Box from './box'
import Text from './text'
import ExternalLinkIcon from './external-link-icon'
import HeadingLevel from './heading-level'

interface Props {
  jam: Jam
}

const Track: React.FC<Props> = ({ jam }) => {
  return (
    <Container>
      <Box
        style={{
          color: jam.track.album.color,
        }}
        css={{
          gridArea: 'image',
        }}
      >
        <AlbumArtwork
          src={getAppleMusicImageUrl(jam.track.album.appleMusicImageUrl, 160)}
          alt={`The album art for "${
            jam.track.album.name
          }" by ${jam.track.artists.map(({ name }) => name).join(', ')}`}
          width={140}
          height={140}
        />
      </Box>
      <Box
        css={{
          gridArea: 'info',
          stackBlock: '$small',
        }}
      >
        <div>
          <HeadingLevel>
            <Text size='milli' weight='bold'>
              {jam.track.name}
            </Text>
          </HeadingLevel>
          <Text as='p' size='micro' variant='mono'>
            {jam.track.artists.map(({ name }) => name).join(', ')}
          </Text>
        </div>
        <Text
          as='time'
          dateTime={jam.date}
          size='micro'
          variant='mono'
          css={{
            display: 'block',
            color: 'var(--color, $bodySubtle)',
          }}
        >
          {format(new Date(jam.date), 'd MMMM yyyy')}
        </Text>
        <ActionList>
          {jam.track.appleMusicUrl && (
            <Text as='li' size='micro' variant='mono'>
              <a href={jam.track.appleMusicUrl}>
                Apple Music <ExternalLinkIcon />
              </a>
            </Text>
          )}
          {jam.track.spotifyUrl && (
            <Text as='li' size='micro' variant='mono'>
              <a href={jam.track.spotifyUrl}>
                Spotify <ExternalLinkIcon />
              </a>
            </Text>
          )}
          {jam.track.youtubeUrl && (
            <Text as='li' size='micro' variant='mono'>
              <a href={jam.track.youtubeUrl}>
                YouTube <ExternalLinkIcon />
              </a>
            </Text>
          )}
        </ActionList>
      </Box>
    </Container>
  )
}

export default Track

const Container = styled('article', {
  display: 'grid',
  gridTemplateColumns: 'minmax(3rem, 0.18fr) 1fr',
  gridTemplateAreas: `'image info'`,
  gap: '$2',
})

const ActionList = styled('ul', {
  listStyle: 'none',
  '@belowI1': {
    stackBlock: '0.25rem',
  },
  '@i1': {
    display: 'flex',
    flexWrap: 'wrap',
    stackInline: '$2',
  },
  'a:hover, a:focus': {
    backgroundColor: '$accentA',
    color: '#fff',
  },
})

const AlbumArtwork = styled(Image, {
  display: 'block',
  width: '100%',
  height: 'auto',
  backgroundColor: 'currentColor',
  clipPath: `polygon(
    0 0,
    calc(100% - 4px) 4px,
    100% 100%,
    4px calc(100% - 4px)
  )`,
})

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
