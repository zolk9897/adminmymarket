export default {
  page: 'test_tree',
  useTitle: {
    title: 'test_tree',
    breadcrumbs: [
      {
        title: 'Главная',
        path: '/',
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
      fields: ['main_table_block'],
    },
    {
      name: 'main_table_block',
      type: 'div',
      parentClass: ['p-6'],
      cssClass: ['flex justify-between gap-6'],
      fields: ['tree', 'table_tree'],
    },
    {
      name: 'tree',
      type: 'tree',
      parentClass: ['w-1/2 mt-6'],
      showIcon: true,
      checkable: true,
      search: true,
      checkHandlers: [],
      selectHandlers: [
        {
          name: 'resetTableData',
          params: {
            pageName: 'test_tree',
            tableName: 'table_tree',
          },
        },
      ],
      fieldNames: {
        children: 'chill',
        title: 'title',
        key: 'id',
      },
      data: [
        {
          title: 'one',
          id: 'one',
          titleColor: '#29a665',
          chill: [
            {
              title: 'two',
              selectColor: '#8e0eb9',
              titleColor: '#000',
              id: 'two',
              chill: [
                { title: 'leaf', id: 'leaf', disableCheckbox: true },
                { title: 'beaf', id: 'beaf' },
              ],
            },
            {
              title: 'trip',
              id: 'trip',
              ico: 'fa-tree',
              chill: [
                { id: 'sss', title: 'sss' },
                { id: 'ddd', title: 'ddd' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'table_tree',
      type: 'table',
      parentClass: ['w-1/2'],
      config: {
        pagination: false,
        size: 'small',
        align: 'center',
        bordered: true,
      },
      data: [
        {
          name: {
            link: '/main/edit_banner_many?id=123',
            title: 'Купить PlayStation 5!',
          },
          active: true,
          sort: 500,
          updated_at: '23.09.2022 12:33:11',
          id: 123,
        },
        {
          name: {
            link: '/main/edit_banner_one?id=43',
            title: 'Купить XboxOne!',
          },
          active: true,
          sort: 500,
          updated_at: '23.09.2022 12:33:11',
          id: 123,
        },
        {
          name: {
            link: '/main/edit_banner_many?id=123',
            title: 'Купить PlayStation 5!',
          },
          active: true,
          sort: 500,
          updated_at: '23.09.2022 12:33:11',
          id: 123,
        },
        {
          name: {
            link: '/main/edit_banner_many?id=123',
            title: 'Купить PlayStation 5!',
          },
          active: true,
          sort: 500,
          updated_at: '23.09.2022 12:33:11',
          id: 123,
        },
        {
          name: {
            link: '/main/edit_banner_many?id=123',
            title: 'Купить PlayStation 5!',
          },
          active: true,
          sort: 500,
          updated_at: '23.09.2022 12:33:11',
          id: 123,
        },
        {
          name: {
            link: '/main/edit_banner_many?id=123',
            title: 'Купить PlayStation 5!',
          },
          active: true,
          sort: 500,
          updated_at: '23.09.2022 12:33:11',
          id: 123,
        },
        {
          name: {
            link: '/main/edit_banner_many?id=123',
            title: 'Купить PlayStation 5!',
          },
          active: true,
          sort: 500,
          updated_at: '23.09.2022 12:33:11',
          id: 123,
        },
      ],
      columns: [
        {
          title: 'Название',
          dataIndex: 'name',
          key: 'name',
          resizable: true,
          widget: {
            name: 'link',
          },
          width: 200,
          render: 'name',
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
  ],
}
