export default {
  page: 'catalog',
  groups: [
    {
      name: 'catalog',
      fields: ['main_block'],
    },
  ],
  fields: [
    {
      layout: 'grid',
      name: 'main_block',
      type: 'div',
      cssClass: ['relative'],
      fields: ['title_block', 'body_block'],
    },
    {
      name: 'title_block',
      type: 'div',
      cssClass: ['bg-white', 'p-6'],
      fields: ['title'],
    },
    {
      text: 'Основной каталог товаров',
      name: 'title',
      type: 'label',
      cssClass: ['font-medium', 'text-xl'],
    },
    {
      name: 'body_block',
      type: 'div',
      cssClass: [
        'bg-borderColor',
        'py-6',
        'rounded-xl',
        'grid-cols-2',
        'auto-rows-fr',
        'auto-cols-fr',
        'gap-x-6',
        'gap-y-0',
        'grid',
        'justify-end',
        'h-[80vh]',
      ],
      fields: ['main_section_block', 'product_block'],
    },
    {
      name: 'main_section_block',
      type: 'div',
      cssClass: ['bg-white', 'h-full'],
      fields: ['main_section_header', 'main_section_body'],
    },
    {
      name: 'main_section_body',
      type: 'div',
      fields: ['main_section_data'],
    },
    {
      name: 'main_section_data',
      type: 'div',
      cssClass: ['p-6', 'h-full'],
      fields: ['table'],
    },
    {
      name: 'table',
      type: 'table',
      config: {
        size: 'small',
        tree: true,
        pagination: false,
        hideSearchBtn: true,
        title: 'Основные разделы',
        search: [
          {
            name: 'Поиск по товарам',
            type: 'input',
            fields: ['name'],
          },
        ],
        scroll: { y: '50vh' },
        noAutokey: true,
        customRow: true,
        buttons: [
          {
            name: 'add',
            type: 'primary',
            label: 'Добавить раздел',
            showLoading: true,
            icon: {
              name: 'fa-solid fa-plus',
            },
            handlers: [
              {
                name: 'goRoute',
                params: {
                  name: 'catalog_edit',
                },
              },
            ],
          },
        ],
      },
      data: 'https://639b1c4631877e43d682a629.mockapi.io/mainCatalogCategoryData',
      columns: [
        {
          title: '',
          dataIndex: 'name',
          key: 'name',
          widget: {
            name: 'text',
          },
        },
        {
          title: 'Товаров',
          dataIndex: 'products_count',
          key: 'products_count',
          width: 90,
          widget: {
            name: 'text',
          },
        },
        {
          title: 'Активность',
          dataIndex: 'active',
          key: 'active',
          width: 100,
          widget: {
            name: 'checkbox',
            type: 'text',
          },
        },
        {
          title: 'Действие',
          widget: {
            name: 'actions',
          },
          width: 90,
          delete: true,
          edit: {
            type: 'link',
            link_field: 'link',
          },
          deactivate: 'active',
          view: 'link',
        },
      ],
    },
    {
      name: 'product_block',
      type: 'div',
      cssClass: ['bg-white', 'h-full'],
      fields: ['product_body'],
    },
    {
      name: 'product_body',
      type: 'div',
      fields: ['product_table'],
      cssClass: ['p-6'],
    },
    {
      name: 'product_table',
      type: 'table',
      config: {
        size: 'small',
        pagination: false,
        title: 'Товары',
        routeUpdate: true,
        hideSearchBtn: true,
        selection: { active: true },
        scroll: { y: '40vh' },
        search: [
          {
            name: 'Поиск по товарам',
            type: 'input',
            fields: ['name'],
          },
        ],
        buttons: [
          {
            name: 'add',
            type: 'primary',
            label: 'Добавить',
            showLoading: true,
            icon: {
              name: 'fa-solid fa-plus',
            },
            handlers: [
              {
                name: 'goRoute',
                params: {
                  name: 'product_edit',
                },
              },
            ],
          },
        ],
      },
      data: 'https://639b1c4631877e43d682a629.mockapi.io/mainCatalogProductsData',
      columns: [
        {
          title: 'Активность',
          dataIndex: 'active',
          key: 'active',
          widget: {
            name: 'checkbox',
            type: 'text',
          },
        },
        {
          title: 'Название',
          dataIndex: 'name',
          key: 'name',
          widget: {
            name: 'text',
          },
        },
        {
          title: 'Действие',
          widget: {
            name: 'actions',
          },
          edit: {
            type: 'link',
            link_field: 'link',
          },
          width: 90,
          delete: true,
          deactivate: 'active',
          view: 'id',
        },
      ],
    },
  ],
}
