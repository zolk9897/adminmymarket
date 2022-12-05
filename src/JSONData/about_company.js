export default {
  page: 'about_company',
  useTitle: {
    title: 'Контент: О компании: Редактирование',
    operations: [
      {
        text: 'Сохранить',
        type: 'primary',
        handlers: [
          {
            name: 'pushData',
            params: {
              pageName: 'about_company',
              blockName: 'element_tab__container_block',
            },
          },
        ],
      },
      {
        text: 'Скопировать',
        icon: 'fa-solid fa-copy',
      },
    ],
    breadcrumbs: [
      {
        title: 'Главная',
        path: '/',
      },
      {
        title: 'Контент',
      },
      {
        title: 'Страницы',
      },
      {
        title: 'О компании',
        path: '/main/about_company',
      },
    ],
  },
  groups: [
    {
      tabName: 'Элемент',
      name: 'element_tab',
      fields: ['element_tab__title_block', 'element_tab__container'],
    },
    {
      tabName: 'Подробно',
      name: 'more_tab',
      fields: ['more_tab__title_block', 'more_tab__container_block'],
    },
    {
      tabName: 'SEO',
      name: 'seo_tab',
      fields: ['seo_tab__container_block'],
    },
  ],
  fields: [
    {
      name: 'element_tab__title_block',
      type: 'div',
      cssClass: ['bg-white', 'p-6', 'border-b', 'border-borderColor'],
      fields: ['title_1'],
    },
    {
      name: 'more_tab__title_block',
      type: 'div',
      cssClass: ['bg-white', 'p-6', 'border-b', 'border-borderColor'],
      fields: ['title_2'],
    },
    {
      text: 'Элемент',
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
      name: 'element_tab__container',
      type: 'div',
      cssClass: ['bg-white', 'p-6'],
      fields: ['element_tab__container_block'],
    },
    {
      name: 'element_tab__container_block',
      type: 'div',
      cssClass: ['flex', 'flex-col', 'gap-6', 'w-[700px]', 'mx-auto'],
      fields: [
        'id_field_label',
        'create_field_label',
        'updated_field_label',
        'active_switch',
        'company_name_input',
        'slug_input',
        'sorting_input',
        'link_input',
        'buttons_container_block',
      ],
    },
    {
      title: 'ID',
      titlePosition: 'left',
      text: '456',
      name: 'id_field_label',
      type: 'label',
      parentClass: ['w-500'],
      cssClass: ['font-medium'],
    },
    {
      title: 'Создан',
      titlePosition: 'left',
      text: '23.05.2022   17:11:11  Алексей',
      name: 'create_field_label',
      type: 'label',
      parentClass: ['w-500'],
      cssClass: ['font-medium'],
    },
    {
      title: 'Изменён',
      titlePosition: 'left',
      text: '24.05.2022   16:11:11  Алексей',
      name: 'updated_field_label',
      type: 'label',
      parentClass: ['w-500'],
      cssClass: ['font-medium'],
    },
    {
      title: 'Активность',
      titlePosition: 'left',
      name: 'active_switch',
      value: true,
      type: 'boolean',
      viewType: 'switch',
      parentClass: ['w-500'],
    },
    {
      title: 'Название',
      titleClass: ['mt-2'],
      titlePosition: 'left',
      name: 'company_name_input',
      format: 'text',
      value: 'О компании',
      type: 'input',
      size: 'large',
      parentClass: ['w-500'],
      validation: {
        type: 'string',
        rules: [
          {
            type: 'required',
          },
          {
            type: 'min',
            params: [5],
          },
          {
            type: 'max',
            params: [10],
          },
        ],
      },
    },
    {
      title: 'Символьный код',
      titleClass: ['mt-2'],
      titlePosition: 'left',
      name: 'slug_input',
      format: 'text',
      value: 'o-kompanii@aa.ru',
      type: 'input',
      size: 'large',
      parentClass: ['w-500'],
      validation: {
        type: 'string',
        rules: [
          {
            type: 'required',
            params: ['Это поле обязательно для заполнения'],
          },
          {
            type: 'email',
          },
        ],
      },
    },
    {
      title: 'Сортировка',
      titleClass: ['mt-2'],
      titlePosition: 'left',
      name: 'sorting_input',
      format: 'text',
      value: '500',
      type: 'input',
      size: 'large',
      parentClass: ['w-500'],
      validation: {
        type: 'string',
        rules: [
          {
            type: 'required',
          },
        ],
      },
    },
    {
      title: 'Ссылка',
      titleClass: ['mt-2'],
      titlePosition: 'left',
      name: 'link_input',
      format: 'text',
      value: '/main/o-kompanii',
      type: 'input',
      size: 'large',
      parentClass: ['w-500'],
      validation: {
        type: 'string',
        rules: [
          {
            type: 'required',
          },
        ],
      },
    },
    {
      name: 'buttons_container_block',
      type: 'div',
      cssClass: ['flex', 'gap-2.5', 'ml-[204px]'],
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
    {
      name: 'more_tab__container_block',
      type: 'div',
      cssClass: ['bg-white'],
      fields: ['more_tab__body_block'],
    },
    {
      name: 'more_tab__body_block',
      type: 'div',
      fields: ['more_tab__editor_block', 'more_tab__buttons_container_block'],
    },
    {
      name: 'more_tab__editor_block',
      type: 'div',
      cssClass: ['h-80', 'p-6'],
      fields: ['editor_field'],
    },
    {
      name: 'more_tab__buttons_container_block',
      type: 'div',
      cssClass: ['flex', 'justify-end', 'p-6', 'gap-2'],
      fields: ['more_tab__cancel_button', 'more_tab__save_button'],
    },
    {
      type: 'button',
      value: 'Сохранить',
      name: 'more_tab__save_button',
      size: 'large',
      buttonType: 'primary',
      handlers: [
        {
          name: 'pushData',
          params: {
            pageName: 'about_company',
            blockName: 'more_tab__editor_block',
            endpoint: 'https://ekat.sergeivl.ru/api/tests/request',
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'about_company',
            blockName: 'more_tab__editor_block',
          },
        },
      ],
    },
    {
      type: 'button',
      value: 'Отмена',
      name: 'more_tab__cancel_button',
      size: 'large',
      buttonType: 'default',
      disabled: false,
    },
    {
      label: 'SEO Текст страницы',
      name: 'editor_field',
      value: '<h1>Заголовок</h1>',
      type: 'editor',
      cssClass: ['h-80'],
    },
    {
      name: 'seo_tab__container_block',
      type: 'div',
      cssClass: ['bg-white'],
      fields: ['seo_tab__body_block_1'],
    },
    {
      name: 'seo_tab__body_block_1',
      type: 'div',
      fields: [
        'seo_tab__title_block_1',
        'meta_title_block',
        'meta_description_block',
        'section_block',
        'seo_tab__title_block_2',
        'alt_template_block',
        'title_template_block',
        'file_name_template_block',
        'seo_tab__title_block_3',
        'availability_block',
        'search_tags_block',
        'seo_tab__buttons_container_block',
      ],
    },
    {
      text: 'Настройки SEO информации',
      name: 'seo_tab__title_block_1',
      type: 'label',
      parentClass: ['pt-4', 'ml-85', 'mb-6', 'font-semibold', 'text-base'],
    },
    {
      text: 'Настройки для картинок анонса элементов',
      name: 'seo_tab__title_block_2',
      type: 'label',
      parentClass: [
        'pt-4',
        'ml-85',
        'mb-6',
        'mt-10',
        'font-semibold',
        'text-base',
      ],
    },
    {
      text: 'Дополнительно',
      name: 'seo_tab__title_block_3',
      type: 'label',
      parentClass: [
        'pt-4',
        'ml-85',
        'mb-6',
        'mt-10',
        'font-semibold',
        'text-base',
      ],
    },
    {
      name: 'meta_title_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[350px_1fr]', 'gap-2'],
      fields: ['meta_title_lable', 'meta_title_inputs_fields'],
    },
    {
      name: 'meta_title_inputs_fields',
      type: 'div',
      fields: [
        'meta_title_input',
        'meta_title_checkbox',
        'sublable_input_1',
        'sublable_input_2',
        'sublable_input_3',
      ],
    },
    {
      text: 'Шаблон META TITLE:',
      name: 'meta_title_lable',
      type: 'label',
      parentClass: ['flex', 'justify-end', 'mt-2.5'],
    },
    {
      name: 'meta_title_input',
      format: 'text',
      value: 'Интернет-магазин Популярных (ТОР) Гаджетов - ИгроРай',
      type: 'input',
      parentClass: ['max-w-580', 'dots_after_input', 'relative'],
      validation: {
        type: 'string',
        rules: [
          {
            type: 'required',
          },
        ],
      },
    },
    {
      label: 'Изменить для этого раздела и его подразделов.',
      name: 'meta_title_checkbox',
      value: true,
      type: 'boolean',
      viewType: 'checkbox',
      parentClass: ['mt-1'],
    },
    {
      text: 'Интернет-магазин Популярных (ТОР) Гаджетов - ИгроРай',
      name: 'sublable_input_1',
      type: 'label',
      parentClass: ['mb-2'],
      cssClass: ['ml-6', 'font-medium'],
    },
    {
      text: 'Количество символов: 52',
      name: 'sublable_input_2',
      type: 'label',
      cssClass: ['ml-6', 'font-normal', 'text-13px'],
    },
    {
      text: 'Количество слов: 6',
      name: 'sublable_input_3',
      type: 'label',
      cssClass: ['ml-6', 'font-normal', 'text-13px'],
    },
    {
      name: 'meta_description_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[350px_1fr]', 'gap-2', 'mt-8'],
      fields: ['meta_description_lable', 'meta_description_inputs_fields'],
    },
    {
      name: 'meta_description_inputs_fields',
      type: 'div',
      fields: [
        'meta_description_input',
        'meta_description_checkbox',
        'sublable_description_input_1',
        'sublable_description_input_2',
      ],
    },
    {
      text: 'Шаблон META DESCRIPTION:',
      name: 'meta_description_lable',
      type: 'label',
      parentClass: ['flex', 'justify-end', 'mt-2.5'],
    },
    {
      name: 'meta_description_input',
      format: 'text',
      value: '',
      type: 'input',
      parentClass: ['max-w-580', 'dots_after_input', 'relative'],
      validation: {
        type: 'string',
        rules: [
          {
            type: 'required',
            params: ['Это поле обязательно для заполнения'],
          },
        ],
      },
    },
    {
      label: 'Изменить для этого раздела и его подразделов.',
      name: 'meta_description_checkbox',
      value: false,
      type: 'boolean',
      viewType: 'checkbox',
      parentClass: ['mt-1'],
    },
    {
      text: 'Количество символов: 0',
      name: 'sublable_description_input_1',
      type: 'label',
      cssClass: ['ml-6', 'font-normal', 'text-13px'],
    },
    {
      text: 'Количество слов: 0',
      name: 'sublable_description_input_2',
      type: 'label',
      cssClass: ['ml-6', 'font-normal', 'text-13px'],
    },
    {
      name: 'section_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[350px_1fr]', 'gap-2', 'mt-8'],
      fields: ['section_lable', 'section_inputs_fields'],
    },
    {
      name: 'section_inputs_fields',
      type: 'div',
      fields: [
        'section_input',
        'section_checkbox',
        'sublable_section_input_1',
        'sublable_section_input_2',
      ],
    },
    {
      text: 'Заголовок раздела:',
      name: 'section_lable',
      type: 'label',
      parentClass: ['flex', 'justify-end', 'mt-2.5'],
    },
    {
      name: 'section_input',
      format: 'text',
      value: '',
      type: 'input',
      validation: {
        type: 'string',
        rules: [
          {
            type: 'required',
          },
        ],
      },
      parentClass: ['max-w-580', 'dots_after_input', 'relative'],
    },
    {
      label: 'Изменить для этого раздела и его подразделов.',
      name: 'section_checkbox',
      value: false,
      type: 'boolean',
      viewType: 'checkbox',
      parentClass: ['mt-1'],
    },
    {
      text: 'Количество символов: 0',
      name: 'sublable_section_input_1',
      type: 'label',
      cssClass: ['ml-6', 'font-normal', 'text-13px'],
    },
    {
      text: 'Количество слов: 0',
      name: 'sublable_section_input_2',
      type: 'label',
      cssClass: ['ml-6', 'font-normal', 'text-13px'],
    },
    {
      name: 'alt_template_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[350px_1fr]', 'gap-2', 'mt-8'],
      fields: ['alt_template_lable', 'alt_template_inputs_fields'],
    },
    {
      name: 'alt_template_inputs_fields',
      type: 'div',
      fields: [
        'alt_template_input',
        'alt_template_checkbox',
        'sublable_alt_template_input_1',
        'sublable_alt_template_input_2',
      ],
    },
    {
      text: 'Шаблон ALT:',
      name: 'alt_template_lable',
      type: 'label',
      parentClass: ['flex', 'justify-end', 'mt-2.5'],
    },
    {
      name: 'alt_template_input',
      format: 'text',
      value: '',
      type: 'input',
      validation: {
        type: 'string',
        rules: [
          {
            type: 'required',
          },
        ],
      },
      parentClass: ['max-w-580', 'dots_after_input', 'relative'],
    },
    {
      label: 'Изменить для этого раздела и его подразделов.',
      name: 'alt_template_checkbox',
      value: false,
      type: 'boolean',
      viewType: 'checkbox',
      parentClass: ['mt-1'],
    },
    {
      text: 'Количество символов: 0',
      name: 'sublable_alt_template_input_1',
      type: 'label',
      cssClass: ['ml-6', 'font-normal', 'text-13px'],
    },
    {
      text: 'Количество слов: 0',
      name: 'sublable_alt_template_input_2',
      type: 'label',
      cssClass: ['ml-6', 'font-normal', 'text-13px'],
    },
    {
      name: 'title_template_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[350px_1fr]', 'gap-2', 'mt-8'],
      fields: ['title_template_lable', 'title_template_inputs_fields'],
    },
    {
      name: 'title_template_inputs_fields',
      type: 'div',
      fields: [
        'title_template_input',
        'title_template_checkbox',
        'sublable_title_template_input_1',
        'sublable_title_template_input_2',
      ],
    },
    {
      text: 'Шаблон TITLE:',
      name: 'title_template_lable',
      type: 'label',
      parentClass: ['flex', 'justify-end', 'mt-2.5'],
    },
    {
      name: 'title_template_input',
      format: 'text',
      value: '',
      type: 'input',
      validation: {
        type: 'string',
        rules: [
          {
            type: 'required',
          },
        ],
      },
      parentClass: ['max-w-580', 'dots_after_input', 'relative'],
    },
    {
      label: 'Изменить для этого раздела и его подразделов.',
      name: 'title_template_checkbox',
      value: false,
      type: 'boolean',
      viewType: 'checkbox',
      parentClass: ['mt-1'],
    },
    {
      text: 'Количество символов: 0',
      name: 'sublable_title_template_input_1',
      type: 'label',
      cssClass: ['ml-6', 'font-normal', 'text-13px'],
    },
    {
      text: 'Количество слов: 0',
      name: 'sublable_title_template_input_2',
      type: 'label',
      cssClass: ['ml-6', 'font-normal', 'text-13px'],
    },
    {
      name: 'file_name_template_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[350px_1fr]', 'gap-2', 'mt-8'],
      fields: ['file_name_template_lable', 'file_name_template_inputs_fields'],
    },
    {
      name: 'file_name_template_inputs_fields',
      type: 'div',
      fields: ['file_name_template_input'],
    },
    {
      text: 'Шаблон имени файла:',
      name: 'file_name_template_lable',
      type: 'label',
      parentClass: ['flex', 'justify-end', 'mt-2.5'],
    },
    {
      name: 'file_name_template_input',
      format: 'text',
      value: '',
      type: 'input',
      validation: {
        type: 'string',
        rules: [
          {
            type: 'required',
          },
        ],
      },
      parentClass: ['max-w-580', 'dots_after_input', 'relative'],
    },
    {
      name: 'availability_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[350px_1fr]', 'gap-2', 'mt-8'],
      fields: ['availability_lable', 'availability_inputs_fields'],
    },
    {
      name: 'availability_inputs_fields',
      type: 'div',
      fields: ['availability_radio_group'],
    },
    {
      text: 'Доступность:',
      name: 'availability_lable',
      type: 'label',
      parentClass: ['flex', 'justify-end'],
    },
    {
      name: 'availability_radio_group',
      value: 'all',
      type: 'radio',
      validation: {
        type: 'string',
        rules: [
          {
            type: 'required',
          },
        ],
      },
      options: [
        {
          label: 'Все',
          value: 'all',
        },
        {
          label: 'По ссылке',
          value: 'onLink',
        },
        {
          label: 'Нет',
          value: 'no',
        },
      ],
    },
    {
      name: 'search_tags_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[350px_1fr]', 'gap-2', 'mt-8'],
      fields: ['search_tags_labels_block', 'search_tags_inputs_fields'],
    },
    {
      name: 'search_tags_inputs_fields',
      type: 'div',
      fields: ['search_tags_input'],
    },
    {
      name: 'search_tags_labels_block',
      type: 'div',
      cssClass: ['text-end'],
      fields: ['search_tags_lable', 'search_tags_sublable'],
    },
    {
      text: 'Поисковые теги:',
      name: 'search_tags_lable',
      type: 'label',
    },
    {
      text: 'введите слова или словосочетания, разделяя их запятыми',
      name: 'search_tags_sublable',
      type: 'label',
      cssClass: ['text-xs'],
    },
    {
      name: 'search_tags_input',
      format: 'text',
      value: '',
      type: 'input',
      parentClass: ['max-w-580', 'dots_after_input', 'relative'],
      validation: {
        type: 'string',
        rules: [
          {
            type: 'required',
          },
        ],
      },
    },
    {
      name: 'seo_tab__buttons_container_block',
      type: 'div',
      cssClass: ['flex', 'gap-2', 'mt-8', 'pb-10', 'ml-85'],
      fields: ['seo_tab__cancel_button', 'seo_tab__save_button'],
    },
    {
      type: 'button',
      value: 'Сохранить',
      name: 'seo_tab__save_button',
      size: 'large',
      buttonType: 'primary',
      disabled: false,
      handlers: [
        {
          name: 'pushData',
          params: {
            pageName: 'about_company',
            blockName: 'seo_tab__body_block_1',
            endpoint: 'https://ekat.sergeivl.ru/api/tests/request',
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'about_company',
            blockName: 'seo_tab__body_block_1',
          },
        },
      ],
    },
    {
      type: 'button',
      value: 'Отмена',
      name: 'seo_tab__cancel_button',
      size: 'large',
      buttonType: 'default',
      disabled: false,
    },
  ],
}
