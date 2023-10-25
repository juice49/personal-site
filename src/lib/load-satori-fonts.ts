export type FontFiles<FontPaths extends string[]> = {
  [FontFile in keyof FontPaths]: ArrayBuffer
}

export default function loadSatoriFonts<FontPaths extends string[]>(
  ...fontPaths: FontPaths
): Promise<FontFiles<FontPaths>> {
  return Promise.all(
    fontPaths
      .map(path =>
        [`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/fonts`, path].join('/'),
      )
      .map(url => fetch(url))
      .map(request => request.then(response => response.arrayBuffer())),
  ) as Promise<FontFiles<FontPaths>>
}
