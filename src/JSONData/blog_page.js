export default {
  title: 'Блог',
  page: 'blog_page',
  groups: [
    {
      name: 'blog_page',
      fields: ['blog_page__title_block', 'blog_page__body_block'],
    },
  ],
  fields: [
    {
      name: 'blog_page__title_block',
      type: 'div',
      cssClass: ['bg-white', 'p-6', 'mb-6', 'flex-col'],
      fields: ['blog_page__breadcrumbs', 'blog_page__header_block'],
    },
    {
      name: 'blog_page__breadcrumbs',
      type: 'breadcrumbs',
      options: [
        {
          title: 'Главная',
          path: '/',
        },
        {
          title: 'Блог',
          path: '/main/blog_page',
        },
      ],
    },
    {
      name: 'blog_page__header_block',
      type: 'div',
      cssClass: ['flex', 'items-end', 'justify-between'],
      fields: ['header_block__title'],
    },
    {
      text: 'Страницы блога',
      name: 'header_block__title',
      type: 'label',
      parentClass: ['mt-4'],
      cssClass: ['font-medium', 'text-xl'],
    },
    {
      name: 'blog_page__body_block',
      type: 'div',
      cssClass: ['bg-white'],
      fields: ['blog_page__wrapper_block'],
    },
    {
      name: 'blog_page__wrapper_block',
      type: 'div',
      cssClass: ['w-full', 'p-6'],
      fields: [
        'blog_page__add_modal_btn',
        'blog_page__table',
        'blog_page__add_modal',
      ],
    },
    {
      type: 'button',
      value: 'Добавить',
      name: 'blog_page__add_modal_btn',
      buttonType: 'primary',
      parentClass: ['flex', 'justify-end', '-mb-8'],
      icon: {
        name: 'fa-solid fa-plus',
      },
      handlers: [
        {
          name: 'editField',
          params: {
            pageName: 'blog_page',
            blockName: 'blog_page__add_modal',
            fieldName: 'style',
            value: { display: 'flex' },
          },
        },
      ],
    },
    {
      name: 'blog_page__add_modal',
      type: 'div',
      handlers: [
        {
          name: 'editField',
          params: {
            pageName: 'blog_page',
            blockName: 'blog_page__add_modal',
            fieldName: 'style',
            value: { display: 'none' },
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'blog_page',
            blockName: 'blog_page__add_modal',
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
      title: 'Добавление страницы блога',
      titleClass: ['font-medium', 'mb-4'],
      name: 'block_modal_added_content',
      type: 'div',
      containerClass: ['bg-white', 'p-6', 'gap-4', 'w-480'],
      fields: ['page_name', 'page_link', 'buttons_block_footer'],
    },
    {
      title: 'Название',
      name: 'page_name',
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
      title: 'Ссылка',
      description: '/',
      name: 'page_link',
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
      name: 'buttons_block_footer',
      type: 'div',
      cssClass: ['flex', 'justify-end', 'gap-2'],
      fields: ['blog_page__cancel_button', 'blog_page__add_button'],
    },
    {
      type: 'button',
      value: 'Отменить',
      name: 'blog_page__cancel_button',
      handlers: [
        {
          name: 'editField',
          params: {
            pageName: 'blog_page',
            blockName: 'blog_page__add_modal',
            fieldName: 'style',
            value: { display: 'none' },
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'blog_page',
            blockName: 'blog_page__add_modal',
          },
        },
      ],
    },
    {
      type: 'button',
      value: 'Добавить',
      name: 'blog_page__add_button',
      buttonType: 'primary',
      showLoading: true,
      handlers: [
        {
          name: 'validateHandler',
          params: {
            pageName: 'blog_page',
            blockName: 'blog_page__add_modal',
          },
        },
        {
          name: 'addDataToTableField',
          params: {
            pageName: 'blog_page',
            tableName: 'blog_page__table',
            data: {
              page_name: 'page_name',
              page_link: 'page_link',
              active_status: true,
              page_sort: 500,
              page_change_date: 1666803600,
            },
            request: {
              method: 'post',
              endpoint: 'https://ekat.sergeivl.ru/api/tests/request',
            },
          },
        },
        {
          name: 'editField',
          params: {
            pageName: 'blog_page',
            blockName: 'blog_page__add_modal',
            fieldName: 'style',
            value: { display: 'none' },
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'blog_page',
            blockName: 'blog_page__add_modal',
          },
        },
      ],
    },
    {
      name: 'blog_page__table',
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
        selection: true,
        search: [
          {
            name: 'blog_search',
            type: 'input',
            fields: ['page_name', 'page_id'],
          },
        ],
      },
      data: [
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 19,
          page_change_date: 1666803600,
          page_id: {
            title: 264,
            link: '/main/blog_page_edit',
          },
        },
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 500,
          page_change_date: 1666803600,
          page_id: {
            title: 547,
            link: '/main/blog_page_edit',
          },
        },
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 14,
          page_change_date: 1666803600,
          page_id: {
            title: 789,
            link: '/main/blog_page_edit',
          },
        },
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 17,
          page_change_date: 1666803600,
          page_id: {
            title: 865,
            link: '/main/blog_page_edit',
          },
        },
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 19,
          page_change_date: 1666803600,
          page_id: {
            title: 264,
            link: '/main/blog_page_edit',
          },
        },
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 500,
          page_change_date: 1666803600,
          page_id: {
            title: 547,
            link: '/main/blog_page_edit',
          },
        },
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 14,
          page_change_date: 1666803600,
          page_id: {
            title: 789,
            link: '/main/blog_page_edit',
          },
        },
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 17,
          page_change_date: 1666803600,
          page_id: {
            title: 865,
            link: '/main/blog_page_edit',
          },
        },
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 19,
          page_change_date: 1666803600,
          page_id: {
            title: 264,
            link: '/main/blog_page_edit',
          },
        },
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 500,
          page_change_date: 1666803600,
          page_id: {
            title: 547,
            link: '/main/blog_page_edit',
          },
        },
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 14,
          page_change_date: 1666803600,
          page_id: {
            title: 789,
            link: '/main/blog_page_edit',
          },
        },
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 17,
          page_change_date: 1666803600,
          page_id: {
            title: 865,
            link: '/main/blog_page_edit',
          },
        },
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 19,
          page_change_date: 1666803600,
          page_id: {
            title: 264,
            link: '/main/blog_page_edit',
          },
        },
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 500,
          page_change_date: 1666803600,
          page_id: {
            title: 547,
            link: '/main/blog_page_edit',
          },
        },
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 14,
          page_change_date: 1666803600,
          page_id: {
            title: 789,
            link: '/main/blog_page_edit',
          },
        },
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 17,
          page_change_date: 1666803600,
          page_id: {
            title: 865,
            link: '/main/blog_page_edit',
          },
        },
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 19,
          page_change_date: 1666803600,
          page_id: {
            title: 264,
            link: '/main/blog_page_edit',
          },
        },
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 500,
          page_change_date: 1666803600,
          page_id: {
            title: 547,
            link: '/main/blog_page_edit',
          },
        },
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 14,
          page_change_date: 1666803600,
          page_id: {
            title: 789,
            link: '/main/blog_page_edit',
          },
        },
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 17,
          page_change_date: 1666803600,
          page_id: {
            title: 865,
            link: '/main/blog_page_edit',
          },
        },
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 19,
          page_change_date: 1666803600,
          page_id: {
            title: 264,
            link: '/main/blog_page_edit',
          },
        },
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 500,
          page_change_date: 1666803600,
          page_id: {
            title: 547,
            link: '/main/blog_page_edit',
          },
        },
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 14,
          page_change_date: 1666803600,
          page_id: {
            title: 789,
            link: '/main/blog_page_edit',
          },
        },
        {
          page_name: {
            title:
              'Обзор ТВ-адаптера Xiaomi Mi TV Stick Global 4K HDR - Все подробности',
            link: '/main/blog_page_edit',
          },
          active_status: true,
          page_sort: 17,
          page_change_date: 1666803600,
          page_id: {
            title: 865,
            link: '/main/blog_page_edit',
          },
        },
      ],
      columns: [
        {
          dataIndex: 'actions',
          widget: {
            name: 'actions',
          },
          width: 10,
          hide: false,
          delete: true,
          edit: true,
          copy: true,
        },
        {
          title: 'Название',
          dataIndex: 'page_name',
          key: 'page_name',
          resizable: true,
          widget: {
            name: 'link',
            type: 'router',
          },
          width: 600,
        },
        {
          title: 'Активность',
          dataIndex: 'active_status',
          key: 'active_status',
          widget: {
            name: 'checkbox',
            type: 'text',
          },
          width: 50,
        },
        {
          title: 'Сорт.',
          dataIndex: 'page_sort',
          key: 'page_sort',
          widget: {
            name: 'text',
          },
          width: 50,
        },
        {
          title: 'Дата изменения',
          dataIndex: 'page_change_date',
          key: 'page_change_date',
          widget: {
            name: 'date',
            format: 'DD.MM.YYYY',
          },
          width: 100,
          sort: true,
        },
        {
          title: 'ID',
          dataIndex: 'page_id',
          key: 'page_id',
          widget: {
            name: 'link',
            type: 'roouter',
          },
          width: 50,
          sort: true,
        },
      ],
    },
  ],
}
