export default {
  title: 'Прайс-лист',
  page: 'price_list_new',
  groups: [
    {
      name: 'price_list_new',
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
      text: 'Прайс-лист',
      name: 'title',
      type: 'label',
      cssClass: ['font-medium', 'text-xl'],
    },
    {
      name: 'body_block',
      type: 'div',
      fields: ['options_wrap', 'utm_label_wrap', 'buttons_wrap'],
      cssClass: ['flex', 'flex-col', 'bg-white', 'p-6'],
    },
    {
      name: 'options_wrap',
      type: 'div',
      fields: ['price_city', 'manual_option', 'link_option'],
      cssClass: [
        'flex',
        'flex-col',
        'pb-6',
        'border-b',
        'border-solid',
        'border-borderColor',
      ],
    },
    {
      name: 'price_city',
      type: 'select',
      value: '0',
      description: 'Город',
      options: [
        {
          id: '0',
          name: 'Москва',
        },
        {
          id: '1',
          name: 'Архангельск',
        },
      ],
      disabled: false,
      excludeReset: true,
      parentClass: ['w-1/2', 'mb-6'],
      cssClass: ['w-full'],
    },
    {
      name: 'manual_option',
      type: 'div',
      fields: ['upload_manual', 'upload_file'],
      cssClass: ['flex', 'flex-wrap'],
    },
    {
      name: 'upload_manual',
      type: 'radio',
      value: true,
      options: [
        {
          value: true,
          label: 'Загрузить вручную',
        },
      ],
      parentClass: ['w-full', 'mb-2'],
      handlers: [
        {
          name: 'setFieldValue',
          params: {
            pageName: 'price_list_new',
            fieldName: 'upload_by_link',
            value: false,
          },
        },
        {
          name: 'editField',
          params: {
            pageName: 'price_list_new',
            blockName: ['upload_file'],
            fieldName: 'disabled',
            value: false,
          },
        },
        {
          name: 'editField',
          params: {
            pageName: 'price_list_new',
            blockName: ['price_link', 'is_auth_required'],
            fieldName: 'disabled',
            value: true,
          },
        },
        {
          name: 'editField',
          params: {
            pageName: 'price_list_new',
            blockName: ['auth_login', 'auth_password'],
            fieldName: 'parentClass',
            value: { add: ['hidden'] },
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'price_list_new',
            blockName: 'link_option',
          },
        },
      ],
    },
    {
      name: 'upload_file',
      type: 'file',
      accept: '.yml, .csv, .xlsx',
      subtitle: {
        text: 'YML, CSV, XLSX файл',
        cssClass: 'text-[11px]',
      },
      button: {
        type: 'primary',
        ghost: false,
        block: true,
        text: 'Выбрать файл',
      },
      disabled: false,
      parentClass: ['w-1/2'],
      cssClass: ['upload-full-width', 'w-full'],
    },
    {
      name: 'link_option',
      type: 'div',
      fields: [
        'upload_by_link',
        'price_link',
        'is_auth_required_wrap',
        'auth_wrap',
      ],
      cssClass: ['flex', 'flex-wrap', 'mt-7'],
    },
    {
      name: 'upload_by_link',
      type: 'radio',
      value: false,
      options: [
        {
          value: true,
          label: 'Указать ссылку',
        },
      ],
      parentClass: ['w-full', 'mb-2'],
      handlers: [
        {
          name: 'setFieldValue',
          params: {
            pageName: 'price_list_new',
            fieldName: 'upload_manual',
            value: false,
          },
        },
        {
          name: 'editField',
          params: {
            pageName: 'price_list_new',
            blockName: ['upload_file'],
            fieldName: 'disabled',
            value: true,
          },
        },
        {
          name: 'editField',
          params: {
            pageName: 'price_list_new',
            blockName: [
              'price_link',
              'is_auth_required',
              'auth_login',
              'auth_password',
            ],
            fieldName: 'disabled',
            value: false,
          },
        },
      ],
    },
    {
      name: 'price_link',
      type: 'input',
      format: 'text',
      description: 'Ссылка на YML или CSV файл',
      disabled: true,
      parentClass: ['w-1/4', 'pr-5'],
      cssClass: ['w-full'],
    },
    {
      name: 'is_auth_required_wrap',
      type: 'div',
      fields: ['is_auth_required'],
      parentClass: ['w-1/4', 'px-5', 'flex', 'items-center'],
      cssClass: ['flex'],
    },
    {
      title: 'Требуется авторизация',
      name: 'is_auth_required',
      value: false,
      type: 'boolean',
      viewType: 'switch',
      titlePosition: 'right',
      disabled: true,
      handlers: {
        trueHandlers: [
          {
            name: 'editField',
            params: {
              pageName: 'price_list_new',
              blockName: ['auth_login', 'auth_password'],
              fieldName: 'parentClass',
              value: { remove: ['hidden'] },
            },
          },
        ],
        falseHandlers: [
          {
            name: 'editField',
            params: {
              pageName: 'price_list_new',
              blockName: ['auth_login', 'auth_password'],
              fieldName: 'parentClass',
              value: { add: ['hidden'] },
            },
          },
          {
            name: 'resetBlockData',
            params: {
              pageName: 'price_list_new',
              blockName: 'auth_wrap',
            },
          },
        ],
      },
    },
    {
      name: 'auth_wrap',
      type: 'div',
      fields: ['auth_login', 'auth_password'],
      parentClass: ['w-2/4', 'pl-5'],
      cssClass: ['flex'],
    },
    {
      name: 'auth_login',
      type: 'input',
      format: 'text',
      description: 'Логин',
      disabled: true,
      parentClass: ['w-1/2', 'px-5', 'hidden'],
      cssClass: ['w-full'],
    },
    {
      name: 'auth_password',
      type: 'input',
      format: 'password',
      description: 'Пароль',
      disabled: true,
      parentClass: ['w-1/2', 'pl-5', 'hidden'],
      cssClass: ['w-full'],
    },
    {
      name: 'utm_label_wrap',
      type: 'div',
      fields: ['utm_label', 'utm_label_switch_wrap'],
      cssClass: ['flex', 'flex-col', 'my-6'],
    },
    {
      name: 'utm_label',
      type: 'radio',
      title: 'UTM метки у ссылок',
      titleClass: ['block', 'mb-4'],
      subtitle: {
        text: 'UTM-метка позволяет отслеживать источники траффика в системах аналитики',
        cssClass: ['text-[11px]', 'mt-2'],
      },
      viewType: 'button',
      value: 'leave',
      options: [
        {
          value: 'replace_with_vsekolesa',
          label: 'Заменять на vsekolesa',
        },
        {
          value: 'leave',
          label: 'Оставлять как есть',
        },
        {
          value: 'remove',
          label: 'Убирать',
        },
      ],
      cssClass: ['flex', 'w-full'],
      style: {
        display: 'flex',
      },
      buttonClass: ['grow', 'text-center'],
    },
    {
      name: 'utm_label_switch_wrap',
      type: 'div',
      fields: ['consider_regions', 'apply_rates'],
      cssClass: ['flex', 'w-full', 'gap-x-[77px]', 'mt-12'],
    },
    {
      title: 'Учитывать регионы в UTM метках',
      name: 'consider_regions',
      value: false,
      type: 'boolean',
      viewType: 'switch',
      titlePosition: 'right',
    },
    {
      title: 'Применять ставки, указанные в прайс-листе',
      name: 'apply_rates',
      value: true,
      type: 'boolean',
      viewType: 'switch',
      titlePosition: 'right',
    },
    {
      name: 'buttons_wrap',
      type: 'div',
      fields: ['save_btn', 'save_and_add_btn', 'go_back_btn'],
      cssClass: ['flex', 'w-full', 'mt-6'],
    },
    {
      name: 'save_btn',
      type: 'button',
      value: 'Сохранить',
      buttonType: 'primary',
      cssClass: ['mr-6'],
      style: {
        borderRadius: '2px',
      },
      handlers: [
        {
          name: 'pushData',
          params: {
            pageName: 'price_list_new',
            blockName: 'body_block',
            endpoint: '/test',
          },
        },
        {
          name: 'goBack',
        },
      ],
    },
    {
      name: 'save_and_add_btn',
      type: 'button',
      value: 'Сохранить и добавить',
      buttonType: 'primary',
      style: {
        backgroundColor: 'var(--buttonGreen)',
        borderColor: 'var(--buttonGreen)',
        borderRadius: '2px',
      },
      icon: {
        name: 'fa-solid fa-plus',
      },
      cssClass: ['mr-12'],
      handlers: [
        {
          name: 'pushData',
          params: {
            pageName: 'price_list_new',
            blockName: 'body_block',
            endpoint: '/test',
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'price_list_new',
            blockName: 'body_block',
            endpoint: '/test',
          },
        },
      ],
    },
    {
      name: 'go_back_btn',
      type: 'button',
      value: 'Вернуться назад',
      buttonType: 'link',
      icon: {
        name: 'fa-solid fa-arrow-left',
      },
      handlers: [
        {
          name: 'goBack',
        },
      ],
    },
  ],
}
