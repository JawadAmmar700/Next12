const cache: any = {}

export default function useData(key, fetcher) {
  if (!cache[key]) {
    let data: any
    let promise: any
    cache[key] = () => {
      if (data !== undefined) return data
      if (!promise) promise = fetcher().then(r => (data = r))
      throw promise
    }
  }
  return cache[key]()
}
