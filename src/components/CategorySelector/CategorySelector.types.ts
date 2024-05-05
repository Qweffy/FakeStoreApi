import { IndexPath } from '@ui-kitten/components'

export type CategorySelectorProps = {
  categories: string[];
  selectedCategory: string | null;
  onChange:(index: IndexPath | IndexPath[]) => void
}
