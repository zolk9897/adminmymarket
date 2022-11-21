export default {
  title: 'Настройка ролей',
  page: 'user_roles',
  groups: [
    {
      name: 'user_roles',
      fields: ['title_block', 'body_block'],
    },
  ],
  fields: [
    {
      name: 'title_block',
      type: 'div',
      cssClass: ['bg-white', 'p-6', 'mb-6', 'flex-col'],
      fields: ['breadcrumbs', 'header_block'],
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
          title: 'Настройки',
        },
        {
          title: 'Роли',
          path: '/main/user_roles',
        },
      ],
    },
    {
      name: 'header_block',
      type: 'div',
      cssClass: ['flex', 'items-end', 'justify-between'],
      fields: ['title', 'user_role_add_modal_btn'],
    },
    {
      text: 'Настройка ролей',
      name: 'title',
      type: 'label',
      parentClass: ['mt-4'],
      cssClass: ['font-medium', 'text-xl'],
    },
    {
      name: 'body_block',
      type: 'div',
      cssClass: ['bg-white'],
      fields: ['wrapper_block'],
    },
    {
      name: 'wrapper_block',
      type: 'div',
      cssClass: ['w-full', 'p-6'],
      fields: ['user_roles_table', 'user_roles_add_modal'],
    },
    {
      type: 'button',
      value: 'Добавить роль',
      name: 'user_role_add_modal_btn',
      buttonType: 'primary',
      icon: {
        name: 'fa-solid fa-plus',
      },
      handlers: [
        {
          name: 'editField',
          params: {
            pageName: 'user_roles',
            blockName: 'user_roles_add_modal',
            fieldName: 'style',
            value: { display: 'flex' },
          },
        },
      ],
    },
    {
      name: 'user_roles_add_modal',
      type: 'div',
      handlers: [
        {
          name: 'editField',
          params: {
            pageName: 'user_roles',
            blockName: 'user_roles_add_modal',
            fieldName: 'style',
            value: { display: 'none' },
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'user_roles',
            blockName: 'user_roles_add_modal',
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
      title: 'Добавление роли',
      titleClass: ['font-medium', 'mb-4'],
      name: 'block_modal_added_content',
      type: 'div',
      containerClass: ['bg-white', 'p-6', 'gap-4', 'w-480'],
      fields: ['role_access', 'check_boxes_block', 'buttons_block_footer'],
    },
    {
      title: 'Право доступа',
      name: 'role_access',
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
      name: 'check_boxes_block',
      type: 'div',
      cssClass: ['w-full', 'flex', 'gap-4', 'pb-6', 'justify-between'],
      fields: [
        'check_admin',
        'check_manager',
        'check_redactor',
        'check_seo_spicialyst',
      ],
    },
    {
      title: 'Админ',
      titleClass: ['font-medium'],
      name: 'check_admin',
      value: false,
      type: 'boolean',
      viewType: 'checkbox',
    },
    {
      title: 'Менеджер',
      titleClass: ['font-medium'],
      name: 'check_manager',
      value: false,
      type: 'boolean',
      viewType: 'checkbox',
    },
    {
      title: 'Контент-редактор',
      titleClass: ['font-medium'],
      name: 'check_redactor',
      value: false,
      type: 'boolean',
      viewType: 'checkbox',
    },
    {
      title: 'SEO-специалист',
      titleClass: ['font-medium'],
      name: 'check_seo_spicialyst',
      value: false,
      type: 'boolean',
      viewType: 'checkbox',
    },
    {
      name: 'buttons_block_footer',
      type: 'div',
      cssClass: ['flex', 'justify-end', 'gap-2'],
      fields: ['user_roles__cancel_button', 'user_roles__add_button'],
    },
    {
      type: 'button',
      value: 'Отменить',
      name: 'user_roles__cancel_button',
      handlers: [
        {
          name: 'editField',
          params: {
            pageName: 'user_roles',
            blockName: 'user_roles_add_modal',
            fieldName: 'style',
            value: { display: 'none' },
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'user_roles',
            blockName: 'user_roles_add_modal',
          },
        },
      ],
    },
    {
      type: 'button',
      value: 'Добавить',
      name: 'user_roles__add_button',
      buttonType: 'primary',
      handlers: [
        {
          name: 'validateHandler',
          params: {
            pageName: 'user_roles',
            blockName: 'user_roles_add_modal',
          },
        },
        {
          name: 'addDataToTableField',
          params: {
            pageName: 'user_roles',
            tableName: 'user_roles_table',
            data: {
              role_access: 'role_access',
              check_admin: 'check_admin',
              check_manager: 'check_manager',
              check_redactor: 'check_redactor',
              check_seo_spicialyst: 'check_seo_spicialyst',
            },
          },
        },
        {
          name: 'editField',
          params: {
            pageName: 'user_roles',
            blockName: 'user_roles_add_modal',
            fieldName: 'style',
            value: { display: 'none' },
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'user_roles',
            blockName: 'user_roles_add_modal',
          },
        },
      ],
    },
    {
      name: 'user_roles_table',
      type: 'table',
      cssClass: ['bg-white'],
      style: {
        borderBottom: '2px solid #f5f5f5',
      },
      config: {
        pagination: true,
        size: 'large',
        align: 'center',
        bordered: true,
      },
      data: [
        {
          role_access: 'Работа с каталогом',
          check_admin: true,
          check_manager: false,
          check_redactor: true,
          check_seo_spicialyst: false,
        },
        {
          role_access: 'Сео параметры',
          check_admin: true,
          check_manager: false,
          check_redactor: true,
          check_seo_spicialyst: true,
        },
        {
          role_access: 'Редактирование карточек',
          check_admin: true,
          check_manager: false,
          check_redactor: true,
          check_seo_spicialyst: true,
        },
        {
          role_access: 'Работа с каталогом',
          check_admin: true,
          check_manager: false,
          check_redactor: true,
          check_seo_spicialyst: true,
        },
        {
          role_access: 'Сео параметры',
          check_admin: true,
          check_manager: false,
          check_redactor: true,
          check_seo_spicialyst: true,
        },
        {
          role_access: 'Работа с каталогом',
        },
        {
          role_access: 'Сео параметры',
        },
        {
          role_access: 'Сео параметры',
          check_admin: true,
          check_manager: false,
          check_redactor: true,
          check_seo_spicialyst: true,
        },
        {
          role_access: 'Работа с каталогом',
        },
        {
          role_access: 'Сео параметры',
        },
        {
          role_access: 'Сео параметры',
          check_admin: true,
          check_manager: false,
          check_redactor: true,
          check_seo_spicialyst: true,
        },
        {
          role_access: 'Работа с каталогом',
        },
        {
          role_access: 'Сео параметры',
        },
        {
          role_access: 'Сео параметры',
          check_admin: true,
          check_manager: false,
          check_redactor: true,
          check_seo_spicialyst: true,
        },
        {
          role_access: 'Работа с каталогом',
        },
        {
          role_access: 'Сео параметры',
        },
        {
          role_access: 'Сео параметры',
          check_admin: true,
          check_manager: false,
          check_redactor: true,
          check_seo_spicialyst: true,
        },
        {
          role_access: 'Работа с каталогом',
        },
        {
          role_access: 'Сео параметры',
        },
        {
          role_access: 'Сео параметры',
          check_admin: true,
          check_manager: false,
          check_redactor: true,
          check_seo_spicialyst: true,
        },
        {
          role_access: 'Работа с каталогом',
        },
        {
          role_access: 'Сео параметры',
        },
        {
          role_access: 'Сео параметры',
          check_admin: true,
          check_manager: false,
          check_redactor: true,
          check_seo_spicialyst: true,
        },
        {
          role_access: 'Работа с каталогом',
        },
        {
          role_access: 'Сео параметры',
        },
        {
          role_access: 'Сео параметры',
          check_admin: true,
          check_manager: false,
          check_redactor: true,
          check_seo_spicialyst: true,
        },
        {
          role_access: 'Работа с каталогом',
        },
        {
          role_access: 'Сео параметры',
        },
        {
          role_access: 'Сео параметры',
          check_admin: true,
          check_manager: false,
          check_redactor: true,
          check_seo_spicialyst: true,
        },
        {
          role_access: 'Работа с каталогом',
        },
        {
          role_access: 'Сео параметры',
        },
      ],
      columns: [
        {
          title: 'Право доступа',
          dataIndex: 'role_access',
          key: 'role_access',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 150,
        },
        {
          title: 'Админ',
          dataIndex: 'check_admin',
          key: 'check_admin',
          widget: {
            name: 'checkbox',
          },
          width: 150,
        },
        {
          title: 'Менеджер',
          dataIndex: 'check_manager',
          key: 'check_manager',
          widget: {
            name: 'checkbox',
          },
          width: 150,
        },
        {
          title: 'Контент-редактор',
          dataIndex: 'check_redactor',
          key: 'check_redactor',
          widget: {
            name: 'checkbox',
          },
          width: 150,
        },
        {
          title: 'SEO-специалист',
          dataIndex: 'check_seo_spicialyst',
          key: 'check_seo_spicialyst',
          widget: {
            name: 'checkbox',
          },
          width: 150,
        },
      ],
    },
  ],
}
