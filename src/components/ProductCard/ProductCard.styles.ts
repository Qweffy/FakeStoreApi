import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { PrimaryColors } from '@styles/Colors'
import { bodyBold, h5Headline } from '@styles/Fonts'
import { mediumSpace, smallSpace, xSmallSpace } from '@styles/Spacing'

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
    backgroundColor: PrimaryColors.White,
    borderBottomColor: PrimaryColors.LightGray,
    borderBottomWidth: 1,
    borderWidth: 0,
    marginBottom: xSmallSpace,
    marginHorizontal: smallSpace,
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
