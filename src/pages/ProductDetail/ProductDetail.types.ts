import { NavigationProp, RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '@models/navigationTypes'

export type ProductDetailProps = {
  navigation: NavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'ProductDetail'>;
}
