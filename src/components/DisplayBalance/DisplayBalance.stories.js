import DisplayBalance from './DisplayBalance'

export default {
  title: 'qcoins/DisplayBalance',
  component: DisplayBalance,
}

const Template = (args) => <DisplayBalance {...args} />

export const Grow = Template.bind({})
Grow.args = {
  type: 'Grow',
  value: 38,
}
export const Spend = Template.bind({})
Spend.args = {
  type: 'Spend',
  value: 38,
}
export const Share = Template.bind({})
Share.args = {
  type: 'Share',
  value: 38,
}
export const WrongProps = Template.bind({})
WrongProps.args = {
  type: 'Shares',
  value: 38,
}
