import { Anchor, Flex, Text } from "@mantine/core";
import { Link } from "react-router";

export function Footer() {
  return (
    <Flex
      component="footer"
      justify="center"
      align="center"
      gap="md"
      py="md"
      style={{ borderTop: '1px solid var(--mantine-color-gray-3)' }}
    >
      <Anchor component={Link} to="/terms" size="sm" c="dimmed">利用規約</Anchor>
      <Anchor component={Link} to="/privacy" size="sm" c="dimmed">プライバシーポリシー</Anchor>
      <Text size="sm" c="dimmed">© {new Date().getFullYear()} なつぐれ</Text>
    </Flex>
  );
}
