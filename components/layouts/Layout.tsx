import { FC, ReactNode } from "react"

import Head from "next/head"
import { Navar } from '../ui/Navar';

interface Props{
    children:ReactNode
}

export const Layout:FC<Props> = ({ children }) => {
  return (
    <div>
        <Head>

        </Head>

        <nav>
          <Navar/>
        </nav>

        <main>
            { children }
        </main>
    </div>
  )
}
