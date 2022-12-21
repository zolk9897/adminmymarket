import dayjs from 'dayjs'
import filterDeep from 'deepdash/filterDeep'

const getFormattedFilterData = (filter) => {
  const filterData = Object.assign({}, filter)
  for (var key in filterData) {
    if (filterData[key]) {
      if (filterData[key].length === 2) {
        if (!filterData[key][0] && !filterData[key][1]) filterData[key] = null
      } else {
        if (
          filterData[key][0] === null ||
          filterData[key][0] === '' ||
          filterData[key][0] === undefined ||
          (Array.isArray(filterData[key][0]) && !filterData[key][0].length)
        ) {
          filterData[key] = []
        }
      }
    }
  }
  return filterData
}

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

const search = (dataSource, searchData, item, columns) => {
  if (item.value.config.tree) {
    return filterDeep(
      dataSource.value,
      function (value) {
        return value[searchData.value.field]
          .toLowerCase()
          .includes(searchData.value?.value.toLowerCase())
      },
      {
        childrenPath: 'children',
        onTrue: {
          skipChildren: true,
          cloneDeep: true,
          keepIfEmpty: true,
        },
      }
    )
  } else {
    return dataSource.value.filter((row) =>
      Object.keys(row).some((colName) => {
        if (searchData.value.field === colName) {
          return searchField(row, colName, searchData, columns)
        }
      })
    )
  }
}
const searchField = (row, colName, searchData, columns) => {
  const col = columns.value.find((col) => col.dataIndex === colName)
  if (colName === 'key') return false
  if (col.widget.name === 'select') {
    const data = col.widget.params.find((param) => param.id === row[colName])
    return !data
      ? false
      : JSON.stringify(data)
          .toLowerCase()
          .includes(searchData.value?.value?.toLowerCase())
  }
  if (col.widget.name === 'date')
    return dayjs(row[colName] * 1000)
      .format(col.widget.format)
      .toLowerCase()
      .includes(searchData.value?.value?.toLowerCase())
  if (col.widget.name === 'text')
    return String(row[colName])
      .toLowerCase()
      .includes(searchData.value?.value?.toLowerCase())
  if (col.widget.name === 'multiselect') {
    const val = JSON.parse(JSON.stringify(searchData.value.value))
    return val.includes(String(row[colName]))
  }
  if (col.widget.name === 'checkbox') {
    if (!searchData.value.value) return true
    return row[colName] === searchData.value.value
  }
  return JSON.stringify(row[colName])
    .toLowerCase()
    .includes(searchData.value?.value?.toLowerCase())
}

export {
  numberFilter,
  dateFilter,
  searchFilter,
  categoryFilter,
  selectFilter,
  checkboxFilter,
  search,
  getFormattedFilterData,
}
