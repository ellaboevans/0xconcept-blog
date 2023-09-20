export type ParamsProps = {
  params: {
    slug: string
  }
}

export type ThemeContextProviderProps = {
  children: React.ReactNode
}
export type StorageType = string | null | any

export type Theme = boolean

export type ThemeContextProps = {
  isDark: Theme
  changeTheme: () => void
}
