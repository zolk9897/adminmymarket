export default {
  page: 'settings_logs',
  useTitle: {
    title: 'Настройка ролей',
    breadcrumbs: [
      {
        title: 'Главная',
        path: '/',
      },
      {
        title: 'Настройки',
      },
      {
        title: 'Логирование',
        path: '/main/settings_logs',
      },
    ],
  },
  groups: [
    {
      name: 'settings_logs',
      fields: ['settings_logs__body_block'],
    },
  ],
  fields: [
    {
      name: 'settings_logs__body_block',
      type: 'div',
      cssClass: ['bg-white'],
      fields: ['wrapper_block'],
    },
    {
      name: 'wrapper_block',
      type: 'div',
      cssClass: ['w-full', 'p-6'],
      fields: ['settings_logs__user_roles_table'],
    },
    {
      name: 'settings_logs__user_roles_table',
      type: 'table',
      cssClass: ['bg-white'],
      style: {
        borderBottom: '2px solid #f5f5f5',
      },
      config: {
        pagination: true,
        size: 'large',
        align: 'center',
        bordered: true,
        search: {
          fields: ['user_name', 'object_name', 'user_type', 'action_name'],
        },
      },
      data: [
        {
          user_name: 'Руслан Новоселов',
          object_name: {
            title: 'Sony Playstation 5 + игра...',
            link: '/#',
          },
          user_type: 'Страница',
          action_name: 'Изменение заголовка',
          change_date: 1666803600,
        },
        {
          user_name: 'Руслан Новоселов',
          object_name: {
            title: 'Sony Playstation 5 + игра...',
            link: '/#',
          },
          user_type: 'Пользователь',
          action_name: 'Изменение заголовка',
          change_date: 1666803600,
        },
        {
          user_name: 'Руслан Новоселов',
          object_name: {
            title: 'Sony Playstation 5 + игра...',
            link: '/#',
          },
          user_type: 'Карточка товара',
          action_name: 'Изменение заголовка',
          change_date: 1666803600,
        },
        {
          user_name: 'Руслан Новоселов',
          object_name: {
            title: 'Sony Playstation 5 + игра...',
            link: '/#',
          },
          user_type: 'Страница',
          action_name: 'Изменение заголовка',
          change_date: 1666803600,
        },
        {
          user_name: 'Руслан Новоселов',
          object_name: {
            title: 'Sony Playstation 5 + игра...',
            link: '/#',
          },
          user_type: 'Пользователь',
          action_name: 'Изменение заголовка',
          change_date: 1666803600,
        },
        {
          user_name: 'Руслан Новоселов',
          object_name: {
            title: 'Sony Playstation 5 + игра...',
            link: '/#',
          },
          user_type: 'Карточка товара',
          action_name: 'Изменение заголовка',
          change_date: 1666803600,
        },
        {
          user_name: 'Руслан Новоселов',
          object_name: {
            title: 'Sony Playstation 5 + игра...',
            link: '/#',
          },
          user_type: 'Страница',
          action_name: 'Изменение заголовка',
          change_date: 1666803600,
        },
        {
          user_name: 'Руслан Новоселов',
          object_name: {
            title: 'Sony Playstation 5 + игра...',
            link: '/#',
          },
          user_type: 'Пользователь',
          action_name: 'Изменение заголовка',
          change_date: 1666803600,
        },
        {
          user_name: 'Руслан Новоселов',
          object_name: {
            title: 'Sony Playstation 5 + игра...',
            link: '/#',
          },
          user_type: 'Карточка товара',
          action_name: 'Изменение заголовка',
          change_date: 1666803600,
        },
        {
          user_name: 'Руслан Новоселов',
          object_name: {
            title: 'Sony Playstation 5 + игра...',
            link: '/#',
          },
          user_type: 'Страница',
          action_name: 'Изменение заголовка',
          change_date: 1666803600,
        },
        {
          user_name: 'Руслан Новоселов',
          object_name: {
            title: 'Sony Playstation 5 + игра...',
            link: '/#',
          },
          user_type: 'Пользователь',
          action_name: 'Изменение заголовка',
          change_date: 1666803600,
        },
        {
          user_name: 'Руслан Новоселов',
          object_name: {
            title: 'Sony Playstation 5 + игра...',
            link: '/#',
          },
          user_type: 'Карточка товара',
          action_name: 'Изменение заголовка',
          change_date: 1666803600,
        },
      ],
      columns: [
        {
          title: 'Пользователь',
          dataIndex: 'user_name',
          key: 'user_name',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 150,
        },
        {
          title: 'Объект',
          dataIndex: 'object_name',
          key: 'object_name',
          widget: {
            name: 'link',
            type: 'router',
          },
          width: 150,
        },
        {
          title: 'Тип',
          dataIndex: 'user_type',
          key: 'user_type',
          widget: {
            name: 'text',
          },
          filterType: 'category',
          width: 150,
        },
        {
          title: 'Действие',
          dataIndex: 'action_name',
          key: 'action_name',
          widget: {
            name: 'text',
          },
          width: 150,
        },
        {
          title: 'Дата изменения',
          dataIndex: 'change_date',
          key: 'change_date',
          resizable: true,
          widget: {
            name: 'date',
            format: 'DD.MM.YYYY',
          },
          width: 150,
          sort: true,
        },
      ],
    },
  ],
}
