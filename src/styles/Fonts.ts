import { TextStyle } from 'react-native'

const h1Headline: TextStyle = {
  fontFamily: 'Montserrat',
  fontWeight: '300',
  fontSize: 96,
  letterSpacing: -1.5,
}

const h2Headline: TextStyle = {
  fontFamily: 'Montserrat',
  fontWeight: '300',
  fontSize: 60,
  letterSpacing: 0,
}

const bodyRegular: TextStyle = {
  fontFamily: 'Montserrat',
  fontSize: 16,
  letterSpacing: 0,
  lineHeight: 24,
}

const bodyBold: TextStyle = {
  ...bodyRegular,
  fontWeight: 'bold',
}

const caption: TextStyle = {
  fontFamily: 'Montserrat',
  fontWeight: '400',
  fontSize: 12,
  letterSpacing: 0,
  lineHeight: 18,
}

export { h1Headline, h2Headline, bodyRegular, caption, bodyBold }
