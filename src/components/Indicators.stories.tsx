import React from 'react';
import { ComponentStory, ComponentMeta} from '@storybook/react';

import { Indicators } from './Indicators';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Indicators',
  component: Indicators,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
};

export const DefaultIndicators = () => <Indicators />;