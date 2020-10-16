import React from 'react'
import Head from 'next/head'

type ContainerProps = {
  children?: React.ReactNode
}

const Container: React.FC<ContainerProps> = props => {
  return (
    <>
      <Head>
        <title>Knowledge Browser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {props.children}
    </>
  )
}

Container.displayName = 'Layout'

export default Container
