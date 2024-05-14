import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { PrimaryColors } from '@styles/Colors'
import { largeSpace, mediumSpace, smallSpace, x3LargeSpace } from '@styles/Spacing'
import { bodyBold, bodyRegular, h4Headline } from '@styles/Fonts'

type CartStyleType = {
  container: ViewStyle
  content: ViewStyle
  title: TextStyle
  image: ImageStyle
  productTitle: TextStyle
  quantity: TextStyle
  price: TextStyle
  totalContainer: ViewStyle
  subtotalText: TextStyle
  freeShipping: TextStyle
  detailsContainer: ViewStyle
  totalText: TextStyle
  cartContainer: ViewStyle
  buttonsContainer: ViewStyle
  contentContainer: ViewStyle
  editQuantityContainer: ViewStyle
  descriptionContainer: ViewStyle
  icon: TextStyle
}

export default StyleSheet.create<CartStyleType>({
  buttonsContainer: { gap: smallSpace, margin: mediumSpace },
  cartContainer: { alignItems: 'center', flexDirection: 'row', marginBottom: x3LargeSpace },
  container: { backgroundColor: PrimaryColors.White, flex: 1 },
  content: { marginBottom: smallSpace, paddingHorizontal: mediumSpace },
  contentContainer: { flex: 1 },
  descriptionContainer: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
  detailsContainer: { gap: mediumSpace },
  editQuantityContainer: {
    alignItems: 'center',
    borderColor: PrimaryColors.LightGray,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-around',
    width: 100,
  },
  freeShipping: { ...bodyRegular, color: PrimaryColors.Success },
  icon:{ height: 28, width: 28 },
  image: { height: 100, marginRight: smallSpace, width: 100 },
  price: { ...h4Headline },
  productTitle: { ...bodyBold, marginBottom: mediumSpace },
  quantity: { ...bodyRegular },
  subtotalText: { ...bodyBold },
  title: { ...h4Headline, marginBottom: largeSpace },
  totalContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  totalText: { ...h4Headline }
})
