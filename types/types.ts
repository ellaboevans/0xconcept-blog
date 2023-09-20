export type ParamsProps = {
  params: {
    slug: string
  }
}

export type dataProps = {
  _id: string
  title: string
  summary: string
  content: string
  slug: string
  author: string
  createdAt: string
  tag: string
}[]

export type postProps = {
  _id: string
  title: string
  summary: string
  content: string
  slug: string
  author: string
  createdAt: string
  tag: string
}

export type slugProps = string

export type ThemeContextProviderProps = {
  children: React.ReactNode
}
export type StorageType = string | null | any

export type Theme = boolean

export type ThemeContextProps = {
  isDark: Theme
  changeTheme: () => void
}
