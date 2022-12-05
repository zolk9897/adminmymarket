export default {
  page: 'banner_list',
  useTitle: {
    title: 'Список баннеров',
    breadcrumbs: [
      {
        title: 'Главная',
        path: '/',
      },
      {
        title: 'Контент',
      },
      {
        title: 'Список баннеров',
        path: '/main/banner_list',
      },
    ],
  },
  groups: [
    {
      name: 'main',
      fields: ['main__container_block'],
    },
  ],
  fields: [
    {
      name: 'main__container_block',
      type: 'div',
      cssClass: ['bg-white'],
      fields: ['main_table_block', 'block_modal_add_to_table'],
    },
    {
      name: 'main_table_block',
      type: 'div',
      parentClass: ['p-6'],
      fields: ['main_table'],
    },
    {
      name: 'main_table',
      type: 'table',

      config: {
        pagination: false,
        size: 'small',
        align: 'center',
        bordered: true,
        buttons: [
          {
            name: 'add',
            type: 'primary',
            label: 'Добавить баннер',
            showLoading: true,
            handlers: [
              {
                name: 'createNewPageFromId',
                params: {
                  endpoint: 'createNewBanner',
                  jsonPage: 'edit_banner',
                },
              },
            ],
          },
        ],
        search: [
          {
            name: 'bannerlist_search',
            type: 'input',
            fields: ['name'],
          },
        ],
      },
      data: [
        {
          name: 'Купить PlayStation 5!',
          active: true,
          sort: 500,
          updated_at: '23.09.2022 12:33:11',
          id: 123,
        },
        {
          name: 'PlayStation 5!',
          active: true,
          sort: 500,
          updated_at: '23.09.2022 12:33:11',
          id: 123,
        },
        {
          name: 'Купить PlayStation 5!',
          active: true,
          sort: 500,
          updated_at: '23.09.2022 12:33:11',
          id: 123,
        },
        {
          name: 'Купить PlayStation 5!',
          active: true,
          sort: 500,
          updated_at: '23.09.2022 12:33:11',
          id: 123,
        },
        {
          name: 'Купить PlayStation 5!',
          active: true,
          sort: 500,
          updated_at: '23.09.2022 12:33:11',
          id: 123,
        },
        {
          name: 'Купить PlayStation 5!',
          active: true,
          sort: 500,
          updated_at: '23.09.2022 12:33:11',
          id: 123,
        },
        {
          name: 'Купить PlayStation 5!',
          active: true,
          sort: 500,
          updated_at: '23.09.2022 12:33:11',
          id: 123,
        },
      ],
      columns: [
        // {
        //   dataIndex: 'actions',
        //   widget: {
        //     name: 'actions',
        //   },
        //   width: 1,
        //   hide: false,
        //   delete: true,
        //   edit: true,
        //   copy: true,
        // },
        {
          title: 'Название',
          dataIndex: 'name',
          key: 'name',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          render: 'name',
        },
        {
          title: 'Активность',
          dataIndex: 'active',
          key: 'active',
          sort: true,
          widget: {
            name: 'checkbox',
            type: 'text',
          },
          resizable: true,
          width: 40,
        },
        {
          title: 'Сорт.',
          dataIndex: 'sort',
          key: 'sort',
          sort: true,
          widget: {
            name: 'text',
            class: 'font-normal',
          },
          resizable: true,
          width: 20,
        },

        {
          title: 'Дата изменения',
          dataIndex: 'updated_at',
          key: 'updated_at',
          sort: true,
          widget: {
            name: 'text',
            class: 'font-normal',
          },
          resizable: true,
          width: 100,
        },
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
          sort: true,
          widget: {
            name: 'text',
            class: 'font-normal',
          },
          resizable: true,
          width: 20,
        },
      ],
    },
    {
      name: 'legal_entities__buttons_block',
      type: 'div',
      cssClass: ['flex', 'gap-2'],
      fields: ['main__add_button'],
    },
    {
      type: 'button',
      value: 'Добавить баннер',
      name: 'main__add_button',
      buttonType: 'primary',
      handlers: [],
    },
  ],
}
