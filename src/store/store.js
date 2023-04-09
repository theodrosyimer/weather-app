export function createStore(storageStrategy, primaryKey, initObject) {
  class HistorySingleton {
    #storageStrategy = null

    constructor(storageStrategy, primaryKey, initObject) {
      if (History.instance == null) {
        this.#storageStrategy = storageStrategy
        this.primaryKey = primaryKey
        this.initObject = initObject
        History.instance = this
      }
      return History.instance
    }

    init = () => {
      this.#storageStrategy.init(this.primaryKey, JSON.stringify(this.initObject))
      return this.parse()
    }

    getItem = (key) => {
      this.#storageStrategy.getItem(key)
    }

    setItem = (key, value) => {
      this.#storageStrategy.setItem(key, value)
    }

    removeItem = (value) => {
      this.#storageStrategy.remove(value)
    }

    clear = () => {
      this.#storageStrategy.clear()
    }

    inspect = () => {
      console.log(JSON.parse(this.#storageStrategy.getItem(this.primaryKey)))
    }

    parse = () => {
      return JSON.parse(this.#storageStrategy.getItem(this.primaryKey))
    }

    serialize = (value) => {
      return JSON.stringify(value)
    }
  }

  const history = new HistorySingleton(storageStrategy, primaryKey, initObject)
  return history
}
