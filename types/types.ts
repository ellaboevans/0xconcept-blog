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
  email: string
  createdAt: string
  tag: string
  image: string
}[]

export type postProps = {
  _id: string
  title: string
  summary: string
  content: string
  slug: string
  email: string
  createdAt: string
  tag: string
  image: string
}

export type fileType = any

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
