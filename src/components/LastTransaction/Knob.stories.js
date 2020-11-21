import Knob from './Knob'

export default {
  title: 'qcoins/LastTransaction',
  component: Knob,
}

const Template = (args) => <Knob {...args} />

export const GrowKnob = Template.bind({})
GrowKnob.args = {
  type: 'Grow',
  value: 38,
}
export const ShareKnob = Template.bind({})
ShareKnob.args = {
  type: 'Share',
  value: 38,
}
export const SpendKnob = Template.bind({})
SpendKnob.args = {
  type: 'Spend',
  value: 38,
}
