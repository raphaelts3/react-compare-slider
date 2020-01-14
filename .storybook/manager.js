import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  showAddonsPanel: true,
  panelPosition: 'bottom',
  theme: create({
    base: 'dark',
    brandTitle: 'React Compare Slider',
    brandUrl: 'https://github.com/nerdyman/react-compare-slider',
    gridCellSize: 12,
  }),
});
