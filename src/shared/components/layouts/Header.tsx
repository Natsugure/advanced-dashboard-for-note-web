import { Show, UserButton } from "@clerk/react";
import { Button, Flex, Image, Text } from "@mantine/core";
import { Outlet, useNavigate } from "react-router";

export function Header() {
  const navigate = useNavigate()


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
            <Button onClick={() => navigate('/login')}>ログイン</Button> 
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
