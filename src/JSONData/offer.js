export default {
  title: 'Рассылки',
  page: 'offer',
  useTitle: {
    title: 'Список офферов',
    breadcrumbs: [
      {
        title: 'Главная',
        path: '/',
      },
      {
        title: 'Каталог',
      },
      {
        title: 'Офферы',
        path: '/main/offer',
      },
    ],
  },

  groups: [
    {
      name: 'offer',
      fields: ['body_block'],
    },
  ],
  fields: [
    {
      name: 'body_block',
      type: 'div',
      cssClass: ['bg-white', 'p-6'],
      fields: ['offers__table'],
    },
    {
      name: 'offers__table',
      type: 'table',
      config: {
        pagination: true,
        size: 'small',
        align: 'center',
        bordered: true,
        selection: { refuse: true, approve: true },
        filterSize: 'default',
      },
      data: [
        {
          offer: {
            title: 'Samsung galaxy',
            link: '/mikes',
            offerInfo: [
              { param: 'Экран', value: '6.7 (2778х1284) OLED 120Гц' },
              { param: 'Встроенная память', value: '128 гБ' },
              { param: 'Оперативная память', value: '6ГБ' },
              { param: 'З камеры', value: '12 МП, 12 МП, 12 мп' },
              { param: 'Аккумулятор', value: '4352 мАч' },
            ],
          },
          shop: 'Все смартфоны',
          search: 2,
          status: 2,
        },
        {
          offer: {
            title: 'Sony Playstation 5',
            link: '/mikes',
            offerInfo: [
              { param: 'Экран', value: '6.7 (2778х1284) OLED 120Гц' },
              { param: 'Встроенная память', value: '128 гБ' },
              { param: 'Оперативная память', value: '6ГБ' },
              { param: 'З камеры', value: '12 МП, 12 МП, 12 мп' },
              { param: 'Аккумулятор', value: '4352 мАч' },
            ],
          },
          shop: 'Все приставки',
          status: 0,
        },
        {
          offer: {
            title: 'Iphone',
            link: '/mikes',
            offerInfo: [
              { param: 'Экран', value: '6.7 (2778х1284) OLED 120Гц' },
              { param: 'Встроенная память', value: '128 гБ' },
              { param: 'Оперативная память', value: '6ГБ' },
              { param: 'З камеры', value: '12 МП, 12 МП, 12 мп' },
              { param: 'Аккумулятор', value: '4352 мАч' },
            ],
          },
          shop: 'Все смартфоны',
          status: 1,
        },
        {
          offer: {
            title: 'Samsung galaxy',
            link: '/mikes',
            offerInfo: [
              { param: 'Экран', value: '6.7 (2778х1284) OLED 120Гц' },
              { param: 'Встроенная память', value: '128 гБ' },
              { param: 'Оперативная память', value: '6ГБ' },
              { param: 'З камеры', value: '12 МП, 12 МП, 12 мп' },
              { param: 'Аккумулятор', value: '4352 мАч' },
            ],
          },
          shop: 'Все смартфоны',
          search: 2,
          status: 2,
        },
        {
          offer: {
            title: 'Sony Playstation 5',
            link: '/mikes',
            offerInfo: [
              { param: 'Экран', value: '6.7 (2778х1284) OLED 120Гц' },
              { param: 'Встроенная память', value: '128 гБ' },
              { param: 'Оперативная память', value: '6ГБ' },
              { param: 'З камеры', value: '12 МП, 12 МП, 12 мп' },
              { param: 'Аккумулятор', value: '4352 мАч' },
            ],
          },
          shop: 'Все приставки',
          status: 0,
        },
        {
          offer: {
            title: 'Iphone',
            link: '/mikes',
            offerInfo: [
              { param: 'Экран', value: '6.7 (2778х1284) OLED 120Гц' },
              { param: 'Встроенная память', value: '128 гБ' },
              { param: 'Оперативная память', value: '6ГБ' },
              { param: 'З камеры', value: '12 МП, 12 МП, 12 мп' },
              { param: 'Аккумулятор', value: '4352 мАч' },
            ],
          },
          shop: 'Все смартфоны',
          status: 1,
        },
      ],
      columns: [
        {
          title: 'Оффер',
          dataIndex: 'offer',
          key: 'offer',
          resizable: true,
          widget: {
            name: 'popover',
            type: 'columns',
            filterParam: 'title',
          },
          width: 150,
          filterType: 'category',
        },
        {
          title: 'Магазин',
          dataIndex: 'shop',
          key: 'shop',
          widget: {
            name: 'text',
          },
          resizable: true,
          width: 150,
          editable: false,
          filterType: 'category',
        },
        {
          title: 'Поиск',
          dataIndex: 'search',
          key: 'search',
          resizable: true,
          widget: {
            name: 'select',
            params: [
              { id: 0, value: 'SonyPlayStation' },
              { id: 1, value: 'samsung' },
              { id: 2, value: 'xiaomi' },
            ],
          },
          width: 200,
        },
        {
          title: 'Статус',
          dataIndex: 'status',
          key: 'status',
          resizable: true,
          widget: {
            name: 'select',
            type: 'status',
            params: [
              { id: 0, value: 'Одобрено', color: '#87D068' },
              {
                id: 1,
                value: 'Модерация',
                color: '#E6E6E6',
                textColor: '#8c8c8c',
              },
              { id: 2, value: 'Отказано', color: '#FF4D4F' },
            ],
          },
          width: 150,
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
