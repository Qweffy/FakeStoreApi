import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { mediumSpace, smallSpace } from '@styles/Spacing'
import { bodyBold, bodyRegular, h3Headline } from '@styles/Fonts'
import { PrimaryColors } from '@styles/Colors'
import { largeSize } from '@styles/Size'

type ProductDetailStyleType = {
  container: ViewStyle
  expandedImage: ImageStyle
  contentContainer: ViewStyle
  title: TextStyle
  icon: ViewStyle
  text: TextStyle
  detailContainer: ViewStyle
  label: TextStyle
  value: TextStyle
  scrollViewContainer: ViewStyle
  button: ViewStyle
}

export default StyleSheet.create<ProductDetailStyleType>({
  button: { backgroundColor: PrimaryColors.Black, borderRadius: 8, height: largeSize },
  container: {
    backgroundColor: PrimaryColors.White,
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'column',
    gap: smallSpace,
    paddingHorizontal: mediumSpace,
  },
  detailContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  expandedImage: {
    aspectRatio: 1,
    borderRadius: 12,
    height: undefined,
    marginBottom: mediumSpace,
    width: '100%',
  },
  icon: { height: 32, marginLeft: -16, width: 32 },
  label: {
    ...bodyBold,
  },
  scrollViewContainer: { flex: 1 },
  text: {
    ...bodyRegular,
  },
  title: {
    ...h3Headline,
    alignSelf: 'center',
  },
  value: {
    ...bodyRegular,
    marginLeft: 8,
  },
})
