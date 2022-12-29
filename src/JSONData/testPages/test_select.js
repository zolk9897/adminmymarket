export default {
  title: 'Test Select',
  page: 'test_select',
  groups: [
    {
      name: 'test_select',
      fields: ['title_block', 'body_block'],
    },
  ],
  fields: [
    {
      name: 'test_select',
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
      text: 'Общие настройки',
      name: 'title',
      type: 'label',
      cssClass: ['font-medium', 'text-xl'],
    },
    {
      name: 'body_block',
      type: 'div',
      cssClass: ['bg-white', 'p-6'],
      fields: ['wrapper_block'],
    },
    {
      name: 'wrapper_block',
      type: 'div',
      cssClass: ['w-2/4'],
      fields: ['site_link'],
    },
    {
      title: 'Ссылка на сайт',
      name: 'site_link',
      format: 'text',
      cssClass: 'w-1/3',
      description: 'Выбери что-то',
      type: 'select',
      mode: 'multiple',
      search: {
        endpoint: 'getTestSelectOptions',
        title: 'title',
        value: 'id',
        minLength: 3,
      },
      value: [],
      // externalData: {
      //   endpoint: 'getTestSelectOptions',
      //   title: 'title',
      //   value: 'id',
      // },
      parentClass: ['pb-9'],
    },
  ],
}
