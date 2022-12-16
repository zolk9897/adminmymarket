import dayjs from 'dayjs'

function numberFilter(record, val, col, filteredInfo) {
  const value = filteredInfo.value[col.dataIndex]
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
  return JSON.stringify(record[col.key])
    .toString()
    .toLowerCase()
    .includes(value.toLowerCase())
}

function categoryFilter(record, value, col) {
  if (col.filterMultiple) {
    const valArr = JSON.parse('[' + value + ']')
    const colValue = col.widget.params
      .filter((item) => valArr.includes(item.id))
      .map((el) => el.value)

    if (colValue.includes(record[col.key][col.filterParam])) return true
    if (colValue.includes(record[col.key])) return true
  } else {
    const colValue = col.widget.params[value].value
    if (colValue === record[col.key][col.filterParam]) return true
    if (colValue === record[col.key]) return true
  }
  return false
}

function selectFilter(record, value, col) {
  if (value === 'Не указано') {
    if (record[col.key] !== 0 && !record[col.key]) return true
    return false
  }
  if (col.widget.params[value].id === record[col.key]) return true
  return false
}

function checkboxFilter(record, value, col) {
  const booleanValue = value === 'true'
  if (record[col.key] === booleanValue) return true
  return false
}

export {
  numberFilter,
  dateFilter,
  searchFilter,
  categoryFilter,
  selectFilter,
  checkboxFilter,
}
