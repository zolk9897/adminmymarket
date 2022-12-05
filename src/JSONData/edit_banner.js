export default {
  page: 'edit_banner',
  title: 'Редактирование баннера',
  useId: {
    endpoint: '/banners',
  },
  useTitle: {
    title: 'Редактирование баннера',
    breadcrumbs: [
      {
        title: 'Главная',
        path: '/',
      },
      {
        title: 'Контент',
      },
      {
        title: 'Баннеры',
        path: '/main/banner_list',
      },
    ],
    operations: [
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
              redirect: '/main/banner_list',
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
      text: 'Баннер',
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
        'title_banners',
        'edit_banner_block1',
        'edit_banner_block2',
        'edit_banner_block3',
        'edit_banner_block4',
        'edit_banner_block5',
        'edit_banner_block6',
        'edit_banner_block7',
        'edit_banner_block8',
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
      value: '500',
      type: 'input',
      parentClass: ['w-500'],
    },
    {
      text: 'Баннеры',
      name: 'title_banners',
      type: 'label',
      parentClass: ['pt-4', 'ml-85'],
      cssClass: ['font-semibold', 'text-base'],
    },
    //BLOCK1
    {
      name: 'edit_banner_block1',
      type: 'div',
      cssClass: 'flex items-start gap-x-2 ml-[8vw]',
      parentClass: ['justify-end grid grid-cols-[max-content_max-content]'],
      fields: ['edit_banner_block__title1', 'edit_banner_block__content1'],
    },
    {
      text: 'Баннер 1:',
      name: 'edit_banner_block__title1',
      type: 'label',
      parentClass: ['font-bold mt-6'],
    },
    {
      name: 'edit_banner_block__content1',
      type: 'div',
      fields: [
        'block__content1_inputs',
        'block__content1_uploadD',
        'block__content1_uploadM',
      ],
    },
    {
      name: 'block__content1_inputs',
      type: 'div',
      cssClass: ['flex items-center gap-2 mb-2'],
      fields: ['block__content1_inputs_link', 'block__content1_inputs_name'],
    },
    {
      title: 'Ссылка',
      titlePosition: 'top',
      name: 'block__content1_inputs_link',
      format: 'text',
      value: '11aa11',
      type: 'input',
    },
    {
      title: 'Название',
      titlePosition: 'top',
      name: 'block__content1_inputs_name',
      format: 'text',
      value: 'Sony Playstation 5',
      type: 'input',
    },
    {
      title: 'Декстопное изображение',
      titlePosition: 'top',
      name: 'block__content1_uploadD',
      type: 'file',
      fileType: 'picture',
      parentClass: ['w-500 mb-2'],
    },
    {
      title: 'Мобильное изображение',
      titlePosition: 'top',
      name: 'block__content1_uploadM',
      type: 'file',
      fileType: 'picture',
      parentClass: ['w-500'],
    },

    //BLOCK2
    {
      name: 'edit_banner_block2',
      type: 'div',
      cssClass: 'flex items-start gap-x-2 ml-[8vw]',
      parentClass: ['justify-end grid grid-cols-[max-content_max-content]'],
      fields: ['edit_banner_block__title2', 'edit_banner_block__content2'],
    },
    {
      text: 'Баннер 2:',
      name: 'edit_banner_block__title2',
      type: 'label',
      parentClass: ['font-bold mt-6'],
    },
    {
      name: 'edit_banner_block__content2',
      type: 'div',
      fields: [
        'block__content2_inputs',
        'block__content2_uploadD',
        'block__content2_uploadM',
      ],
    },
    {
      name: 'block__content2_inputs',
      type: 'div',
      cssClass: ['flex items-center gap-2 mb-2'],
      fields: ['block__content2_inputs_link', 'block__content2_inputs_name'],
    },
    {
      title: 'Ссылка',
      titlePosition: 'top',
      name: 'block__content2_inputs_link',
      format: 'text',
      value: '11aa11',
      type: 'input',
    },
    {
      title: 'Название',
      titlePosition: 'top',
      name: 'block__content2_inputs_name',
      format: 'text',
      value: 'Sony Playstation 5',
      type: 'input',
    },
    {
      title: 'Декстопное изображение',
      titlePosition: 'top',
      name: 'block__content2_uploadD',
      type: 'file',
      fileType: 'picture',
      parentClass: ['w-500 mb-2'],
    },
    {
      title: 'Мобильное изображение',
      titlePosition: 'top',
      name: 'block__content2_uploadM',
      type: 'file',
      fileType: 'picture',
      parentClass: ['w-500'],
    },

    //BLOCK3
    {
      name: 'edit_banner_block3',
      type: 'div',
      cssClass: 'flex items-start gap-x-2 ml-[8vw]',
      parentClass: ['justify-end grid grid-cols-[max-content_max-content]'],
      fields: ['edit_banner_block__title3', 'edit_banner_block__content3'],
    },
    {
      text: 'Баннер 3:',
      name: 'edit_banner_block__title3',
      type: 'label',
      parentClass: ['font-bold mt-6'],
    },
    {
      name: 'edit_banner_block__content3',
      type: 'div',
      fields: [
        'block__content3_inputs',
        'block__content3_uploadD',
        'block__content3_uploadM',
      ],
    },
    {
      name: 'block__content3_inputs',
      type: 'div',
      cssClass: ['flex items-center gap-2 mb-2'],
      fields: ['block__content3_inputs_link', 'block__content3_inputs_name'],
    },
    {
      title: 'Ссылка',
      titlePosition: 'top',
      name: 'block__content3_inputs_link',
      format: 'text',
      value: '11aa11',
      type: 'input',
    },
    {
      title: 'Название',
      titlePosition: 'top',
      name: 'block__content3_inputs_name',
      format: 'text',
      value: 'Sony Playstation 5',
      type: 'input',
    },
    {
      title: 'Декстопное изображение',
      titlePosition: 'top',
      name: 'block__content3_uploadD',
      type: 'file',
      fileType: 'picture',
      parentClass: ['w-500 mb-2'],
    },
    {
      title: 'Мобильное изображение',
      titlePosition: 'top',
      name: 'block__content3_uploadM',
      type: 'file',
      fileType: 'picture',
      parentClass: ['w-500'],
    },

    //BLOCK4
    {
      name: 'edit_banner_block4',
      type: 'div',
      cssClass: 'flex items-start gap-x-2 ml-[8vw]',
      parentClass: ['justify-end grid grid-cols-[max-content_max-content]'],
      fields: ['edit_banner_block__title4', 'edit_banner_block__content4'],
    },
    {
      text: 'Баннер 4:',
      name: 'edit_banner_block__title4',
      type: 'label',
      parentClass: ['font-bold mt-6'],
    },
    {
      name: 'edit_banner_block__content4',
      type: 'div',
      fields: [
        'block__content4_inputs',
        'block__content4_uploadD',
        'block__content4_uploadM',
      ],
    },
    {
      name: 'block__content4_inputs',
      type: 'div',
      cssClass: ['flex items-center gap-2 mb-2'],
      fields: ['block__content4_inputs_link', 'block__content4_inputs_name'],
    },
    {
      title: 'Ссылка',
      titlePosition: 'top',
      name: 'block__content4_inputs_link',
      format: 'text',
      value: '11aa11',
      type: 'input',
    },
    {
      title: 'Название',
      titlePosition: 'top',
      name: 'block__content4_inputs_name',
      format: 'text',
      value: 'Sony Playstation 5',
      type: 'input',
    },
    {
      title: 'Декстопное изображение',
      titlePosition: 'top',
      name: 'block__content4_uploadD',
      type: 'file',
      fileType: 'picture',
      parentClass: ['w-500 mb-2'],
    },
    {
      title: 'Мобильное изображение',
      titlePosition: 'top',
      name: 'block__content4_uploadM',
      type: 'file',
      fileType: 'picture',
      parentClass: ['w-500'],
    },

    //BLOCK5
    {
      name: 'edit_banner_block5',
      type: 'div',
      cssClass: 'flex items-start gap-x-2 ml-[8vw]',
      parentClass: ['justify-end grid grid-cols-[max-content_max-content]'],
      fields: ['edit_banner_block__title5', 'edit_banner_block__content5'],
    },
    {
      text: 'Баннер 5:',
      name: 'edit_banner_block__title5',
      type: 'label',
      parentClass: ['font-bold mt-6'],
    },
    {
      name: 'edit_banner_block__content5',
      type: 'div',
      fields: [
        'block__content5_inputs',
        'block__content5_uploadD',
        'block__content5_uploadM',
      ],
    },
    {
      name: 'block__content5_inputs',
      type: 'div',
      cssClass: ['flex items-center gap-2 mb-2'],
      fields: ['block__content5_inputs_link', 'block__content5_inputs_name'],
    },
    {
      title: 'Ссылка',
      titlePosition: 'top',
      name: 'block__content5_inputs_link',
      format: 'text',
      value: '11aa11',
      type: 'input',
    },
    {
      title: 'Название',
      titlePosition: 'top',
      name: 'block__content5_inputs_name',
      format: 'text',
      value: 'Sony Playstation 5',
      type: 'input',
    },
    {
      title: 'Декстопное изображение',
      titlePosition: 'top',
      name: 'block__content5_uploadD',
      type: 'file',
      fileType: 'picture',
      parentClass: ['w-500 mb-2'],
    },
    {
      title: 'Мобильное изображение',
      titlePosition: 'top',
      name: 'block__content5_uploadM',
      type: 'file',
      fileType: 'picture',
      parentClass: ['w-500'],
    },

    //BLOCK6
    {
      name: 'edit_banner_block6',
      type: 'div',
      cssClass: 'flex items-start gap-x-2 ml-[8vw]',
      parentClass: ['justify-end grid grid-cols-[max-content_max-content]'],
      fields: ['edit_banner_block__title6', 'edit_banner_block__content6'],
    },
    {
      text: 'Баннер 6:',
      name: 'edit_banner_block__title6',
      type: 'label',
      parentClass: ['font-bold mt-6'],
    },
    {
      name: 'edit_banner_block__content6',
      type: 'div',
      fields: [
        'block__content6_inputs',
        'block__content6_uploadD',
        'block__content6_uploadM',
      ],
    },
    {
      name: 'block__content6_inputs',
      type: 'div',
      cssClass: ['flex items-center gap-2 mb-2'],
      fields: ['block__content6_inputs_link', 'block__content6_inputs_name'],
    },
    {
      title: 'Ссылка',
      titlePosition: 'top',
      name: 'block__content6_inputs_link',
      format: 'text',
      value: '11aa11',
      type: 'input',
    },
    {
      title: 'Название',
      titlePosition: 'top',
      name: 'block__content6_inputs_name',
      format: 'text',
      value: 'Sony Playstation 5',
      type: 'input',
    },
    {
      title: 'Декстопное изображение',
      titlePosition: 'top',
      name: 'block__content6_uploadD',
      type: 'file',
      fileType: 'picture',
      parentClass: ['w-500 mb-2'],
    },
    {
      title: 'Мобильное изображение',
      titlePosition: 'top',
      name: 'block__content6_uploadM',
      type: 'file',
      fileType: 'picture',
      parentClass: ['w-500'],
    },

    //BLOCK7
    {
      name: 'edit_banner_block7',
      type: 'div',
      cssClass: 'flex items-start gap-x-2 ml-[8vw]',
      parentClass: ['justify-end grid grid-cols-[max-content_max-content]'],
      fields: ['edit_banner_block__title7', 'edit_banner_block__content7'],
    },
    {
      text: 'Баннер 7:',
      name: 'edit_banner_block__title7',
      type: 'label',
      parentClass: ['font-bold mt-6'],
    },
    {
      name: 'edit_banner_block__content7',
      type: 'div',
      fields: [
        'block__content7_inputs',
        'block__content7_uploadD',
        'block__content7_uploadM',
      ],
    },
    {
      name: 'block__content7_inputs',
      type: 'div',
      cssClass: ['flex items-center gap-2 mb-2'],
      fields: ['block__content7_inputs_link', 'block__content7_inputs_name'],
    },
    {
      title: 'Ссылка',
      titlePosition: 'top',
      name: 'block__content7_inputs_link',
      format: 'text',
      value: '11aa11',
      type: 'input',
    },
    {
      title: 'Название',
      titlePosition: 'top',
      name: 'block__content7_inputs_name',
      format: 'text',
      value: 'Sony Playstation 5',
      type: 'input',
    },
    {
      title: 'Декстопное изображение',
      titlePosition: 'top',
      name: 'block__content7_uploadD',
      type: 'file',
      fileType: 'picture',
      parentClass: ['w-500 mb-2'],
    },
    {
      title: 'Мобильное изображение',
      titlePosition: 'top',
      name: 'block__content7_uploadM',
      type: 'file',
      fileType: 'picture',
      parentClass: ['w-500'],
    },

    //BLOCK8
    {
      name: 'edit_banner_block8',
      type: 'div',
      cssClass: 'flex items-start gap-x-2 ml-[8vw]',
      parentClass: ['justify-end grid grid-cols-[max-content_max-content]'],
      fields: ['edit_banner_block__title8', 'edit_banner_block__content8'],
    },
    {
      text: 'Баннер 8:',
      name: 'edit_banner_block__title8',
      type: 'label',
      parentClass: ['font-bold mt-6'],
    },
    {
      name: 'edit_banner_block__content8',
      type: 'div',
      fields: [
        'block__content8_inputs',
        'block__content8_uploadD',
        'block__content8_uploadM',
      ],
    },
    {
      name: 'block__content8_inputs',
      type: 'div',
      cssClass: ['flex items-center gap-2 mb-2'],
      fields: ['block__content8_inputs_link', 'block__content8_inputs_name'],
    },
    {
      title: 'Ссылка',
      titlePosition: 'top',
      name: 'block__content8_inputs_link',
      format: 'text',
      value: '11aa11',
      type: 'input',
    },
    {
      title: 'Название',
      titlePosition: 'top',
      name: 'block__content8_inputs_name',
      format: 'text',
      value: 'Sony Playstation 5',
      type: 'input',
    },
    {
      title: 'Декстопное изображение',
      titlePosition: 'top',
      name: 'block__content8_uploadD',
      type: 'file',
      fileType: 'picture',
      parentClass: ['w-500 mb-2'],
    },
    {
      title: 'Мобильное изображение',
      titlePosition: 'top',
      name: 'block__content8_uploadM',
      type: 'file',
      fileType: 'picture',
      parentClass: ['w-500'],
    },
  ],
}
