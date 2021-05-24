// == External
import { makeAutoObservable, observable, action } from "mobx"
import { createContext, useContext }              from "react"

class RootStore {

  constructor() {
    makeAutoObservable(this)
  }

  @observable count = 0

  @action countIncrement(): void {
    this.count++
  }

  @action countDecrement(): void {
    this.count--
  }

}

const RootStoreContext = createContext(new RootStore())
export const useRootStore = (): RootStore => useContext(RootStoreContext)
