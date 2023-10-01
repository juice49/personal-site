import React, { FC, PropsWithChildren } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import text from '../styles/text.css'
import { navigationList, navigationLink } from '../styles/navigation.css'

const Navigation: FC<PropsWithChildren> = ({ children }) => (
  <nav className={text({ size: 'milli' })}>
    <ul className={navigationList()}>{children}</ul>
  </nav>
)

export default Navigation

export const NavigationItem = 'li'

export const NavigationLink: React.ComponentType<
  React.ComponentProps<typeof Link>
> = props => {
  const router = useRouter()

  // FIXME-APP-DIR
  /* const [currentPath, targetPath] = [router?.asPath, props?.href].map(
    path =>
      (typeof path == 'string' ? path ?? '' : path.href ?? '').split('/')[1],
  ) */
  const [currentPath, targetPath] = ['/', '/']

  const isActive = currentPath === targetPath

  return (
    <Link
      {...props}
      className={[
        text({
          weight: isActive ? 'bold' : undefined,
        }),
        navigationLink({
          isActive,
        }),
      ].join(' ')}
    />
  )
}
