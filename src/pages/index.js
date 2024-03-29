import * as React from 'react'
import HomePage from './components/HomePage'


// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider className='p-4'>
      <div></div>
      <HomePage />
    </ChakraProvider>
  )
}