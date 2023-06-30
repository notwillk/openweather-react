import Tile from '../components/Tile';

export default {
  title: 'Components/Tile',
  component: Tile,
  tags: ['autodocs'],
  argTypes: {
    foreground: { control: 'color' },
    background: { control: 'color' },
    children: { control: 'text' }
  },
};

export const Primary = {
  args: {
    foreground: 'black',
    background: 'hotpink',
    children: 'Lorem Ipsum Dolor Sit Amet',
  },
};
