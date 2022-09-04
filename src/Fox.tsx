// == External
import React, { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'

// == App
import { useRootStore } from './store/RootStore'

export const Fox: FC = observer(() => {
  const store = useRootStore()

  useEffect(() => {
    store.fetchAFox()
  }, [store])

  return (
    <div>
      <h2>{store.hasFox() ? <FoxButton /> : 'Fetching a fox...'}</h2>
      {store.hasFox() && <img src={store.fox.image} width="400" />}
    </div>
  )
})

const FoxButton: FC = observer(() => {
  const store = useRootStore()
  return (
    <>
      <h3>Here is a fox!</h3>
      <button onClick={() => store.fetchAFox()}>Fetch another fox</button>
    </>
  )
})
