export default {
  page: 'price_list',

  groups: [
    {
      name: 'price_list',
      fields: ['main_block'],
    },
  ],

  fields: [
    {
      name: 'main_block',
      type: 'div',
      fields: ['title_block', 'body_block'],
    },

    {
      name: 'title_block',

      type: 'div',

      cssClass: [
        'bg-white',
        'p-6',
        'border-b',
        'border-solid',
        'border-borderColor',
      ],

      fields: ['title'],
    },

    {
      text: 'Прайс-лист',

      name: 'title',

      type: 'label',

      showTooltip: {
        showIcon: true,
        positionIcon: 'left',
        icon: 'fa-regular fa-circle-question',
        text: 'Текст тултипа',
        trigger: 'hover',
        color: 'green',
      },

      cssClass: ['font-medium', 'text-xl'],
    },

    {
      name: 'body_block',

      type: 'div',

      cssClass: ['bg-white', 'p-6'],

      fields: ['info_block', 'file', 'data_block'],
    },

    {
      name: 'info_block',

      type: 'div',

      fields: ['info1', 'block_link'],
    },

    {
      text: 'Робот Все Колёса автоматически скачивает ваши прайс-листы и публикует размещенные в них предложения каждый день рано утром. ',

      name: 'info1',

      type: 'label',
    },

    {
      name: 'block_link',

      type: 'div',

      fields: ['info2', 'info_link'],

      cssClass: ['flex', 'pb-5'],
    },

    {
      text: 'О том, как сформировать прайс-лист, вы можете',

      name: 'info2',

      type: 'label',
    },

    {
      text: 'прочитать в справке.',

      name: 'info_link',

      type: 'link',

      link: '/EditData',

      parentClass: ['pl-1.5'],
    },

    {
      name: 'file',

      type: 'div',

      fields: ['file_input'],

      cssClass: ['pb-5'],
    },

    {
      name: 'file_input',

      value: '',

      type: 'file',

      maxCount: 3,

      fileType: '',
    },

    {
      name: 'data_block',

      type: 'div',

      fields: [
        'settings_info',

        'create_info',

        'load_info',

        'category_info',

        'offer_info',
      ],

      cssClass: ['pb-8'],
    },

    {
      name: 'settings_info',

      type: 'div',

      fields: ['settings_text', 'settings_content'],

      cssClass: ['flex'],
    },

    {
      text: 'Настройки для города:',

      name: 'settings_text',

      type: 'label',

      cssClass: ['font-bold', 'pr-1.5'],
    },

    {
      text: 'Москва',

      name: 'settings_content',

      type: 'link',

      link: '/EditData',
    },

    {
      name: 'create_info',

      type: 'div',

      fields: ['create_text', 'create_content'],

      cssClass: ['flex'],
    },

    {
      text: 'Прайс лист создан:',

      name: 'create_text',

      type: 'label',

      cssClass: ['font-bold', 'pr-1.5'],
    },

    {
      text: '17 октября 2019',

      name: 'create_content',

      type: 'label',

      link: '/EditData',
    },

    {
      name: 'load_info',

      type: 'div',

      fields: ['load_text', 'load_content'],

      cssClass: ['flex'],
    },

    {
      text: 'Данные выгружены:',

      name: 'load_text',

      type: 'label',

      cssClass: ['font-bold', 'pr-1.5'],
    },

    {
      text: '18 июля 2022',

      name: 'load_content',

      type: 'label',

      link: '/EditData',
    },

    {
      name: 'category_info',

      type: 'div',

      fields: ['category_text', 'category_content'],

      cssClass: ['flex'],
    },

    {
      text: 'Привязано категорий:',

      name: 'category_text',

      type: 'label',

      cssClass: ['font-bold', 'pr-1.5'],
    },

    {
      text: '1 из 1',

      name: 'category_content',

      type: 'link',

      link: '/EditData',
    },

    {
      name: 'offer_info',

      type: 'div',

      fields: ['offer_text', 'offer_content'],

      cssClass: ['flex'],
    },

    {
      text: 'Опубликовано предложений:',

      name: 'offer_text',

      type: 'label',

      cssClass: ['font-bold', 'pr-1.5'],
    },

    {
      text: '14 из 198 (7%)',

      name: 'offer_content',

      type: 'label',

      link: '/EditData',
    },
  ],
}
