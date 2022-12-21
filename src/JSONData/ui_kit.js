export default {
  title: 'Доставка и оплата',
  page: 'ui_kit',
  groups: [
    {
      name: 'ui_kit',
      tabName: 'Доставка и оплата',
      fields: ['title_block', 'body_block'],
    },
  ],
  fields: [
    {
      name: 'title_block',
      type: 'div',
      cssClass: [
        'bg-white',
        'p-6',
        'border-b-2',
        'border-solid',
        'border-neutral-100',
        'flex',
        'justify-between',
      ],
      fields: ['title', 'info_switch'],
    },
    {
      text: 'Ui-Kit',
      name: 'title',
      type: 'label',
      cssClass: ['font-medium', 'text-xl'],
    },
    {
      title: 'Скрыть/Показать описание',
      titlePosition: 'left',
      titleClass: ['font-medium'],
      name: 'info_switch',
      value: true,
      type: 'boolean',
      viewType: 'switch',
      handlers: [],
    },
    {
      name: 'body_block',
      type: 'div',
      cssClass: [
        'bg-white',
        'p-6',
        'border-b-2',
        'border-solid',
        'border-neutral-100',
      ],
      fields: [
        'buttons_block',
        'inputs_block',
        'handlers_block',
        'tables_block',
        'select_block',
        'textarea_block',
        'boolean_block',
        'radio_block',
        'link_block',
        'label_block',
      ],
    },
    // BUTTONS Block
    {
      name: 'buttons_block',
      type: 'div',
      fields: ['buttons_title_block', 'buttons_body'],
    },
    {
      name: 'buttons_title_block',
      type: 'div',
      fields: ['buttons_title'],
    },
    {
      text: 'Buttons',
      name: 'buttons_title',
      type: 'label',
      cssClass: ['font-medium', 'text-xl'],
    },
    {
      name: 'buttons_body',
      type: 'div',
      cssClass: ['flex', 'flex-wrap', 'my-[20px]'],
      fields: ['button_col_1', 'button_col_2', 'button_col_3'],
    },
    {
      name: 'button_col_1',
      type: 'div',
      fields: [
        'button_dashed_block',
        'button_text_block',
        'button_styleClass_block',
      ],
      parentClass: ['w-2/6', 'pr-2'],
      cssClass: ['flex', 'gap-2', 'flex-col'],
    },
    {
      name: 'button_dashed_block',
      type: 'code',
      info: 'buttonType: "dashed"',
      infoTitle: 'buttonType',
      cssClass: ['flex', 'items-center', 'gap-2'],
      fields: [
        'button_large_dashed',
        'button_default_dashed',
        'button_small_dashed',
      ],
    },
    {
      type: 'button',
      value: 'large dashed',
      name: 'button_large_dashed',
      size: 'large',
      buttonType: 'dashed',
    },
    {
      type: 'button',
      value: 'default dashed',
      name: 'button_default_dashed',
      size: 'default',
      buttonType: 'dashed',
    },
    {
      type: 'button',
      value: 'small dashed',
      name: 'button_small_dashed',
      size: 'small',
      buttonType: 'dashed',
    },
    {
      name: 'button_text_block',
      type: 'code',
      info: 'buttonType: "text"',
      infoTitle: 'buttonType',
      cssClass: ['flex', 'items-center', 'gap-2'],
      fields: ['button_large_text', 'button_default_text', 'button_small_text'],
    },
    {
      type: 'button',
      value: 'large text',
      name: 'button_large_text',
      size: 'large',
      buttonType: 'text',
    },
    {
      type: 'button',
      value: 'default text',
      name: 'button_default_text',
      size: 'default',
      buttonType: 'text',
    },
    {
      type: 'button',
      value: 'small text',
      name: 'button_small_text',
      size: 'small',
      buttonType: 'text',
    },
    {
      name: 'button_styleClass_block',
      type: 'code',
      info: 'style параметр позволяет указывать стили, а праметр cssClass поддерживает классы в том числе и tailwind. Всегда лучше использовать tailwind классы. ',
      infoTitle: 'style и cssClass',
      cssClass: ['flex', 'items-center', 'gap-2'],
      fields: ['button_styleClass'],
    },
    {
      type: 'button',
      value: 'large text',
      name: 'button_styleClass',
      size: 'large',
      style: {
        fontSize: '1.25rem',
        lineHeight: '1.75rem',
      },
      cssClass: ['w-[250px]'],
      buttonType: 'primary',
    },
    {
      name: 'button_col_2',
      type: 'div',
      fields: [
        'button_link_block',
        'button_ghost_block',
        'button_disabled_block',
      ],
      parentClass: ['w-2/6', 'pr-2'],
      cssClass: ['flex', 'gap-2', 'flex-col'],
    },
    {
      name: 'button_link_block',
      type: 'code',
      info: 'buttonType: "link"',
      infoTitle: 'buttonType',
      cssClass: ['flex', 'items-center', 'gap-2'],
      fields: ['button_large_link', 'button_default_link', 'button_small_link'],
    },
    {
      type: 'button',
      value: 'large link',
      name: 'button_large_link',
      size: 'large',
      buttonType: 'link',
    },
    {
      type: 'button',
      value: 'default link',
      name: 'button_default_link',
      size: 'default',
      buttonType: 'link',
    },
    {
      type: 'button',
      value: 'small link',
      name: 'button_small_link',
      size: 'small',
      buttonType: 'link',
    },
    {
      name: 'button_ghost_block',
      type: 'code',
      info: 'buttonType: "ghost"',
      infoTitle: 'buttonType',
      cssClass: ['flex', 'items-center', 'gap-2'],
      fields: [
        'button_large_ghost',
        'button_default_ghost',
        'button_small_ghost',
      ],
    },
    {
      type: 'button',
      value: 'large ghost',
      name: 'button_large_ghost',
      size: 'large',
      buttonType: 'ghost',
    },
    {
      type: 'button',
      value: 'default ghost',
      name: 'button_default_ghost',
      size: 'default',
      buttonType: 'ghost',
    },
    {
      type: 'button',
      value: 'small ghost',
      name: 'button_small_ghost',
      size: 'small',
      buttonType: 'ghost',
    },
    {
      name: 'button_disabled_block',
      type: 'code',
      info: 'disabled: true/false',
      infoTitle: 'disabled',
      cssClass: ['grid', 'grid-cols-3', 'gap-2', 'row-2'],
      fields: [
        'button_disabled_dashed',
        'button_disabled_text',
        'button_disabled_link',
        'button_disabled_ghost',
        'button_disabled_primary',
        'button_disabled_danger',
      ],
    },
    {
      type: 'button',
      value: 'disabled dashed',
      name: 'button_disabled_dashed',
      buttonType: 'dashed',
      disabled: true,
    },
    {
      type: 'button',
      value: 'disabled text',
      name: 'button_disabled_text',
      buttonType: 'text',
      disabled: true,
    },
    {
      type: 'button',
      value: 'disabled link',
      name: 'button_disabled_link',
      buttonType: 'link',
      disabled: true,
    },
    {
      type: 'button',
      value: 'disabled ghost',
      name: 'button_disabled_ghost',
      buttonType: 'ghost',
      disabled: true,
    },
    {
      type: 'button',
      value: 'disabled primary',
      name: 'button_disabled_primary',
      buttonType: 'primary',
      cssClass: ['w-full'],
      disabled: true,
    },
    {
      type: 'button',
      value: 'disabled danger',
      name: 'button_disabled_danger',
      buttonType: 'danger',
      disabled: true,
    },
    {
      name: 'button_col_3',
      type: 'div',
      fields: [
        'button_primary_block',
        'button_danger_block',
        'button_icon_block',
      ],
      parentClass: ['w-2/6'],
      cssClass: ['flex', 'gap-2', 'flex-col'],
    },
    {
      name: 'button_primary_block',
      type: 'code',
      cssClass: ['flex', 'items-center', 'gap-2'],
      info: 'buttonType: "primary"',
      infoTitle: 'buttonType ',
      value: null,
      fields: [
        'button_large_primary',
        'button_default_primary',
        'button_small_primary',
      ],
    },
    {
      type: 'button',
      value: 'large primary',
      name: 'button_large_primary',
      buttonType: 'primary',
      size: 'large',
    },
    {
      type: 'button',
      value: 'default primary',
      name: 'button_default_primary',
      buttonType: 'primary',
      size: 'default',
    },
    {
      type: 'button',
      value: 'small primary',
      name: 'button_small_primary',
      buttonType: 'primary',
      size: 'small',
    },
    {
      name: 'button_danger_block',
      type: 'code',
      info: 'buttonType: "danger"',
      infoTitle: 'buttonType',
      cssClass: ['flex', 'items-center', 'gap-2'],
      fields: [
        'button_large_danger',
        'button_default_danger',
        'button_small_danger',
      ],
    },
    {
      type: 'button',
      value: 'large danger',
      name: 'button_large_danger',
      size: 'large',
      buttonType: 'danger',
    },
    {
      type: 'button',
      value: 'default danger',
      name: 'button_default_danger',
      size: 'default',
      buttonType: 'danger',
    },
    {
      type: 'button',
      value: 'small danger',
      name: 'button_small_danger',
      size: 'small',
      buttonType: 'danger',
    },
    {
      name: 'button_icon_block',
      type: 'code',
      info: 'icon.name параметр позволяет добавлять в кнопку иконку из коллекции font awesome',
      infoTitle: 'icon',
      cssClass: ['flex', 'items-center', 'gap-2'],
      fields: ['button_icon'],
    },
    {
      type: 'button',
      value: 'icon button',
      name: 'button_icon',
      icon: { name: 'fa-solid fa-code' },
      buttonType: 'danger',
    },
    // INPUTS Block
    {
      name: 'inputs_block',
      type: 'div',
      fields: ['inputs_title_block', 'inputs_body'],
    },
    {
      name: 'inputs_title_block',
      type: 'div',
      fields: ['inputs_title'],
    },
    {
      text: 'Inputs',
      name: 'inputs_title',
      type: 'label',
      cssClass: ['font-medium', 'text-xl'],
    },
    {
      name: 'inputs_body',
      type: 'div',
      cssClass: ['flex', 'flex-wrap', 'my-[20px]'],
      fields: ['inputs_col_1', 'inputs_col_2', 'inputs_col_3'],
    },
    {
      name: 'inputs_col_1',
      type: 'div',
      fields: ['input_text_block', 'input_vmask_block'],
      parentClass: ['w-2/6', 'pr-2'],
      cssClass: ['flex', 'gap-2', 'flex-col'],
    },
    {
      name: 'input_text_block',
      type: 'code',
      info: 'format: "text"',
      infoTitle: 'format',

      cssClass: ['flex', 'flex-col', 'gap-2'],
      fields: ['input_large_text', 'input_default_text', 'input_small_text'],
    },
    {
      type: 'input',
      description: 'large text',
      name: 'input_large_text',
      size: 'large',
      format: 'text',
    },
    {
      type: 'input',
      description: 'default text',
      name: 'input_default_text',
      size: 'default',
      format: 'text',
    },
    {
      type: 'input',
      description: 'small text',
      name: 'input_small_text',
      size: 'small',
      format: 'text',
    },
    {
      name: 'input_vmask_block',
      type: 'code',
      info: 'mask: "+7 (###) ###-##-##"',
      infoTitle: 'vmask',

      cssClass: ['flex', 'flex-col', 'gap-2'],
      fields: ['input_vmask'],
    },
    {
      type: 'input',
      description: ' vmask',
      name: 'input_vmask',
      size: 'large',
      format: 'text',
      mask: '+7 (###) ###-##-##',
    },
    {
      name: 'inputs_col_2',
      type: 'div',
      fields: ['input_password_block', 'input_subtitle_block'],
      parentClass: ['w-2/6', 'pr-2'],
      cssClass: ['flex', 'gap-2', 'flex-col'],
    },
    {
      name: 'input_password_block',
      type: 'code',
      info: 'format: "password"',
      infoTitle: 'format',

      cssClass: ['flex', 'flex-col', 'gap-2'],
      fields: [
        'input_large_password',
        'input_default_password',
        'input_small_password',
      ],
    },
    {
      type: 'input',
      description: 'large password',
      name: 'input_large_password',
      size: 'large',
      format: 'password',
    },
    {
      type: 'input',
      description: 'default password',
      name: 'input_default_password',
      size: 'default',
      format: 'password',
    },
    {
      type: 'input',
      description: 'small password',
      name: 'input_small_password',
      size: 'small',
      format: 'password',
    },
    {
      name: 'input_subtitle_block',
      type: 'code',
      info: 'subtitle: text указывает текст подзаголовка, style позволяет указывать стили, а праметр cssClass поддерживает классы в том числе и tailwind. Всегда лучше использовать tailwind классы. ',
      infoTitle: 'subtitle',

      cssClass: ['flex', 'flex-col', 'gap-2'],
      fields: ['input_subtitle'],
    },
    {
      type: 'input',
      description: 'large subtitle',
      name: 'input_subtitle',
      size: 'large',
      format: 'text',
      subtitle: {
        text: 'subtitle',
        style: { fontSize: '20px' },
        cssClass: 'text-red-600',
      },
    },
    {
      name: 'inputs_col_3',
      type: 'div',
      fields: ['input_number_block', 'input_style_block'],
      parentClass: ['w-2/6'],
      cssClass: ['flex', 'gap-2', 'flex-col'],
    },
    {
      name: 'input_number_block',
      type: 'code',
      info: 'format: "number"',
      infoTitle: 'format',

      cssClass: ['flex', 'flex-col', 'gap-2'],
      fields: [
        'input_large_number',
        'input_default_number',
        'input_small_number',
      ],
    },
    {
      type: 'input',
      description: 'large number',
      name: 'input_large_number',
      size: 'large',
      format: 'number',
    },
    {
      type: 'input',
      description: 'default number',
      name: 'input_default_number',
      size: 'default',
      format: 'number',
    },
    {
      type: 'input',
      description: 'small number',
      name: 'input_small_number',
      size: 'small',
      format: 'number',
    },
    {
      name: 'input_style_block',
      type: 'code',
      info: 'style параметр позволяет указывать стили, а праметр cssClass поддерживает классы в том числе и tailwind. Всегда лучше использовать tailwind классы. ',
      infoTitle: 'style',

      cssClass: ['flex', 'flex-col', 'gap-2'],
      fields: ['input_style'],
    },
    {
      type: 'input',
      description: 'style',
      name: 'input_style',
      format: 'text',
      style: { width: '250px' },
      cssClass: ['font-black'],
    },
    // HANDLERS Block
    {
      name: 'handlers_block',
      type: 'div',
      fields: ['handlers_title_block', 'handlers_body'],
    },
    {
      name: 'handlers_title_block',
      type: 'div',
      fields: ['handlers_title'],
    },
    {
      text: 'Handlers',
      name: 'handlers_title',
      type: 'label',
      cssClass: ['font-medium', 'text-xl'],
    },
    {
      name: 'handlers_body',
      type: 'div',
      cssClass: ['flex', 'flex-wrap', 'my-[20px]'],
      fields: ['handler_col_1', 'handler_col_2', 'handler_col_3'],
    },
    {
      name: 'handler_col_1',
      type: 'div',
      fields: [
        'handler_push_data_block',
        'handler_edit_field_block',
        'handler_add_data_to_table_field_block',
      ],
      parentClass: ['w-2/6', 'pr-2'],
      cssClass: ['flex', 'gap-2', 'flex-col'],
    },
    {
      name: 'handler_push_data_block',
      type: 'code',
      info: 'При использованнии данного обработчика отправляет форму по ссылке "https://ekat.sergeivl.ru/api/example/ok". Принимает параметры "pageName" и "blockName".',
      infoTitle: 'pushData',

      cssClass: ['flex', 'items-center', 'gap-2'],
      fields: ['push_data_button'],
    },
    {
      type: 'button',
      value: 'pushData',
      name: 'push_data_button',
      buttonType: 'primary',
      handlers: [
        {
          name: 'pushData',
          params: {
            pageName: 'ui_kit',
            blockName: 'input_password_block',
          },
        },
      ],
    },
    {
      name: 'handler_edit_field_block',
      type: 'code',
      info: 'Данный обработчик позволяет менять или добовлять свойства различным объектам. Принимает параметры "pageName", "blockName", "fieldName" и "value" в качестве которого указываются новые параметры',
      infoTitle: 'editField',

      cssClass: ['flex', 'items-center', 'gap-2'],
      fields: [
        'edit_field_button_1',
        'edit_field_button_2',
        'edit_field_block',
      ],
    },
    {
      type: 'button',
      value: 'edit_field',
      name: 'edit_field_button_1',
      buttonType: 'primary',
      handlers: [
        {
          name: 'editField',
          params: {
            pageName: 'ui_kit',
            blockName: 'edit_field_block',
            fieldName: 'style',
            value: { display: 'none' },
          },
        },
      ],
    },
    {
      type: 'button',
      value: 'edit_field',
      name: 'edit_field_button_2',
      buttonType: 'primary',
      handlers: [
        {
          name: 'editField',
          params: {
            pageName: 'ui_kit',
            blockName: 'edit_field_block',
            fieldName: 'style',
            value: { display: 'block' },
          },
        },
      ],
    },
    {
      name: 'edit_field_block',
      type: 'div',
      fields: [],
      style: { height: '50px', width: '100px', backgroundColor: 'red' },
    },
    {
      name: 'handler_col_2',
      type: 'div',
      fields: [
        'validate_handler_block',
        'handler_go_back_block',
        'handler_add_column_to_table_field_block',
      ],
      parentClass: ['w-2/6', 'pr-2'],
      cssClass: ['flex', 'gap-2', 'flex-col'],
    },
    {
      name: 'handler_reset_data_block',
      type: 'code',
      info: 'Данный обработчик позволяет сбрасывать значение полей. Принимает параметры "pageName", "blockName"',
      infoTitle: 'resetBlockData',

      cssClass: ['flex', 'items-center', 'gap-2'],
      fields: ['reset_data_button', 'reset_data_input'],
    },
    {
      type: 'button',
      value: 'reset_data',
      name: 'reset_data_button',
      buttonType: 'primary',
      handlers: [
        {
          name: 'resetBlockData',
          params: {
            pageName: 'ui_kit',
            blockName: 'handler_reset_data_block',
          },
        },
      ],
    },
    {
      type: 'input',
      name: 'reset_data_input',
      format: 'text',
      value: 'text',
    },
    {
      name: 'validate_handler_block',
      type: 'code',
      info: 'Данный обработчик позволяет валидировать определенные поля. Для этого необходимо назначить необходимому полю параметр validate и указать необходмые правила. Подробнее смотреть библиотеку yup. Принимает параметры "pageName", "blockName"',
      infoTitle: 'validateHandler',

      cssClass: ['flex', 'items-center', 'gap-2'],
      fields: ['validate_handler_button', 'validate_handler_input'],
    },
    {
      type: 'button',
      value: 'validate_handler',
      name: 'validate_handler_button',
      buttonType: 'primary',
      handlers: [
        {
          name: 'validateHandler',
          params: {
            pageName: 'ui_kit',
            blockName: 'validate_handler_block',
          },
        },
      ],
    },
    {
      type: 'input',
      name: 'validate_handler_input',
      format: 'text',
      validation: {
        rules: [
          {
            type: 'required',
          },
        ],
      },
    },
    {
      name: 'handler_go_back_block',
      type: 'code',
      info: 'Данный обработчик позволяет перейти на предыдущую страницу',
      infoTitle: 'goBack',

      cssClass: ['flex', 'items-center', 'gap-2'],
      fields: ['go_back_button'],
    },
    {
      type: 'button',
      value: 'go_back',
      name: 'go_back_button',
      buttonType: 'primary',
      handlers: [
        {
          name: 'goBack',
        },
      ],
    },
    {
      name: 'handler_col_3',
      type: 'div',
      fields: ['handler_go_route_block', 'handler_reset_data_block'],
      parentClass: ['w-2/6'],
      cssClass: ['flex', 'gap-2', 'flex-col'],
    },
    {
      name: 'handler_go_route_block',
      type: 'code',
      info: 'Данный обработчик позволяет перейти на страницу с добавлением параметров. Принимает параметры "name" в качестве имени страницы и "query" в качестве параметров к странице',
      infoTitle: 'goRoute',
      cssClass: ['flex', 'items-center', 'gap-2'],
      fields: ['go_route_button'],
    },
    {
      type: 'button',
      value: 'go_route',
      name: 'go_route_button',
      buttonType: 'primary',
      handlers: [
        {
          name: 'goRoute',
          params: {
            name: 'complaints',
            query: { id: '1' },
          },
        },
      ],
    },
    {
      name: 'handler_add_data_to_table_field_block',
      type: 'code',
      info: 'Данный обработчик позволяет добавить поле в таблицу. Принимает параметры "pageName", "tableName" и "data" в качестве объекта где ключом является имя столбца, а значением имя поля.',
      infoTitle: 'addDataToTableField',
      cssClass: ['flex', 'flex-col', 'items-center', 'gap-2'],
      fields: [
        'add_data_to_table_field_button',
        'name_legal_input',
        'price_legal_input',
        'add_data_to_table_table',
      ],
    },
    {
      type: 'button',
      value: 'add_data_to_table_field',
      name: 'add_data_to_table_field_button',
      buttonType: 'primary',
      handlers: [
        {
          name: 'addDataToTableField',
          params: {
            pageName: 'ui_kit',
            tableName: 'add_data_to_table_table',
            data: {
              name: 'name_legal_input',
              debt: 'price_legal_input',
            },
            request: {
              method: 'post',
              endpoint: 'https://ekat.sergeivl.ru/api/tests/request',
            },
          },
        },
      ],
    },
    {
      type: 'input',
      name: 'name_legal_input',
      format: 'text',
      value: 'text',
    },
    {
      type: 'input',
      name: 'price_legal_input',
      format: 'text',
      value: 'text',
    },
    {
      name: 'add_data_to_table_table',
      type: 'table',
      config: {},
      data: [
        {
          name: 'DigitalOcean',
          debt: 1000,
          admin: false,
        },
        {
          name: 'DigitalOcean',
          debt: 1500,
          admin: true,
        },
        {
          name: 'DigitalOcean',
          debt: 1000,
          admin: false,
        },
      ],
      columns: [
        {
          title: 'Название',
          dataIndex: 'name',
          key: 'name',
          widget: {
            name: 'text',
          },
        },
        {
          title: 'Не закрыто актами, ₽',
          dataIndex: 'debt',
          key: 'debt',
          widget: {
            name: 'text',
          },
        },
        {
          title: 'Админ',
          dataIndex: 'admin',
          key: 'admin',
          widget: {
            name: 'checkbox',
          },
          changeHandlers: [
            {
              name: 'sendOneFieldFromTable',
              params: {
                endpoint: '/changeUserRoleCell',
                fullRow: true,
                method: 'get',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'handler_add_column_to_table_field_block',
      type: 'code',
      info: 'Данный обработчик позволяет добавить колонку в таблицу. Принимает параметры "pageName", "tableName", "data" и "request".',
      infoTitle: 'addColumnToTable',
      cssClass: ['flex', 'flex-col', 'items-center', 'gap-2'],
      fields: [
        'role_name',
        'add_column_to_table_field_button',
        'add_column_to_table_table',
      ],
    },
    {
      type: 'button',
      value: 'add_column_to_table_field',
      name: 'add_column_to_table_field_button',
      buttonType: 'primary',
      handlers: [
        {
          name: 'addColumnToTable',
          params: {
            pageName: 'ui_kit',
            tableName: 'add_column_to_table_table',
            data: {
              role_name: 'role_name',
            },
            request: {
              method: 'post',
              endpoint: '/add/role',
            },
          },
        },
      ],
    },
    {
      title: 'Название роли',
      name: 'role_name',
      format: 'text',
      value: '',
      type: 'input',
      excludeSend: true,
      containerClass: ['mt-6', 'mb-4'],
      validation: {
        type: 'String',
        rules: [
          {
            type: 'required',
            params: ['Это поле обязательно для заполнения'],
          },
        ],
      },
    },
    {
      name: 'add_column_to_table_table',
      type: 'table',
      config: {},
      data: [
        {
          access_rules: 'Добавление',
          role_name_1: true,
        },
        {
          access_rules: 'Редактирование',
          role_name_1: false,
        },
      ],
      columns: [
        {
          title: 'Право доступа',
          dataIndex: 'access_rules',
          key: 'access_rules',
          widget: {
            name: 'text',
          },
        },
        {
          title: 'Роль 1',
          dataIndex: 'role_name_1',
          key: 'role_name_1',
          widget: {
            name: 'checkbox',
          },
          changeHandlers: [
            {
              name: 'sendOneFieldFromTable',
              params: {
                endpoint: '/changeUserRoleCell',
                fullRow: true,
                method: 'get',
              },
            },
          ],
        },
      ],
    },
    // TABLES Block
    {
      name: 'tables_block',
      type: 'div',
      fields: ['tables_title_block', 'tables_body'],
    },
    {
      name: 'tables_title_block',
      type: 'div',
      fields: ['tables_title'],
    },
    {
      text: 'Tables',
      name: 'tables_title',
      type: 'label',
      cssClass: ['font-medium', 'text-xl'],
    },
    {
      name: 'tables_body',
      type: 'div',
      cssClass: ['flex', 'gap-2', 'flex-wrap', 'my-[20px]'],
      fields: ['tables_col_1'],
    },
    {
      name: 'tables_col_1',
      type: 'div',
      fields: [
        'basic_table_block',
        'all_widget_table_block',
        'filter_table_block',
        'filter_column_table_block',
        'search_table_block',
        'config_table_block',
        'button_table_block',
        'tree_table_block',
      ],
      cssClass: ['flex', 'gap-2', 'flex-col'],
    },
    {
      name: 'basic_table_block',
      type: 'code',
      info: '',
      infoTitle: 'basic table',

      cssClass: ['flex', 'items-center', 'gap-2'],
      fields: ['basic_table'],
    },
    {
      name: 'basic_table',
      type: 'table',
      config: {
        size: 'small',
      },
      data: [
        {
          name: 'DigitalOcean',
          debt: 1000,
        },
        {
          name: 'DigitalOcean',
          debt: 1500,
        },
      ],
      columns: [
        {
          title: 'Название',
          dataIndex: 'name',
          key: 'name',
          widget: {
            name: 'text',
          },
        },
        {
          title: 'Не закрыто актами, ₽',
          dataIndex: 'debt',
          key: 'debt',
          widget: {
            name: 'text',
          },
        },
      ],
    },
    {
      name: 'all_widget_table_block',
      type: 'code',
      info: `widget содержит в себе описание способа отображения столбца.
      <ul class="list-disc ml-5">
      <li>Параметр 'name: text' отображает данные в качестве текста, так же принимает параметры class и style</li>
      <li>Параметр 'name: link' отображает данные в качестве ссылки, так же может принимать 'type: external'</li>
      <li>Параметр 'name: checkbox' отображает данные в качестве checkbox, в случае доополнительного параметра 'type: text' отображает в качестве надписи Да/Нет</li>
      <li>
      Параметр 'name: select' отображает данные в качестве select, поддерживает 'type: status' и 'type: text'<br/>
        Дополнительные параметры:
        <ul class="list-circle ml-5">
          <li>isEditable поле становится редактируемым по двойному клику (по умолчанию false)</li>
          <li>showLoading отображается лоадер на select во время отправки запроса (по умолчанию false)</li>
        </ul>
      </li>
      </ul>
      <li>Параметр 'name: popover' отображает всплывающее окно при наведении, поддерживает 'type: column" и 'type: text'</li>
      <li>Параметр 'name: image' отображает изображение по ссылке, поддерживает 'width: 150px',</li>
      <li>Параметр 'name: date' отбражает unixtime в качестве даты в заданном формате, поддерживает 'format: "YYYY.MM.DD"'</li>
      <li>Параметр 'name: input' создаёт поле ввода, поддерживает 'suffix: "%" и 'prefix: "%"'</li>`,
      infoTitle: 'widget',
      cssClass: ['flex', 'items-center', 'gap-2'],
      fields: ['all_widget_table'],
    },
    {
      name: 'all_widget_table',
      type: 'table',
      config: {},
      data: [
        {
          text: 'text',
          link: {
            title: 'link',
            link: '/main/blog_page_edit',
          },
          checkbox: false,
          checkbox_text: true,
          select: 1,
          select_tag: 1,
          select_text: 1,
          popover: {
            link: '/main/complaint_form_edit',
            text: 'Жалоба',
          },
          popover_columns: {
            title: 'Iphone',
            link: '/mikes',
            offerInfo: [
              { param: 'Экран', value: '6.7 (2778х1284) OLED 120Гц' },
              { param: 'Встроенная память', value: '128 гБ' },
              { param: 'Оперативная память', value: '6ГБ' },
              { param: 'З камеры', value: '12 МП, 12 МП, 12 мп' },
              { param: 'Аккумулятор', value: '4352 мАч' },
            ],
          },
          image:
            'https://www.digitalclassworld.com/blog/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg',
          date: 1666803600,
          input: {
            value: 10,
            suffix: '%',
          },
        },
        {
          text: 'text',
          link: {
            title: 'link',
            link: '/main/blog_page_edit',
          },
          checkbox: true,
          checkbox_text: false,
          select: 0,
          select_tag: 0,
          select_text: 0,
          popover: {
            link: '/main/complaint_form_edit',
            text: 'Жалоба',
          },
          popover_columns: {
            title: 'Iphone',
            link: '/mikes',
            offerInfo: [
              { param: 'Экран', value: '6.7 (2778х1284) OLED 120Гц' },
              { param: 'Встроенная память', value: '128 гБ' },
              { param: 'Оперативная память', value: '6ГБ' },
              { param: 'З камеры', value: '12 МП, 12 МП, 12 мп' },
              { param: 'Аккумулятор', value: '4352 мАч' },
            ],
          },
          image:
            'https://techmonitor.ai/wp-content/uploads/sites/4/2016/06/what-is-URL.jpg',
          date: 1666803600,
          input: {
            value: 10,
            suffix: '%',
          },
        },
      ],
      columns: [
        {
          title: 'text',
          dataIndex: 'text',
          key: 'text',
          widget: {
            name: 'text',
          },
        },
        {
          title: 'link',
          dataIndex: 'link',
          key: 'link',
          widget: {
            name: 'link',
          },
        },
        {
          title: 'checkbox',
          dataIndex: 'checkbox',
          key: 'checkbox',
          widget: {
            name: 'checkbox',
          },
          changeHandlers: [
            {
              name: 'sendOneFieldFromTable',
              params: {
                endpoint: '/changeUserRoleCell',
                fullRow: true,
              },
            },
          ],
        },
        {
          title: 'checkbox_text',
          dataIndex: 'checkbox_text',
          key: 'checkbox_text',
          widget: {
            name: 'checkbox',
            type: 'text',
          },
          changeHandlers: [
            {
              name: 'sendOneFieldFromTable',
              params: {
                endpoint: '/changeUserRoleCell',
                fullRow: true,
              },
            },
          ],
        },
        {
          title: 'select',
          dataIndex: 'select',
          key: 'select',
          widget: {
            name: 'select',
            params: [
              { id: 0, value: 'sel 1' },
              { id: 1, value: 'sek 2' },
            ],
          },
        },
        {
          title: 'select_tag',
          dataIndex: 'select_tag',
          key: 'select_tag',
          widget: {
            name: 'select',
            type: 'status',
            isEditable: true,
            showLoading: true,
            params: [
              { id: 0, value: 'Одобрено', color: '#87D068' },
              { id: 1, value: 'Модерация', color: '#00', textColor: '#8c8c8c' },
            ],
          },
          changeHandlers: [
            {
              name: 'sendOneFieldFromTable',
              params: {
                endpoint: 'https://ekat.sergeivl.ru/api/tests/request',
                pageName: 'ui_kit',
                tableName: 'all_widget_table',
              },
            },
          ],
        },
        {
          title: 'select_text',
          dataIndex: 'select_text',
          key: 'select_text',
          widget: {
            name: 'select',
            type: 'text',
            params: [
              { id: 0, value: 'Одобрено' },
              { id: 1, value: 'Модерация' },
            ],
          },
        },
        {
          title: 'popover',
          dataIndex: 'popover',
          key: 'popover',
          widget: {
            name: 'popover',
            type: 'text',
          },
        },
        {
          title: 'popover_columns',
          dataIndex: 'popover_columns',
          key: 'popover_columns',
          widget: {
            name: 'popover',
            type: 'columns',
          },
        },
        {
          title: 'image',
          dataIndex: 'image',
          key: 'image',
          widget: {
            name: 'image',
            width: 20,
          },
        },
        {
          title: 'date',
          dataIndex: 'date',
          key: 'date',
          widget: {
            name: 'date',
            format: 'DD.MM.YYYY',
          },
          width: 100,
        },
        {
          title: 'input',
          dataIndex: 'input',
          key: 'input',
          widget: {
            name: 'input',
          },
          width: 100,
        },
      ],
    },
    {
      name: 'filter_table_block',
      type: 'code',
      info: `filterType параметр столбца, позволяет добавлять фильтры на необхоимый столбец
      <ul class="list-disc ml-5">
        <li>filterType: 'text' позволяет осуществлять поиск по подстроке в определенном столбце</li>
        <li>filterType: 'number' позволяет искать числовые значения от и до определенной суммы</li>
        <li>filterType: 'category' собирает всевозможные существующие значения в select и фильтрует по выбранному значению
          <ul class="list-circle ml-5">
            <li>дополнительный параметр filterParam(в случае если мы фильтруем объекты, необходимо указывать по какому ключу объекта мы фильтруем)</li>
          </ul>
        </li>
        <li>filterType: 'daterange' позволяет искать промежутки дат удобном формате</li>
        <li>filterType: 'checkbox' позволяет осуществлять удобный поиск по checkbox</li>
        <li>filterType: 'select' позволяет осуществлять поиск по готовому списку значений. Используется для виджетов select</li>
        <li>sort: true необходим для добавления сортировки по столбцу</li>
        <li>hideSearchBtn: скрывает кнопку поиска с иконкой</li>
        <li>gap: задает расстояние между фильтрами, по умолчанию 2</li>
        <li>filterWidth: задает ширину фильтра</li>
        <li>filterTitle: изменяет placeholder или title именно у фильтра</li>
        <li>filterIcon: иконка для фильтра если input до будет внутри input</li>
        <li>filterMultiple: делает селект multiselect</li>
        <li>filtersPosition: можем задать порядок фильтров массив, если нужно указать фльтр из columns то пишем его key, если нужен фильтр из search то пишем его name, по умолчанию можно не указывать тогда сначала будут идти фильтры которые в search, а затем columns</li>
        <li>filterAllowClear: добавить кнопку стреть в инпутах и селектах, по умолчанию true</li>
      </ul>`,
      infoTitle: 'filterType, sort, и т.д',
      cssClass: ['flex', 'items-center', 'gap-2'],
      fields: ['filter_table'],
    },
    {
      name: 'filter_table',
      type: 'table',
      config: { filterSize: 'middle' },
      data: [
        {
          text: '123',
          number: 1000,
          category: 'Smart',
          date: 1670349600,
          checkbox: true,
          select: 1,
        },
        {
          text: 'text',
          number: 500,
          category: 'Sony',
          date: 1670263200,
          checkbox: false,
          select: 0,
        },
      ],
      columns: [
        {
          title: 'text',
          dataIndex: 'text',
          key: 'text',
          widget: {
            name: 'text',
          },
          filterType: 'text',
          filterWidth: '250px',
          filterTitle: 'Введите текст',
          filterIcon: 'fa-search',
          sort: true,
        },
        {
          title: 'number',
          dataIndex: 'number',
          key: 'number',
          widget: {
            name: 'number',
          },
          filterType: 'number',
          sort: true,
        },
        {
          title: 'category',
          dataIndex: 'category',
          key: 'category',
          widget: {
            name: 'text',
          },
          filterType: 'category',
          sort: true,
        },
        {
          title: 'date',
          dataIndex: 'date',
          key: 'date',
          widget: {
            name: 'date',
            format: 'DD.MM.YYYY',
          },
          filterType: 'daterange',
          sort: true,
        },
        {
          title: 'checkbox',
          dataIndex: 'checkbox',
          key: 'checkbox',
          widget: {
            name: 'checkbox',
          },
          filterType: 'checkbox',
          sort: true,
        },
        {
          title: 'select',
          dataIndex: 'select',
          key: 'select',
          widget: {
            name: 'select',
            params: [
              { id: 0, value: 'SonyPlayStation' },
              { id: 1, value: 'samsung' },
            ],
          },
          filterType: 'select',
          sort: true,
        },
      ],
    },
    {
      name: 'search_table_block',
      type: 'code',
      info: `config.search позволяет искать по различным полям, в том числе тех которые не отображаются в таблице
      <ul class="list-disc ml-5">
        <li>type: input позволяет искать по любому из полей которые указаны в fields</li>
        <li>type: switch позволяет фильтровать данные с типом checkbox через элемент switch</li>
        <li>type: select создаёт селект который собирает варианты из стоблца</li>
        <li>infoTooltip: Добавляет иконку рядом с толтипом</li>
        <li>filterWidth: задает ширину фильтра</li>
        <li>filterTitle: изменяет placeholder или title именно у фильтра</li>
        <li>filterMultiple: делает селект multiselect</li>
        <li>filterAllowClear: добавить кнопку стреть в инпутах и селектах, (по умолчанию true)</li>
        <li>headerFilter: показать/ скрыть фильтр в header (по умолчанию true)</li>
      </ul>`,
      infoTitle: 'Search',
      cssClass: ['flex', 'items-center', 'gap-2'],
      fields: ['search_table'],
    },
    {
      name: 'filter_column_table_block',
      type: 'code',
      info: `columnFilter параметр столбца, позволяет добавлять фильтры в column рядом с кнопкой sort;
        все свойства filterType, filterWidth и т.д работают так же, (исключение filterIcon свойство здесь не работает)`,
      infoTitle: 'columnFilter',
      cssClass: ['flex', 'items-center', 'gap-2'],
      fields: ['filter_column_table'],
    },
    {
      name: 'filter_column_table',
      type: 'table',
      config: {
        pagination: false,
        size: 'small',
        align: 'center',
        gap: '4',
        bordered: true,
        selection: true,
        hideHeaderFilters: true,
      },
      data: [
        {
          category: 'Смартфон',
          offer: 'Honor',
          price: 1000,
          city: 'Санкт-Петербург',
          placement: 'Страница товара',
          recommendations: 800,
          rate: 400,
          my_rates: true,
          feed: 'Телефоны Москва',
        },
        {
          category: 'Игровая приставка',
          offer: 'Playstation 5',
          price: 900,
          city: 'Москва',
          placement: 'Страница цен',
          recommendations: 600,
          rate: 400,
          my_rates: true,
          feed: 'азонокосилки Нижний Таггил',
        },
        {
          category: 'Игровая приставка',
          offer: 'Playstation 5',
          price: 500,
          city: 'Москва',
          placement: 'Страница цен',
          recommendations: 600,
          rate: 400,
          my_rates: false,
          feed: 'Еще что то 3',
        },
        {
          category: 'Игровая приставка',
          offer: 'Playstation 5',
          price: 500,
          city: 'Москва',
          placement: 'Страница цен',
          recommendations: 600,
          rate: 400,
          my_rates: false,
          feed: 'Еще что то 5',
        },
      ],
      columns: [
        {
          title: 'Категория',
          dataIndex: 'category',
          key: 'category',
          resizable: true,
          columnFilter: true,
          headerFilter: false,
          widget: {
            name: 'text',
          },
          width: 200,
          filterTitle: 'Поиск категории',
          filterType: 'text',
          filterWidth: '200px',
          sort: true,
        },
        {
          title: 'Предложение',
          dataIndex: 'offer',
          key: 'offer',
          resizable: true,
          columnFilter: true,
          headerFilter: false,
          widget: {
            name: 'text',
          },
          width: 200,
          filterType: 'text',
          filterTitle: 'Поиск по названию',
          filterWidth: '220px',
          sort: true,
        },
        {
          title: 'Цена',
          dataIndex: 'price',
          key: 'price',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          columnFilter: true,
          filterType: 'number',
          filterWidth: '130px',
          sort: true,
        },
        {
          title: 'Город',
          dataIndex: 'city',
          key: 'city',
          resizable: true,
          columnFilter: true,
          filterType: 'category',
          filterTitle: 'Поиск по городу',
          widget: {
            name: 'text',
          },
          width: 200,
          sort: true,
        },
        {
          title: 'Размещение',
          dataIndex: 'placement',
          key: 'placement',
          resizable: true,
          columnFilter: true,
          widget: {
            name: 'text',
          },
          width: 200,
          filterType: 'category',
          filterMultiple: true,
          sort: true,
        },
        {
          title: 'Ставка',
          dataIndex: 'rate',
          key: 'rate',
          resizable: true,
          widget: {
            name: 'text',
          },
          width: 200,
          sort: true,
        },
      ],
    },
    {
      name: 'search_table',
      type: 'table',
      config: {
        search: [
          {
            name: 'blog_search',
            type: 'input',
            fields: ['text', 'number'],
          },
          {
            name: 'checkbox',
            type: 'switch',
            fields: ['checkbox'],
            label: 'Только с аккаунтами',
          },
          {
            name: 'category',
            type: 'select',
            fields: ['category'],
            defaultValue: { label: 'Все города', value: '' },
          },
        ],
      },
      data: [
        {
          text: '123',
          number: 1000,
          category: 'Smart',
          date: 1670349600,
          checkbox: true,
          select: 1,
        },
        {
          text: 'text',
          number: 500,
          category: 'Sony',
          date: 1670263200,
          checkbox: false,
          select: 0,
        },
      ],
      columns: [
        {
          title: 'text',
          dataIndex: 'text',
          key: 'text',
          widget: {
            name: 'text',
          },
        },
        {
          title: 'number',
          dataIndex: 'number',
          key: 'number',
          widget: {
            name: 'number',
          },
        },
        {
          title: 'category',
          dataIndex: 'category',
          key: 'category',
          widget: {
            name: 'text',
          },
        },
        {
          title: 'date',
          dataIndex: 'date',
          key: 'date',
          widget: {
            name: 'date',
            format: 'DD.MM.YYYY',
          },
        },
        {
          title: 'checkbox',
          dataIndex: 'checkbox',
          key: 'checkbox',
          widget: {
            name: 'checkbox',
          },
        },
        {
          title: 'select',
          dataIndex: 'select',
          key: 'select',
          widget: {
            name: 'select',
            params: [
              { id: 0, value: 'SonyPlayStation' },
              { id: 1, value: 'samsung' },
            ],
          },
        },
      ],
    },
    {
      name: 'config_table_block',
      type: 'code',
      info: `config позволяет настраивать различные параметры таблицы
      <ul class="list-disc ml-5">
        <li>bordered: true добавляет отрисовку таблиц</li>
        <li>pagination: false убирает возможность пагинации</li>
        <li>sticky: true заголовки столбцов прилипают к верху страницы</li>
        <li>size: 'small' указывает на размер строк, варианты: default | middle | small | large</li>
        <li>selection: true позволяет выделять данные</li>
        <li>filterSize: 'middle' принимает значения размера всех фильтров, варианты: small | middle | large</li>
        <li>customRow: true при клике на строку, добовляет query параметр с id, можно расширить функционал</li>
        <li>hideHeaderFilters: скрывает все фильтры в header не зависимо от того указано ли свойство filterType, или headerFilter</li>
        <li>
          Дополнительные настройки колонок:
          <ul class="list-circle ml-5">
            <li>width: 140 задаёт ширину столбца</li>
            <li>resizable: true позволяет пользователю менять ширину столбца</li>
            <li>align: 'center'  позовляет выравнивать контент ячейки по ширирне, варианты: left | right | center</li>
          </ul>
        </li>
      </ul>`,
      infoTitle: 'Сonfig',
      cssClass: ['flex', 'items-center', 'gap-2'],
      fields: ['config_table'],
    },
    {
      name: 'config_table',
      type: 'table',
      config: {
        bordered: true,
        pagination: false,
        sticky: true,
        size: 'small',
        selection: true,
        customRow: true,
      },
      data: [
        {
          text: '123',
          number: 1000,
          category: 'Smart',
          date: 1670349600,
          checkbox: true,
          select: 1,
        },
        {
          text: 'text',
          number: 500,
          category: 'Sony',
          date: 1670263200,
          checkbox: false,
          select: 0,
        },
      ],
      columns: [
        {
          title: 'text',
          dataIndex: 'text',
          key: 'text',
          widget: {
            name: 'text',
          },
          width: 150,
          resizable: true,
          align: 'center',
        },
        {
          title: 'number',
          dataIndex: 'number',
          key: 'number',
          widget: {
            name: 'number',
          },
        },
        {
          title: 'category',
          dataIndex: 'category',
          key: 'category',
          widget: {
            name: 'text',
          },
        },
        {
          title: 'date',
          dataIndex: 'date',
          key: 'date',
          widget: {
            name: 'date',
            format: 'DD.MM.YYYY',
          },
        },
        {
          title: 'checkbox',
          dataIndex: 'checkbox',
          key: 'checkbox',
          widget: {
            name: 'checkbox',
          },
        },
        {
          title: 'select',
          dataIndex: 'select',
          key: 'select',
          widget: {
            name: 'select',
            params: [
              { id: 0, value: 'SonyPlayStation' },
              { id: 1, value: 'samsung' },
            ],
          },
        },
      ],
    },
    {
      name: 'button_table_block',
      type: 'code',
      info: `selection позволяет проводить различные операции с выбранными строками
      <ul class="list-disc ml-5">
        <li>refuse: специальное поле для таблицы офферов, устанавливает значение поля в 'отказано' и отправляет запрос с причиной отказа.</li>
        <li>approve: специальное поле для таблицы офферов, устанавливает значение поля и 'одобрено' отправляет запрос.</li>
        <li>delete: позволяет удалить строку из таблицы</li>
        <li>edit: переводит поля строк в режим редактирования</li>
        <li>save: cохраняет выделенные строки после редактирования</li>
        <li>sendSingleRow: true отправляется запрос на сохранение одной строки (при клике на Сохранить в дропдауне Actions)</li>
        <li>notImmediateUpdate: true, при редактировании одиночного поля в выбранных строках позволяет обновлять данные в сторе, не обновляя их на странице (по умолчанию false)</li>
        <li>setStatusColumn: ['select'] позволяет устанавливать для всех строк какое то опредленное значение select'a</li>
        <li>active: true позволяет устанавливать значение checkbox с параметром text в определенные значения.</li>
        <li>column actions добавляет столбец с отдельными действиями для каждой строки</li>
        <li>delete: true, удаляет строку</li>
        <li>edit: true, переводит поля строки в режим редактирования</li>
        <li>onCopy: true, создаёт новую строку с такими же значениями</li>
        <li>deactivate: 'active', позволяет менять значение checkbox с определенным именем поля.</li>
      </ul>`,
      infoTitle: 'Button',
      cssClass: ['flex', 'items-center', 'gap-2'],
      fields: ['button_table'],
    },
    {
      name: 'button_table',
      type: 'table',
      config: {
        selection: {
          refuse: true,
          approve: true,
          delete: true,
          save: true,
          edit: true,
          notImmediateUpdate: true,
          setStatusColumn: ['select', 'status'],
          active: true,
        },
      },
      data: [
        {
          text: '123',
          number: 1000,
          category: 'Smart',
          date: 1670349600,
          active: true,
          select: 1,
          status: 0,
        },
        {
          text: 'text',
          number: 500,
          category: 'Sony',
          date: 1670263200,
          active: false,
          select: 0,
          status: 1,
        },
      ],
      columns: [
        {
          dataIndex: 'actions',
          widget: {
            name: 'actions',
          },
          width: 10,
          delete: true,
          edit: true,
          onCopy: true,
          deactivate: 'active',
          sendSingleRow: true,
        },
        {
          title: 'number',
          dataIndex: 'number',
          key: 'number',
          widget: {
            name: 'text',
          },
        },
        {
          title: 'active',
          dataIndex: 'active',
          key: 'active',
          widget: {
            name: 'checkbox',
            type: 'text',
          },
        },
        {
          title: 'select',
          dataIndex: 'select',
          key: 'select',
          widget: {
            name: 'select',
            params: [
              { id: 0, value: 'SonyPlayStation' },
              { id: 1, value: 'samsung' },
            ],
          },
        },
        {
          title: 'Статус',
          dataIndex: 'status',
          key: 'status',
          widget: {
            name: 'select',
            type: 'status',
            params: [
              { id: 0, value: 'Активен', color: '#87D068' },
              { id: 1, value: 'Отключен', color: '#FF4D4F' },
            ],
          },
          width: 150,
          resizable: true,
        },
      ],
    },
    {
      name: 'tree_table_block',
      type: 'code',
      info: `
      <ul class="list-disc ml-5">
        <li>Вложенные строки необходимо указывать в родительском объекте параметром children</li>
        <li>Так же при создании таблицы с вложенными записями необходимо указывать в config tree: true, это позволит корректно работать поиску</li>
        <li>Из поиска и фильтрации корректно, сейчас работает только поиск при помощи input</li>
        <li>Деактивация и удаление работает с верхними и вложенными записями через action меню строки</li>
      </ul>`,
      infoTitle: 'tree таблицы',
      fields: ['tree_table'],
    },
    {
      name: 'tree_table',
      type: 'table',
      config: {
        tree: true,
        hideFilterBtn: true,
        search: [
          {
            name: 'Поиск по товарам',
            type: 'input',
            fields: ['name'],
          },
        ],
      },
      data: [
        {
          active: true,
          name: 'Электроника',
          products_count: 20,
          children: [
            {
              key: '1-1',
              link: '/main/catalog_edit?id=1-1',
              active: true,
              products_count: 10,
              name: 'Смартфоны и гаджеты',
              children: [
                {
                  key: '1-1-1',
                  active: true,
                  products_count: 5,
                  name: 'Samsung',
                },
                {
                  key: '1-1-2',
                  active: true,
                  products_count: 5,
                  name: 'Iphone',
                },
              ],
            },
            {
              key: '1-2',
              link: '/main/catalog_edit?id=1-2',
              active: true,
              products_count: 10,
              name: 'Портативные цифровые плееры',
              children: [
                {
                  key: '1-2-1',
                  active: true,
                  products_count: 5,
                  name: 'Phillips',
                },
                {
                  key: '1-2-2',
                  active: true,
                  products_count: 5,
                  name: 'Apple',
                },
              ],
            },
          ],
          key: '1',
          link: '/main/catalog_edit?id=1',
        },
        {
          active: true,
          name: 'Мебель',
          products_count: 20,
          children: [
            {
              key: '2-1',
              link: '/main/catalog_edit?id=1-1',
              active: true,
              name: 'Посуда',
              products_count: 10,
              children: [
                {
                  key: '2-1-1',
                  active: true,
                  products_count: 5,
                  name: 'Кофеварка',
                },
                {
                  key: '2-1-2',
                  active: true,
                  products_count: 5,
                  name: 'Заварник',
                },
              ],
            },
            {
              key: '2-2',
              link: '/main/catalog_edit?id=1-2',
              active: true,
              name: 'Столы',
              products_count: 10,
              children: [
                {
                  key: '2-2-1',
                  active: true,
                  products_count: 5,
                  name: 'Компьютерные',
                },
                {
                  key: '2-2-2',
                  active: true,
                  products_count: 5,
                  name: 'Кухонные',
                },
              ],
            },
          ],
          key: '2',
          link: '/main/catalog_edit?id=2',
        },
      ],
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
          widget: {
            name: 'text',
          },
        },
        {
          title: 'Активность',
          dataIndex: 'active',
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
    // SELECT Block
    {
      name: 'select_block',
      type: 'div',
      fields: ['select_title_block', 'select_body'],
    },
    {
      name: 'select_title_block',
      type: 'div',
      fields: ['select_title'],
    },
    {
      text: 'Select',
      name: 'select_title',
      type: 'label',
      cssClass: ['font-medium', 'text-xl'],
    },
    {
      name: 'select_body',
      type: 'div',
      cssClass: ['flex', 'flex-wrap', 'my-[20px]'],
      fields: ['select_col_1', 'select_col_2'],
    },
    {
      name: 'select_col_1',
      type: 'div',
      fields: [
        'select_basic_usage_block',
        'select_disabled_block',
        'select_styleClass_block',
      ],
      parentClass: ['w-1/2', 'pr-4'],
      cssClass: ['flex', 'gap-4', 'flex-col'],
    },
    {
      name: 'select_basic_usage_block',
      type: 'code',
      info: '',
      infoTitle: 'Basic usage',
      cssClass: ['flex', 'flex-col', 'items-center', 'gap-2'],
      fields: [
        'basic_select_large',
        'basic_select_default',
        'basic_select_small',
      ],
    },
    {
      size: 'large',
      name: 'basic_select_large',
      type: 'select',
      cssClass: ['w-96'],
      value: 1,
      options: [
        { id: 0, name: 'text' },
        { id: 1, name: 'large' },
        { id: 2, name: 'text' },
      ],
    },
    {
      size: 'default',
      name: 'basic_select_default',
      type: 'select',
      cssClass: ['w-96'],
      value: 1,
      options: [
        { id: 0, name: 'text' },
        { id: 1, name: 'default' },
        { id: 2, name: 'text' },
      ],
    },
    {
      size: 'small',
      name: 'basic_select_small',
      type: 'select',
      cssClass: ['w-96'],
      value: 1,
      options: [
        { id: 0, name: 'text' },
        { id: 1, name: 'small' },
        { id: 2, name: 'text' },
      ],
    },
    {
      name: 'select_styleClass_block',
      type: 'code',
      info: `style параметр позволяет указывать стили для поля, праметр cssClass поддерживает классы в том числе и tailwind.
      Всегда лучше использовать tailwind классы. parentClass параметр используется для классов родительского контейнера.`,
      infoTitle: 'style, cssClass и parentClass',
      cssClass: ['flex', 'flex-col', 'items-center', 'gap-2'],
      fields: ['styleClass_select_input'],
    },
    {
      size: 'large',
      name: 'styleClass_select_input',
      type: 'select',
      cssClass: ['w-96'],
      style: {
        fontSize: '1.25rem',
        lineHeight: '1.75rem',
        color: 'red',
      },
      parentClass: ['p-4', 'bg-[#7772]', 'rounded-lg'],
      value: 1,
      options: [
        { id: 0, name: 'text' },
        { id: 1, name: 'style' },
        { id: 2, name: 'css' },
      ],
    },
    {
      name: 'select_disabled_block',
      type: 'code',
      info: 'disabled: true/false',
      infoTitle: 'disabled',
      cssClass: ['flex', 'flex-col', 'items-center', 'gap-2'],
      fields: [
        'disabled_large_select_input',
        'disabled_default_select_input',
        'disabled_small_select_input',
      ],
    },
    {
      name: 'disabled_large_select_input',
      type: 'select',
      size: 'large',
      cssClass: ['w-96'],
      disabled: true,
      value: 1,
      options: [
        { id: 0, name: 'text' },
        { id: 1, name: 'disabled large' },
        { id: 2, name: 'css' },
      ],
    },
    {
      name: 'disabled_default_select_input',
      type: 'select',
      size: 'default',
      cssClass: ['w-96'],
      disabled: true,
      value: 1,
      options: [
        { id: 0, name: 'text' },
        { id: 1, name: 'disabled default' },
        { id: 2, name: 'css' },
      ],
    },
    {
      name: 'disabled_small_select_input',
      type: 'select',
      size: 'small',
      cssClass: ['w-96'],
      disabled: true,
      value: 1,
      options: [
        { id: 0, name: 'text' },
        { id: 1, name: 'disabled small' },
        { id: 2, name: 'css' },
      ],
    },
    {
      name: 'select_col_2',
      type: 'div',
      fields: [
        'select_placeholder_block',
        'select_mode_tags_block',
        'select_mode_multiple_block',
      ],
      parentClass: ['w-1/2'],
      cssClass: ['flex', 'gap-4', 'flex-col'],
    },
    {
      name: 'select_placeholder_block',
      type: 'code',
      info: 'description: "Example placeholder"',
      infoTitle: 'Placeholder',
      cssClass: ['flex', 'flex-col', 'items-center', 'gap-2'],
      fields: ['placeholder_large_select_input'],
    },
    {
      name: 'placeholder_large_select_input',
      description: 'Example placeholder',
      type: 'select',
      size: 'large',
      cssClass: ['w-96'],
      value: 0,
      options: [
        { id: 0, name: 'text 1' },
        { id: 1, name: 'text 2' },
        { id: 2, name: 'text 3' },
      ],
    },
    {
      name: 'select_mode_tags_block',
      type: 'code',
      info: 'mode: tags',
      infoTitle: 'Mode tags',
      cssClass: ['flex', 'flex-col', 'items-center', 'gap-2'],
      fields: ['mode_tags_large_select_input'],
    },
    {
      name: 'mode_tags_large_select_input',
      type: 'select',
      mode: 'tags',
      size: 'large',
      cssClass: ['w-96'],
      value: [0, 1],
      options: [
        { id: 0, name: 'text 1' },
        { id: 1, name: 'text 2' },
        { id: 2, name: 'text 3' },
      ],
    },
    {
      name: 'select_mode_multiple_block',
      type: 'code',
      info: 'mode: multiple',
      infoTitle: 'Mode multiple',
      cssClass: ['flex', 'flex-col', 'items-center', 'gap-2'],
      fields: ['mode_multiple_large_select_input'],
    },
    {
      name: 'mode_multiple_large_select_input',
      type: 'select',
      mode: 'multiple',
      size: 'large',
      cssClass: ['w-96'],
      value: [0, 1],
      options: [
        { id: 0, name: 'text 1' },
        { id: 1, name: 'text 2' },
        { id: 2, name: 'text 3' },
      ],
    },
    // TEXTAREA block
    {
      name: 'textarea_block',
      type: 'div',
      fields: ['textarea_title_block', 'textarea_body'],
    },
    {
      name: 'textarea_title_block',
      type: 'div',
      fields: ['textarea_title'],
    },
    {
      text: 'Textarea',
      name: 'textarea_title',
      type: 'label',
      cssClass: ['font-medium', 'text-xl'],
    },
    {
      name: 'textarea_body',
      type: 'div',
      cssClass: ['flex', 'flex-wrap', 'my-[20px]'],
      fields: ['textarea_col_1', 'textarea_col_2'],
    },
    {
      name: 'textarea_col_1',
      type: 'div',
      fields: [
        'textarea_basic_usage_block',
        'textarea_style_css_block',
        'textarea_placeholder_block',
      ],
      parentClass: ['w-1/2', 'pr-4'],
      cssClass: ['flex', 'gap-4', 'flex-col'],
    },
    {
      name: 'textarea_basic_usage_block',
      type: 'code',
      info: '',
      infoTitle: 'Basic usage',
      cssClass: ['flex', 'flex-col', 'items-center', 'gap-2'],
      fields: ['basic_textarea_field'],
    },
    {
      name: 'basic_textarea_field',
      type: 'textarea',
      parentClass: ['w-96'],
      value: 'Text example',
    },
    {
      name: 'textarea_style_css_block',
      type: 'code',
      info: 'cssClass поддерживает классы в том числе и tailwind. Всегда лучше использовать tailwind классы. parentClass параметр используется для классов родительского контейнера. В случае с textarea этот параметр отвечает так же за ширину занимаемую полем.',
      infoTitle: 'Style',
      cssClass: ['flex', 'flex-col', 'items-center', 'gap-2'],
      fields: ['style_css_textarea_field'],
    },
    {
      name: 'style_css_textarea_field',
      type: 'textarea',
      parentClass: ['w-60'],
      cssClass: ['font-medium'],
      value: 'Text example',
    },
    {
      name: 'textarea_placeholder_block',
      type: 'code',
      info: 'description: "This is placeholder"',
      infoTitle: 'Placeholder',
      cssClass: ['flex', 'flex-col', 'items-center', 'gap-2'],
      fields: ['placeholder_textarea_field'],
    },
    {
      name: 'placeholder_textarea_field',
      type: 'textarea',
      description: 'This is placeholder',
      parentClass: ['w-96'],
      value: '',
    },
    {
      name: 'textarea_col_2',
      type: 'div',
      fields: [
        'textarea_min_rows_block',
        'textarea_max_rows_block',
        'textarea_min_max_rows_block',
      ],
      parentClass: ['w-1/2'],
      cssClass: ['flex', 'gap-4', 'flex-col'],
    },
    {
      name: 'textarea_min_rows_block',
      type: 'code',
      info: 'Высота textarea минимальное значение "minRows: 1". По умолчанию "minRows: 2"',
      infoTitle: 'Min rows',
      cssClass: ['flex', 'flex-col', 'items-center', 'gap-2'],
      fields: ['min_rows_textarea_field'],
    },
    {
      name: 'min_rows_textarea_field',
      type: 'textarea',
      parentClass: ['w-96'],
      value: 'Text example',
      minRows: 1,
    },
    {
      name: 'textarea_max_rows_block',
      type: 'code',
      info: 'Высота textarea максимальное значение "maxRows: 6". По умолчанию "maxRows: 5"',
      infoTitle: 'Max rows',
      cssClass: ['flex', 'flex-col', 'items-center', 'gap-2'],
      fields: ['max_rows_textarea_field'],
    },
    {
      name: 'max_rows_textarea_field',
      type: 'textarea',
      parentClass: ['w-96'],
      value:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      maxRows: 6,
    },
    {
      name: 'textarea_min_max_rows_block',
      type: 'code',
      info: 'Заданы минимальное и максимальное значения высоты textarea "minRows: 1", "maxRows: 4"',
      infoTitle: 'Min and max rows',
      cssClass: ['flex', 'flex-col', 'items-center', 'gap-2'],
      fields: ['min_max_rows_textarea_field'],
    },
    {
      name: 'min_max_rows_textarea_field',
      type: 'textarea',
      parentClass: ['w-96'],
      description: 'Please write a lot of text ',
      value: '',
      maxRows: 4,
      minRows: 1,
    },
    // BOOLEAN block
    {
      name: 'boolean_block',
      type: 'div',
      fields: ['boolean_title_block', 'boolean_body'],
    },
    {
      name: 'boolean_title_block',
      type: 'div',
      fields: ['boolean_title'],
    },
    {
      text: 'Boolean',
      name: 'boolean_title',
      type: 'label',
      cssClass: ['font-medium', 'text-xl'],
    },
    {
      name: 'boolean_body',
      type: 'div',
      cssClass: ['flex', 'flex-wrap', 'my-[20px]'],
      fields: ['boolean_col_1', 'boolean_col_2', 'boolean_col_3'],
    },
    {
      name: 'boolean_col_1',
      type: 'div',
      fields: [
        'boolean_checkbox_basic_usage_block',
        'boolean_switch_basic_usage_block',
        'boolean_groupСheckbox_basic_usage_block',
        'boolean_checkbox_css_style_usage_block',
        'boolean_switch_css_style_usage_block',
      ],
      parentClass: ['w-2/6', 'pr-4'],
      cssClass: ['flex', 'gap-4', 'flex-col'],
    },
    {
      name: 'boolean_checkbox_basic_usage_block',
      type: 'code',
      info: 'Параметр "viewType: checkbox"',
      infoTitle: 'Basic usage with viewType=checkbox',
      cssClass: ['flex', 'items-start', 'gap-2'],
      fields: ['boolean_checkbox_basic_usage_field'],
    },
    {
      title: 'Title checkbox',
      titlePosition: 'left',
      titleClass: ['flex', 'items-center'],
      name: 'boolean_checkbox_basic_usage_field',
      value: true,
      type: 'boolean',
      viewType: 'checkbox',
    },
    {
      name: 'boolean_switch_basic_usage_block',
      type: 'code',
      info: 'Параметр "viewType: switch"',
      infoTitle: 'Basic usage with viewType=switch',
      cssClass: ['flex', 'items-start', 'gap-2'],
      fields: ['boolean_switch_basic_usage_field'],
    },
    {
      title: 'Title switch',
      titlePosition: 'left',
      titleClass: ['flex', 'items-center'],
      name: 'boolean_switch_basic_usage_field',
      value: false,
      type: 'boolean',
      viewType: 'switch',
    },
    {
      name: 'boolean_groupСheckbox_basic_usage_block',
      type: 'code',
      info: 'Параметр "viewType: groupСheckbox"',
      infoTitle: 'Basic usage with viewType=groupСheckbox',
      cssClass: ['flex', 'items-start', 'gap-2'],
      fields: ['boolean_groupСheckbox_basic_usage_field'],
    },
    {
      title: 'Title groupСheckbox',
      name: 'boolean_groupСheckbox_basic_usage_field',
      value: ['item_2'],
      type: 'boolean',
      options: [
        {
          label: 'Значение 1',
          value: 'item_1',
        },
        {
          label: 'Значение 2',
          value: 'item_2',
        },
        {
          label: 'Значение 3',
          value: 'item_3',
        },
      ],
      viewType: 'groupСheckbox',
    },
    {
      name: 'boolean_checkbox_css_style_usage_block',
      type: 'code',
      info: '"cssClass" - классы для самого поля. "style" - обьект с описанием css inline стилей. "parentClass" - классы для родительского контейнера.',
      infoTitle: 'Checkbox - cssClass and style, parentClass',
      cssClass: ['flex', 'items-start', 'gap-2', 'flex-col'],
      fields: [
        'boolean_checkbox_css_style_field_1',
        'boolean_checkbox_css_style_field_2',
        'boolean_checkbox_css_style_field_3',
      ],
    },
    {
      title: 'Parent Class',
      parentClass: ['p-4', 'bg-[#0072]', 'rounded-lg'],
      name: 'boolean_checkbox_css_style_field_1',
      value: true,
      type: 'boolean',
      viewType: 'checkbox',
    },
    {
      title: 'Style classes',
      style: {
        margin: '10px',
        width: '100px',
        backgroundColor: '#0022',
        borderRadius: '8px',
      },
      name: 'boolean_checkbox_css_style_field_2',
      value: true,
      type: 'boolean',
      viewType: 'checkbox',
    },
    {
      title: 'Css class',
      cssClass: ['testClass'],
      name: 'boolean_checkbox_css_style_field_3',
      value: true,
      type: 'boolean',
      viewType: 'checkbox',
    },
    {
      name: 'boolean_switch_css_style_usage_block',
      type: 'code',
      info: '"cssClass" - классы для самого поля. "style" - обьект с описанием css inline стилей. "parentClass" - классы для родительского контейнера.',
      infoTitle: 'Switch - cssClass and style, parentClass',
      cssClass: ['flex', 'items-start', 'gap-2', 'flex-col'],
      fields: [
        'boolean_switch_css_style_field_1',
        'boolean_switch_css_style_field_2',
        'boolean_switch_css_style_field_3',
      ],
    },
    {
      title: 'Parent Class',
      parentClass: ['p-4', 'bg-[#0072]', 'rounded-lg'],
      name: 'boolean_switch_css_style_field_1',
      value: false,
      type: 'boolean',
      viewType: 'switch',
    },
    {
      title: 'Style classes',
      style: {
        margin: '10px',
        width: '100px',
      },
      name: 'boolean_switch_css_style_field_2',
      value: false,
      type: 'boolean',
      viewType: 'switch',
    },
    {
      title: 'Css class',
      cssClass: ['testClass'],
      name: 'boolean_switch_css_style_field_3',
      value: true,
      type: 'boolean',
      viewType: 'switch',
    },
    {
      name: 'boolean_col_2',
      type: 'div',
      fields: [
        'boolean_checkbox_title_usage_block',
        'boolean_switch_title_usage_block',
        'boolean_groupСheckbox_title_usage_block',
      ],
      parentClass: ['w-2/6', 'pr-4'],
      cssClass: ['flex', 'gap-4', 'flex-col'],
    },
    {
      name: 'boolean_checkbox_title_usage_block',
      type: 'code',
      info: 'Параметр "title": выводит отборажение заголовка для поля (клик по тексту не меняет значение ckeckbox, для это нужно использовать label). "titlePosition": позиционирует title относительно самого поля (left/top/right/bottom). "titleClass" - параметр для классов применяемых к title (используются классы tailwind)',
      infoTitle: 'Title usage for checkbox',
      cssClass: ['flex', 'items-start', 'gap-4', 'flex-col'],
      fields: [
        'boolean_checkbox_title_usage_left_field',
        'boolean_checkbox_title_usage_top_field',
        'boolean_checkbox_title_usage_rigth_field',
      ],
    },
    {
      title: 'Left title',
      titlePosition: 'left',
      titleClass: ['font-medium'],
      name: 'boolean_checkbox_title_usage_left_field',
      value: true,
      type: 'boolean',
      viewType: 'checkbox',
    },
    {
      title: 'Top title',
      titlePosition: 'top',
      titleClass: ['text-xl'],
      name: 'boolean_checkbox_title_usage_top_field',
      value: false,
      type: 'boolean',
      viewType: 'checkbox',
    },
    {
      title: 'Right title',
      titlePosition: 'right',
      titleClass: ['font-medium', 'text-sm'],
      name: 'boolean_checkbox_title_usage_rigth_field',
      value: true,
      type: 'boolean',
      viewType: 'checkbox',
    },
    {
      name: 'boolean_switch_title_usage_block',
      type: 'code',
      info: 'Параметр "title": выводит отборажение заголовка для поля (клик по тексту не меняет значение ckeckbox, для это нужно использовать label)."titlePosition": позиционирует title относительно самого поля (left/top/right/bottom). "titleClass" - параметр для классов применяемых к title (используются классы tailwind)',
      infoTitle: 'Title usage for switch',
      cssClass: ['flex', 'items-start', 'gap-4', 'flex-col'],
      fields: [
        'boolean_switch_title_usage_left_field',
        'boolean_switch_title_usage_top_field',
        'boolean_switch_title_usage_rigth_field',
      ],
    },
    {
      title: 'Left title',
      titlePosition: 'left',
      titleClass: ['font-medium'],
      name: 'boolean_switch_title_usage_left_field',
      value: false,
      type: 'boolean',
      viewType: 'switch',
    },
    {
      title: 'Top title',
      titlePosition: 'top',
      titleClass: ['text-xl'],
      name: 'boolean_switch_title_usage_top_field',
      value: true,
      type: 'boolean',
      viewType: 'switch',
    },
    {
      title: 'Right title',
      titlePosition: 'right',
      titleClass: ['font-medium', 'text-sm'],
      name: 'boolean_switch_title_usage_rigth_field',
      value: true,
      type: 'boolean',
      viewType: 'switch',
    },
    {
      name: 'boolean_groupСheckbox_title_usage_block',
      type: 'code',
      info: 'Параметр "title": выводит отборажение заголовка для поля (клик по тексту не меняет значение ckeckbox, для это нужно использовать label). "titlePosition": позиционирует title относительно самого поля (left/top/right/bottom). "titleClass" - параметр для классов применяемых к title (используются классы tailwind)',
      infoTitle: 'Title usage for groupСheckbox',
      cssClass: ['flex', 'items-start', 'gap-4', 'flex-col'],
      fields: [
        'boolean_groupСheckbox_title_usage_left_field',
        'boolean_groupСheckbox_title_usage_top_field',
        'boolean_groupСheckbox_title_usage_rigth_field',
      ],
    },
    {
      title: 'Left title',
      titlePosition: 'left',
      titleClass: ['font-medium'],
      name: 'boolean_groupСheckbox_title_usage_left_field',
      value: ['item_2'],
      type: 'boolean',
      options: [
        {
          label: 'Значение 1',
          value: 'item_1',
        },
        {
          label: 'Значение 2',
          value: 'item_2',
        },
        {
          label: 'Значение 3',
          value: 'item_3',
        },
      ],
      viewType: 'groupСheckbox',
    },
    {
      title: 'Top title',
      titleClass: ['font-medium'],
      name: 'boolean_groupСheckbox_title_usage_top_field',
      value: ['item_1'],
      type: 'boolean',
      options: [
        {
          label: 'Значение 1',
          value: 'item_1',
        },
        {
          label: 'Значение 2',
          value: 'item_2',
        },
        {
          label: 'Значение 3',
          value: 'item_3',
        },
      ],
      viewType: 'groupСheckbox',
    },
    {
      title: 'Right title',
      titleClass: ['font-medium'],
      titlePosition: 'right',
      name: 'boolean_groupСheckbox_title_usage_rigth_field',
      value: ['item_3'],
      type: 'boolean',
      options: [
        {
          label: 'Значение 1',
          value: 'item_1',
        },
        {
          label: 'Значение 2',
          value: 'item_2',
        },
        {
          label: 'Значение 3',
          value: 'item_3',
        },
      ],
      viewType: 'groupСheckbox',
    },
    {
      name: 'boolean_col_3',
      type: 'div',
      fields: [
        'boolean_checkbox_label_usage_block',
        'boolean_switch_label_usage_block',
        'boolean_switch_disabled_usage_block',
        'boolean_groupСheckbox_options_usage_block',
      ],
      parentClass: ['w-2/6'],
      cssClass: ['flex', 'gap-4', 'flex-col'],
    },
    {
      name: 'boolean_checkbox_label_usage_block',
      type: 'code',
      info: 'Параметр "label": выводит отборажение кликабельного текста для поля (клик по тексту меняет значение boolean).',
      infoTitle: 'Label for checkbox',
      cssClass: ['flex', 'items-start', 'gap-4'],
      fields: ['boolean_checkbox_label_usage_basic_field'],
    },
    {
      label: 'Label for checkbox',
      name: 'boolean_checkbox_label_usage_basic_field',
      value: true,
      type: 'boolean',
      viewType: 'checkbox',
    },
    {
      name: 'boolean_switch_label_usage_block',
      type: 'code',
      info: 'Параметр "label": выводит отборажение кликабельного текста для поля (клик по тексту меняет значение boolean). "labelBefore": true - позиционирует label перед полем switch. По-умолчанию label отображается справа.',
      infoTitle: 'Label for switch, labelBefore',
      cssClass: ['flex', 'items-start', 'gap-4', 'flex-col'],
      fields: [
        'boolean_switch_label_usage_basic_field',
        'boolean_switch_label_usage_labelBefore_field',
      ],
    },
    {
      label: 'Left label',
      name: 'boolean_switch_label_usage_basic_field',
      value: true,
      type: 'boolean',
      viewType: 'switch',
    },
    {
      label: 'Label before label',
      labelBefore: true,
      name: 'boolean_switch_label_usage_labelBefore_field',
      value: true,
      type: 'boolean',
      viewType: 'switch',
    },
    {
      name: 'boolean_switch_disabled_usage_block',
      type: 'code',
      info: '"disabled": true/false - делает поле заблокированым. По-умолчанию значение false.',
      infoTitle: 'Disabled switch',
      cssClass: ['flex', 'items-start', 'gap-4', 'flex-col'],
      fields: ['boolean_switch_disabled_usage_basic_field'],
    },
    {
      label: 'Label',
      name: 'boolean_switch_disabled_usage_basic_field',
      value: true,
      type: 'boolean',
      viewType: 'switch',
      disabled: true,
    },
    {
      name: 'boolean_groupСheckbox_options_usage_block',
      type: 'code',
      info: '"options" -  массив значений (опций) для groupСheckbox. у каждой опции есть поле "label"-текст который будет отображаться для checkbox, и поле "value"-значение для этого checkbox.',
      infoTitle: 'Options for groupСheckbox',
      cssClass: ['flex', 'items-start', 'gap-4', 'flex-col'],
      fields: ['boolean_groupСheckbox_options_usage_basic_field'],
    },
    {
      title: 'Title groupСheckbox',
      name: 'boolean_groupСheckbox_options_usage_basic_field',
      value: ['item_1', 'item_2'],
      type: 'boolean',
      options: [
        {
          label: 'Значение 1',
          value: 'item_1',
        },
        {
          label: 'Значение 2',
          value: 'item_2',
        },
        {
          label: 'Значение 3',
          value: 'item_3',
        },
      ],
      viewType: 'groupСheckbox',
    },
    // RADIO block
    {
      name: 'radio_block',
      type: 'div',
      fields: ['radio_title_block', 'radio_body'],
    },
    {
      name: 'radio_title_block',
      type: 'div',
      fields: ['radio_title'],
    },
    {
      text: 'Radio',
      name: 'radio_title',
      type: 'label',
      cssClass: ['font-medium', 'text-xl'],
    },
    {
      name: 'radio_body',
      type: 'div',
      cssClass: ['flex', 'flex-wrap', 'my-[20px]'],
      fields: ['radio_col_1', 'radio_col_2'],
    },
    {
      name: 'radio_col_1',
      type: 'div',
      fields: [
        'radio_default_basic_usage_block',
        'radio_button_basic_usage_block',
        'radio_subtitle_usage_block',
      ],
      parentClass: ['w-1/2', 'pr-4'],
      cssClass: ['flex', 'gap-4', 'flex-col'],
    },
    {
      name: 'radio_col_2',
      type: 'div',
      fields: ['radio_options_usage_block', 'radio_style_css_usage_block'],
      parentClass: ['w-1/2'],
      cssClass: ['flex', 'gap-4', 'flex-col'],
    },
    {
      name: 'radio_default_basic_usage_block',
      type: 'code',
      info: '',
      infoTitle: 'Basic usage default',
      cssClass: ['flex', 'items-start', 'gap-2'],
      fields: ['radio_default_basic_usage_field'],
    },
    {
      name: 'radio_default_basic_usage_field',
      value: 2,
      type: 'radio',
      options: [
        {
          label: 'Значение 1',
          value: 1,
        },
        {
          label: 'Значение 2',
          value: 2,
        },
        {
          label: 'Значение 3',
          value: 3,
        },
      ],
    },
    {
      name: 'radio_button_basic_usage_block',
      type: 'code',
      info: '',
      infoTitle: 'Basic usage viewType = "button"',
      cssClass: ['flex', 'items-start', 'gap-2'],
      fields: ['radio_button_basic_usage_field'],
    },
    {
      name: 'radio_button_basic_usage_field',
      value: 1,
      type: 'radio',
      viewType: 'button',
      options: [
        {
          label: 'Значение 1',
          value: 1,
        },
        {
          label: 'Значение 2',
          value: 2,
        },
        {
          label: 'Значение 3',
          value: 3,
        },
      ],
    },
    {
      name: 'radio_subtitle_usage_block',
      type: 'code',
      info: '"subtitle": - объект описывающий вспомогатейльный текст под полем. Содержит поля: "text": - текст содержание, "style": - inline стили css применяемые для subtitle, "cssClass": -  массив классов для subtitle.',
      infoTitle: 'Subtitle',
      cssClass: ['flex', 'items-start', 'gap-4', 'flex-col'],
      fields: [
        'radio_subtitle_usage_field',
        'radio_subtitle_button_usage_field',
      ],
    },
    {
      name: 'radio_subtitle_usage_field',
      value: 1,
      type: 'radio',
      subtitle: {
        text: 'Subtitle',
        style: {
          padding: '5px',
          fontSize: '16px',
        },
        cssClass: ['bg-[#0022]'],
      },
      options: [
        {
          label: 'Значение 1',
          value: 1,
        },
        {
          label: 'Значение 2',
          value: 2,
        },
        {
          label: 'Значение 3',
          value: 3,
        },
      ],
    },
    {
      name: 'radio_subtitle_button_usage_field',
      value: 2,
      type: 'radio',
      viewType: 'button',
      subtitle: {
        text: 'Subtitle "viewType": button',
        style: {
          padding: '5px',
          fontSize: '16px',
        },
        cssClass: ['bg-[#0022]'],
      },
      options: [
        {
          label: 'Значение 1',
          value: 1,
        },
        {
          label: 'Значение 2',
          value: 2,
        },
        {
          label: 'Значение 3',
          value: 3,
        },
      ],
    },
    {
      name: 'radio_options_usage_block',
      type: 'code',
      info: '"options": - массив объектов который описывает значения для radio. Содержит поля: "label": - текст значения для отображения, "value": - уникальное значение (string/integer).',
      infoTitle: 'Options',
      cssClass: ['flex', 'items-start', 'gap-4', 'flex-col'],
      fields: ['radio_options_usage_field', 'radio_options_button_usage_field'],
    },
    {
      title: 'Basic usage',
      name: 'radio_options_usage_field',
      value: 1,
      type: 'radio',
      options: [
        {
          label: 'Значение 1',
          value: 1,
        },
        {
          label: 'Значение 2',
          value: 2,
        },
        {
          label: 'Значение 3',
          value: 3,
        },
      ],
    },
    {
      title: 'ViewType: button',
      name: 'radio_options_button_usage_field',
      value: [],
      viewType: 'button',
      type: 'radio',
      options: [
        {
          label: 'Значение 1',
          value: 1,
        },
        {
          label: 'Значение 2',
          value: 2,
        },
        {
          label: 'Значение 3',
          value: 3,
        },
      ],
    },
    {
      name: 'radio_style_css_usage_block',
      type: 'code',
      info: '"cssClass" - классы для самого поля. "style" - обьект с описанием css inline стилей. "buttonClass" - классы для описания стилей кнопок (работает только для viewType:button) "parentClass" - классы для родительского контейнера.',
      infoTitle: 'Style, cssClass and buttonClass',
      cssClass: ['flex', 'items-start', 'gap-4', 'flex-col'],
      fields: [
        'radio_style_css_usage_field',
        'radio_style_css_button_usage_field',
      ],
    },
    {
      title: 'Basic usage',
      name: 'radio_style_css_usage_field',
      value: 1,
      type: 'radio',
      style: {
        padding: '5px',
        fontSize: '16px',
      },
      cssClass: ['bg-[#0022]'],
      options: [
        {
          label: 'Значение 1',
          value: 1,
        },
        {
          label: 'Значение 2',
          value: 2,
        },
        {
          label: 'Значение 3',
          value: 3,
        },
      ],
    },
    {
      title: 'Style for "viewType":button',
      name: 'radio_style_css_button_usage_field',
      value: 1,
      type: 'radio',
      viewType: 'button',
      style: {
        padding: '5px',
        fontSize: '16px',
      },
      cssClass: ['bg-[#0022]'],
      buttonClass: ['p-4', 'text-xl'],
      options: [
        {
          label: 'Значение 1',
          value: 1,
        },
        {
          label: 'Значение 2',
          value: 2,
        },
        {
          label: 'Значение 3',
          value: 3,
        },
      ],
    },
    // LINK block
    {
      name: 'link_block',
      type: 'div',
      fields: ['link_title_block', 'link_body'],
    },
    {
      name: 'link_title_block',
      type: 'div',
      fields: ['link_title'],
    },
    {
      text: 'Link',
      name: 'link_title',
      type: 'label',
      cssClass: ['font-medium', 'text-xl'],
    },
    {
      name: 'link_body',
      type: 'div',
      cssClass: ['flex', 'flex-wrap', 'my-[20px]'],
      fields: ['link_col_1', 'link_col_2'],
    },
    {
      name: 'link_col_1',
      type: 'div',
      fields: [
        'link_default_basic_usage_block',
        'link_mode_router_basic_usage_block',
      ],
      parentClass: ['w-1/2', 'pr-4'],
      cssClass: ['flex', 'gap-4', 'flex-col'],
    },
    {
      name: 'link_col_2',
      type: 'div',
      fields: ['link_style_css_basic_usage_block'],
      parentClass: ['w-1/2'],
      cssClass: ['flex', 'gap-4', 'flex-col'],
    },
    {
      name: 'link_default_basic_usage_block',
      type: 'code',
      info: 'При базовом отображенни ссылки используется "HTML тег - <a></a>"',
      infoTitle: 'Basic usage link',
      cssClass: ['flex', 'items-start', 'gap-4', 'flex-col', 'w-[450px]'],
      fields: ['link_default_basic_usage_field'],
    },
    {
      text: 'Пример ссылки',
      name: 'link_default_basic_usage_field',
      type: 'link',
      link: '/main/ui_kit?example',
    },
    {
      name: 'link_mode_router_basic_usage_block',
      type: 'code',
      info: 'При отображении с указанием "mode: router", ссылка отображается при помощи vue-router (<router-link>).',
      infoTitle: 'Basic usage mode:router',
      cssClass: ['flex', 'items-start', 'gap-4', 'flex-col', 'w-[450px]'],
      fields: ['link_mode_router_basic_usage_field'],
    },
    {
      text: 'Пример ссылки mode - router',
      name: 'link_mode_router_basic_usage_field',
      type: 'link',
      mode: 'router',
      link: '/main/ui_kit?example',
    },
    {
      name: 'link_style_css_basic_usage_block',
      type: 'code',
      info: '"cssClass" - классы для самого поля. "style" - обьект с описанием css inline стилей. "parentClass" - классы для родительского контейнера.',
      infoTitle: 'Style, cssClass and parentClass',
      cssClass: ['flex', 'items-start', 'gap-4', 'flex-col'],
      fields: ['link_style_css_basic_usage_field'],
    },
    {
      text: 'Пример ссылки',
      name: 'link_style_css_basic_usage_field',
      type: 'link',
      link: '/main/ui_kit?example',
      style: {
        margin: '10px',
        fontWeight: '600',
      },
      cssClass: ['text-xl', 'p-2'],
      parentClass: ['bg-[#0022]'],
    },
    // LABEL block
    {
      name: 'label_block',
      type: 'div',
      fields: ['label_title_block', 'label_body'],
    },
    {
      name: 'label_title_block',
      type: 'div',
      fields: ['label_title'],
    },
    {
      text: 'Label',
      name: 'label_title',
      type: 'label',
      cssClass: ['font-medium', 'text-xl'],
    },
    {
      name: 'label_body',
      type: 'div',
      cssClass: ['flex', 'flex-wrap', 'my-[20px]'],
      fields: ['label_col_1', 'label_col_2', 'label_col_3'],
    },
    {
      name: 'label_col_1',
      type: 'div',
      fields: [
        'label_basic_usage_block',
        'label_style_css_usage_block',
        'label_external_value_usage_block',
      ],
      parentClass: ['w-2/6', 'pr-4'],
      cssClass: ['flex', 'gap-4', 'flex-col'],
    },
    {
      name: 'label_col_2',
      type: 'div',
      fields: [
        'label_tooltip_usage_block',
        'label_tooltip_show_icon_usage_block',
        'label_tooltip_position_icon_usage_block',
      ],
      parentClass: ['w-2/6', 'pr-4'],
      cssClass: ['flex', 'gap-4', 'flex-col'],
    },
    {
      name: 'label_col_3',
      type: 'div',
      fields: [
        'label_tooltip_icon_text_usage_block',
        'label_tooltip_trigger_color_usage_block',
      ],
      parentClass: ['w-2/6'],
      cssClass: ['flex', 'gap-4', 'flex-col'],
    },
    {
      name: 'label_basic_usage_block',
      type: 'code',
      info: '',
      infoTitle: 'Basic usage Label',
      cssClass: ['flex', 'items-center', 'gap-2', 'w-[450px]'],
      fields: ['label_basic_usage_field'],
    },
    {
      text: 'Пример label 1234567890',
      name: 'label_basic_usage_field',
      type: 'label',
    },
    {
      name: 'label_style_css_usage_block',
      type: 'code',
      info: '',
      infoTitle: 'Style, cssClass, parentClass for Label',
      cssClass: ['flex', 'items-center', 'gap-2', 'w-[450px]'],
      fields: ['label_style_css_usage_field'],
    },
    {
      text: 'Пример label styles',
      name: 'label_style_css_usage_field',
      type: 'label',
      cssClass: ['text-xl', 'mx-4', 'font-medium'],
      parentClass: ['p-2', 'bg-[#0022]'],
      style: {
        color: '#007',
      },
    },
    {
      name: 'label_external_value_usage_block',
      type: 'code',
      info: '"externalValue" - параметр отвечает за что, будет ли обновлено значение поля (текст label) после получения/отправки данных на сервер.',
      infoTitle: 'ExternalValue Label',
      cssClass: ['flex', 'items-center', 'gap-2', 'w-[450px]'],
      fields: ['label_external_value_usage_field'],
    },
    {
      text: 'Пример externalValue label',
      name: 'label_external_value_usage_field',
      type: 'label',
      cssClass: ['text-xl', 'mx-4', 'font-medium', 'text-[#ff0000]'],
      externalValue: true,
    },
    {
      name: 'label_tooltip_usage_block',
      type: 'code',
      info: '',
      infoTitle: 'Default usage tooltip for Label',
      cssClass: ['flex', 'items-center', 'gap-2', 'w-[450px]'],
      fields: ['label_tooltip_usage_field'],
    },
    {
      text: 'Пример tooltip label',
      name: 'label_tooltip_usage_field',
      type: 'label',
      cssClass: ['text-xl', 'mx-4', 'font-medium'],
      showTooltip: {
        showIcon: true,
        positionIcon: 'right',
        icon: 'fa-regular fa-circle-question',
        text: 'Текст тултипа',
        trigger: 'hover',
        color: 'gray',
      },
    },
    {
      name: 'label_tooltip_show_icon_usage_block',
      type: 'code',
      info: '"showIcon" - параметр отвечает за отображение иконки подсказки. Если значение true - то иконка отображается, если false - то подсказка всплывает после наведения на сам текст label.',
      infoTitle: 'showIcon params for Tooltip',
      cssClass: ['flex', 'gap-2', 'flex-col'],
      fields: [
        'label_tooltip_icon_usage_field_1',
        'label_tooltip_icon_usage_field_2',
      ],
    },
    {
      text: 'Пример showIcon = true',
      name: 'label_tooltip_icon_usage_field_1',
      type: 'label',
      cssClass: ['text-xl', 'mx-4', 'font-medium'],
      showTooltip: {
        showIcon: true,
        positionIcon: 'right',
        icon: 'fa-regular fa-circle-question',
        text: 'Иконка отображается',
        trigger: 'hover',
        color: 'gray',
      },
    },
    {
      text: 'Пример showIcon = false',
      name: 'label_tooltip_icon_usage_field_2',
      type: 'label',
      cssClass: ['text-xl', 'mx-4', 'font-medium'],
      showTooltip: {
        showIcon: false,
        text: 'Иконка не отображается',
        trigger: 'hover',
        color: 'gray',
      },
    },
    {
      name: 'label_tooltip_position_icon_usage_block',
      type: 'code',
      info: '"positionIcon" - параметр отвечает за позицию иконки подсказки отностительно текста label. Обязательный параметр (left/right). ',
      infoTitle: 'positionIcon params for Tooltip',
      cssClass: ['flex', 'gap-2', 'flex-col'],
      fields: [
        'label_tooltip_position_icon_usage_field_1',
        'label_tooltip_position_icon_usage_field_2',
      ],
    },
    {
      text: 'Пример positionIcon - right',
      name: 'label_tooltip_position_icon_usage_field_1',
      type: 'label',
      cssClass: ['text-xl', 'font-medium'],
      showTooltip: {
        showIcon: true,
        positionIcon: 'right',
        icon: 'fa-regular fa-circle-question',
        text: 'Иконка отображается слева',
        trigger: 'hover',
        color: 'gray',
      },
    },
    {
      text: 'Пример positionIcon - left',
      name: 'label_tooltip_position_icon_usage_field_2',
      type: 'label',
      cssClass: ['text-xl', 'font-medium'],
      showTooltip: {
        showIcon: true,
        positionIcon: 'left',
        icon: 'fa-regular fa-circle-question',
        text: 'Иконка отображается справа',
        trigger: 'hover',
        color: 'gray',
      },
    },
    {
      name: 'label_tooltip_icon_text_usage_block',
      type: 'code',
      info: '"icon" - параметр в котором перечисляются fa-иконки, отображающиеся в подсказке. (Используются только FontAwesome icons, передаются строкой). "text" - параметр отвечает за текст, который содержит всплывающая подсказка.',
      infoTitle: 'icon and text params for Tooltip',
      cssClass: ['flex', 'gap-2', 'flex-col'],
      fields: [
        'label_tooltip_icon_text_usage_field_1',
        'label_tooltip_icon_text_usage_field_2',
        'label_tooltip_icon_text_usage_field_3',
      ],
    },
    {
      text: 'Пример разных icons',
      name: 'label_tooltip_icon_text_usage_field_1',
      type: 'label',
      cssClass: ['text-xl', 'font-medium'],
      showTooltip: {
        showIcon: true,
        positionIcon: 'right',
        icon: 'fa-regular fa-folder-closed',
        text: 'Текст подсказки',
        trigger: 'hover',
        color: 'gray',
      },
    },
    {
      text: 'Пример разных icons',
      name: 'label_tooltip_icon_text_usage_field_2',
      type: 'label',
      cssClass: ['text-xl', 'font-medium'],
      showTooltip: {
        showIcon: true,
        positionIcon: 'right',
        icon: 'fa-regular fa-closed-captioning',
        text: 'Текст подсказки',
        trigger: 'hover',
        color: 'gray',
      },
    },
    {
      text: 'Пример text для подсказки',
      name: 'label_tooltip_icon_text_usage_field_3',
      type: 'label',
      cssClass: ['text-xl', 'font-medium'],
      showTooltip: {
        showIcon: true,
        positionIcon: 'right',
        icon: 'fa-regular fa-circle-question',
        text: 'Текстовое содержание подсказки 1234567890',
        trigger: 'hover',
        color: 'gray',
      },
    },
    {
      name: 'label_tooltip_trigger_color_usage_block',
      type: 'code',
      info: '"trigger" - параметр отвечает за то на какое событие пользователя будет отображаться подсказка (hover/click). "color" - параметр в котором можно передать фон всплывающей подсказки.',
      infoTitle: 'trigger and color params for Tooltip',
      cssClass: ['flex', 'gap-2', 'flex-col'],
      fields: [
        'label_tooltip_trigger_color_usage_field_1',
        'label_tooltip_trigger_color_usage_field_2',
        'label_tooltip_trigger_color_usage_field_3',
      ],
    },
    {
      text: 'Пример trigger hover',
      name: 'label_tooltip_trigger_color_usage_field_1',
      type: 'label',
      cssClass: ['text-xl', 'font-medium'],
      showTooltip: {
        showIcon: true,
        positionIcon: 'right',
        icon: 'fa-regular fa-circle-question',
        text: 'Текст подсказки',
        trigger: 'hover',
        color: 'gray',
      },
    },
    {
      text: 'Пример trigger click',
      name: 'label_tooltip_trigger_color_usage_field_2',
      type: 'label',
      cssClass: ['text-xl', 'font-medium'],
      showTooltip: {
        showIcon: true,
        positionIcon: 'right',
        icon: 'fa-regular fa-circle-question',
        text: 'Подсказка появилась после клика',
        trigger: 'click',
        color: 'red',
      },
    },
    {
      text: 'Пример color задан через #',
      name: 'label_tooltip_trigger_color_usage_field_3',
      type: 'label',
      cssClass: ['text-xl', 'font-medium'],
      showTooltip: {
        showIcon: true,
        positionIcon: 'right',
        icon: 'fa-regular fa-circle-question',
        text: 'Подсказка',
        trigger: 'hover',
        color: '#0077',
      },
    },
  ],
}
