import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { format } from 'date-fns'
import { stack } from 'monstera'
import Jam from '../types/jam'
import Text from './text'
import Stack from './stack'
import ExternalLinkIcon from './external-link-icon'

interface Props {
  jam: Jam
}

const Track: React.FC<Props> = ({ jam }) => {
  return (
    <Container>
      <div
        style={{
          color: jam.track.album.color,
        }}
        css={`
          grid-area: image;
        `}
      >
        <ImageContainer>
          <Image
            src={getAppleMusicImageUrl(jam.track.album.appleMusicImageUrl, 160)}
            alt={`The album art for "${
              jam.track.album.name
            }" by ${jam.track.artists.map(({ name }) => name).join(', ')}`}
            layout='responsive'
            width={140}
            height={140}
          />
        </ImageContainer>
      </div>
      <Stack
        gap={1}
        css={`
          grid-area: info;
        `}
      >
        <div>
          <Text as='h3' size='milli' weight='bold'>
            {jam.track.name}
          </Text>
          <Text as='p' size='micro' variant='mono'>
            {jam.track.artists.map(({ name }) => name).join(', ')}
          </Text>
        </div>
        <Text
          as='time'
          dateTime={jam.date}
          size='micro'
          variant='mono'
          css={`
            display: block;
            color: var(--color, var(--body-color-subtle));
          `}
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
      </Stack>
    </Container>
  )
}

export default Track

const Container = styled.article`
  display: grid;
  grid-template-columns: minmax(3rem, 0.18fr) 1fr;
  grid-template-areas: 'image info';
  gap: var(--space2);
`

const ActionList = styled.ul`
  list-style: none;

  @media (max-width: calc(${props => props.theme.breakpoints[0]} - 1px)) {
    ${props =>
      stack({
        gap: [0.25, 'rem'],
        direction: 'block',
        theme: props.theme,
      })}
  }

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    display: flex;
    flex-wrap: wrap;

    ${props =>
      stack({
        gap: 2,
        direction: 'inline',
        theme: props.theme,
      })}
  }

  a:hover,
  a:focus {
    background-color: var(--accent-color);
    color: #fff;
  }
`

const ImageContainer = styled.div`
  background-color: currentColor;
  clip-path: polygon(
    0 0,
    calc(100% - 4px) 4px,
    100% 100%,
    4px calc(100% - 4px)
  );
`

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
  return `${baseUrl}/source/${dimensions}x${dimensions}bb.jpg`
}
