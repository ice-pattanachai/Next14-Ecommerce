{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react'
import Link from 'next/link'

import { Header } from '../../../payload/payload-types'
import { fetchHeader } from '../../_api/fetchGlobals'

import HeaderComponent from './NavBar_New'
// import { Gutter } from '../Gutter'
// import { HeaderNav } from './Nav'

// import classes from './index.module.scss'

export async function Header() {
  let header: Header | null = null

  try {
    header = await fetchHeader()
  } catch (error) {
  console.log("🚀 ~ Header ~ error:", error)

  }

  return (
    <>
      <HeaderComponent header={ header }/>
    </>
  )
}
