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

export function getValueFromNode(data, lib, pageName) {
  let res = []
  Object.keys(data).forEach((el) => {
    if (typeof data[el] === 'object') {
      res[el] = data[el].value
    } else res[el] = lib[pageName][data[el]]
  })
  return res
}
