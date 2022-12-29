export default {
  title: 'Test DropwDownMenu',
  page: 'test_dropdownMenu',
  groups: [
    {
      name: 'test_dropdownMenu',
      fields: ['title_block', 'body_block'],
    },
  ],
  fields: [
    {
      name: 'test_dropdownMenu',
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
      cssClass: ['flex'],
      fields: ['site_link', 'name_input'],
    },
    {
      name: 'name_input',
      format: 'text',
      value: '',
      type: 'input',
      size: 'large',
      parentClass: ['w-500 mt-4 ml-10'],
    },
    {
      name: 'site_link',
      format: 'text',
      cssClass: 'w-1/3',
      type: 'dropdownMenu',
      button: {
        type: 'button',
        buttonType: 'primary',
        ghost: true,
        title: 'ShortCode',
        icon: 'fa-user',
      },
      handlers: [
        {
          name: 'setValueFromField',
          params: {
            pageName: 'test_dropdownMenu',
            fieldName: 'name_input',
            glue: true,
          },
        },
      ],
      options: [
        {
          title: '1',
          value: 1,
        },
        {
          title: '2',
          value: 2,
          subMenu: [
            {
              title: '2-1',
              value: 21,
            },
            {
              title: '2-2',
              value: 22,
              subMenu: [
                {
                  title: '2-2-1',
                  value: 221,
                },
                {
                  title: '2-2-2',
                  value: 222,
                },
              ],
            },
          ],
        },
      ],
      parentClass: ['pb-9'],
    },
  ],
}
