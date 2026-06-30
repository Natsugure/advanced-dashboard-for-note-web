import { Show, SignOutButton, useAuth, useClerk } from "@clerk/react";
import { ActionIcon, Button, Flex, Image, Menu, Text } from "@mantine/core";
import { Link, Outlet, useNavigate } from "react-router";
import { PiUserCircleLight } from "react-icons/pi";
import { MdHelpOutline, MdSettings, MdLogout } from "react-icons/md";
import { Footer } from "./Footer";

export function Header() {
  const navigate = useNavigate()
  const { openUserProfile } = useClerk()
  const { isSignedIn } = useAuth()

  return (
    <Flex direction="column" style={{ minHeight: '100vh' }}>
      <Flex
        align="center"
        justify="space-between"
        bg="white"
        w="100%"
        h="48px"
        p="sm"
        style={{ borderBottom: '1px solid var(--mantine-color-gray-3)' }}
      >
        <Flex component={Link} to={isSignedIn ? "/dashboard" : "/"} align="center" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
          <Image src="/logo.png" h={32} w={32} />
          <Text fw={700} size="lg">Advanced Dashboard for note</Text>
        </Flex>

        <Flex>
          <Show when="signed-out">
            <Button variant="default" onClick={() => navigate('/login')}>ログイン</Button>
            <Button ml="xs" onClick={() => navigate('/signup')}>新規登録</Button>
          </Show>
          <Show when="signed-in">
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <ActionIcon color="teal" variant="transparent" aria-label="user">
                  <PiUserCircleLight style={{ width: '100%', height: '100%' }} />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item leftSection={<MdHelpOutline />} onClick={() => navigate("/help")}>
                  使い方
                </Menu.Item>
                
                <Menu.Item leftSection={<MdSettings />} onClick={() => openUserProfile()}>
                  アカウント設定
                </Menu.Item>
                

                <Menu.Divider />
                <SignOutButton>
                  <Menu.Item leftSection={<MdLogout />}>
                    ログアウト
                  </Menu.Item>
                </SignOutButton>
              </Menu.Dropdown>
            </Menu>
          </Show>
        </Flex>
      </Flex>
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </Flex>
  );
}
