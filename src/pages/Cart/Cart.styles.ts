import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { smallSpace, xSmallSpace } from '@styles/Spacing'
import { brandColor } from '@styles/Colors'
import { bodyBold, bodyRegular, h5Headline } from '@styles/Fonts'

type CartStyleType = {
  container: ViewStyle
  expandedImage: ImageStyle
  expandedLayout: ViewStyle
  expandedTitle: TextStyle
  icon: ViewStyle
  text: TextStyle
  detailContainer: ViewStyle
  label: TextStyle
  value: TextStyle
}

export default StyleSheet.create<CartStyleType>({
  container: {
    margin: smallSpace,
  },
  detailContainer: {
    alignItems: 'center',
    backgroundColor: brandColor,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  expandedImage: {
    aspectRatio: 1,
    borderRadius: 12,
    height: undefined,
    width: '100%',
  },
  expandedLayout: {
    alignItems: 'center',
    backgroundColor: brandColor,
    flexDirection: 'column',
    gap: xSmallSpace,
  },
  expandedTitle: {
    ...h5Headline,
  },
  icon: { height: 32, marginLeft: -16, width: 32 },
  label: {
    ...bodyBold,
  },
  text: {
    ...bodyRegular,
  },
  value: {
    ...bodyRegular,
    marginLeft: 8,
  },
})
