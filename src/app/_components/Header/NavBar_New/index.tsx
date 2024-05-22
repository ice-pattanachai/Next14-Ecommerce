'use client'
import React from 'react'
import Link from 'next/link'

import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'

import classes from './index.module.scss'
import Image from 'next/image'
import { HeaderNav } from '../Nav'
import { noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'

const HeaderComponent = ({ header } : { header : Header }) => {
const pathname = usePathname()

    return  (
    <nav className={
        [
            classes.header ,
            noHeaderFooterUrls.includes(pathname) && classes.hide
        ]
            .filter(Boolean)
            .join(' ')
        }>
        <Gutter className={classes.wrap}>
            <Link href='/'>
                {/* <img src="logo-main-cart.svg" alt="logo" /> */}
                {/* <Image src="http://localhost:3000/LittleShop.svg" alt="logo" /> */}
                <img src="LittleShop.svg" alt="logo" />
            </Link>

            <HeaderNav header={header} />
        </Gutter>
    </nav>
    )
}

export default HeaderComponent