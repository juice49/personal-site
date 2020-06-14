import React, { useEffect, useRef, useState } from 'react'

interface Props {
  className?: string,
  size: [number, number],
  strokeWidth?: number,
  color?: string
}

const Wave: React.FC<Props> = ({ className, size, strokeWidth, color }) => {
  // return null
  const [width] = size
  const [containerSize, ref] = useResizeObserver()
  let count = 1

  const inlineSize = containerSize
    ? containerSize?.borderBoxSize?.inlineSize ?? containerSize?.contentRect?.width
    : null
  
  if (inlineSize) {
    count = (Math.floor(inlineSize / width) * 2) - 1
  }
  
  return (
    <div
      ref={ref}
      className={className}
    >
      <svg
        width={inlineSize ?? 0}
        height={size[1] + strokeWidth}
        viewBox={`0 0 ${inlineSize ?? 0} ${size[1]}`}
        css={`
          display: block;
        `}
      >
        <path
          id='curve'
          d={`
            M 0,${size[1] / 2}
            Q ${size[0] / 4},${size[1] * -0.5} ${size[0] / 2},${size[1] / 2}
            t ${`${size[0] / 2},0 `.repeat(count)}
          `}
          strokeWidth={strokeWidth}
          stroke={color}
          fill='none'
        />
      </svg>
    </div>
  )
}

Wave.defaultProps = {
  strokeWidth: 1,
  color: '#f461ff'
}

export default Wave

function singleResizeObserver () {
  const callbacks = new WeakMap()

  if (typeof window === 'undefined') {
    return
  }

  const observer = new ResizeObserver(entries => {
    for (const entry of entries) {
      const callback = callbacks.get(entry.target)
      callback(entry)
    }
  })

  return {
    observe (target, callback) {
      callbacks.set(target, callback)
      observer.observe(target)
    },
    unobserve (target) {
      callbacks.delete(target)
      observer.unobserve(target)
    },
    disconnect () {
      observer.disconnect()
    }
  }
}

const observers = singleResizeObserver()

function useResizeObserver (): [
  ResizeObserverEntry,
  React.MutableRefObject<undefined>
] {
  const ref = useRef()
  const [entry, setEntry] = useState<ResizeObserverEntry>()

  useEffect(() => {
    observers.observe(ref.current, entry => {
      setEntry(entry)
    })

    return () => observers.unobserve(ref.current)
  }, [ref.current])

  return [entry, ref]
}

/* function useResizeObserver (): [
  ResizeObserverEntry,
  React.MutableRefObject<undefined>
] {
  const ref = useRef()
  const observer = useRef<ResizeObserver>()
  const [entry, setEntry] = useState<ResizeObserverEntry>()

  useEffect(() => {
    observer.current = new ResizeObserver(entries => {
      console.log('[ENTRIES]', entries)
      setEntry(entries[0])
    })

    return () => observer.current.disconnect()
  }, [])
  
  useEffect(() => {
    const method = ref.current
      ? 'observe'
      : 'unobserve'
    
    observer.current[method](ref.current)
    
    return () => {
      observer.current.unobserve(ref.current)
    }
  }, [observer.current, ref.current])
  
  return [entry, ref]
} */
