import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'

export const getErrorMessage = (error: FetchBaseQueryError | SerializedError | undefined): string => {
  if (!error)
    return ''
  if ('status' in error) {
    return `An error occurred: ${error.status} ${error.data ? JSON.stringify(error.data) : 'Unknown error'}`
  }
  if ('message' in error) {
    return `An error occurred: ${error.message}`
  }
    return 'An unknown error occurred'
}
