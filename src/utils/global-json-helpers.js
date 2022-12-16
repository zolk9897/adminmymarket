export function findField(fArr = [], fName) {
  if (!fArr.length) return
  let searchResult = null

  const recursiveSearch = (arr = [], name) => {
    arr.forEach((item) => {
      if (item.name === name) {
        searchResult = item
      } else {
        recursiveSearch(item.fieldsData, name)
      }
    })
  }
  recursiveSearch(fArr, fName)

  return searchResult
}
