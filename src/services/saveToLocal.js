export default function saveToLocal(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}
