export default {
  page: 'rates',
  title: 'Реквизиты',
  groups: [
    {
      name: 'rates',
      fields: ['title_block', 'body_block'],
    },
  ],
  fields: [
    {
      name: 'title_block',
      type: 'div',
      cssClass: [
        'p-6',
        'bg-white',
        'flex',
        'gap-2',
        'items-end',
        'border-b-solid',
        'border-b-2',
        'border-b-#f5f5f5',
      ],
      fields: ['title', 'link'],
    },
    {
      text: 'Ставки',
      name: 'title',
      type: 'label',
      cssClass: ['font-medium', 'text-xl', 'leading-5'],
    },
    {
      text: 'Ставки по умолчанию',
      name: 'link',
      type: 'link',
      cssClass: ['font-normal', 'text-sm', 'leading-5'],
    },
    {
      name: 'body_block',
      type: 'div',
      cssClass: ['bg-white'],
      fields: ['table_block'],
    },
    {
      name: 'table_block',
      type: 'div',
      cssClass: ['p-6'],
      fields: ['table'],
    },
    {
      name: 'table',
      type: 'table',
      config: {
        pagination: false,
        size: 'small',
        align: 'center',
        bordered: true,
        selection: true,
      },
      data: 'https://eeb2b398-a948-45f9-b373-a6d086b91e0d.mock.pstmn.io/ratesTableData',
      columns: [
        {
          title: 'Категория',
          dataIndex: 'category',
          key: 'category',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          filterType: 'category',
          sort: true,
        },
        {
          title: 'Предложение',
          dataIndex: 'offer',
          key: 'offer',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          filterType: 'text',
          sort: true,
        },
        {
          title: 'Цена',
          dataIndex: 'price',
          key: 'price',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          filterType: 'number',
          sort: true,
        },
        {
          title: 'Город',
          dataIndex: 'city',
          key: 'city',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          sort: true,
        },
        {
          title: 'Размещение',
          dataIndex: 'placement',
          key: 'placement',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          filterType: 'category',
          sort: true,
        },
        {
          title: 'Рекомендации',
          dataIndex: 'recommendations',
          key: 'recommendations',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          sort: true,
        },
        {
          title: 'Ставка',
          dataIndex: 'rate',
          key: 'rate',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          sort: true,
        },

        {
          title: 'Действия',
          dataIndex: 'actions',
          widget: {
            name: 'actions',
          },
          width: 20,
          hide: false,
          delete: true,
          edit: true,
          copy: true,
        },
      ],
    },
  ],
}
