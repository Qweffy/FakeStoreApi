import React, { useState } from 'react'
import { Layout, Text, Card, Icon } from '@ui-kitten/components'
import { Image } from 'react-native'

import styles from './CollapsiblePanel.styles'
import { CollapsiblePanelProps } from '@components/CollapsiblePanel/CollapsiblePanel.types'

const CollapsedView = ({ product }: CollapsiblePanelProps) => (
  <Layout style={styles.collapsedLayout}>
    <Image source={{ uri: product.image }} style={styles.image} />
    <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
  </Layout>
)

const ExpandedView = ({ product }: CollapsiblePanelProps) => (
  <Layout style={styles.expandedLayout}>
    <Image source={{ uri: product.image }} style={styles.expandedImage} resizeMode={"contain"} />
    <Text style={styles.expandedTitle}>{product.title}</Text>
    <Text category={'h3'}>$ {product.price}</Text>
    <Text style={styles.text}>{product.description}</Text>
    <Layout style={styles.detailContainer}>
      <Text style={styles.label}>Category:</Text>
      <Text style={styles.value}>{product.category}</Text>
    </Layout>
    <Layout style={{width:'100%', justifyContent:'space-between', flexDirection:'row'}}>
      <Layout style={styles.detailContainer}>
        <Text style={styles.label}>Rating:</Text>
        <Text style={styles.value}>{product.rating.rate} ({product.rating.count} reviews)</Text>
      </Layout>
        <Icon name={'minus-outline'} style={styles.icon}/>
    </Layout>
  </Layout>
)

export const CollapsiblePanel = ({ product }: CollapsiblePanelProps) => {
  const [expanded, setExpanded] = useState(false)
  const toggleExpanded = () => { setExpanded(!expanded) }

  return (
    <Card onPress={toggleExpanded} style={styles.card}>
        {!expanded ? <CollapsedView product={product} /> : <ExpandedView product={product} />}
    </Card>
  )
}
