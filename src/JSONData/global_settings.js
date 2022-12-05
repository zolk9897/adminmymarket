export default {
  title: 'Общие настройки',
  page: 'global_settings',
  groups: [
    {
      name: 'global_settings',
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
      fields: ['site_link', 'site_name', 'site_logo', 'save_button'],
    },
    {
      title: 'Ссылка на сайт',
      name: 'site_link',
      format: 'text',
      value: '',
      type: 'input',
      parentClass: ['pb-9'],
    },
    {
      title: 'Название',
      name: 'site_name',
      format: 'text',
      value: '',
      type: 'input',
      parentClass: ['pb-9'],
    },
    {
      title: 'Лого',
      name: 'site_logo',
      value: '',
      type: 'file',
      maxCount: 3,
      fileType: 'image',
    },
    {
      type: 'button',
      value: 'Сохранить изменения',
      name: 'save_button',
      buttonType: 'primary',
      disabled: false,
      cssClass: ['my-12'],
      handlers: [
        {
          name: 'pushData',
          params: {
            pageName: 'global_settings',
            blockName: 'body_block',
            endpoint: 'https://ekat.sergeivl.ru/api/tests/request',
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'global_settings',
            blockName: 'body_block',
          },
        },
      ],
    },
  ],
}
