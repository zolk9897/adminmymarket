export default {
  page: 'price_list',
  groups: [
    {
      name: 'price_list',
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
      text: 'Прайс-листы',
      name: 'title',
      type: 'label',
      cssClass: ['font-medium', 'text-xl'],
    },
    {
      name: 'body_block',
      type: 'div',
      fields: ['info_block', 'data', 'add_price_list_btn'],
      cssClass: ['bg-white', 'p-6'],
    },
    {
      name: 'info_block',
      type: 'div',
      fields: ['info1', 'block_link'],
      cssClass: ['border-b', 'border-solid', 'border-borderColor', 'mb-6'],
    },
    {
      name: 'info1',
      text: 'Робот Все Колёса автоматически скачивает ваши прайс-листы и публикует размещенные в них предложения каждый день рано утром. ',
      type: 'label',
    },
    {
      name: 'block_link',
      type: 'div',
      fields: ['info2', 'info_link'],
      cssClass: ['flex', 'pb-5'],
    },
    {
      name: 'info2',
      text: 'О том, как сформировать прайс-лист, вы можете',
      type: 'label',
    },
    {
      text: 'прочитать в справке.',
      name: 'info_link',
      type: 'link',
      link: '#',
      parentClass: ['pl-1.5'],
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
        hideFilterBtn: true,
        selection: {
          save: true,
          setStatus: true,
          updateOnSave: true,
          setStatusColumn: ['status'],
        },
      },
      data: [
        {
          name: {
            title: 'akbs.yaml',
            link: '/akbs.yaml',
          },
          status: 0,
          city: 'Москва',
          createDate: 1664430594,
          uploadDate: 1664430594,
          categories: '1 из 1',
          offers: '14 из 198 (7%)',
          editLink: {
            title: 'Редактировать',
            link: '/price_list_edit',
          },
          active: false,
        },
        {
          name: {
            title: 'akbs.yaml',
            link: '/akbs.yaml',
          },
          status: 1,
          city: 'Санкт-Петербург',
          createDate: 1661752194,
          uploadDate: 1661752194,
          categories: '1 из 1',
          offers: '14 из 198 (7%)',
          editLink: {
            title: 'Редактировать',
            link: '/price_list_edit',
          },
          active: true,
        },
      ],
      columns: [
        {
          title: 'Прайс-лист',
          dataIndex: 'name',
          widget: {
            name: 'link',
            type: 'external',
          },
        },
        {
          title: 'Статус',
          dataIndex: 'status',
          key: 'status',
          widget: {
            name: 'select',
            type: 'status',
            params: [
              { id: 0, value: 'Опубликован', color: '#87D068' },
              { id: 1, value: 'Отключен', color: '#FF4D4F' },
            ],
          },
          width: 150,
          resizable: true,
        },
        {
          title: 'Город',
          dataIndex: 'city',
          key: 'city',
          widget: {
            name: 'text',
            class: 'font-bold',
          },
          resizable: true,
          width: 200,
          filterType: 'category',
        },
        {
          title: 'Прайс-лист создан',
          dataIndex: 'createDate',
          key: 'createDate',
          resizable: true,
          widget: {
            name: 'date',
            format: 'DD.MM.YYYY',
          },
          width: 200,
          sort: true,
        },
        {
          title: 'Данные выгружены',
          dataIndex: 'uploadDate',
          key: 'uploadDate',
          resizable: true,
          widget: {
            name: 'date',
            format: 'DD.MM.YYYY',
          },
          width: 200,
          sort: true,
        },
        {
          title: 'Прявязано категорий',
          dataIndex: 'categories',
          widget: {
            name: 'text',
          },
          resizable: true,
          width: 150,
        },
        {
          title: 'Опубликовано предложений',
          dataIndex: 'offers',
          widget: {
            name: 'text',
          },
          resizable: true,
          width: 150,
        },
        {
          title: '',
          dataIndex: 'editLink',
          widget: {
            name: 'link',
            type: 'router',
          },
          width: 100,
        },
      ],
    },
    {
      name: 'add_price_list_btn',
      type: 'button',
      value: 'Добавить прайс-лист',
      buttonType: 'primary',
      style: {
        backgroundColor: 'var(--buttonGreen)',
        borderColor: 'var(--buttonGreen)',
        borderRadius: '2px',
      },
      icon: {
        name: 'fa-solid fa-plus',
      },
      cssClass: ['mt-10'],
      handlers: [
        {
          name: 'goRoute',
          params: {
            name: 'price_list_new',
          },
        },
      ],
    },
  ],
}
