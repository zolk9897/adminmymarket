export default {
  page: 'mail_templates',
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
        title: 'Почтовые шаблоны',
        path: '/main/mailing',
      },
    ],
  },
  groups: [
    {
      name: 'mail_templates',
      tabName: '',
      fields: ['body_block'],
    },
  ],
  fields: [
    {
      name: 'body_block',
      type: 'div',
      cssClass: ['bg-white', 'p-6'],
      fields: ['top_block', 'table_block', 'template_modal'],
    },
    {
      name: 'top_block',
      type: 'div',
      cssClass: ['text-end'],
      fields: ['template__add_button'],
    },
    {
      type: 'button',
      value: 'Добавить шаблон',
      name: 'template__add_button',
      buttonType: 'primary',
      disabled: false,
      handlers: [
        {
          name: 'editField',
          params: {
            pageName: 'mail_templates',
            blockName: 'template_modal',
            fieldName: 'style',
            value: { display: 'flex' },
          },
        },
      ],
    },
    {
      layout: 'grid',
      name: 'template_modal',
      type: 'div',
      handlers: [
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
      ],
      style: {},
      fields: ['block_modal_added_content'],
    },
    {
      title: 'Добавление шаблона рассылки',
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
        'gap-4',
        'w-480',
      ],
      fields: [
        'id_input',
        'last_action_input',
        'active_input',
        'sender_input',
        'recipient_input',
        'buttons_block_footer',
      ],
    },
    {
      title: 'id',
      description: '',
      name: 'id_input',
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
      title: 'Последнее действие',
      description: '',
      name: 'last_action_input',
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
      title: 'Активен',
      description: '',
      name: 'active_input',
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
      title: 'Email отправителя',
      description: '',
      name: 'sender_input',
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
      title: 'Email получателя',
      description: '',
      name: 'recipient_input',
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
      type: 'button',
      value: 'Добавить шаблон',
      name: 'template__add_button',
      buttonType: 'primary',
      disabled: false,
      handlers: [
        {
          name: 'validateHandler',
          params: {
            pageName: 'mail_templates',
            blockName: 'template_modal',
          },
        },
        {
          name: 'addDataToTableField',
          params: {
            pageName: 'mail_templates',
            tableName: 'table',
            data: {
              recent_event: 'id_input',
              id: 'last_action_input',
              active: 'active_input',
              sender: 'sender_input',
              recipient: 'recipient_input',
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
      name: 'table_block',
      type: 'div',
      fields: ['table'],
    },
    {
      name: 'table',
      type: 'table',
      config: {
        pagination: false,
        size: 'small',
        align: 'center',
        bordered: true,
        selection: true,
        search: {
          fields: ['id', 'recent_event', 'active', 'sender', 'recipient'],
          selected: true,
        },
      },
      data: [
        {
          recent_event: 'Баланс пополнен',
          id: 0,
          active: 'Да',
          sender: '#SALE_EMAIL',
          recipient: '#USER_EMAIL',
        },
        {
          recent_event: 'Баланс пополнен',
          id: 1,
          active: 'Да',
          sender: '#SALE_EMAIL',
          recipient: '#USER_EMAIL',
        },
        {
          recent_event: 'Баланс пополнен',
          id: 2,
          active: 'Да',
          sender: '#SALE_EMAIL',
          recipient: '#USER_EMAIL',
        },
        {
          recent_event: 'Баланс пополнен',
          id: 3,
          active: 'Нет',
          sender: '#SALE_EMAIL',
          recipient: '#USER_EMAIL',
        },
        {
          recent_event: 'Баланс пополнен',
          id: 4,
          active: 'Нет',
          sender: '#SALE_EMAIL',
          recipient: '#USER_EMAIL',
        },
        {
          recent_event: 'Баланс пополнен',
          id: 5,
          active: 'Нет',
          sender: '#SALE_EMAIL',
          recipient: '#USER_EMAIL',
        },
        {
          recent_event: 'Заканчивается баланс',
          id: 6,
          active: 'Нет',
          sender: '#SALE_EMAIL',
          recipient: '#USER_EMAIL',
        },
        {
          recent_event: 'Заканчивается баланс',
          id: 7,
          active: 'Нет',
          sender: '#SALE_EMAIL',
          recipient: '#USER_EMAIL',
        },
        {
          recent_event: 'Заканчивается баланс',
          id: 8,
          active: 'Нет',
          sender: '#SALE_EMAIL',
          recipient: '#USER_EMAIL',
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
          width: 200,
          sort: true,
        },
        {
          title: 'Недавние события',
          dataIndex: 'recent_event',
          key: 'recent_event',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          sort: true,
        },
        {
          title: 'Активен',
          dataIndex: 'active',
          key: 'active',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          sort: true,
        },
        {
          title: 'E-mail отправителя',
          dataIndex: 'sender',
          key: 'sender',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          sort: true,
        },
        {
          title: 'E-mail получателя',
          dataIndex: 'recipient',
          key: 'recipient',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          sort: true,
        },
        {
          title: 'Действия',
          dataIndex: 'actions',
          widget: {
            name: 'actions',
          },
          width: 20,
          hide: false,
          delete: true,
          edit: true,
          copy: true,
        },
      ],
    },
  ],
}
