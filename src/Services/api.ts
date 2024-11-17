import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Cardapio, Restaurant } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  biling: {
    name: string
  }
  delivery: {
    endereco: string
    cidade: string
    cep: string
    numero: string
    complemento: string
  }
  payment: {
    card: {
      name: string
      numero: string
      code: string
      mes: string
      ano: string
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getCardapio: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: `/checkout`,
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetCardapioQuery,
  usePurchaseMutation
} = api

export default api
