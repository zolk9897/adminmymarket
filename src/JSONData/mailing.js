export default {
  title: 'Рассылки',
  page: 'mailing',
  groups: [
    {
      name: 'mailing',
      fields: ['title_block', 'body_block'],
    },
  ],
  fields: [
    {
      name: 'title_block',
      type: 'div',
      cssClass: ['bg-white', 'p-6', 'mb-6', 'flex-col'],
      fields: ['breadcrumbs', 'title'],
    },
    {
      name: 'breadcrumbs',
      type: 'breadcrumbs',
      options: [
        {
          title: 'Главная',
          path: '/',
        },
        {
          title: 'Сервисы',
        },
        {
          title: 'Paccылки',
          path: '/main/mailing',
        },
      ],
    },
    {
      text: 'Рассылки',
      name: 'title',
      type: 'label',
      parentClass: ['mt-4'],
      cssClass: ['font-medium', 'text-xl'],
    },
    {
      name: 'body_block',
      type: 'div',
      cssClass: ['bg-white', 'flex', 'justify-center'],
      fields: ['wrapper_block'],
    },
    {
      name: 'wrapper_block',
      type: 'div',
      cssClass: ['w-600', 'p-6'],
      fields: [
        'parameters_title',
        'parameters_block',
        'mail_fields_title',
        'mail_fields_block',
        'message_title',
        'message_block',
        'buttons_wrap',
      ],
    },
    {
      text: 'Основные параметры',
      name: 'parameters_title',
      type: 'label',
      parentClass: [
        'mt-2.5',
        'mb-8',
        'ml-20',
        'pl-12',
        'relative',
        'before:absolute',
        'before:left-2',
        'before:top-1/2',
        'before:block',
        'before:w-5',
        'before:border-t',
        'before:border-dividerColor',
        'after:absolute',
        'after:right-0',
        'after:top-1/2',
        'after:block',
        'after:w-2/4',
        'after:border-t',
        'after:border-dividerColor',
      ],
      cssClass: ['font-semibold', 'text-base'],
    },
    {
      name: 'parameters_block',
      type: 'div',
      fields: ['parameters_cols_wrap', 'parameters_status'],
    },
    {
      name: 'parameters_cols_wrap',
      type: 'div',
      cssClass: ['flex', 'mb-6'],
      fields: ['parameters_col_1', 'parameters_col_2'],
    },
    {
      name: 'parameters_col_1',
      type: 'div',
      cssClass: [
        'flex',
        'flex-col',
        'items-end',
        'mr-3',
        'ml-20-neg',
        'gap-y-6',
      ],
      fields: ['parameters_label_1', 'parameters_label_2'],
    },
    {
      name: 'parameters_col_2',
      type: 'div',
      cssClass: ['flex', 'flex-col', 'gap-y-6'],
      fields: ['parameters_text_1', 'parameters_text_2'],
    },
    {
      text: 'Тип почтового события:',
      name: 'parameters_label_1',
      type: 'label',
    },
    {
      text: 'Отбивка брошенной корзины [LOST_BASKET]',
      name: 'parameters_text_1',
      type: 'link',
    },
    {
      text: 'Последнее обновление:',
      name: 'parameters_label_2',
      type: 'label',
    },
    {
      text: '23.05.2022   17:11:11',
      name: 'parameters_text_2',
      type: 'label',
    },
    {
      label: 'Активен:',
      name: 'parameters_status',
      type: 'boolean',
      viewType: 'switch',
      labelBefore: true,
      value: false,
      parentClass: ['mb-6', 'ml-5'],
    },
    {
      text: 'Поля письма',
      name: 'mail_fields_title',
      type: 'label',
      parentClass: [
        'mt-16',
        'mb-10',
        'ml-20',
        'pl-12',
        'relative',
        'before:absolute',
        'before:left-2',
        'before:top-1/2',
        'before:block',
        'before:w-5',
        'before:border-t',
        'before:border-dividerColor',
        'after:absolute',
        'after:right-0',
        'after:top-1/2',
        'after:block',
        'after:w-[63%]',
        'after:border-t',
        'after:border-dividerColor',
      ],
      cssClass: ['font-semibold', 'text-base'],
    },
    {
      name: 'mail_fields_block',
      type: 'div',
      fields: ['extra_headers_link', 'mail_subject'],
    },
    {
      text: 'Показать дополнительные заголовки...',
      link: '#',
      name: 'extra_headers_link',
      type: 'link',
      parentClass: ['mb-6', 'ml-20', 'pl-2'],
    },
    {
      title: 'Тема',
      titlePosition: 'left',
      titleClass: ['mt-2'],
      name: 'mail_subject',
      type: 'input',
      format: 'text',
      value: '',
      containerClass: ['mb-6', 'ml-10'],
      parentClass: ['w-480'],
    },
    {
      text: 'Сообщение',
      name: 'message_title',
      type: 'label',
      parentClass: [
        'mt-16',
        'mb-10',
        'ml-20',
        'pl-12',
        'relative',
        'before:absolute',
        'before:left-2',
        'before:top-1/2',
        'before:block',
        'before:w-5',
        'before:border-t',
        'before:border-dividerColor',
        'after:absolute',
        'after:right-0',
        'after:top-1/2',
        'after:block',
        'after:w-[65%]',
        'after:border-t',
        'after:border-dividerColor',
      ],
      cssClass: ['font-semibold', 'text-base'],
    },
    {
      name: 'message_block',
      type: 'div',
      cssClass: ['ml-20', 'mb-6'],
      fields: ['message_radio_btn', 'message_text', 'message_editor'],
    },
    {
      name: 'message_radio_btn',
      type: 'radio',
      options: [
        {
          value: 'message_text',
          label: 'Текст',
        },
        {
          value: 'message_editor',
          label: 'Визуальный редактор',
        },
      ],
      value: 'message_text',
      parentClass: ['mb-6'],
      handlers: [
        {
          name: 'editField',
          params: {
            pageName: 'mailing',
            blockName: ['message_text', 'message_editor'],
            fieldName: 'parentClass',
            value: { add: ['hidden'], remove: [] },
          },
        },
        {
          name: 'editField',
          dynamicParam: 'blockName',
          params: {
            pageName: 'mailing',
            blockName: '',
            fieldName: 'parentClass',
            value: { add: [], remove: ['hidden'] },
          },
        },
      ],
    },
    {
      name: 'message_text',
      type: 'textarea',
      minRows: 10,
    },
    {
      name: 'message_editor',
      type: 'editor',
      parentClass: ['min-h-56', 'hidden'],
    },
    {
      name: 'buttons_wrap',
      type: 'div',
      cssClass: ['flex', 'pl-2', 'ml-20', 'mb-6'],
      fields: ['button_reset', 'button_save'],
    },
    {
      type: 'button',
      value: 'Отмена',
      name: 'button_reset',
      buttonType: '',
      disabled: false,
      cssClass: ['mr-2'],
      handler: {
        name: 'resetForm',
        params: {},
      },
    },
    {
      type: 'button',
      value: 'Сохранить',
      name: 'button_save',
      buttonType: 'primary',
      disabled: false,
      handler: {
        name: 'save',
        params: {},
      },
    },
  ],
}
