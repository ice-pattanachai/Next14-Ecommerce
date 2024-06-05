import React from 'react'
import Link from 'next/link'

import { Header } from '../../../payload/payload-types'
import { fetchHeader } from '../../_api/fetchGlobals'

import HeaderComponent from './NavBar_New'

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
