export default {
  page: 'user_roles',
  useTitle: {
    title: 'Настройка ролей',
    breadcrumbs: [
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
  groups: [
    {
      name: 'user_roles',
      fields: ['body_block'],
    },
  ],
  fields: [
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
      fields: ['access_name', 'check_boxes_block', 'buttons_block_footer'],
    },
    {
      title: 'Право доступа',
      name: 'access_name',
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
        'roleId_admin',
        'roleId_manager',
        'roleId_redactor',
        'roleId_seo_spicialyst',
      ],
    },
    {
      title: 'Админ',
      titleClass: ['font-medium'],
      name: 'roleId_admin',
      value: false,
      type: 'boolean',
      viewType: 'checkbox',
    },
    {
      title: 'Менеджер',
      titleClass: ['font-medium'],
      name: 'roleId_manager',
      value: false,
      type: 'boolean',
      viewType: 'checkbox',
    },
    {
      title: 'Контент-редактор',
      titleClass: ['font-medium'],
      name: 'roleId_redactor',
      value: false,
      type: 'boolean',
      viewType: 'checkbox',
    },
    {
      title: 'SEO-специалист',
      titleClass: ['font-medium'],
      name: 'roleId_seo_spicialyst',
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
              access_name: 'access_name',
              roleId_admin: 'roleId_admin',
              roleId_manager: 'roleId_manager',
              roleId_redactor: 'roleId_redactor',
              roleId_seo_spicialyst: 'roleId_seo_spicialyst',
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
          access_name: 'Работа с каталогом',
          accessID: 12314,
          roleId_manager: false,
          roleId_redactor: true,
          roleId_seo_spicialyst: false,
        },
        {
          access_name: 'Сео параметры',
          accessID: 423424,
          roleId_admin: true,
          roleId_manager: false,
          roleId_redactor: true,
          roleId_seo_spicialyst: true,
        },
        {
          access_name: 'Работа с каталогом',
          accessID: 4141341,
          roleId_admin: true,
          roleId_manager: false,
          roleId_redactor: true,
          roleId_seo_spicialyst: false,
        },
        {
          access_name: 'Сео параметры',
          accessID: 25235235,
          roleId_admin: true,
          roleId_manager: false,
          roleId_redactor: true,
          roleId_seo_spicialyst: true,
        },
      ],
      columns: [
        {
          title: 'Право доступа',
          dataIndex: 'access_name',
          key: 'access_name',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 150,
        },
        {
          title: 'Админ',
          dataIndex: 'roleId_admin',
          key: 'roleId_admin',
          widget: {
            name: 'checkbox',
          },
          width: 150,
          changeHandlers: [
            {
              name: 'sendOneFieldFromTable',
              params: {
                endpoint: '/changeUserRoleCell',
                rowId: 'accessID',
              },
            },
          ],
        },
        {
          title: 'Менеджер',
          dataIndex: 'roleId_manager',
          key: 'roleId_manager',
          widget: {
            name: 'checkbox',
          },
          width: 150,
          changeHandlers: [
            {
              name: 'sendOneFieldFromTable',
              params: {
                endpoint: '/changeUserRoleRow',
                fullRow: true,
              },
            },
          ],
        },
        {
          title: 'Контент-редактор',
          dataIndex: 'roleId_redactor',
          key: 'roleId_redactor',
          widget: {
            name: 'checkbox',
          },
          width: 150,
          changeHandlers: [
            {
              name: 'sendOneFieldFromTable',
              params: {
                endpoint: '/changeUserRoleRow',
                queryParams: true,
              },
            },
          ],
        },
        {
          title: 'SEO-специалист',
          dataIndex: 'roleId_seo_spicialyst',
          key: 'roleId_seo_spicialyst',
          widget: {
            name: 'checkbox',
          },
          width: 150,
          changeHandlers: [
            {
              name: 'sendOneFieldFromTable',
              params: {
                endpoint: '/changeUserRoleRow',
              },
            },
          ],
        },
      ],
    },
  ],
}
