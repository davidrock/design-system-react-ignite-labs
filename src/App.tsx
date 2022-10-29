import { Envelope, Fingerprint, Key } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Logo } from './Logo';

export function App() {
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

      <form className="flex flex-col items-stretch w-full max-w-sm gap-4 mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Your e-mail address</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
            ></TextInput.Input>
          </TextInput.Root>
        </label>

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Your password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Fingerprint />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              type="password"
              placeholder="Your password"
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
