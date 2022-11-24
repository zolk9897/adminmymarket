export default {
  page: 'pages',
  useTitle: {
    title: 'Страницы',
    breadcrumbs: [
      {
        title: 'Главная',
        path: '/',
      },
      {
        title: 'Контент',
      },
      {
        title: 'Страницы',
        path: '/main/pages',
      },
    ],
  },
  groups: [
    {
      name: 'pages',
      fields: ['body_block'],
    },
  ],
  fields: [
    {
      name: 'body_block',
      type: 'div',
      cssClass: ['bg-white', 'p-6'],
      fields: ['pages__table'],
    },
    {
      name: 'pages__table',
      type: 'table',
      config: {
        pagination: true,
        size: 'small',
        align: 'center',
        bordered: true,
      },
      data: [
        {
          activity: true,
          name: { link: '/main/complaint_form_edit', title: 'О компании' },
          visibility: 2,
          link: '/main/about_company',
        },
        {
          activity: true,
          name: { link: '/main/complaint_form_edit', title: 'Доставка' },
          visibility: 0,
          link: '/main/delivery',
        },
        {
          activity: false,
          name: { link: '/main/complaint_form_edit', title: 'Контакты' },
          visibility: 1,
          link: '/main/contacts',
        },
        {
          activity: false,
          name: { link: '/main/complaint_form_edit', title: 'О компании' },
          visibility: 0,
          link: '/main/about_company',
        },
        {
          activity: true,
          name: { link: '/main/complaint_form_edit', title: 'Доставка' },
          visibility: 1,
          link: '/main/delivery',
        },
        {
          activity: false,
          name: { link: '/main/complaint_form_edit', title: 'Контакты' },
          visibility: 2,
          link: '/main/contacts',
        },
      ],
      columns: [
        {
          title: 'Активность',
          dataIndex: 'activity',
          key: 'activity',
          resizable: true,
          widget: {
            name: 'checkbox',
            type: 'text',
          },
          width: 150,
        },
        {
          title: 'Название',
          dataIndex: 'name',
          key: 'name',
          widget: {
            name: 'link',
            type: 'external',
          },
          resizable: true,
          width: 150,
          editable: false,
        },
        {
          title: 'Видимость',
          dataIndex: 'visibility',
          key: 'visibility',
          resizable: true,
          widget: {
            name: 'select',
            params: [
              { id: 0, value: 'Всем' },
              { id: 1, value: 'По ссылке' },
              { id: 2, value: 'Нет' },
            ],
          },
          width: 200,
        },
        {
          title: 'Действия',
          dataIndex: 'actions',
          widget: {
            name: 'actions',
          },
          width: 20,
          hide: false,
          edit: true,
          delete: true,
          onCopy: true,
          deactivate: 'activity',
          view: 'link',
        },
      ],
    },
  ],
}
