import React from 'react'
import Link from 'next/link'
import box from '../styles/box.css'
import text from '../styles/text.css'
// import Wave from '../components/wave'
import { footerBox, cell, metaList } from '../styles/footer.css'

const Footer: React.FC = () => (
  <div className={text({ size: 'milli' })}>
    <footer className={footerBox()}>
      <div
        className={cell({ cell: 'main' })}
        css={{
          stackBlock: '$small',
        }}
      >
        <span className={text({ weight: 'bold' })}>Made by Ash.</span>
        <p>The Web and Stuff 2008&thinsp;&ndash;&thinsp;??</p>
      </div>
      <div
        className={cell({ cell: 'metaA' })}
        style={{
          stackBlock: '$small',
        }}
      >
        <span className={text({ weight: 'bold' })}>Etc.</span>
        <ul className={metaList()}>
          <li>
            <a href='/feed'>Subscribe with JSON Feed</a>
          </li>
          <li>
            <a href='#'>
              <del>About this site</del>
            </a>
          </li>
          <li>
            <a href='#'>
              <del>Design system</del>
            </a>
          </li>
        </ul>
      </div>
      <div
        className={cell({ cell: 'metaB' })}
        style={{
          stackBlock: '$small',
        }}
      >
        <span className={text({ weight: 'bold' })}>Networks and stuff:</span>
        <ul className={metaList()}>
          <li>
            <a href='mailto:ashley@juice49.com'>ashley@juice49.com</a>
          </li>
          <li>
            <a
              href='https://twitter.com/juice49'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href='https://github.com/juice49'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href='https://instagram.com/juice49'
              target='_blank'
              rel='noopener noreferrer'
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href='https://codepen.com/ash'
              target='_blank'
              rel='noopener noreferrer'
            >
              Codepen
            </a>
          </li>
          <li>
            <a
              href='https://dribbble.com/ash'
              target='_blank'
              rel='noopener noreferrer'
            >
              Dribbble
            </a>
          </li>
        </ul>
      </div>
      <div className={cell({ cell: 'metaC' })}>
        <div
          className={box({ mw: 0 })}
          style={{
            stackBlock: '$small',
          }}
        >
          {/* <Wave
              size={[24, 6]}
              strokeWidth={2}
              color='rgb(253, 206, 245)'
            /> */}
          <p>
            Feel free to use and remix anything you find on this site. It would
            be cool to hear what you do with it ✌️.
          </p>
        </div>
      </div>
    </footer>
  </div>
)

export default Footer
