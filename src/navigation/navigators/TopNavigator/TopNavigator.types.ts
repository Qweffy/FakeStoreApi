import { NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '@models/navigationTypes'

export type CartBadgeProps = {
  cartItemCount: number;
};

export type TopNavigatorProps = {
  navigation: NavigationProp<RootStackParamList>;
  showCart?: boolean;
};
