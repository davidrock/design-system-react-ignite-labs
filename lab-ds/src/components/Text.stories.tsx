import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum'
  }
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {
  args: {
    children: 'Defaut text'
  }
}

export const ExtraSmall: StoryObj<TextProps> = {
  args: {
    size: 'xs',
    children: 'Text extra small'
  }
}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
    children: 'Text Small'
  }
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
    children: 'Text Large'
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (<p>Text with P</p>)
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}
