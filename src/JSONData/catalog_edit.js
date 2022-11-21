export default {
  page: 'catalog_edit',
  title: 'Каталог товаров: Раздел каталога: Редактирование',
  groups: [
    {
      tabName: 'Раздел каталога',
      name: 'catalog_part_tab',
      fields: ['catalog_part__title_block', 'catalog_part__container_block'],
    },
    {
      tabName: 'SEO',
      name: 'seo_tab',
      fields: ['seo_tab__title_block', 'seo_tab__container_block'],
    },
    {
      tabName: 'Дополнительные поля',
      name: 'more_tab',
      fields: ['more_tab__title_block', 'more_tab__container_block'],
    },
    {
      tabName: 'Офферы',
      name: 'Offers',
      fields: ['offers__title_block', 'offers__container_block'],
    },
    {
      tabName: 'Товар',
      name: 'product__title_block',
      fields: ['product__title_block', 'product__container_block'],
    },
    {
      tabName: 'Разделы каталога',
      name: 'part__title_block',
      fields: ['part__title_block', 'part__container_block'],
    },
  ],
  fields: [
    {
      name: 'catalog_part__title_block',
      type: 'div',
      cssClass: ['bg-white', 'p-6', 'border-b', 'border-borderColor'],
      fields: ['title_1'],
    },
    {
      name: 'seo_tab__title_block',
      type: 'div',
      cssClass: ['bg-white', 'p-6', 'border-b', 'border-borderColor'],
      fields: ['title_2'],
    },
    {
      name: 'more_tab__title_block',
      type: 'div',
      cssClass: ['bg-white', 'p-6', 'border-b', 'border-borderColor'],
      fields: ['title_3'],
    },
    {
      name: 'offers__title_block',
      type: 'div',
      cssClass: ['bg-white', 'p-6', 'border-b', 'border-borderColor'],
      fields: ['title_4'],
    },
    {
      name: 'product__title_block',
      type: 'div',
      cssClass: ['bg-white', 'p-6', 'border-b', 'border-borderColor'],
      fields: ['title_5'],
    },
    {
      name: 'part__title_block',
      type: 'div',
      cssClass: ['bg-white', 'p-6', 'border-b', 'border-borderColor'],
      fields: ['title_6'],
    },
    {
      text: 'Добавить раздел',
      name: 'title_1',
      type: 'label',
      cssClass: ['font-medium', 'text-base'],
    },
    {
      text: 'Настройки SEO информации',
      name: 'title_2',
      type: 'label',
      cssClass: ['font-medium', 'text-base'],
    },
    {
      text: 'Детальная информация',
      name: 'title_3',
      type: 'label',
      cssClass: ['font-medium', 'text-base'],
    },
    {
      text: 'Офферы магазина',
      name: 'title_4',
      type: 'label',
      cssClass: ['font-medium', 'text-base'],
    },
    {
      text: 'Товар',
      name: 'title_5',
      type: 'label',
      cssClass: ['font-medium', 'text-base'],
    },
    {
      text: 'Разделы',
      name: 'title_6',
      type: 'label',
      cssClass: ['font-medium', 'text-base'],
    },
    {
      name: 'catalog_part__container_block',
      type: 'div',
      cssClass: ['bg-white', 'p-6'],
      fields: ['catalog_part__body_block'],
    },
    {
      name: 'catalog_part__body_block',
      type: 'div',
      cssClass: ['flex', 'gap-6', 'flex-col', 'w-[800px]', 'ml-[8vw]'],
      fields: [
        'create_text',
        'updated_text',
        'active_switch',
        'parent_part_input',
        'title_name_input',
        'slug_input',
        'image_file_input',
        'banner_file_input',
        'description_block',
        'buttons_container_block',
      ],
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
      title: 'Раздел активен',
      titlePosition: 'left',
      titleClass: ['flex', 'items-center'],
      name: 'active_switch',
      value: true,
      type: 'boolean',
      viewType: 'switch',
      parentClass: ['w-500'],
    },
    {
      title: 'Родительский раздел',
      titlePosition: 'left',
      titleClass: ['h-10', 'flex', 'items-center'],
      name: 'parent_part_input',
      format: 'text',
      value: 'Верхний уровень',
      type: 'input',
      parentClass: ['w-500'],
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Это поле обязательно для заполнения'],
        },
      ],
    },
    {
      title: 'Название',
      titlePosition: 'left',
      titleClass: ['h-10', 'flex', 'items-center'],
      name: 'title_name_input',
      format: 'text',
      value: 'Sony Playstation 5',
      type: 'input',
      parentClass: ['w-500'],
    },
    {
      title: 'Символьный код',
      titlePosition: 'left',
      titleClass: ['h-10', 'flex', 'items-center'],
      name: 'slug_input',
      format: 'text',
      value: 'sony-playstation-5',
      type: 'input',
      parentClass: ['w-500'],
    },
    {
      title: 'Изображение',
      titlePosition: 'left',
      titleClass: ['mt-2'],
      name: 'image_file_input',
      value: '',
      type: 'file',
      maxCount: 3,
      fileType: 'image',
      parentClass: ['w-500'],
    },
    {
      title: 'Баннер',
      titlePosition: 'left',
      titleClass: ['mt-2'],
      name: 'banner_file_input',
      value: '',
      type: 'file',
      maxCount: 3,
      fileType: 'image',
      parentClass: ['w-500'],
    },
    {
      title: 'Описание',
      titlePosition: 'left',
      titleClass: ['h-20', 'flex', 'items-center'],
      name: 'description_block',
      type: 'div',
      parentClass: ['w-500'],

      cssClass: ['flex', 'gap-2.5', 'flex-col'],
      fields: ['description_radio_group', 'description_area_text'],
    },
    {
      name: 'description_radio_group',
      value: 'text',
      type: 'radio',
      options: [
        {
          label: 'Текст',
          value: 'text',
        },
        {
          label: 'HTML',
          value: 'html',
        },
        {
          label: 'Визуальный редактор',
          value: 'visual-edit',
        },
      ],
    },
    {
      name: 'description_area_text',
      value: '',
      type: 'textarea',
      parentClass: ['w-480'],
      minRows: 10,
    },
    {
      name: 'buttons_container_block',
      type: 'div',
      cssClass: ['flex', 'gap-2.5'],
      fields: ['cancel_button', 'save_button'],
      parentClass: ['w-500', 'flex', 'justify-end', 'ml-2'],
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
            name: 'catalog_edit',
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
      fields: [
        'visibility_block',
        'index_page_block',
        'meta_title_for_part_block',
        'meta_description_for_part_block',
        'property_part_block',
        'more_tab__buttons_container_block',
      ],
    },
    {
      name: 'visibility_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[350px_1fr]', 'gap-2', 'pt-6'],
      fields: ['visibility_lable', 'visibility_inputs_fields'],
    },
    {
      name: 'visibility_inputs_fields',
      value: 'view',
      type: 'radio',
      options: [
        {
          label: 'Отобразить',
          value: 'view',
        },
        {
          label: 'Скрыть без доступа',
          value: 'hide-no-access',
        },
        {
          label: 'Скрыть с доступом по ссылке',
          value: 'hide-with-link',
        },
      ],
    },
    {
      text: 'Видимость:',
      name: 'visibility_lable',
      type: 'label',
      parentClass: ['flex', 'justify-end'],
    },
    {
      name: 'index_page_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[350px_1fr]', 'gap-2', 'pt-6'],
      fields: ['index_page_label', 'index_page_switch'],
    },
    {
      text: 'Запретить индексацию страницы:',
      name: 'index_page_label',
      type: 'label',
      parentClass: ['flex', 'justify-end'],
    },
    {
      name: 'index_page_switch',
      value: false,
      type: 'boolean',
      viewType: 'switch',
      parentClass: ['w-480'],
    },
    {
      name: 'meta_title_for_part_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[350px_1fr]', 'gap-2', 'pt-6'],
      fields: ['meta_title_for_part_lable', 'meta_title_for_part_input'],
    },
    {
      text: 'Meta title для раздела:',
      name: 'meta_title_for_part_lable',
      type: 'label',
      parentClass: ['flex', 'justify-end', 'mt-2.5'],
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
      name: 'meta_title_for_part_input',
      format: 'text',
      value: '',
      type: 'input',
      parentClass: ['max-w-580'],
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Это поле обязательно для заполнения'],
        },
      ],
    },
    {
      name: 'meta_description_for_part_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[350px_1fr]', 'gap-2', 'pt-6'],
      fields: [
        'meta_description_for_part_lable',
        'meta_description_for_part_input',
      ],
    },
    {
      text: 'Meta description для раздела:',
      name: 'meta_description_for_part_lable',
      type: 'label',
      parentClass: ['flex', 'justify-end', 'mt-2.5'],
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
      name: 'meta_description_for_part_input',
      format: 'text',
      value: '',
      type: 'textarea',
      minRows: 4,
      parentClass: ['max-w-580'],
    },
    {
      name: 'property_part_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[350px_1fr]', 'gap-2', 'pt-6'],
      fields: ['property_part_lable', 'property_part_inputs_checkbox_block'],
    },
    {
      text: 'Свойства раздела:',
      name: 'property_part_lable',
      type: 'label',
      parentClass: ['flex', 'justify-end', 'mt-2.5'],
    },
    {
      name: 'property_part_inputs_checkbox_block',
      type: 'div',
      cssClass: ['flex', 'flex-col', 'max-w-580'],
      fields: [
        'property_part_checkbox_title',
        'property_part_checkbox_block_1',
        'property_part_checkbox_block_2',
        'property_part_checkbox_block_3',
      ],
    },
    {
      text: 'Свойство',
      name: 'property_part_checkbox_title',
      type: 'label',
      parentClass: ['p-4', 'w-60', 'border-b', 'bg-[#FAFAFA]'],
      cssClass: ['font-medium'],
    },
    {
      name: 'property_part_checkbox_block_1',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[250px_1fr]'],
      fields: ['property_part_checkbox_label_1', 'property_part_checkbox_1'],
    },
    {
      name: 'property_part_checkbox_block_2',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[250px_1fr]'],
      fields: ['property_part_checkbox_label_2', 'property_part_checkbox_2'],
    },
    {
      name: 'property_part_checkbox_block_3',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[250px_1fr]'],
      fields: ['property_part_checkbox_label_3', 'property_part_checkbox_3'],
    },
    {
      text: 'Объем',
      name: 'property_part_checkbox_label_1',
      type: 'label',
      parentClass: ['p-4'],
    },
    {
      text: 'Размер',
      name: 'property_part_checkbox_label_2',
      type: 'label',
      parentClass: ['p-4'],
    },
    {
      text: 'Цвет',
      name: 'property_part_checkbox_label_3',
      type: 'label',
      parentClass: ['p-4'],
    },
    {
      name: 'property_part_checkbox_1',
      value: false,
      type: 'boolean',
      viewType: 'checkbox',
      parentClass: ['mt-1', 'p-4', 'flex', 'justify-center'],
    },
    {
      name: 'property_part_checkbox_2',
      value: true,
      type: 'boolean',
      viewType: 'checkbox',
      parentClass: ['mt-1', 'p-4', 'flex', 'justify-center'],
    },
    {
      name: 'property_part_checkbox_3',
      value: false,
      type: 'boolean',
      viewType: 'checkbox',
      parentClass: ['mt-1', 'p-4', 'flex', 'justify-center'],
    },
    {
      name: 'more_tab__buttons_container_block',
      type: 'div',
      cssClass: ['flex', 'p-6', 'gap-2', 'ml-80'],
      fields: ['more_tab__cancel_button', 'more_tab__save_button'],
    },
    {
      type: 'button',
      value: 'Сохранить',
      name: 'more_tab__save_button',
      size: 'large',
      buttonType: 'primary',
      disabled: false,
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
      name: 'seo_tab__container_block',
      type: 'div',
      cssClass: ['bg-white'],
      fields: ['seo_tab__body_block_1'],
    },
    {
      name: 'seo_tab__body_block_1',
      type: 'div',
      fields: [
        'meta_title_block',
        'meta_description_block',
        'section_block',
        'availability_block',
        'search_tags_block',
        'seo_tab__buttons_container_block',
      ],
    },
    {
      name: 'meta_title_block',
      type: 'div',
      cssClass: ['grid', 'grid-cols-[350px_1fr]', 'gap-2', 'pt-6'],
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
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Это поле обязательно для заполнения'],
        },
      ],
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
    },
    {
      type: 'button',
      value: 'Отмена',
      name: 'seo_tab__cancel_button',
      size: 'large',
      buttonType: 'default',
      disabled: false,
    },
    {
      name: 'offers__container_block',
      type: 'div',
      cssClass: ['bg-white'],
      fields: ['offers__body_block'],
    },
    {
      name: 'product__container_block',
      type: 'div',
      cssClass: ['bg-white'],
      fields: ['product__body_block'],
    },
    {
      name: 'part__container_block',
      type: 'div',
      cssClass: ['bg-white'],
      fields: ['part__body_block'],
    },
    {
      name: 'offers__body_block',
      type: 'div',
      cssClass: ['p-6'],
      fields: ['offers__table'],
    },
    {
      name: 'offers__table',
      type: 'table',
      config: {
        pagination: true,
        size: 'small',
        align: 'center',
        bordered: true,
      },
      data: [
        {
          offer: {
            title: 'Samsung galaxy',
            link: '/mikes',
            offerInfo: [
              { param: 'Экран', value: '6.7 (2778х1284) OLED 120Гц' },
              { param: 'Встроенная память', value: '128 гБ' },
              { param: 'Оперативная память', value: '6ГБ' },
              { param: 'З камеры', value: '12 МП, 12 МП, 12 мп' },
              { param: 'Аккумулятор', value: '4352 мАч' },
            ],
          },
          shop: 'Все смартфоны',
          status: 2,
        },
        {
          offer: {
            title: 'Sony Playstation 5',
            link: '/mikes',
            offerInfo: [
              { param: 'Экран', value: '6.7 (2778х1284) OLED 120Гц' },
              { param: 'Встроенная память', value: '128 гБ' },
              { param: 'Оперативная память', value: '6ГБ' },
              { param: 'З камеры', value: '12 МП, 12 МП, 12 мп' },
              { param: 'Аккумулятор', value: '4352 мАч' },
            ],
          },
          shop: 'Все приставки',
          status: 0,
        },
        {
          offer: {
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
          shop: 'Все смартфоны',
          status: 1,
        },
        {
          offer: {
            title: 'Samsung galaxy',
            link: '/mikes',
            offerInfo: [
              { param: 'Экран', value: '6.7 (2778х1284) OLED 120Гц' },
              { param: 'Встроенная память', value: '128 гБ' },
              { param: 'Оперативная память', value: '6ГБ' },
              { param: 'З камеры', value: '12 МП, 12 МП, 12 мп' },
              { param: 'Аккумулятор', value: '4352 мАч' },
            ],
          },
          shop: 'Все смартфоны',
          status: 2,
        },
        {
          offer: {
            title: 'Sony Playstation 5',
            link: '/mikes',
            offerInfo: [
              { param: 'Экран', value: '6.7 (2778х1284) OLED 120Гц' },
              { param: 'Встроенная память', value: '128 гБ' },
              { param: 'Оперативная память', value: '6ГБ' },
              { param: 'З камеры', value: '12 МП, 12 МП, 12 мп' },
              { param: 'Аккумулятор', value: '4352 мАч' },
            ],
          },
          shop: 'Все приставки',
          status: 0,
        },
        {
          offer: {
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
          shop: 'Все смартфоны',
          status: 1,
        },
      ],
      columns: [
        {
          title: 'Оффер',
          dataIndex: 'offer',
          key: 'offer',
          resizable: true,
          widget: {
            name: 'offer',
            type: 'external', // external || router
            filterParam: 'title',
          },
          width: 150,
        },
        {
          title: 'Магазин',
          dataIndex: 'shop',
          key: 'shop',
          widget: {
            name: 'text',
          },
          resizable: true,
          width: 150,
          editable: false,
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
              {
                id: 1,
                value: 'Модерация',
                color: '#E6E6E6',
                textColor: '#8c8c8c',
              },
              { id: 2, value: 'Отказано', color: '#FF4D4F' },
            ],
          },
          width: 150,
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

    {
      name: 'title_block',
      type: 'div',
      cssClass: ['bg-white', 'p-6', 'mb-6', 'flex-col'],
      fields: ['breadcrumbs', 'title_wrap'],
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
          title: 'Beб-формы',
        },
        {
          title: 'Тикеты',
        },
        {
          title: 'Жалобы на товар',
          path: '/main/complaints',
        },
        {
          title: 'Жалоба',
        },
      ],
    },
    {
      name: 'title_wrap',
      type: 'div',
      cssClass: ['flex', 'mt-4'],
      fields: ['title_arrow_back', 'title'],
    },
    {
      type: 'button',
      name: 'title_arrow_back',
      buttonType: 'text',
      disabled: false,
      cssClass: ['font-medium', 'text-xl', 'mr-2'],
      icon: {
        name: 'fa-solid fa-arrow-left',
      },
      handlers: [
        {
          name: 'goBack',
        },
      ],
    },
    {
      text: 'Редактирование результата заполнения веб-формы',
      name: 'title',
      type: 'label',
      cssClass: ['font-medium', 'text-xl'],
    },
    {
      name: 'product__body_block',
      type: 'div',
      cssClass: ['bg-white', 'flex', 'justify-center'],
      fields: ['wrapper_block'],
    },
    {
      name: 'wrapper_block',
      type: 'div',
      cssClass: ['w-600', 'p-6'],
      fields: ['product_info_block', 'results_title', 'results_block'],
    },
    {
      name: 'product_info_block',
      type: 'div',
      fields: [
        'product_info_cols_wrap',
        'product_name',
        'product_symbol_code',
        'product_info_category',
        'product_sort',
      ],
    },
    {
      name: 'product_info_cols_wrap',
      type: 'div',
      cssClass: ['flex'],
      fields: ['product_info_block_col_1', 'product_info_block_col_2'],
    },
    {
      name: 'product_info_block_col_1',
      type: 'div',
      cssClass: ['flex', 'flex-col', 'items-end', 'mr-3'],
      fields: [
        'product_info_label_1',
        'product_info_label_2',
        'product_info_label_3',
        'product_info_label_4',
        'product_info_label_5',
      ],
    },
    {
      name: 'product_info_block_col_2',
      type: 'div',
      cssClass: ['flex', 'flex-col'],
      fields: [
        'product_info_text_1',
        'product_info_text_2',
        'product_info_text_3',
        'product_info_text_4',
        'product_info_text_5',
      ],
    },
    {
      text: 'ID:',
      name: 'product_info_label_1',
      type: 'label',
      parentClass: ['mb-6'],
    },
    {
      text: '391',
      name: 'product_info_text_1',
      type: 'label',
      parentClass: ['mb-6'],
    },
    {
      text: 'Создан:',
      name: 'product_info_label_3',
      type: 'label',
      parentClass: ['mb-6'],
    },
    {
      text: '23.05.2022   17:11:11',
      name: 'product_info_text_3',
      type: 'label',
      parentClass: ['mb-6'],
    },
    {
      text: 'Изменен:',
      name: 'product_info_label_4',
      type: 'label',
      parentClass: ['mb-6'],
    },
    {
      text: '23.05.2022   17:11:11',
      name: 'product_info_text_4',
      type: 'label',
      parentClass: ['mb-6'],
    },
    {
      title: 'Название',
      titlePosition: 'left',
      size: 'default',
      name: 'product_name',
      type: 'input',
      format: 'text',
      value: '',
      parentClass: ['mb-6', 'w-[500px]'],
    },
    {
      title: 'Символьный код',
      titlePosition: 'left',
      size: 'default',
      name: 'product_symbol_code',
      type: 'input',
      format: 'text',
      value: '',
      parentClass: ['mb-6', 'w-[500px]'],
    },
    {
      title: 'Основной раздел',
      titlePosition: 'left',
      size: 'default',
      description: '',
      name: 'product_info_category',
      type: 'select',
      cssClass: ['w-[500px]'],
      parentClass: ['mb-6'],
      value: 1,
      options: [
        { id: 0, name: 'SonyPlayStation' },
        { id: 1, name: 'samsung' },
        { id: 2, name: 'xiaomi' },
      ],
    },
    {
      title: 'Сортировка',
      titlePosition: 'left',
      size: 'default',
      name: 'product_sort',
      type: 'input',
      format: 'text',
      value: '',
      parentClass: ['mb-6', 'w-[500px]'],
    },
    {
      text: 'С этими товарами покупают',
      name: 'results_title',
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
        'after:w-7/12',
        'after:border-t',
        'after:border-dividerColor',
      ],
      cssClass: ['font-semibold', 'text-base'],
    },
    {
      name: 'results_block',
      type: 'div',
      fields: ['product_category', 'products', 'buttons_wrap'],
    },
    {
      title: 'Основной раздел',
      titlePosition: 'left',
      mode: 'multiple',
      size: 'default',
      description: '',
      name: 'product_category',
      type: 'select',
      cssClass: ['w-[500px]'],
      parentClass: ['mb-6'],
      value: 1,
      options: [
        { id: 0, name: 'SonyPlayStation' },
        { id: 1, name: 'samsung' },
        { id: 2, name: 'xiaomi' },
      ],
    },
    {
      title: 'Товары',
      titlePosition: 'left',
      size: 'default',
      name: 'products',
      type: 'input',
      format: 'text',
      value: '',
      parentClass: ['mb-6', 'w-[500px]'],
    },
    {
      name: 'buttons_wrap',
      type: 'div',
      cssClass: ['flex', 'pl-10', 'ml-12', 'mb-6'],
      fields: ['button_reset', 'button_save'],
    },
    {
      type: 'button',
      value: 'Отмена',
      name: 'button_reset',
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
    {
      name: 'part__body_block',
      type: 'div',
      cssClass: ['bg-white', 'flex', 'justify-center'],
      fields: ['part_wrapper_block'],
    },
    {
      name: 'part_wrapper_block',
      type: 'div',
      cssClass: ['w-600', 'p-6'],
      fields: ['part_select'],
    },
    {
      title: 'Товары',
      titlePosition: 'left',
      size: 'default',
      name: 'part_select',
      type: 'treeSelect',
      options: [
        {
          title: 'Node1',
          value: '0-0',
          children: [
            {
              title: 'Child Node1',
              value: '0-0-0',
            },
          ],
        },
        {
          title: 'Node2',
          value: '0-1',
          children: [
            {
              title: 'Child Node3',
              value: '0-1-0',
              disabled: true,
            },
            {
              title: 'Child Node4',
              value: '0-1-1',
            },
            {
              title: 'Child Node5',
              value: '0-1-2',
            },
          ],
        },
      ],
      format: 'text',
      value: [],
      cssClass: ['w-[500px]'],
      parentClass: ['mb-6', 'w-[500px]'],
    },
  ],
}
