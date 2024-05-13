import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { PrimaryColors } from '@styles/Colors'
import { bodyBold, h5Headline } from '@styles/Fonts'
import { mediumSpace } from '@styles/Spacing'

type ProductCardStyleType = {
  container: ViewStyle
  productContainer: ViewStyle
  title: TextStyle
  image: ImageStyle
  price: TextStyle
  descriptionContainer: ViewStyle
}

export default StyleSheet.create<ProductCardStyleType>({
  container: {
    borderBottomColor: PrimaryColors.LightGray,
    borderBottomWidth: 1,
    elevation: 3,
    margin: 12,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  descriptionContainer: { flex: 1, justifyContent: 'space-between', marginLeft: mediumSpace },
  image: {
    borderRadius: 12,
    height: 75,
    marginRight: 16,
    width: 75,
  },
  price: { ...h5Headline, alignSelf: 'flex-end' },
  productContainer: {
    flexDirection: 'row',
  },
  title: {
    flexShrink: 1,
    ...bodyBold,
  },
})
