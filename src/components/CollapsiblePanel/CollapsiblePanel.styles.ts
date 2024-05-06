import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  card: {
    backgroundColor: '#E9E8E8',
    borderRadius: 10,
    elevation: 3,
    margin: 12,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  collapsedLayout: {
    alignItems: 'center',
    backgroundColor: '#E9E8E8',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  detailContainer: {
    alignItems: 'center',
    backgroundColor: '#E9E8E8',
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
    backgroundColor: '#E9E8E8',
    flexDirection: 'column',
    gap: 8,
  },
  expandedTitle: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
  },
  icon:{ height:32, marginLeft:-16, width:32 },
  image: {
    borderRadius: 12,
    height: 75,
    marginRight: 16,
    width: 75,
  },
  label: {
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold',
  },
  text: {
    color: '#666',
    fontSize: 14,
  },
  title: {
    color: '#333',
    flexShrink: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  value: {
    color: '#666',
    fontSize: 14,
    marginLeft: 8,
  },
})
