export default {
  page: 'price_edit',
  groups: [
    {
      name: 'price_edit',
      fields: ['main_block'],
    },
  ],
  fields: [
    {
      name: 'main_block',
      type: 'div',
      fields: ['title_block', 'body_block'],
    },
    {
      name: 'title_block',
      type: 'div',
      fields: ['title'],
      cssClass: [
        'bg-white',
        'p-6',
        'border-b',
        'border-solid',
        'border-borderColor',
      ],
    },
    {
      text: 'Редактирование прайс-листа',
      name: 'title',
      type: 'label',
      cssClass: ['font-medium', 'text-xl'],
    },
    {
      name: 'body_block',
      type: 'div',
      fields: ['data'],
      cssClass: ['bg-white', 'p-6'],
    },
    {
      name: 'data',
      type: 'table',
      cssClass: ['bg-white'],
      config: {
        pagination: true,
        size: 'small',
        align: 'center',
        bordered: false,
      },
      data: 'https://eeb2b398-a948-45f9-b373-a6d086b91e0d.mock.pstmn.io/priceListEditTableData',
      columns: [
        {
          title: 'Активность',
          dataIndex: 'activity',
          key: 'activity',
          widget: {
            name: 'checkbox',
            type: 'external',
          },
          width: 90,
        },
        {
          title: 'Оффер',
          dataIndex: 'offer',
          key: 'offer',
          widget: {
            name: 'text',
          },
          width: 500,
        },
        {
          title: 'Статус',
          dataIndex: 'status',
          key: 'status',
          widget: {
            name: 'select',
            type: 'status',
            active: true,
            params: [
              { id: 0, value: 'Сопоставлен', color: '#87D068' },
              { id: 1, value: 'Ошибка в оффере', color: '#FAAD14' },
              { id: 2, value: 'Не сопоставлен', color: '#FF4D4F' },
            ],
          },
        },
        {
          title: 'Поиск',
          dataIndex: 'search',
          key: 'search',
          widget: {
            name: 'select',
            params: [
              { id: 0, value: 'Iphone', color: '#87D068' },
              { id: 1, value: 'Playstation', color: '#FAAD14' },
              { id: 2, value: 'ASUS', color: '#FF4D4F' },
            ],
          },
        },
        {
          title: 'Помощь для сопоставления',
          dataIndex: 'help_matching',
          key: 'help_matching',
          widget: {
            name: 'checkbox',
          },
        },
      ],
    },
  ],
}
