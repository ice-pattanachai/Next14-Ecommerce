'use client'

import React from 'react'

import { AuthProvider } from '../_providers/Auth'
import { CartProvider } from '../_providers/Cart'
import { ThemeProvider } from './Theme'
import { FiltersProvider } from './Filters'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <FiltersProvider>
          <CartProvider>{children}</CartProvider>
        </FiltersProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
