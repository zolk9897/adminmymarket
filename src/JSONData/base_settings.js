export default {
  page: 'base_settings',
  useTitle: {
    title: 'Базовые настройки',
    breadcrumbs: [
      {
        title: 'Главная',
        path: '/',
      },
      {
        title: 'Настройки',
      },
      {
        title: 'Базовые настройки',
        path: '/main/base_settings',
      },
    ],
  },
  groups: [
    {
      tabName: 'Основные',
      name: 'main_tab',
      fields: ['body_block'],
    },
    {
      tabName: 'SEO',
      name: 'seo_tab',
      fields: ['seo_tab__title_block', 'seo_tab__container_block'],
    },
    {
      tabName: 'Безопасность',
      name: 'safety_tab',
      fields: [
        'safety_tab__table_banned_list',
        'safety_tab__table_exeptions_list',
      ],
    },
    {
      tabName: 'Юр. лица',
      name: 'legal_entities_tab',
      fields: [
        'legal_entities__title_block',
        'legal_entities__container_block',
      ],
    },
  ],
  fields: [
    {
      name: 'body_block',
      type: 'div',
      cssClass: ['bg-white', 'flex', 'justify-center', 'flex-col', 'mb-10'],
      fields: [
        'main_settings_system_container',
        'general_settings_system_container',
        'main_tab__buttons_container_block',
      ],
    },
    {
      name: 'main_settings_system_container',
      type: 'div',
      cssClass: ['bg-white'],
      fields: [
        'main_settings_system__title',
        'main_settings_system__container_block',
      ],
    },
    {
      name: 'main_settings_system__title',
      type: 'div',
      cssClass: ['pt-8', 'pl-[430px]'],
      fields: ['main_settings_title'],
    },
    {
      text: 'Основные настройки системы',
      name: 'main_settings_title',
      type: 'label',
      parentClass: [
        'w-max',
        'relative',
        'before:absolute',
        'before:left-[-30px]',
        'before:top-1/2',
        'before:block',
        'before:w-5',
        'before:border-t',
        'before:border-dividerColor',
        'after:absolute',
        'after:right-[-100%]',
        'after:top-1/2',
        'after:block',
        'after:w-[90%]',
        'after:border-t',
        'after:border-dividerColor',
      ],
      cssClass: ['font-medium', 'text-base'],
    },
    {
      name: 'main_settings_system__container_block',
      type: 'div',
      cssClass: ['flex', 'bg-white', 'flex-col', 'p-6', 'gap-6'],
      fields: [
        'add_logo_site_block',
        'phone_number_block',
        'email_block',
        'work_hours_block',
        'email_notify_system_block',
        'duplicate_mail_shop_block',
        'email_for_tech_error_block',
        'email_for_reviews_block',
        'sender_in_outgoing_email_block',
      ],
    },
    {
      name: 'add_logo_site_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[400px_1fr]', 'gap-2'],
      fields: ['add_logo_site_label', 'add_logo_site_input_file'],
    },
    {
      name: 'phone_number_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[400px_1fr]', 'gap-2'],
      fields: ['phone_number_label', 'phone_number_input'],
    },
    {
      name: 'email_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[400px_1fr]', 'gap-2'],
      fields: ['email_label', 'email_input'],
    },
    {
      name: 'work_hours_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[400px_1fr]', 'gap-2'],
      fields: ['work_hours_label', 'work_hours_block_input'],
    },
    {
      name: 'email_notify_system_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[400px_1fr]', 'gap-2'],
      fields: ['email_notify_system_label', 'email_notify_system_input'],
    },
    {
      name: 'duplicate_mail_shop_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[400px_1fr]', 'gap-2'],
      fields: ['duplicate_mail_shop_label', 'duplicate_mail_shop_switch'],
    },
    {
      name: 'email_for_tech_error_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[400px_1fr]', 'gap-2'],
      fields: ['email_for_tech_error_label', 'email_for_tech_error_input'],
    },
    {
      name: 'email_for_reviews_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[400px_1fr]', 'gap-2'],
      fields: ['email_for_reviews_label', 'email_for_reviews_input'],
    },
    {
      name: 'sender_in_outgoing_email_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[400px_1fr]', 'gap-2'],
      fields: [
        'sender_in_outgoing_email_label',
        'sender_in_outgoing_email_input',
      ],
    },
    {
      text: 'Добавить лого сайта:',
      name: 'add_logo_site_label',
      type: 'label',
      parentClass: ['h-10', 'flex', 'justify-items-end', 'justify-end'],
    },
    {
      text: 'Телефон:',
      name: 'phone_number_label',
      type: 'label',
      parentClass: ['h-10', 'flex', 'items-center', 'justify-end'],
    },
    {
      text: 'E-mail:',
      name: 'email_label',
      type: 'label',
      parentClass: ['h-10', 'flex', 'items-center', 'justify-end'],
    },
    {
      text: 'Рабочие часы:',
      name: 'work_hours_label',
      type: 'label',
      parentClass: ['h-10', 'flex', 'items-center', 'justify-end'],
    },
    {
      text: 'E-mail для системных оповещений:',
      name: 'email_notify_system_label',
      type: 'label',
      parentClass: ['h-10', 'flex', 'items-center', 'justify-end'],
    },
    {
      text: 'Дублировать письма магазинам на системный e-mail:',
      name: 'duplicate_mail_shop_label',
      type: 'label',
      parentClass: ['h-10', 'flex', 'items-center', 'justify-end'],
    },
    {
      text: 'E-mail для технических ошибок:',
      name: 'email_for_tech_error_label',
      type: 'label',
      parentClass: ['h-10', 'flex', 'items-center', 'justify-end'],
    },
    {
      text: 'E-mail для отзывов на товары:',
      name: 'email_for_reviews_label',
      type: 'label',
      parentClass: ['h-10', 'flex', 'items-center', 'justify-end'],
    },
    {
      text: 'Отправитель в исходящих e-mail:',
      name: 'sender_in_outgoing_email_label',
      type: 'label',
      parentClass: ['h-10', 'flex', 'items-center', 'justify-end'],
    },
    {
      name: 'add_logo_site_input_file',
      value: '',
      type: 'file',
      maxCount: 1,
      fileType: 'image',
    },
    {
      name: 'phone_number_input',
      format: 'text',
      value: '',
      mask: '+7 (###) ###-##-##',
      type: 'input',
      parentClass: ['w-480'],
    },
    {
      name: 'email_input',
      format: 'text',
      value: '',
      type: 'input',
      parentClass: ['w-480'],
    },
    {
      name: 'work_hours_block_input',
      type: 'div',
      cssClass: ['grid', 'grid-cols-2', 'gap-4', 'items-start', 'w-480'],
      fields: ['work_hours_from', 'work_hours_to'],
    },
    {
      title: 'С',
      titlePosition: 'left',
      titleClass: ['mt-2'],
      name: 'work_hours_from',
      format: 'text',
      value: 8,
      type: 'select',
      size: 'large',
      cssClass: ['w-52'],
      options: [
        {
          id: 1,
          name: '06:00',
        },
        {
          id: 2,
          name: '06:30',
        },
        {
          id: 3,
          name: '07:00',
        },
        {
          id: 4,
          name: '07:30',
        },
        {
          id: 5,
          name: '08:00',
        },
        {
          id: 6,
          name: '08:30',
        },
        {
          id: 7,
          name: '09:00',
        },
        {
          id: 8,
          name: '09:30',
        },
        {
          id: 9,
          name: '10:00',
        },
        {
          id: 10,
          name: '10:30',
        },
        {
          id: 11,
          name: '11:00',
        },
        {
          id: 12,
          name: '11:30',
        },
        {
          id: 13,
          name: '12:00',
        },
        {
          id: 14,
          name: '12:30',
        },
        {
          id: 15,
          name: '13:00',
        },
        {
          id: 16,
          name: '13:30',
        },
        {
          id: 17,
          name: '14:00',
        },
        {
          id: 18,
          name: '14:30',
        },
        {
          id: 19,
          name: '15:00',
        },
        {
          id: 20,
          name: '15:30',
        },
        {
          id: 21,
          name: '16:00',
        },
        {
          id: 22,
          name: '16:30',
        },
        {
          id: 23,
          name: '17:00',
        },
        {
          id: 24,
          name: '17:30',
        },
        {
          id: 25,
          name: '18:00',
        },
        {
          id: 26,
          name: '18:30',
        },
        {
          id: 27,
          name: '19:00',
        },
        {
          id: 28,
          name: '19:30',
        },
        {
          id: 29,
          name: '20:00',
        },
        {
          id: 30,
          name: '20:30',
        },
        {
          id: 31,
          name: '21:00',
        },
        {
          id: 32,
          name: '21:30',
        },
        {
          id: 33,
          name: '22:00',
        },
        {
          id: 34,
          name: '22:30',
        },
        {
          id: 35,
          name: '23:00',
        },
        {
          id: 36,
          name: '23:30',
        },
        {
          id: 37,
          name: '00:00',
        },
        {
          id: 38,
          name: '00:30',
        },
      ],
    },

    {
      title: 'До',
      titlePosition: 'left',
      titleClass: ['mt-2'],
      name: 'work_hours_to',
      format: 'text',
      value: 33,
      type: 'select',
      size: 'large',
      cssClass: ['w-52'],
      options: [
        {
          id: 1,
          name: '06:00',
        },
        {
          id: 2,
          name: '06:30',
        },
        {
          id: 3,
          name: '07:00',
        },
        {
          id: 4,
          name: '07:30',
        },
        {
          id: 5,
          name: '08:00',
        },
        {
          id: 6,
          name: '08:30',
        },
        {
          id: 7,
          name: '09:00',
        },
        {
          id: 8,
          name: '09:30',
        },
        {
          id: 9,
          name: '10:00',
        },
        {
          id: 10,
          name: '10:30',
        },
        {
          id: 11,
          name: '11:00',
        },
        {
          id: 12,
          name: '11:30',
        },
        {
          id: 13,
          name: '12:00',
        },
        {
          id: 14,
          name: '12:30',
        },
        {
          id: 15,
          name: '13:00',
        },
        {
          id: 16,
          name: '13:30',
        },
        {
          id: 17,
          name: '14:00',
        },
        {
          id: 18,
          name: '14:30',
        },
        {
          id: 19,
          name: '15:00',
        },
        {
          id: 20,
          name: '15:30',
        },
        {
          id: 21,
          name: '16:00',
        },
        {
          id: 22,
          name: '16:30',
        },
        {
          id: 23,
          name: '17:00',
        },
        {
          id: 24,
          name: '17:30',
        },
        {
          id: 25,
          name: '18:00',
        },
        {
          id: 26,
          name: '18:30',
        },
        {
          id: 27,
          name: '19:00',
        },
        {
          id: 28,
          name: '19:30',
        },
        {
          id: 29,
          name: '20:00',
        },
        {
          id: 30,
          name: '20:30',
        },
        {
          id: 31,
          name: '21:00',
        },
        {
          id: 32,
          name: '21:30',
        },
        {
          id: 33,
          name: '22:00',
        },
        {
          id: 34,
          name: '22:30',
        },
        {
          id: 35,
          name: '23:00',
        },
        {
          id: 36,
          name: '23:30',
        },
        {
          id: 37,
          name: '00:00',
        },
        {
          id: 38,
          name: '00:30',
        },
      ],
    },
    {
      name: 'email_notify_system_input',
      format: 'text',
      value: '',
      type: 'input',
      parentClass: ['w-480'],
    },
    {
      name: 'duplicate_mail_shop_switch',
      value: true,
      type: 'boolean',
      viewType: 'switch',
      parentClass: ['w-480', 'h-10', 'flex', 'items-center'],
    },
    {
      name: 'email_for_tech_error_input',
      format: 'text',
      value: '',
      type: 'input',
      parentClass: ['w-480'],
      subtitle: {
        text: 'Можно перечислить через запятую.',
        cssClass: ['text-xs', 'text-textSecondary'],
      },
    },
    {
      name: 'email_for_reviews_input',
      format: 'text',
      value: '',
      type: 'input',
      parentClass: ['w-480'],
      subtitle: {
        text: 'Можно перечислить через запятую.',
        cssClass: ['text-xs', 'text-textSecondary'],
      },
    },
    {
      name: 'sender_in_outgoing_email_input',
      format: 'text',
      value: '',
      type: 'input',
      parentClass: ['w-480'],
      subtitle: {
        text: 'Email или Имя <Email>',
        cssClass: ['text-xs', 'text-textSecondary'],
      },
    },
    {
      name: 'general_settings_system_container',
      type: 'div',
      fields: [
        'general_settings_system__title',
        'general_settings_system__container_block',
      ],
    },
    {
      name: 'general_settings_system__title',
      type: 'div',
      cssClass: ['pt-8', 'pl-[430px]'],
      fields: ['general_settings_title'],
    },
    {
      text: 'Общие настройки системы',
      name: 'general_settings_title',
      type: 'label',
      parentClass: [
        'w-max',
        'relative',
        'before:absolute',
        'before:left-[-30px]',
        'before:top-1/2',
        'before:block',
        'before:w-5',
        'before:border-t',
        'before:border-dividerColor',
        'after:absolute',
        'after:right-[-100%]',
        'after:top-1/2',
        'after:block',
        'after:w-[90%]',
        'after:border-t',
        'after:border-dividerColor',
      ],
      cssClass: ['font-medium', 'text-base'],
    },
    {
      name: 'general_settings_system__container_block',
      type: 'div',
      cssClass: ['flex', 'bg-white', 'flex-col', 'p-6', 'gap-6'],
      fields: [
        'default_bet_block',
        'min_bet_for_premium_block',
        'max_bet_block',
        'step_bet_reccomend_block',
        'conversion_shop_analitycs_block',
        'price_order_from_analitycs_block',
        'cpc_price_order_block',
        'live_time_link_block',
      ],
    },
    {
      name: 'default_bet_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[400px_1fr]', 'gap-2'],
      fields: ['default_bet_label', 'default_bet_input'],
    },
    {
      text: 'Ставка по умолчанию, ₽:',
      name: 'default_bet_label',
      type: 'label',
      parentClass: ['h-10', 'flex', 'items-center', 'justify-end'],
    },
    {
      name: 'default_bet_input',
      format: 'text',
      value: '',
      type: 'input',
      parentClass: ['w-480'],
    },
    {
      name: 'min_bet_for_premium_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[400px_1fr]', 'gap-2'],
      fields: ['min_bet_for_premium_label', 'min_bet_for_premium_input'],
    },
    {
      text: 'Мин. ставка для премиум размещения, ₽:',
      name: 'min_bet_for_premium_label',
      type: 'label',
      parentClass: ['h-10', 'flex', 'items-center', 'justify-end'],
    },
    {
      name: 'min_bet_for_premium_input',
      format: 'text',
      value: '',
      type: 'input',
      parentClass: ['w-480'],
    },
    {
      name: 'max_bet_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[400px_1fr]', 'gap-2'],
      fields: ['max_bet_label', 'max_bet_input'],
    },
    {
      text: 'Максимальная ставка, ₽:',
      name: 'max_bet_label',
      type: 'label',
      parentClass: ['h-10', 'flex', 'items-center', 'justify-end'],
    },
    {
      name: 'max_bet_input',
      format: 'text',
      value: '',
      type: 'input',
      parentClass: ['w-480'],
    },
    {
      name: 'step_bet_reccomend_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[400px_1fr]', 'gap-2'],
      fields: ['step_bet_reccomend_label', 'step_bet_reccomend_input'],
    },
    {
      text: 'Шаг увеличения ставок конкурентов в рекомендациях ставок, ₽:',
      name: 'step_bet_reccomend_label',
      type: 'label',
      parentClass: ['h-10', 'flex', 'items-center', 'justify-end', 'text-end'],
    },
    {
      name: 'step_bet_reccomend_input',
      format: 'text',
      value: '',
      type: 'input',
      parentClass: ['w-480'],
    },
    {
      name: 'conversion_shop_analitycs_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[400px_1fr]', 'gap-2'],
      fields: [
        'conversion_shop_analitycs_label',
        'conversion_shop_analitycs_input',
      ],
    },
    {
      text: 'Средняя конверсия магазинов для аналитики, %:',
      name: 'conversion_shop_analitycs_label',
      type: 'label',
      parentClass: ['h-10', 'flex', 'items-center', 'justify-end', 'text-end'],
    },
    {
      name: 'conversion_shop_analitycs_input',
      format: 'text',
      value: '',
      type: 'input',
      parentClass: ['w-480'],
    },
    {
      name: 'price_order_from_analitycs_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[400px_1fr]', 'gap-2'],
      fields: [
        'price_order_from_analitycs_label',
        'price_order_from_analitycs_input',
      ],
    },
    {
      text: 'Средняя стоимость заказа для аналитики, ₽:',
      name: 'price_order_from_analitycs_label',
      type: 'label',
      parentClass: ['h-10', 'flex', 'items-center', 'justify-end', 'text-end'],
    },
    {
      name: 'price_order_from_analitycs_input',
      format: 'text',
      value: '',
      type: 'input',
      parentClass: ['w-480'],
    },
    {
      name: 'cpc_price_order_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[400px_1fr]', 'gap-2'],
      fields: ['cpc_price_order_label', 'cpc_price_order_input'],
    },
    {
      text: 'Множитель СРС для расчета стоимости заказа:',
      name: 'cpc_price_order_label',
      type: 'label',
      parentClass: ['h-10', 'flex', 'items-center', 'justify-end', 'text-end'],
    },
    {
      name: 'cpc_price_order_input',
      format: 'text',
      value: '',
      type: 'input',
      parentClass: ['w-480'],
    },
    {
      name: 'live_time_link_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[400px_1fr]', 'gap-2'],
      fields: ['live_time_link_label', 'live_time_link_input'],
    },
    {
      text: 'Срок жизни ссылки для доступа к личному кабинету магазина, без авторизации, дни:',
      name: 'live_time_link_label',
      type: 'label',
      parentClass: ['h-10', 'flex', 'items-center', 'justify-end', 'text-end'],
    },
    {
      name: 'live_time_link_input',
      format: 'text',
      value: '',
      type: 'input',
      parentClass: ['w-480'],
    },
    {
      name: 'main_tab__buttons_container_block',
      type: 'div',
      cssClass: ['flex', 'gap-2', 'ml-[430px]', 'pb-10'],
      fields: ['main_tab__cancel_button', 'main_tab__save_button'],
    },
    {
      type: 'button',
      value: 'Сохранить',
      name: 'main_tab__save_button',
      size: 'large',
      buttonType: 'primary',
      disabled: false,
    },
    {
      type: 'button',
      value: 'Отмена',
      name: 'main_tab__cancel_button',
      size: 'large',
      buttonType: 'default',
      disabled: false,
    },
    {
      name: 'legal_entities__title_block',
      type: 'div',
      cssClass: [
        'bg-white',
        'p-6',
        'flex',
        'justify-between',
        'items-center',
        'border-b',
        'border-borderColor',
      ],
      fields: ['legal_entities__title', 'legal_entities__buttons_block'],
    },
    {
      text: 'Юридические лица',
      name: 'legal_entities__title',
      type: 'label',
      cssClass: ['font-medium', 'text-base'],
    },
    {
      name: 'legal_entities__container_block',
      type: 'div',
      cssClass: ['bg-white'],
      fields: ['legal_entities_table_block', 'block_modal_add_to_table'],
    },
    {
      name: 'legal_entities_table_block',
      type: 'div',
      parentClass: ['p-6'],
      fields: ['legal_entities_table'],
    },
    {
      name: 'legal_entities_table',
      type: 'table',
      config: {
        pagination: false,
        size: 'small',
        align: 'center',
        bordered: true,
        selection: true,
      },
      data: [
        {
          name: 'DigitalOcean',
          status: 1,
          debt: 1000,
        },
        {
          name: 'DigitalOcean',
          status: 0,
          debt: 1500,
        },
        {
          name: 'DigitalOcean',
          status: 2,
          debt: 1000,
        },
      ],
      columns: [
        {
          dataIndex: 'actions',
          widget: {
            name: 'actions',
          },
          width: 1,
          hide: false,
          delete: true,
          edit: true,
          copy: true,
        },
        {
          title: 'Название',
          dataIndex: 'name',
          key: 'name',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 250,
          render: 'name',
        },
        {
          title: 'Не закрыто актами, ₽',
          dataIndex: 'debt',
          key: 'debt',
          sort: true,
          widget: {
            name: 'text',
            class: 'font-normal',
          },
          resizable: true,
          width: 150,
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
              { id: 0, value: 'Одобрено', color: '#87D068' },
              { id: 1, value: 'Модерация', color: '#FAAD14' },
              { id: 2, value: 'Отказано', color: '#FF4D4F' },
            ],
          },
          width: 150,
        },
      ],
    },
    {
      name: 'legal_entities__buttons_block',
      type: 'div',
      cssClass: ['flex', 'gap-2'],
      fields: ['legal_entities__add_button', 'legal_entities__delete_button'],
    },
    {
      type: 'button',
      value: 'Добавить юр. лицо',
      name: 'legal_entities__add_button',
      buttonType: 'primary',
      disabled: false,
      handlers: [
        {
          name: 'editField',
          params: {
            pageName: 'base_settings',
            blockName: 'block_modal_add_to_table',
            fieldName: 'style',
            value: { display: 'flex' },
          },
        },
      ],
    },
    {
      layout: 'grid',
      name: 'block_modal_add_to_table',
      type: 'div',
      handlers: [
        {
          name: 'editField',
          params: {
            pageName: 'base_settings',
            blockName: 'block_modal_add_to_table',
            fieldName: 'style',
            value: { display: 'none' },
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'base_settings',
            blockName: 'block_modal_added_content',
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
        'name_legal_input',
        'price_legal_input',
        'status_legal_input',
        'buttons_block_footer',
      ],
    },
    {
      title: 'Название юр. лица',
      name: 'name_legal_input',
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
      title: 'Не закрыто актами, ₽',
      name: 'price_legal_input',
      format: 'text',
      value: '',
      mask: '##############',
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
      title: 'Статус',
      name: 'status_legal_input',
      format: 'text',
      value: '',
      type: 'select',
      size: 'large',
      cssClass: ['w-full'],
      excludeSend: true,
      validation: {
        type: 'string',
        rules: [
          {
            type: 'required',
          },
        ],
      },
      options: [
        { id: 0, name: 'Одобрено' },
        { id: 1, name: 'Модерация' },
        { id: 2, name: 'Отказано' },
      ],
    },
    {
      name: 'buttons_block_footer',
      type: 'div',
      cssClass: ['flex', 'justify-end', 'gap-2'],
      fields: ['legal_tab__cancel_button', 'legal_tab__add_button'],
    },
    {
      type: 'button',
      value: 'Отменить',
      name: 'legal_tab__cancel_button',
      disabled: false,
      handlers: [
        {
          name: 'editField',
          params: {
            pageName: 'base_settings',
            blockName: 'block_modal_add_to_table',
            fieldName: 'style',
            value: { display: 'none' },
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'base_settings',
            blockName: 'block_modal_added_content',
          },
        },
      ],
    },
    {
      type: 'button',
      value: 'Добавить юр. лицо',
      name: 'legal_tab__add_button',
      buttonType: 'primary',
      disabled: false,
      handlers: [
        {
          name: 'validateHandler',
          params: {
            pageName: 'base_settings',
            blockName: 'block_modal_added_content',
          },
        },
        {
          name: 'addDataToTableField',
          params: {
            pageName: 'base_settings',
            tableName: 'legal_entities_table',
            data: {
              name: 'name_legal_input',
              status: 'status_legal_input',
              debt: 'price_legal_input',
            },
          },
        },
        {
          name: 'editField',
          params: {
            pageName: 'base_settings',
            blockName: 'block_modal_add_to_table',
            fieldName: 'style',
            value: { display: 'none' },
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'base_settings',
            blockName: 'block_modal_added_content',
          },
        },
      ],
    },
    {
      name: 'safety_tab__table_banned_list',
      type: 'div',
      cssClass: ['bg-white'],
      fields: [
        'table_banned_list__header',
        'table_banned_list__body',
        'table_banned_list_add_ip_modal',
      ],
    },
    {
      name: 'table_banned_list__header',
      type: 'div',
      cssClass: [
        'p-6',
        'flex',
        'justify-between',
        'items-center',
        'border-b',
        'border-borderColor',
      ],
      fields: ['table_banned_list__title', 'table_banned_list__buttons_block'],
    },
    {
      text: 'Список заблокированных IP',
      name: 'table_banned_list__title',
      type: 'label',
      cssClass: ['font-medium', 'text-base'],
    },
    {
      name: 'table_banned_list__buttons_block',
      type: 'div',
      fields: ['table_banned_list__add_ip_button'],
    },
    {
      name: 'table_banned_list__body',
      type: 'div',
      cssClass: ['p-6', 'pb-2'],
      fields: ['table_banned_list__table_ip'],
    },
    {
      type: 'button',
      value: 'Добавить',
      name: 'table_banned_list__add_ip_button',
      buttonType: 'primary',
      disabled: false,
      icon: {
        name: 'fa-solid fa-plus',
      },
      handlers: [
        {
          name: 'editField',
          params: {
            pageName: 'base_settings',
            blockName: 'table_banned_list_add_ip_modal',
            fieldName: 'style',
            value: { display: 'flex' },
          },
        },
      ],
    },
    {
      name: 'table_banned_list__table_ip',
      type: 'table',
      config: {
        pagination: false,
        size: 'large',
        align: 'center',
        bordered: true,
        selection: true,
      },
      data: [
        {
          id: 115164,
          active_status: true,
          name: 'DigitalOcean',
          ip_address: '139.59.212.108',
          comment_message: '',
        },
        {
          id: 141548,
          active_status: true,
          name: 'DigitalOcean',
          ip_address: '139.59.212.108',
          comment_message: '',
        },
        {
          id: 124853,
          active_status: true,
          name: 'DigitalOcean',
          ip_address: '139.59.212.108',
          comment_message: '',
        },
      ],
      columns: [
        {
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
        {
          title: 'Активность',
          dataIndex: 'active_status',
          key: 'active_status',
          widget: {
            name: 'checkbox',
            type: 'text',
          },
          width: 1,
        },
        {
          title: 'Название',
          dataIndex: 'name',
          key: 'name',
          widget: {
            name: 'text',
            class: 'font-normal',
          },
          resizable: true,
          width: 550,
        },
        {
          title: 'IP-адреса',
          dataIndex: 'ip_address',
          key: 'ip_address',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 150,
        },
        {
          title: 'Комментарий',
          dataIndex: 'comment_message',
          key: 'comment_message',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 100,
        },
      ],
    },
    {
      name: 'safety_tab__table_exeptions_list',
      type: 'div',
      cssClass: ['bg-white', 'mt-6'],
      fields: [
        'table_exeptions_list__header',
        'table_exeptions_list__body',
        'table_exeptions_list_add_ip_modal',
      ],
    },
    {
      name: 'table_exeptions_list__header',
      type: 'div',
      cssClass: [
        'p-6',
        'flex',
        'justify-between',
        'items-center',
        'border-b',
        'border-borderColor',
      ],
      fields: [
        'table_exeptions_list__title',
        'table_exeptions_list__buttons_block',
      ],
    },
    {
      text: 'Список исключений',
      name: 'table_exeptions_list__title',
      type: 'label',
      cssClass: ['font-medium', 'text-base'],
    },
    {
      name: 'table_exeptions_list__buttons_block',
      type: 'div',
      fields: ['table_exeptions_list__add_ip_button'],
    },
    {
      name: 'table_exeptions_list__body',
      type: 'div',
      cssClass: ['p-6', 'pb-2'],
      fields: ['table_exeptions_list__table_ip'],
    },
    {
      type: 'button',
      value: 'Добавить',
      name: 'table_exeptions_list__add_ip_button',
      buttonType: 'primary',
      disabled: false,
      icon: {
        name: 'fa-solid fa-plus',
      },
      handlers: [
        {
          name: 'editField',
          params: {
            pageName: 'base_settings',
            blockName: 'table_exeptions_list_add_ip_modal',
            fieldName: 'style',
            value: { display: 'flex' },
          },
        },
      ],
    },
    {
      name: 'table_exeptions_list__table_ip',
      type: 'table',
      config: {
        pagination: false,
        size: 'large',
        align: 'center',
        bordered: true,
        selection: { delete: true },
      },
      data: [
        {
          id: 115164,
          active_status: true,
          name: 'DigitalOcean',
          ip_address: '139.59.212.108',
          comment_message: '',
        },
        {
          id: 141548,
          active_status: true,
          name: 'DigitalOcean',
          ip_address: '139.59.212.108',
          comment_message: '',
        },
        {
          id: 124853,
          active_status: true,
          name: 'DigitalOcean',
          ip_address: '139.59.212.108',
          comment_message: '',
        },
      ],
      columns: [
        {
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
        {
          title: 'Активность',
          dataIndex: 'active_status',
          key: 'active_status',
          widget: {
            name: 'checkbox',
            type: 'text',
          },
          width: 1,
        },
        {
          title: 'Название',
          dataIndex: 'name',
          key: 'name',
          widget: {
            name: 'text',
            class: 'font-normal',
          },
          resizable: true,
          width: 550,
        },
        {
          title: 'IP-адреса',
          dataIndex: 'ip_address',
          key: 'ip_address',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 150,
        },
        {
          title: 'Комментарий',
          dataIndex: 'comment_message',
          key: 'comment_message',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 100,
        },
      ],
    },
    {
      name: 'table_banned_list_add_ip_modal',
      type: 'div',
      handlers: [
        {
          name: 'editField',
          params: {
            pageName: 'base_settings',
            blockName: 'table_banned_list_add_ip_modal',
            fieldName: 'style',
            value: { display: 'none' },
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'base_settings',
            blockName: 'table_banned_list_add_ip_modal',
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
      fields: ['table_banned_list_modal_added_content'],
    },
    {
      title: 'Добавление IP в список заблокированных',
      titleClass: ['font-medium', 'mb-4'],
      name: 'table_banned_list_modal_added_content',
      type: 'div',
      containerClass: ['bg-white', 'p-6', 'gap-4', 'w-480'],
      fields: [
        'table_banned_list_modal__name_ip_address',
        'table_banned_list_modal__ip_address',
        'table_banned_list_modal__message_comment',
        'table_banned_list_modal__active',
        'table_banned_list_buttons_modal_footer',
      ],
    },
    {
      title: 'Название',
      name: 'table_banned_list_modal__name_ip_address',
      format: 'text',
      value: '',
      type: 'input',
      excludeSend: true,
      containerClass: ['mt-6', 'mb-4'],
      validation: {
        rules: [
          {
            type: 'required',
          },
        ],
      },
    },
    {
      title: 'IP адресс',
      name: 'table_banned_list_modal__ip_address',
      format: 'text',
      value: '',
      type: 'input',
      excludeSend: true,
      containerClass: ['mt-6', 'mb-4'],
      validation: {
        rules: [
          {
            type: 'required',
          },
        ],
      },
    },
    {
      title: 'Комментарий',
      name: 'table_banned_list_modal__message_comment',
      format: 'text',
      value: '',
      type: 'input',
      containerClass: ['mt-6', 'mb-4'],
    },
    {
      title: 'Активность',
      titleClass: ['font-medium'],
      name: 'table_banned_list_modal__active',
      value: false,
      type: 'boolean',
      viewType: 'switch',
    },
    {
      name: 'table_banned_list_buttons_modal_footer',
      type: 'div',
      cssClass: ['flex', 'justify-end', 'gap-2'],
      fields: [
        'table_banned_list__modal_cancel_button',
        'table_banned_list__modal__add_button',
      ],
    },
    {
      type: 'button',
      value: 'Отменить',
      name: 'table_banned_list__modal_cancel_button',
      handlers: [
        {
          name: 'editField',
          params: {
            pageName: 'base_settings',
            blockName: 'table_banned_list_add_ip_modal',
            fieldName: 'style',
            value: { display: 'none' },
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'base_settings',
            blockName: 'table_banned_list_add_ip_modal',
          },
        },
      ],
    },
    {
      type: 'button',
      value: 'Добавить',
      name: 'table_banned_list__modal__add_button',
      buttonType: 'primary',
      handlers: [
        {
          name: 'validateHandler',
          params: {
            pageName: 'base_settings',
            blockName: 'table_banned_list_add_ip_modal',
          },
        },
        {
          name: 'addDataToTableField',
          params: {
            pageName: 'base_settings',
            tableName: 'table_banned_list__table_ip',
            data: {
              name: 'table_banned_list_modal__name_ip_address',
              ip_address: 'table_banned_list_modal__ip_address',
              comment_message: 'table_banned_list_modal__message_comment',
              active_status: 'table_banned_list_modal__active',
            },
          },
        },
        {
          name: 'editField',
          params: {
            pageName: 'base_settings',
            blockName: 'table_banned_list_add_ip_modal',
            fieldName: 'style',
            value: { display: 'none' },
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'base_settings',
            blockName: 'table_banned_list_add_ip_modal',
          },
        },
      ],
    },
    {
      name: 'table_exeptions_list_add_ip_modal',
      type: 'div',
      handlers: [
        {
          name: 'editField',
          params: {
            pageName: 'base_settings',
            blockName: 'table_exeptions_list_add_ip_modal',
            fieldName: 'style',
            value: { display: 'none' },
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'base_settings',
            blockName: 'table_exeptions_list_add_ip_modal',
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
      fields: ['table_exeptions_list_modal_added_content'],
    },
    {
      title: 'Добавление IP в список исключений',
      titleClass: ['font-medium', 'mb-4'],
      name: 'table_exeptions_list_modal_added_content',
      type: 'div',
      containerClass: ['bg-white', 'p-6', 'gap-4', 'w-480'],
      fields: [
        'table_exeptions_list_modal__name_ip_address',
        'table_exeptions_list_modal__ip_address',
        'table_exeptions_list_modal__message_comment',
        'table_exeptions_list_modal__active',
        'table_exeptions_list_buttons_modal_footer',
      ],
    },
    {
      title: 'Название',
      name: 'table_exeptions_list_modal__name_ip_address',
      format: 'text',
      value: '',
      type: 'input',
      excludeSend: true,
      containerClass: ['mt-6', 'mb-4'],
      validation: {
        rules: [
          {
            type: 'required',
          },
        ],
      },
    },
    {
      title: 'IP адресс',
      name: 'table_exeptions_list_modal__ip_address',
      format: 'text',
      value: '',
      type: 'input',
      excludeSend: true,
      containerClass: ['mt-6', 'mb-4'],
      validation: {
        rules: [
          {
            type: 'required',
          },
        ],
      },
    },
    {
      title: 'Комментарий',
      name: 'table_exeptions_list_modal__message_comment',
      format: 'text',
      value: '',
      type: 'input',
      containerClass: ['mt-6', 'mb-4'],
    },
    {
      title: 'Активность',
      titleClass: ['font-medium'],
      name: 'table_exeptions_list_modal__active',
      value: false,
      type: 'boolean',
      viewType: 'switch',
    },
    {
      name: 'table_exeptions_list_buttons_modal_footer',
      type: 'div',
      cssClass: ['flex', 'justify-end', 'gap-2'],
      fields: [
        'table_exeptions_list__modal_cancel_button',
        'table_exeptions_list__modal__add_button',
      ],
    },
    {
      type: 'button',
      value: 'Отменить',
      name: 'table_exeptions_list__modal_cancel_button',
      handlers: [
        {
          name: 'editField',
          params: {
            pageName: 'base_settings',
            blockName: 'table_exeptions_list_add_ip_modal',
            fieldName: 'style',
            value: { display: 'none' },
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'base_settings',
            blockName: 'table_exeptions_list_add_ip_modal',
          },
        },
      ],
    },
    {
      type: 'button',
      value: 'Добавить',
      name: 'table_exeptions_list__modal__add_button',
      buttonType: 'primary',
      handlers: [
        {
          name: 'validateHandler',
          params: {
            pageName: 'base_settings',
            blockName: 'table_exeptions_list_add_ip_modal',
          },
        },
        {
          name: 'addDataToTableField',
          params: {
            pageName: 'base_settings',
            tableName: 'table_exeptions_list__table_ip',
            data: {
              name: 'table_exeptions_list_modal__name_ip_address',
              ip_address: 'table_exeptions_list_modal__ip_address',
              comment_message: 'table_exeptions_list_modal__message_comment',
              active_status: 'table_exeptions_list_modal__active',
            },
          },
        },
        {
          name: 'editField',
          params: {
            pageName: 'base_settings',
            blockName: 'table_exeptions_list_add_ip_modal',
            fieldName: 'style',
            value: { display: 'none' },
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'base_settings',
            blockName: 'table_exeptions_list_add_ip_modal',
          },
        },
      ],
    },
  ],
}
