import type { DropdownMenuItem } from "@nuxt/ui"
import type { Arrayable } from "~/types"

export const sortOptions: Arrayable<DropdownMenuItem> = [
  [
    {
      label: 'Title A-Z',
    },
    {
      label: 'Title Z-A',
    },
    {
      label: 'Score 1-10',
    },
    {
      label: 'Score 10-1',
    }
  ]
]

export const operatorOptions: Arrayable<DropdownMenuItem> = [
  {
    label: 'And',
  },
  {
    label: 'Or',  
  }
]
