import LastTransaction from './LastTransaction'

export default {
  title: 'qcoins/LastTransaction',
  component: LastTransaction,
}

const Template = (args) => <LastTransaction {...args} />

export const FullExample = Template.bind({})
FullExample.args = {
  data: [
    {
      unallocated: 0,
      description: 'First entry',
      spend: 1,
      grow: 8,
      share: 2,
      timestamp: '2020-11-21T11:50:28.124Z',
    },
  ],
}
