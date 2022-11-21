export default {
  title: 'Аналитика',
  page: 'analytics',
  groups: [
    {
      name: 'analytics',
      tabName: 'Аналитика',
      fields: ['title_block', 'body_block'],
    },
  ],
  fields: [
    {
      name: 'title_block',
      type: 'div',
      cssClass: [
        'bg-white',
        'p-6',
        'border-b',
        'border-solid',
        'border-borderColor',
      ],
      fields: ['title'],
    },
    {
      text: 'Аналитика',
      name: 'title',
      type: 'label',
      cssClass: ['font-medium', 'text-xl'],
    },
    {
      name: 'body_block',
      type: 'div',
      cssClass: ['bg-white', 'p-6'],
      fields: ['filters_wrapper', 'statistics_wrapper', 'analytics_table'],
    },
    {
      name: 'filters_wrapper',
      type: 'div',
      cssClass: ['flex', 'flex-wrap', 'justify-start', 'mt-2'],
      fields: ['period_filter', 'date_filter', 'city_filter', 'product_filter'],
    },
    {
      name: 'period_filter',
      type: 'radio',
      viewType: 'button',
      options: [
        {
          value: 'today',
          label: 'Сегодня',
        },
        {
          value: 'yesterday',
          label: 'Вчера',
        },
        {
          value: 'week',
          label: 'Неделя',
        },
        {
          value: 'month',
          label: 'Месяц',
        },
        {
          value: 'quarter',
          label: 'Квартал',
        },
      ],
      value: 'today',
      parentClass: ['mr-6', 'mb-6'],
    },
    {
      name: 'date_filter',
      type: 'datetime',
      cssClass: ['w-40'],
      parentClass: ['mr-6', 'mb-6'],
    },
    {
      name: 'city_filter',
      type: 'select',
      description: 'Все города',
      options: [
        {
          id: 'test',
          name: 'Some test city',
        },
      ],
      size: 'medium',
      cssClass: ['w-full'],
      parentClass: ['w-40', 'mr-6', 'mb-6'],
    },
    {
      name: 'product_filter',
      type: 'select',
      description: 'Все типы товаров и бренды',
      options: [
        {
          id: 'test',
          name: 'Some product',
        },
      ],
      size: 'medium',
      cssClass: ['w-full'],
      parentClass: ['w-60', 'mr-6', 'mb-6'],
    },
    {
      name: 'statistics_wrapper',
      type: 'div',
      cssClass: ['flex', 'justify-between', 'py-4', 'mb-10'],
      fields: [
        'statistics_block1',
        'statistics_block2',
        'statistics_block3',
        'statistics_block4',
      ],
    },
    {
      name: 'statistics_block1',
      type: 'div',
      fields: ['statistics_block1_title', 'statistics_block1_subtitle'],
    },
    {
      name: 'statistics_block1_title',
      type: 'label',
      text: '0',
      cssClass: ['text-3xl'],
    },
    {
      name: 'statistics_block1_subtitle',
      type: 'label',
      text: 'Кликов',
      cssClass: ['text-xs', 'text-textSecondary'],
    },
    {
      name: 'statistics_block2',
      type: 'div',
      fields: ['statistics_block2_title', 'statistics_block2_subtitle'],
    },
    {
      name: 'statistics_block2_title',
      type: 'label',
      text: '0',
      cssClass: ['text-3xl'],
    },
    {
      name: 'statistics_block2_subtitle',
      type: 'label',
      text: 'Платных кликов',
      cssClass: ['text-xs', 'text-textSecondary'],
    },
    {
      name: 'statistics_block3',
      type: 'div',
      fields: ['statistics_block3_title', 'statistics_block3_subtitle'],
    },
    {
      name: 'statistics_block3_title',
      type: 'label',
      text: '0',
      cssClass: ['text-3xl'],
    },
    {
      name: 'statistics_block3_subtitle',
      type: 'label',
      text: 'Расход бюджета',
      cssClass: ['text-xs', 'text-textSecondary'],
    },
    {
      name: 'statistics_block4',
      type: 'div',
      cssClass: ['max-w-40'],
      fields: ['statistics_block4_title', 'statistics_block4_subtitle'],
    },
    {
      name: 'statistics_block4_title',
      type: 'label',
      text: '0',
      cssClass: ['text-3xl'],
    },
    {
      name: 'statistics_block4_subtitle',
      type: 'label',
      text: 'заказов ожидается при конверсии в 3%',
      cssClass: ['text-xs', 'text-textSecondary'],
    },
    {
      name: 'analytics_table',
      type: 'table',
      cssClass: ['mb-10'],
      config: {
        pagination: false,
        align: 'center',
        bordered: false,
        selection: false,
      },
      columns: [
        {
          title: 'Предложение',
          dataIndex: 'offer',
          key: 'offer',
          widget: {
            name: 'text',
          },
        },
        {
          title: 'Город',
          dataIndex: 'city',
          key: 'city',
          widget: {
            name: 'text',
          },
        },
        {
          title: 'Клики',
          dataIndex: 'clicks',
          key: 'clicks',
          widget: {
            name: 'text',
          },
        },
        {
          title: 'Pacход, ₽',
          dataIndex: 'expense',
          key: 'expense',
          widget: {
            name: 'text',
          },
        },
      ],
      data: [
        {
          offer: 'text',
          city: 'text',
          clicks: 'text',
          expense: 'text',
        },
      ],
    },
  ],
}
