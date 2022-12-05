export default {
  title: 'Доставка и оплата',
  page: 'delivery_and_payment',
  groups: [
    {
      name: 'delivery_and_payment',
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
      ],
      fields: ['title'],
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
        'notification_block',
        'delivery_switch',
        'payment_methods',
        'save_button',
      ],
    },
    {
      text: 'Доставка и оплата',
      name: 'title',
      type: 'label',
      cssClass: ['font-medium', 'text-xl'],
    },
    {
      name: 'notification_block',
      type: 'div',
      cssClass: [
        'bg-sky-50',
        'p-4',
        'mb-9',
        'border',
        'border-solid',
        'border-sky-300',
        'flex',
        'justify-between',
        'items-center',
      ],
      fields: ['notification_text', 'notification_close'],
    },
    {
      name: 'notification_text',
      type: 'label',
      text: 'Вы также можете детально настроить условия доставки и самовывоза для каждого отдельного прайс-листа',
    },
    {
      type: 'button',
      value: '',
      name: 'notification_close',
      buttonType: 'text',
      disabled: false,
      cssClass: ['text-xl'],
      icon: {
        name: 'fa-solid fa-xmark',
      },
      handler: {
        name: 'editField',
        params: {
          pageName: 'delivery_and_payment',
          blockName: 'notification_block',
          fieldName: 'cssClass',
          value: { add: ['hidden'], remove: ['flex'] },
        },
      },
    },
    {
      label: 'Для всех товаров есть бесплатный самовывоз',
      name: 'delivery_switch',
      type: 'boolean',
      viewType: 'switch',
      parentClass: ['pb-9'],
    },
    {
      title: 'Доступные способы оплаты',
      name: 'payment_methods',
      value: [],
      type: 'boolean',
      options: [
        {
          label: 'Наличными',
          value: 'cash',
        },
        {
          label: 'Картой на сайте',
          value: 'card_website',
        },
        {
          label: 'Картой в пункте выдачи',
          value: 'card_point',
        },
        {
          label: 'Картой курьеру',
          value: 'card_courier',
        },
        {
          label: 'Безналичным переводом',
          value: 'bank_transfer',
        },
      ],
      viewType: 'groupСheckbox',
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
            pageName: 'delivery_and_payment',
            blockName: 'body_block',
            endpoint: 'https://ekat.sergeivl.ru/api/tests/request',
          },
        },
        {
          name: 'resetBlockData',
          params: {
            pageName: 'delivery_and_payment',
            blockName: 'body_block',
          },
        },
      ],
    },
  ],
}
