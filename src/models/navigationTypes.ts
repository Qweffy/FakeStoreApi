import Product from '@models/Products'

export type RootStackParamList = {
  Home: undefined
  ProductDetail: {
    product: Product
  }
  Cart: undefined
}
