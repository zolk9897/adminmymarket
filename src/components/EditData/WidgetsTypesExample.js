const Textarea = {
  title: 'Manufacturer Part Number',
  description:
    'An alphanumeric string; 1 character minimum in length and 40 characters maximum in length.',
  required: true,
  name: 'part_number',
  value: '',
  type: 'textarea',
  minRows: 2,
  maxRows: 5,
}

const Input = {
  title: 'Seller SKU',
  description: 'Unique Identifier.',
  required: true,
  name: 'item_sku',
  format: 'number',
  value: '1',
  type: 'input',
}

const Select = {
  title: 'Product ID Type',
  description:
    'The type of standard, unique identifier entered in the Product ID field. This is a required field if Product ID is provided.',
  required: true,
  name: 'external_product_id_type',
  value: 4,
  type: 'select',
  options: [
    {
      id: 1,
      name: 'GTIN',
    },
    {
      id: 2,
      name: 'EAN',
    },
  ],
}

const Boolean = {
  title: 'Seller SKU',
  required: true,
  name: 'item_sku',
  value: false,
  type: 'boolean',
  viewType: 'checkbox', // switch || checkbox
}

const File = {
  title: 'Brand Image',
  required: true,
  name: 'brand_name',
  value: '',
  type: 'file',
  maxCount: 3,
  fileType: 'image', // image || file
}

const Radio = {
  title: 'Seller SKU',
  required: true,
  name: 'item_sku',
  value: 6,
  type: 'radio',
  options: [
    { label: 10, value: 10 },
    { label: 15, value: 15 },
    { label: 6, value: 6 },
  ],
}

const Datetime = {
  title: 'Seller Date',
  required: true,
  name: 'item_sku',
  value: '',
  type: 'datetime',
  time: true,
  displayFormat: 'YYYY-MM-DD HH:mm:ss',
  format: 'YYYY-MM-DD HH:mm:ss',
  mode: 'date', // time | date | month | year | decade
}
