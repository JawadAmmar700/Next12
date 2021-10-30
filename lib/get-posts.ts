async function getAllPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await res.json()
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`)
  }
  return data
}

export default getAllPosts
