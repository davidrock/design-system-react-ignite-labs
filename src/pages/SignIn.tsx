import { Checkbox } from '@radix-ui/react-checkbox';
import { Envelope, Fingerprint, Lock } from 'phosphor-react';
import axios from 'axios';
import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import { TextInput } from '../components/TextInput';
import { Text } from '../components/Text';
import { Logo } from '../Logo';
import { FormEvent, useState } from 'react';

function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await axios.post('/sessions', {
      email: 'david@email.com',
      password: '123',
    });

    setIsUserSignedIn(true);
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-gray-100 bg-gray-900">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="mt-1 text-gray-400">
          Sign in and start using
        </Text>
      </header>

      <form
        onSubmit={handleSignIn}
        className="flex flex-col items-stretch w-full max-w-sm gap-4 mt-10"
      >
        {isUserSignedIn && <Text>Login realizado</Text>}

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Your e-mail address</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              type="email"
              placeholder="Insert your e-mail"
            ></TextInput.Input>
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Your password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Fingerprint />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="Insert your password"
            ></TextInput.Input>
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Remember me for 30 days
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Sign in
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline">
            I forgot my password!
          </a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline">
            Don't have an account? Create one now!
          </a>
        </Text>
      </footer>
    </div>
  );
}

export default SignIn;
