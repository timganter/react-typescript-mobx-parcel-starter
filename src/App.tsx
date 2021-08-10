// == External
import React, { FC } from 'react'

// == App
import { Counter } from './Counter'
import { Fox } from './Fox'

export const App:FC = () => {

  return <div>
    <h1>Hello world</h1>
    <Counter />
    <Fox />
  </div>
}
