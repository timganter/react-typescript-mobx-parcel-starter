// == External
import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'

// == App
import { useRootStore } from './store/RootStore'

export const Counter: FC = observer(() => {
  const store = useRootStore()

  return (
    <>
      <button onClick={() => store.countIncrement()}>Increment counter</button>
      <button onClick={() => store.countDecrement()}>Decrement counter</button>
      <p>
        <strong>{store.count}</strong>
      </p>
    </>
  )
})
