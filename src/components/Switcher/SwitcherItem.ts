import { ReactNode } from "react"

export type SwitcherItem<T> = {
  label: ReactNode
  value: T
}