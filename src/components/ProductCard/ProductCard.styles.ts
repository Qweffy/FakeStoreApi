import { StyleSheet } from 'react-native'
import { brandColor } from '@styles/Colors'
import { bodyBold, bodyRegular, h5Headline } from '@styles/Fonts'

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
    ...h5Headline,
  },
  value: {
    ...bodyRegular,
    marginLeft: 8,
  },
})
