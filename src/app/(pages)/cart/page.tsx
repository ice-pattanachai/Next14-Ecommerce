import React, { Fragment } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Page, Settings } from '../../../payload/payload-types'
import { staticCart } from '../../../payload/seed/cart-static'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchSettings } from '../../_api/fetchGlobals'
import { Blocks } from '../../_components/Blocks'
import { Gutter } from '../../_components/Gutter'
import { generateMeta } from '../../_utilities/generateMeta'
import { CartPage } from './CartPage'
import classes from './index.module.scss'

export const dynamic = 'force-dynamic'

export default async function Cart() {
  let page: Page | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug: 'cart',
    })
  } catch (error) {
   console.log("🚀 ~ Cart ~ error:", error)
  }
  
  if (!page) {
    page = staticCart
  }

  if (!page) {
    return notFound()
  }

  let settings: Settings | null = null

  try {
    settings = await fetchSettings()
  } catch (error) {
    console.log("🚀 ~ Cart ~ error:", error)
  }

  return (
    <div className={classes.container}>
      <Gutter>
        <h3>Cart</h3>
        <CartPage settings={settings} page={page} />
      </Gutter>
      <Blocks blocks={page?.layout} disableBottomPadding />
    </div>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  let page: Page | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug: 'cart',
    })
  } catch (error) {
    console.log("🚀 ~ generateMetadata ~ error:", error)
  }

  if (!page) {
    page = staticCart
  }

  return generateMeta({ doc: page })
}