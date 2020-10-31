export default function loadFromLocal(key) {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (error) {
    console.log('loadFromLocal failed: ', error.message)
  }
}
