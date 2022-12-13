export default {
  page: 'edit_selection',
  title: 'Редактирование подборки',
  useId: {
    endpoint: '/banners',
  },
  useTitle: {
    title: 'Редактирование подборки',
    breadcrumbs: [
      {
        title: 'Главная',
        path: '/',
      },
      {
        title: 'Контент',
      },
      {
        title: 'Подборки',
        path: '/main/banner_list',
      },
    ],
    operations: [
      {
        text: 'Копировать',
        icon: 'fa-copy',
        handlers: [],
      },
      {
        text: 'Удалить',
        type: 'danger',
        ghost: true,
        icon: 'fa-trash',
        handlers: [
          {
            name: 'deleteFromId',
            params: {
              endpoint: 'deleteBanner',
              redirect: '/main/selections_groups',
            },
          },
        ],
      },
    ],
  },
  groups: [
    {
      name: 'edit_baner_tab',
      fields: ['edit_banner__title_block', 'edit_banner__container_block'],
    },
  ],
  fields: [
    {
      name: 'edit_banner__title_block',
      type: 'div',
      style: {},
      cssClass: ['bg-white', 'p-6', 'border-b', 'border-borderColor'],
      fields: ['title_1'],
    },
    {
      text: 'Подборка',
      name: 'title_1',
      type: 'label',
      cssClass: ['font-medium', 'text-base'],
    },
    {
      name: 'edit_banner__container_block',
      type: 'div',
      style: {},
      cssClass: ['bg-white', 'p-6'],
      fields: ['edit_banner__body_block'],
    },
    {
      name: 'edit_banner__body_block',
      type: 'div',
      cssClass: ['flex', 'gap-6', 'flex-col', 'w-[800px]', 'ml-[8vw]'],
      fields: [
        'id_text',
        'button1',
        'create_text',
        'updated_text',
        'active_switch',
        'title_name_input',
        'sort_input',
        'selections_tabs',
        'buttons_container_block',
      ],
    },
    {
      title: 'ID',
      titlePosition: 'left',
      titleClass: ['flex', 'items-center'],
      text: '0',
      externalValue: true,
      name: 'id_text',
      type: 'label',
      parentClass: ['w-500', 'font-medium'],
    },
    {
      title: 'Создан',
      titlePosition: 'left',
      titleClass: ['flex', 'items-center'],
      text: '23.05.2022   17:11:11  Алексей',
      name: 'create_text',
      type: 'label',
      parentClass: ['w-500', 'font-medium'],
    },
    {
      title: 'Изменён',
      titlePosition: 'left',
      titleClass: ['flex', 'items-center'],
      text: '24.05.2022   16:11:11  Алексей',
      name: 'updated_text',
      type: 'label',
      parentClass: ['w-500', 'font-medium'],
    },
    {
      title: 'Активный',
      titlePosition: 'left',
      titleClass: ['flex', 'items-center'],
      name: 'active_switch',
      value: true,
      type: 'boolean',
      viewType: 'switch',
      parentClass: ['w-500'],
    },
    {
      title: 'Название',
      titlePosition: 'left',
      titleClass: ['h-10', 'flex', 'items-center'],
      description: '',
      required: false,
      name: 'title_name_input',
      format: 'text',
      value: 'Sony Playstation 5',
      type: 'input',
      parentClass: ['w-500'],
    },
    {
      title: 'Сортировка',
      titlePosition: 'left',
      titleClass: ['h-10', 'flex', 'items-center'],
      name: 'sort_input',
      format: 'text',
      value: '11111',
      type: 'input',
      parentClass: ['w-500'],
    },
    {
      title: 'Товары подборки',
      titlePosition: 'left',
      name: 'selections_tabs',
      parentClass: ['w-500'],
      type: 'tabs',
      view: 'radio', // tabs | radio
      tabType: 'default', // if tabs = line | card | editable-card  if radio = default | button
      size: 'large',
      defaultActive: 0,
      titles: ['Заголовок', 'Основной блок'],
      //Оставил название fields что бы не менять структуру JSON
      fields: ['banner_select1', 'banner_select2'],
    },
    {
      name: 'banner_select1',
      type: 'select',
      description: 'Выберите..',
      options: [
        {
          name: 'Playstaions',
          id: 1,
        },
        {
          name: 'Xbox',
          id: 2,
        },
      ],
      mode: 'tags',
      size: 'large',
      value: [],
      cssClass: ['w-full'],
    },
    {
      name: 'banner_select2',
      type: 'select',
      description: 'Выберите..',
      options: [
        {
          name: 'Playstaions',
          id: 1,
        },
        {
          name: 'Xbox',
          id: 2,
        },
      ],
      mode: 'tags',
      size: 'large',
      value: [],
      cssClass: ['w-full'],
    },

    {
      name: 'buttons_container_block',
      type: 'div',
      cssClass: ['flex', 'gap-2.5', 'ml-[204px]'],
      parentClass: ['ml-25'],
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
            pageName: 'about_company',
            blockName: 'element_tab__container_block',
            endpoint: 'https://ekat.sergeivl.ru/api/tests/request',
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'about_company',
            blockName: 'element_tab__container_block',
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
