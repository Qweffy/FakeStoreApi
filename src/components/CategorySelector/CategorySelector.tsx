import React, { Fragment } from 'react'
import { IndexPath, Select, SelectItem, Icon } from '@ui-kitten/components'
import { CategorySelectorProps } from './CategorySelector.types'
import styles from './CategorySelector.styles'
import { PrimaryColors } from '@styles/Colors'
import { capitalizeFirstLetter } from '@utils/productsUtils'

export const CategorySelector = ({ categories, selectedCategory, onChange }: CategorySelectorProps) => (
  <Select
    selectedIndex={new IndexPath(selectedCategory ? categories.indexOf(selectedCategory) + 1 : 0)}
    onSelect={onChange}
    value={capitalizeFirstLetter(selectedCategory) || 'Categories'}
    style={styles.container}
    accessoryRight={<Icon name='options-2-outline' fill={PrimaryColors.Black} style={styles.icon} />}>
    <Fragment>
      <SelectItem title={'All categories'}/>
      {categories.map((category, index) => (
        <SelectItem key={index} title={capitalizeFirstLetter(category)} />
      ))}
    </Fragment>
  </Select>
)

