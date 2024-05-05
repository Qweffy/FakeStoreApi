// CollapsiblePanel.tsx
import React, { useState } from 'react'
import { Layout, Text, Button, Card } from '@ui-kitten/components'
import { Image } from 'react-native'
import { ArrowIcon } from './CollapsiblePanel.components'
import { CollapsiblePanelProps } from './CollapsiblePanel.types'

export const CollapsiblePanel = ({ product }: CollapsiblePanelProps) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <Card style={{ margin: 10, alignItems: 'center' }}>
      <Button onPress={toggleExpanded} accessoryRight={(props) => <ArrowIcon {...props} expanded={expanded} />} appearance='ghost'>
        <Layout style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={{ uri: product.image }} style={{ width: 50, height: 50, marginRight: 8 }} />
          <Text>{product.title}</Text>
        </Layout>
      </Button>
      {expanded && (
        <Layout style={{ padding: 10 }}>
          <Text>Price: ${product.price}</Text>
          <Text>Description: {product.description}</Text>
          <Text>Category: {product.category}</Text>
          <Text>Rating: {product.rating.rate} ({product.rating.count} reviews)</Text>
        </Layout>
      )}
    </Card>
  )
}


