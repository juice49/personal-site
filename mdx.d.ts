declare module '*.mdx' {
  const MDXComponent: React.FC
  
  interface Meta {
    title: string
  }

  export default MDXComponent
  export const meta: Meta
}
