import dayjs from 'dayjs'

function numberFilter(record, val, col, filteredInfo) {
  const value = filteredInfo.value[col.dataIndex]
  if (!value[0] && !value[1]) return true
  if (!value[1]) {
    if (record[col.key] >= Number(value[0])) {
      return true
    }
    return false
  }
  if (!value[0]) {
    if (record[col.key] <= Number(value[1])) {
      return true
    }
    return false
  }
  if (
    record[col.key] >= Number(value[0]) &&
    record[col.key] <= Number(value[1])
  ) {
    return true
  }
  return false
}

function dateFilter(record, val, col, filteredInfo) {
  if (
    !filteredInfo.value[col.dataIndex][0] &&
    !filteredInfo.value[col.dataIndex][1]
  )
    return true

  const startDate = dayjs(
    filteredInfo.value[col.dataIndex][0],
    'DD.MM.YYYY'
  ).unix()
  const finalDate = dayjs(
    filteredInfo.value[col.dataIndex][1],
    'DD.MM.YYYY'
  ).unix()

  if (!finalDate) {
    if (record[col.key] >= Number(startDate)) {
      return true
    }
    return false
  }
  if (!startDate) {
    if (record[col.key] <= Number(finalDate)) {
      return true
    }
    return false
  }
  if (
    record[col.key] >= Number(startDate) &&
    record[col.key] <= Number(finalDate)
  ) {
    return true
  }
  return false
}

function searchFilter(record, value, col) {
  if (value === 'null') return true
  return JSON.stringify(record[col.key])
    .toString()
    .toLowerCase()
    .includes(value.toLowerCase())
}

function getCategoryFilterData(columnName, dataSource) {
  const unicAllVariantSet = new Set(dataSource.map((item) => item[columnName]))
  return Array.from(unicAllVariantSet).map((item, index) => {
    return {
      id: index + 1,
      value: item,
    }
  })
}

function categoryFilter(record, value, col, filteredInfo, dataSource) {
  if (value === 'null') return true
  const categoryFilterData = getCategoryFilterData(col.dataIndex, dataSource)
  if (categoryFilterData[value - 1].value === record[col.key]) return true
  return false
}

function checkboxFilter(record, value, col) {
  if (value === 'null') return true
  const booleanValue = value === 'true'
  if (record[col.key] === booleanValue) return true
  return false
}

export {
  numberFilter,
  dateFilter,
  searchFilter,
  getCategoryFilterData,
  categoryFilter,
  checkboxFilter,
}
