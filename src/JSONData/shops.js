export default {
  page: 'shops',
  title: 'Список магазинов',
  useTitle: {
    title: 'Список магазинов',
    breadcrumbs: [
      {
        title: 'Главная',
        path: '/',
      },
      {
        title: 'Магазины',
        path: '/main/shops',
      },
    ],
  },
  groups: [
    {
      name: 'shops',
      fields: ['title_block', 'body_block'],
    },
  ],
  fields: [
    {
      name: 'body_block',
      type: 'div',
      cssClass: ['bg-white'],
      fields: ['table_block', 'template_modal'],
    },
    {
      name: 'table_block',
      type: 'div',
      cssClass: ['p-6'],
      fields: ['table'],
    },
    {
      layout: 'grid',
      name: 'template_modal',
      type: 'div',
      handlers: [
        {
          name: 'editField',
          params: {
            pageName: 'shops',
            blockName: 'template_modal',
            fieldName: 'style',
            value: { display: 'none' },
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'shops',
            blockName: 'template_modal',
          },
        },
      ],
      cssClass: [
        'fixed',
        'bottom-0',
        'left-0',
        'top-0',
        'right-0',
        'z-50',
        'bg-black/40',
        'hidden',
        'justify-center',
        'items-center',
        'overflow-scroll',
      ],
      style: {},
      fields: ['block_modal_added_content'],
    },
    {
      layout: 'grid',
      name: 'block_modal_added_content',
      type: 'div',
      cssClass: [
        'bg-white',
        'p-6',
        'max-w-xl',
        'animate-animation-preview',
        'flex',
        'flex-col',
        'gap-2',
        'w-480',
      ],
      fields: [
        'block_modal_added_title',
        'url_title_input',
        'url_description_input',
        'url_link_input',
        'bonus_value_input',
        'bonus_suffix_input',
        'stage_title_input',
        'city_input',
        'balance_input',
        'offers_input',
        'conversion_input',
        'expense_input',
        'manager_title_input',
        'buttons_block_footer',
      ],
    },
    {
      name: 'block_modal_added_title',
      text: 'Добавление в магазин',
      cssClass: ['font-bold'],
      type: 'label',
    },
    {
      name: 'buttons_block_footer',
      type: 'div',
      cssClass: ['flex', 'justify-end', 'gap-2'],
      fields: ['template__cancel_button', 'template__add_button'],
    },
    {
      type: 'button',
      value: 'Отменить',
      name: 'template__cancel_button',
      disabled: false,
      handlers: [
        {
          name: 'editField',
          params: {
            pageName: 'shops',
            blockName: 'template_modal',
            fieldName: 'style',
            value: { display: 'none' },
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'shops',
            blockName: 'template_modal',
          },
        },
      ],
    },
    {
      type: 'button',
      value: 'Добавить',
      name: 'template__add_button',
      buttonType: 'primary',
      disabled: false,
      handlers: [
        {
          name: 'validateHandler',
          params: {
            pageName: 'shops',
            blockName: 'template_modal',
            endpoint: 'https://ekat.sergeivl.ru/api/tests/request',
          },
        },
        {
          name: 'addDataToTableField',
          params: {
            pageName: 'shops',
            tableName: 'table',
            data: {
              is_have_account: true,
              url: {
                title: 'url_title_input',
                description: 'url_description_input',
                link: 'url_link_input',
              },
              bonus: {
                value: 'bonus_value_input',
                suffix: 'bonus_suffix_input',
              },
              stage: [
                {
                  title: 'stage_title_input',
                  color: '#87d069',
                  upperCase: true,
                },
              ],
              city: 'city_input',
              balance: 'balance_input',
              offers: 'offers_input',
              conversion: 'conversion_input',
              expense: 'expense_input',
              manager: {
                title: 'manager_title_input',
                link: '#',
              },
            },
          },
        },
        {
          name: 'editField',
          params: {
            pageName: 'mail_templates',
            blockName: 'template_modal',
            fieldName: 'style',
            value: { display: 'none' },
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'mail_templates',
            blockName: 'template_modal',
          },
        },
      ],
    },
    {
      title: 'Менеджер',
      description: '',
      name: 'manager_title_input',
      format: 'text',
      value: '',
      type: 'input',
      excludeSend: true,
      validation: {
        rules: [
          {
            type: 'required',
          },
        ],
      },
    },
    {
      title: 'Расходов/мес.',
      description: '',
      name: 'expense_input',
      format: 'text',
      value: '',
      type: 'input',
      excludeSend: true,
      validation: {
        rules: [
          {
            type: 'required',
          },
        ],
      },
    },
    {
      title: 'Переходов/мес.',
      description: '',
      name: 'conversion_input',
      format: 'text',
      value: '',
      type: 'input',
      excludeSend: true,
      validation: {
        rules: [
          {
            type: 'required',
          },
        ],
      },
    },
    {
      title: 'Количество предложений',
      description: '',
      name: 'offers_input',
      format: 'text',
      value: '',
      type: 'input',
      excludeSend: true,
      validation: {
        rules: [
          {
            type: 'required',
          },
        ],
      },
    },
    {
      title: 'Баланс',
      description: '',
      name: 'balance_input',
      format: 'text',
      value: '',
      type: 'input',
      excludeSend: true,
      validation: {
        rules: [
          {
            type: 'required',
          },
        ],
      },
    },
    {
      title: 'Город',
      description: '',
      name: 'city_input',
      format: 'text',
      value: '',
      type: 'input',
      excludeSend: true,
      validation: {
        rules: [
          {
            type: 'required',
          },
        ],
      },
    },
    {
      title: 'Стадия',
      description: '',
      name: 'stage_title_input',
      format: 'text',
      value: '',
      type: 'input',
      excludeSend: true,
      validation: {
        rules: [
          {
            type: 'required',
          },
        ],
      },
    },
    {
      title: 'Стадия',
      description: '',
      name: 'stage_title_input',
      format: 'text',
      value: '',
      type: 'input',
      excludeSend: true,
      validation: {
        rules: [
          {
            type: 'required',
          },
        ],
      },
    },
    {
      title: 'Единицы измерения бонуса',
      description: '',
      name: 'bonus_suffix_input',
      format: 'text',
      value: '',
      type: 'input',
      excludeSend: true,
      validation: {
        rules: [
          {
            type: 'required',
          },
        ],
      },
    },
    {
      title: 'Бонус',
      description: '',
      name: 'bonus_value_input',
      format: 'text',
      value: '',
      type: 'input',
      excludeSend: true,
      validation: {
        rules: [
          {
            type: 'required',
          },
        ],
      },
    },
    {
      title: 'URL',
      description: '',
      name: 'url_link_input',
      format: 'text',
      value: '',
      type: 'input',
      excludeSend: true,
      validation: {
        rules: [
          {
            type: 'required',
          },
        ],
      },
    },
    {
      title: 'Название сайта',
      description: '',
      name: 'url_title_input',
      format: 'text',
      value: '',
      type: 'input',
      excludeSend: true,
      validation: {
        rules: [
          {
            type: 'required',
          },
        ],
      },
    },
    {
      title: 'Описание',
      description: '',
      name: 'url_description_input',
      format: 'text',
      value: '',
      type: 'input',
      excludeSend: true,
      validation: {
        rules: [
          {
            type: 'required',
          },
        ],
      },
    },
    {
      name: 'table',
      type: 'table',
      config: {
        pagination: {
          total: 9,
          current: 1,
          pageSize: 10,
        },
        size: 'small',
        align: 'center',
        bordered: true,
        selection: true,
        hideSearchBtn: true,
        buttons: [
          {
            name: 'add',
            type: 'primary',
            label: 'Добавить в магазин',
            handlers: [
              {
                name: 'editField',
                params: {
                  pageName: 'shops',
                  blockName: 'template_modal',
                  fieldName: 'style',
                  value: { display: 'flex' },
                },
              },
            ],
          },
        ],
        search: [
          {
            name: 'is_have_account',
            type: 'switch',
            fields: ['is_have_account'],
            label: 'Только с аккаунтами',
          },
          {
            name: 'city',
            type: 'select',
            fields: ['city'],
            filterAllowClear: false,
            defaultValue: { label: 'Все города', value: '' },
          },
        ],
      },
      data: [
        {
          is_have_account: false,
          url: {
            title: 'Test shop (test.com)',
            description:
              'У магазина нет представителей. Нужно добавить хотя бы одного для рассылки и оповещений',
            link: '/main/shop_template?id=1',
          },
          bonus: {
            value: 10,
            suffix: '%',
          },
          stage: [
            {
              id: 'iqeouhifd98io3f',
              title: 'Клиент',
              color: '#87D068',
              upperCase: true,
            },
          ],
          city: 'Санкт-Петербург',
          balance: 1000,
          offers: 198,
          conversion: 0,
          expense: 0,
          manager: {
            title: 'Admin',
            link: '/#',
          },
        },
        {
          is_have_account: true,
          url: {
            title: 'Test shop (test.com)',
            description:
              'У магазина нет представителей. Нужно добавить хотя бы одного для рассылки и оповещений',
            link: '/main/shop_template?id=2',
          },
          bonus: {
            value: 10,
            suffix: '%',
          },
          stage: [
            {
              id: 'iqeouhifd98io3a',
              title: 'Клиент',
              color: '#87D068',
              upperCase: true,
            },
          ],
          city: 'Москва',
          balance: 1000,
          offers: 198,
          conversion: 0,
          expense: 0,
          manager: {
            title: 'Admin',
            link: '/#',
          },
        },
        {
          is_have_account: false,
          url: {
            title: 'Test shop (test.com)',
            description:
              'У магазина нет представителей. Нужно добавить хотя бы одного для рассылки и оповещений',
            link: '/main/shop_template?id=3',
          },
          bonus: {
            value: 10,
            suffix: '%',
          },
          stage: [
            {
              id: 'iqeouhifd98io3d',
              title: 'Клиент',
              color: '#87D068',
              upperCase: true,
            },
          ],
          city: 'Москва',
          balance: 1000,
          offers: 198,
          conversion: 0,
          expense: 0,
          manager: {
            title: 'Admin',
            link: '/#',
          },
        },
        {
          is_have_account: true,
          url: {
            title: 'Test shop (test.com)',
            description:
              'У магазина нет представителей. Нужно добавить хотя бы одного для рассылки и оповещений',
            link: '/main/shop_template?id=4',
          },
          bonus: {
            value: 10,
            suffix: '%',
          },
          stage: [
            {
              id: 'iqeouhifd98io3u',
              title: 'Клиент',
              color: '#87D068',
              upperCase: true,
            },
          ],
          city: 'Санкт-Петербург',
          balance: 1000,
          offers: 198,
          conversion: 0,
          expense: 0,
          manager: {
            title: 'Admin',
            link: '/#',
          },
        },
        {
          is_have_account: false,
          url: {
            title: 'Test shop (test.com)',
            description:
              'У магазина нет представителей. Нужно добавить хотя бы одного для рассылки и оповещений',
            link: '/main/shop_template?id=5',
          },
          bonus: {
            value: 10,
            suffix: '%',
          },
          stage: [
            {
              id: 'iqeouhifd98io3i',
              title: 'Клиент',
              color: '#87D068',
              upperCase: true,
            },
          ],
          city: 'Москва',
          balance: 1000,
          offers: 198,
          conversion: 0,
          expense: 0,
          manager: {
            title: 'Admin',
            link: '/#',
          },
        },
        {
          is_have_account: true,
          url: {
            title: 'Test shop (test.com)',
            description:
              'У магазина нет представителей. Нужно добавить хотя бы одного для рассылки и оповещений',
            link: '/main/shop_template?id=6',
          },
          bonus: {
            value: 10,
            suffix: '%',
          },
          stage: [
            {
              id: 'iqeouhifd98io3o',
              title: 'Клиент',
              color: '#87D068',
              upperCase: true,
            },
          ],
          city: 'Санкт-Петербург',
          balance: 1000,
          offers: 198,
          conversion: 0,
          expense: 0,
          manager: {
            title: 'Admin',
            link: '/#',
          },
        },
        {
          is_have_account: false,
          url: {
            title: 'Test shop (test.com)',
            description:
              'У магазина нет представителей. Нужно добавить хотя бы одного для рассылки и оповещений',
            link: '/main/shop_template?id=7',
          },
          bonus: {
            value: 10,
            suffix: '%',
          },
          stage: [
            {
              id: 'iqeouhifd98io3p',
              title: 'Клиент',
              color: '#87D068',
              upperCase: true,
            },
          ],
          city: 'Санкт-Петербург',
          balance: 1000,
          offers: 198,
          conversion: 0,
          expense: 0,
          manager: {
            title: 'Admin',
            link: '/#',
          },
        },
        {
          is_have_account: false,
          url: {
            title: 'Test shop (test.com)',
            description:
              'У магазина нет представителей. Нужно добавить хотя бы одного для рассылки и оповещений',
            link: '/main/shop_template?id=8',
          },
          bonus: {
            value: 10,
            suffix: '%',
          },
          stage: [
            {
              id: 'iqeouhifd98io3l',
              title: 'Клиент',
              color: '#87D068',
              upperCase: true,
            },
          ],
          city: 'Санкт-Петербург',
          balance: 1000,
          offers: 198,
          conversion: 0,
          expense: 0,
          manager: {
            title: 'Admin',
            link: '/#',
          },
        },
        {
          is_have_account: false,
          url: {
            title: 'Test shop (test.com)',
            description:
              'У магазина нет представителей. Нужно добавить хотя бы одного для рассылки и оповещений',
            link: '/main/shop_template?id=9',
          },
          bonus: {
            value: 10,
            suffix: '%',
          },
          stage: [
            {
              id: 'iqeouhifd98io3h',
              title: 'Клиент',
              color: '#87D068',
              upperCase: true,
            },
          ],
          city: 'Санкт-Петербург',
          balance: 1000,
          offers: 198,
          conversion: 0,
          expense: 0,
          manager: {
            title: 'Admin',
            link: '/#',
          },
        },
      ],
      columns: [
        {
          title: 'Is have account',
          dataIndex: 'is_have_account',
          key: 'is_have_account',
          resizable: true,
          widget: {
            name: 'checkbox',
            title: 'Is have account',
          },
          width: 200,
          sort: true,
          hide: true,
        },
        {
          title: 'URL',
          dataIndex: 'url',
          key: 'url',
          resizable: true,
          widget: {
            name: 'link',
          },
          width: 200,
          sort: true,
        },
        {
          title: 'Бонус',
          dataIndex: 'bonus',
          key: 'bonus',
          resizable: true,
          widget: {
            name: 'input',
          },
          width: 200,
          sort: true,
        },
        {
          title: 'Стадия',
          dataIndex: 'stage',
          key: 'stage',
          resizable: true,
          widget: {
            name: 'tags',
          },
          width: 100,
          sort: true,
        },
        {
          title: 'Город',
          dataIndex: 'city',
          key: 'city',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          sort: true,
          hide: true,
        },
        {
          title: 'Баланс, ₽',
          dataIndex: 'balance',
          key: 'balance',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          sort: true,
        },
        {
          title: 'Предложений',
          dataIndex: 'offers',
          key: 'offers',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          sort: true,
        },
        {
          title: 'Переходов/мес',
          dataIndex: 'conversion',
          key: 'conversion',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          sort: true,
        },
        {
          title: 'Расходов/мес',
          dataIndex: 'expense',
          key: 'expense',
          widget: {
            name: 'text',
          },
          width: 200,
        },
        {
          title: 'Менеджер',
          dataIndex: 'manager',
          key: 'manager',
          widget: {
            name: 'link',
            type: 'router',
          },
          width: 200,
        },
      ],
    },
  ],
}
