import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addDecorator } from '@storybook/react'
import GlobalStyles from '../src/GlobalStyle'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  layout: 'fullscreen',
}

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))
