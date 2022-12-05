export default {
  page: 'requisites',
  title: 'Реквизиты',
  groups: [
    {
      name: 'requisites',
      fields: ['requisites_title', 'requisites_form'],
    },
  ],
  fields: [
    {
      name: 'requisites_title',
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
      text: 'Реквизиты',
      name: 'title',
      type: 'label',
      cssClass: ['font-medium', 'text-xl'],
    },
    {
      description: 'Requisites form',
      name: 'requisites_form',
      type: 'div',
      cssClass: ['bg-white', 'p-6', 'flex', 'flex-col', 'gap-4'],
      fields: [
        'name_organization',
        'ogrn_field',
        'inn_field',
        'kpp_field',
        'juristic_address',
        'checks_copy',
        'save_button',
      ],
    },
    {
      label:
        'Отправлять бумажные копии счетов и закрывающих документов в начале каждого месяца',
      name: 'checks_copy',
      value: false,
      type: 'boolean',
      viewType: 'switch',
      cssClass: ['mb-10'],
    },
    {
      title: 'Название организации',
      subtitle: {
        text: 'Напр. OOO «Интернет-магазин шин»',
        cssClass: ['text-xs', 'text-textSecondary'],
      },
      name: 'name_organization',
      format: 'text',
      value: '',
      type: 'input',
    },
    {
      title: 'ОГРН',
      name: 'ogrn_field',
      format: 'text',
      value: '',
      type: 'input',
    },
    {
      title: 'ИНН',
      name: 'inn_field',
      format: 'text',
      value: '',
      type: 'input',
    },
    {
      title: 'КПП',
      name: 'kpp_field',
      format: 'text',
      value: '',
      type: 'input',
    },
    {
      title: 'Юридический адрес',
      name: 'juristic_address',
      format: 'text',
      value: '',
      type: 'input',
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
            pageName: 'requisites',
            blockName: 'requisites_form',
            endpoint: 'https://ekat.sergeivl.ru/api/tests/request',
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'requisites',
            blockName: 'requisites_form',
          },
        },
      ],
    },
  ],
}
