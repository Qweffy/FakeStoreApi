import React, { Fragment } from 'react'
import { IndexPath, Select, SelectItem } from '@ui-kitten/components'
import { CategorySelectorProps } from './CategorySelector.types'

export const CategorySelector = ({ categories, selectedCategory, onChange }: CategorySelectorProps) => (
  <Select
    selectedIndex={new IndexPath(selectedCategory ? categories.indexOf(selectedCategory) + 1 : 0)}
    onSelect={onChange}
    value={selectedCategory || 'Show All'}
    placeholder="Select a category"
    style={{ margin: 10 }}
  >
    <Fragment>
    <SelectItem title="Show All" />
    {categories.map((category, index) => (
      <SelectItem key={index} title={category} />
    ))}
    </Fragment>
  </Select>
)
