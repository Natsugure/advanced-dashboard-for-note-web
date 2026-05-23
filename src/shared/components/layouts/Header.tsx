import { Show, SignInButton, UserButton } from "@clerk/react";
import { Flex, Image, Text } from "@mantine/core";
import { Outlet } from "react-router";

export function Header() {
  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        bg="white"
        w="100%"
        h="48px"
        p="sm"
        style={{ borderBottom: '1px solid var(--mantine-color-gray-3)' }}
      >
        <Flex>
          <Image src="/logo.png" h={32} w={32} />
          <Text fw={700} size="lg">Advanced Dashboard for note</Text>
        </Flex>

        <Flex>
          <Show when="signed-out">
            <SignInButton />
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </Flex>
      </Flex>
      <Outlet />
    </>
  );
}
