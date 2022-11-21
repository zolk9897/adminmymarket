export default {
  page: 'groups_users',
  title: 'Группы пользователей: Группа #13: Редактирование',
  groups: [
    {
      tabName: 'Доступ',
      name: 'access_tab',
      layoutForm: 'horizontal',
      fields: ['access_tab__title_block', 'access_tab__container_block'],
    },
    {
      tabName: 'Параметры',
      name: 'params_tab',
      fields: ['params_tab__title_block'],
    },
  ],
  fields: [
    {
      name: 'access_tab__title_block',
      type: 'div',
      cssClass: ['bg-white', 'p-6', 'border-b', 'border-borderColor'],
      fields: ['title_1'],
    },
    {
      text: 'Права к административным частям модулей',
      name: 'title_1',
      type: 'label',
      cssClass: ['font-medium', 'text-base'],
    },
    {
      text: 'Детальная информация',
      name: 'title_2',
      type: 'label',
      cssClass: ['font-medium', 'text-base'],
    },
    {
      name: 'access_tab__container_block',
      type: 'div',
      cssClass: ['bg-white', 'p-6', 'gap-2'],
      fields: ['access_tab__body_block'],
    },
    {
      name: 'access_tab__body_block',
      type: 'div',
      cssClass: ['flex', 'gap-6', 'flex-col', 'w-[800px]', 'ml-52'],
      fields: [
        'main_module_select',
        'ab_test_select',
        'bonus_select',
        'banner_select',
        'name_shop_select',
        'internet_shop_select',
        'site_community_select',
        'coorp_site_select',
        'info_portal_select',
        'personal_site_select',
        'buisness_process_select',
        'designer_buisness_process_select',
        'blogs_select',
        'calendar_select',
        'shop_catalog_select',
        'cloud_storage_select',
        'web_klaster_select',
        'buttons_container_block',
      ],
    },
    {
      title: 'Главный модуль',
      titlePosition: 'left',
      titleClass: ['h-8', 'items-center', 'flex'],
      parentClass: ['flex', 'flex-col', 'gap-4'],
      name: 'main_module_select',
      format: 'text',
      value: 1,
      type: 'select',
      cssClass: ['w-500'],
      options: [
        {
          id: 1,
          name: 'По умолчанию',
        },
        {
          id: 2,
          name: 'Наблюдатель',
        },
        {
          id: 3,
          name: 'Менеджер',
        },
      ],
    },
    {
      title: 'A/B-тестирование',
      titlePosition: 'left',
      titleClass: ['h-8', 'items-center', 'flex'],
      parentClass: ['flex', 'flex-col', 'gap-4'],
      name: 'ab_test_select',
      format: 'text',
      value: 1,
      type: 'select',
      cssClass: ['w-500'],
      options: [
        {
          id: 1,
          name: 'По умолчанию',
        },
        {
          id: 2,
          name: 'Наблюдатель',
        },
        {
          id: 3,
          name: 'Менеджер',
        },
      ],
    },
    {
      title: 'Система бонусов. Программы лояльности',
      titlePosition: 'left',
      titleClass: ['h-8', 'items-center', 'flex'],
      parentClass: ['flex', 'flex-col', 'gap-4'],
      name: 'bonus_select',
      format: 'text',
      value: 1,
      type: 'select',
      cssClass: ['w-500'],
      options: [
        {
          id: 1,
          name: 'По умолчанию',
        },
        {
          id: 2,
          name: 'Наблюдатель',
        },
        {
          id: 3,
          name: 'Менеджер',
        },
      ],
    },
    {
      title: 'Реклама, баннеры',
      titlePosition: 'left',
      titleClass: ['h-8', 'items-center', 'flex'],
      parentClass: ['flex', 'flex-col', 'gap-4'],
      name: 'banner_select',
      format: 'text',
      value: 1,
      type: 'select',
      cssClass: ['w-500'],
      options: [
        {
          id: 1,
          name: 'По умолчанию',
        },
        {
          id: 2,
          name: 'Наблюдатель',
        },
        {
          id: 3,
          name: 'Менеджер',
        },
      ],
    },
    {
      title: 'Аспро: Next - интернет-магазин',
      titlePosition: 'left',
      titleClass: ['h-8', 'items-center', 'flex'],
      parentClass: ['flex', 'flex-col', 'gap-4'],
      name: 'name_shop_select',
      format: 'text',
      value: 1,
      type: 'select',
      cssClass: ['w-500'],
      options: [
        {
          id: 1,
          name: 'По умолчанию',
        },
        {
          id: 2,
          name: 'Наблюдатель',
        },
        {
          id: 3,
          name: 'Менеджер',
        },
      ],
    },
    {
      title: 'Современный интернет-магазин',
      titlePosition: 'left',
      titleClass: ['h-8', 'items-center', 'flex'],
      parentClass: ['flex', 'flex-col', 'gap-4'],
      name: 'internet_shop_select',
      format: 'text',
      value: 1,
      type: 'select',
      cssClass: ['w-500'],
      options: [
        {
          id: 1,
          name: 'По умолчанию',
        },
        {
          id: 2,
          name: 'Наблюдатель',
        },
        {
          id: 3,
          name: 'Менеджер',
        },
      ],
    },
    {
      title: 'Сайт сообщества',
      titlePosition: 'left',
      titleClass: ['h-8', 'items-center', 'flex'],
      parentClass: ['flex', 'flex-col', 'gap-4'],
      name: 'site_community_select',
      format: 'text',
      value: 1,
      type: 'select',
      cssClass: ['w-500'],
      options: [
        {
          id: 1,
          name: 'По умолчанию',
        },
        {
          id: 2,
          name: 'Наблюдатель',
        },
        {
          id: 3,
          name: 'Менеджер',
        },
      ],
    },
    {
      title: 'Корпоративный сайт услуг',
      titlePosition: 'left',
      titleClass: ['h-8', 'items-center', 'flex'],
      parentClass: ['flex', 'flex-col', 'gap-4'],
      name: 'coorp_site_select',
      format: 'text',
      value: 1,
      type: 'select',
      cssClass: ['w-500'],
      options: [
        {
          id: 1,
          name: 'По умолчанию',
        },
        {
          id: 2,
          name: 'Наблюдатель',
        },
        {
          id: 3,
          name: 'Менеджер',
        },
      ],
    },
    {
      title: 'Информационный портал',
      titlePosition: 'left',
      titleClass: ['h-8', 'items-center', 'flex'],
      parentClass: ['flex', 'flex-col', 'gap-4'],
      name: 'info_portal_select',
      format: 'text',
      value: 1,
      type: 'select',
      cssClass: ['w-500'],
      options: [
        {
          id: 1,
          name: 'По умолчанию',
        },
        {
          id: 2,
          name: 'Наблюдатель',
        },
        {
          id: 3,
          name: 'Менеджер',
        },
      ],
    },
    {
      title: 'Персональный сайт',
      titlePosition: 'left',
      titleClass: ['h-8', 'items-center', 'flex'],
      parentClass: ['flex', 'flex-col', 'gap-4'],
      name: 'personal_site_select',
      format: 'text',
      value: 1,
      type: 'select',
      cssClass: ['w-500'],
      options: [
        {
          id: 1,
          name: 'По умолчанию',
        },
        {
          id: 2,
          name: 'Наблюдатель',
        },
        {
          id: 3,
          name: 'Менеджер',
        },
      ],
    },
    {
      title: 'Бизнес-процессы',
      titlePosition: 'left',
      titleClass: ['h-8', 'items-center', 'flex'],
      parentClass: ['flex', 'flex-col', 'gap-4'],
      name: 'buisness_process_select',
      format: 'text',
      value: 1,
      type: 'select',
      cssClass: ['w-500'],
      options: [
        {
          id: 1,
          name: 'По умолчанию',
        },
        {
          id: 2,
          name: 'Наблюдатель',
        },
        {
          id: 3,
          name: 'Менеджер',
        },
      ],
    },
    {
      title: 'Дизайнер бизнес-процессов',
      titlePosition: 'left',
      titleClass: ['h-8', 'items-center', 'flex'],
      parentClass: ['flex', 'flex-col', 'gap-4'],
      name: 'designer_buisness_process_select',
      format: 'text',
      value: 1,
      type: 'select',
      cssClass: ['w-500'],
      options: [
        {
          id: 1,
          name: 'По умолчанию',
        },
        {
          id: 2,
          name: 'Наблюдатель',
        },
        {
          id: 3,
          name: 'Менеджер',
        },
      ],
    },
    {
      title: 'Блоги',
      titlePosition: 'left',
      titleClass: ['h-8', 'items-center', 'flex'],
      parentClass: ['flex', 'flex-col', 'gap-4'],
      name: 'blogs_select',
      format: 'text',
      value: 1,
      type: 'select',
      cssClass: ['w-500'],
      options: [
        {
          id: 1,
          name: 'По умолчанию',
        },
        {
          id: 2,
          name: 'Наблюдатель',
        },
        {
          id: 3,
          name: 'Менеджер',
        },
      ],
    },
    {
      title: 'Календарь событий',
      titlePosition: 'left',
      titleClass: ['h-8', 'items-center', 'flex'],
      parentClass: ['flex', 'flex-col', 'gap-4'],
      name: 'calendar_select',
      format: 'text',
      value: 1,
      type: 'select',
      cssClass: ['w-500'],
      options: [
        {
          id: 1,
          name: 'По умолчанию',
        },
        {
          id: 2,
          name: 'Наблюдатель',
        },
        {
          id: 3,
          name: 'Менеджер',
        },
      ],
    },
    {
      title: 'Торговый каталог',
      titlePosition: 'left',
      titleClass: ['h-8', 'items-center', 'flex'],
      parentClass: ['flex', 'flex-col', 'gap-4'],
      name: 'shop_catalog_select',
      format: 'text',
      value: 1,
      type: 'select',
      cssClass: ['w-500'],
      options: [
        {
          id: 1,
          name: 'По умолчанию',
        },
        {
          id: 2,
          name: 'Наблюдатель',
        },
        {
          id: 3,
          name: 'Менеджер',
        },
      ],
    },
    {
      title: 'Облачные хранилища',
      titlePosition: 'left',
      titleClass: ['h-8', 'items-center', 'flex'],
      parentClass: ['flex', 'flex-col', 'gap-4'],
      name: 'cloud_storage_select',
      format: 'text',
      value: 1,
      type: 'select',
      cssClass: ['w-500'],
      options: [
        {
          id: 1,
          name: 'По умолчанию',
        },
        {
          id: 2,
          name: 'Наблюдатель',
        },
        {
          id: 3,
          name: 'Менеджер',
        },
      ],
    },
    {
      title: 'Веб-кластер',
      titlePosition: 'left',
      titleClass: ['h-8', 'items-center', 'flex'],
      parentClass: ['flex', 'flex-col', 'gap-4'],
      name: 'web_klaster_select',
      format: 'text',
      value: 1,
      type: 'select',
      cssClass: ['w-500'],
      options: [
        {
          id: 1,
          name: 'По умолчанию',
        },
        {
          id: 2,
          name: 'Наблюдатель',
        },
        {
          id: 3,
          name: 'Менеджер',
        },
      ],
    },
    {
      name: 'buttons_container_block',
      type: 'div',
      cssClass: ['flex', 'gap-2.5', 'pb-6', 'mb-10'],
      parentClass: ['w-500', 'flex', 'justify-end'],
      fields: ['cancel_button', 'save_button'],
    },
    {
      type: 'button',
      value: 'Сохранить',
      name: 'save_button',
      size: 'large',
      buttonType: 'primary',
      disabled: false,
      handlers: [
        {
          name: 'pushData',
          params: {
            name: 'groups_users',
          },
        },
      ],
    },
    {
      type: 'button',
      value: 'Отмена',
      name: 'cancel_button',
      size: 'large',
      buttonType: 'default',
      disabled: false,
    },
  ],
}