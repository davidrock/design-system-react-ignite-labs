import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import SignIn from './SignIn';
import { rest } from 'msw';

export default {
  title: 'Pages/SignIn',
  component: SignIn,
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({ message: 'User Logged' }));
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText('Insert your e-mail'),
      'david@email.com'
    );
    userEvent.type(
      canvas.getByPlaceholderText('Insert your password'),
      '123456'
    );

    userEvent.click(canvas.getByRole('button'));

    await waitFor(() => {
      return expect(canvas.getByText('Login realizado')).toBeInTheDocument();
    });
  },
};
