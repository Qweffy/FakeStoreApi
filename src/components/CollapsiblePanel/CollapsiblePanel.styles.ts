import { StyleSheet } from 'react-native'
import { brandColor } from '@styles/Colors'
import { xSmallSpace } from '@styles/Spacing'
import { bodyBold, bodyRegular, h2Headline } from '@styles/Fonts'

export default StyleSheet.create({
  card: {
    backgroundColor: brandColor,
    borderRadius: 10,
    elevation: 3,
    margin: 12,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  collapsedLayout: {
    alignItems: 'center',
    backgroundColor: brandColor,
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
    ...h2Headline,
  },
  icon: { height: 32, marginLeft: -16, width: 32 },
  image: {
    borderRadius: 12,
    height: 75,
    marginRight: 16,
    width: 75,
  },
  label: {
    ...bodyBold,
  },
  text: {
    ...bodyRegular,
  },
  title: {
    flexShrink: 1,
    ...h2Headline,
  },
  value: {
    ...bodyRegular,
    marginLeft: 8,
  },
})
