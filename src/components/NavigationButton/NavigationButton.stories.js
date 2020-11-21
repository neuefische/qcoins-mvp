import NavigationButton from './NavigationButton'

export default {
  title: 'qcoins/Buttons',
  component: NavigationButton,
}

const Template = (args) => <NavigationButton {...args} />

export const Button = Template.bind({})
Button.args = {
  children: 'Earn coins',
}
