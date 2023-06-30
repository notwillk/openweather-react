import SemiCircleValue from '../components/SemiCircleValue';

const SECTIONS = {
  ok: 'green',
  warning: 'yellow',
  error: 'red',
} as const;

export default {
  title: 'Components/SemiCircleValue',
  component: SemiCircleValue,
  tags: ['autodocs'],
  argTypes: {
    order: { control: 'object' },
    selected: { control: 'radio', options: SECTIONS },
    sections: { control: 'object' },
  },
};

export const Primary = {
  args: {
    selected: 'warning',
    sections: SECTIONS,
    order: ['ok', 'warning', 'error']
  },
};
