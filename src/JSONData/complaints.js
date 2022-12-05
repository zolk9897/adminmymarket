export default {
  page: 'complaints',
  useTitle: {
    title: 'Рассылки',
    breadcrumbs: [
      {
        title: 'Главная',
        path: '/',
      },
      {
        title: 'Сервисы',
      },
      {
        title: 'Жалобы на товар',
        path: '/main/complaints',
      },
    ],
  },
  groups: [
    {
      name: 'complaints',
      tabName: '',
      layoutForm: 'horizontal',
      fields: ['body_block'],
    },
  ],
  fields: [
    {
      name: 'body_block',
      type: 'div',
      cssClass: ['bg-white', 'p-6'],
      fields: ['table'],
    },
    {
      name: 'table',
      type: 'table',
      config: {
        pagination: true,
        size: 'small',
        align: 'center',
        bordered: true,
        selection: {
          setStatus: true,
          setStatusColumn: ['status', 'category'],
          delete: true,
        },
      },
      data: [
        {
          id: 1,
          status: 2,
          text: { link: '/main/complaint_form_edit', text: 'Короткая Жалоба' },
          changed: 1668485459,
          category: 1,
          creator: '(lryzecairos@gmail.com) Андрей Яковлев',
        },
        {
          id: 2,
          status: 0,
          text: {
            link: '/main/complaint_form_edit',
            text: 'Длинная жалоба Длинная жалоба Длинная жалоба Длинная жалоба Длинная жалоба',
          },
          changed: 1668485459,
          category: 1,
          creator: 'Не зарегестрирован',
        },
        {
          id: 3,
          status: 1,
          text: {
            link: '/main/complaint_form_edit',
            text: 'Очень Длинная жалоба Очень Длинная жалоба  Очень Длинная жалоба Очень Длинная жалоба Очень Длинная жалоба',
          },
          changed: 1668485459,
          category: 1,
          creator: 'Не зарегестрирован',
        },
        {
          id: 4,
          status: 2,
          text: {
            link: '/main/complaint_form_edit',
            text: 'Жалоба Жалоба Жалоба Жалоба Жалоба',
          },
          changed: 1668485459,
          category: 1,
          creator: 'Не зарегестрирован',
        },
        {
          id: 5,
          status: 0,
          text: {
            link: '/main/complaint_form_edit',
            text: 'Жалоба Жалоба Жалоба Жалоба Жалоба',
          },
          changed: 1668485459,
          category: 1,
          creator: 'Не зарегестрирован',
        },
        {
          id: 6,
          status: 1,
          text: {
            link: '/main/complaint_form_edit',
            text: 'Жалоба Жалоба Жалоба Жалоба Жалоба',
          },
          changed: 1668485459,
          category: 1,
          creator: 'Не зарегестрирован',
        },
      ],
      columns: [
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 25,
        },
        {
          title: 'Текст',
          dataIndex: 'text',
          key: 'text',
          resizable: true,
          widget: {
            name: 'popover',
            type: 'text',
          },
          ellipsis: true,
          width: 100,
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
              { id: 0, value: 'Обработано', color: '#87D068' },
              { id: 1, value: 'В работе', color: '#FAAD14' },
              { id: 2, value: 'Отказано', color: '#FF4D4F' },
            ],
          },
          width: 150,
        },
        {
          title: 'Изменено',
          dataIndex: 'changed',
          key: 'changed',
          widget: {
            name: 'date',
            format: 'DD.MM.YYYY HH:mm:ss',
          },
          resizable: true,
          width: 150,
          editable: false,
        },
        {
          title: 'Категория',
          dataIndex: 'category',
          key: 'category',
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
          title: 'Создатель',
          dataIndex: 'creator',
          key: 'creator',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 150,
        },
        {
          title: 'Действия',
          dataIndex: 'actions',
          widget: {
            name: 'actions',
          },
          width: 70,
          hide: false,
          delete: true,
          edit: true,
          copy: true,
        },
      ],
    },
  ],
}
