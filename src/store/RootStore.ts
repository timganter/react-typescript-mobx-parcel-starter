// == External
import { makeAutoObservable, observable, action, computed } from "mobx"
import { createContext, useContext }              from "react"

type Fox = {
  image: string,
  link : string
}

class RootStore {

  constructor() {
    makeAutoObservable(this)
  }

  @observable count = 0
  @observable fox:Fox

  @computed hasFox():boolean {
    return this.fox !== undefined
  }

  @action countIncrement(): void {
    this.count++
  }

  @action countDecrement(): void {
    this.count--
  }

  @action async fetchAFox(): Promise<void> {
    this.fox = undefined
    const url = 'https://randomfox.ca/floof/'
    const response =  await (await fetch(url)).json()
    this.fox = response
  }
}

const RootStoreContext = createContext(new RootStore())
export const useRootStore = (): RootStore => useContext(RootStoreContext)
