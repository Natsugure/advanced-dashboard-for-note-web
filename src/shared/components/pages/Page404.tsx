import { Box, Button, Center, EmptyState } from "@mantine/core";
import { TbZoomQuestion } from "react-icons/tb";
import { useNavigate } from "react-router";

export function Page404() {
  const navigate = useNavigate()

  return (
    <>
      <Box mt="lg" w="100vw">
        <Center>
          <EmptyState
            icon={<TbZoomQuestion />}
            title="指定されたページが見つかりませんでした"
          >
            <EmptyState.Actions>
              <Button onClick={() => navigate("/")} >トップページヘ</Button>
            </EmptyState.Actions>
          </EmptyState>
        </Center>
      </Box>
    </>
  )
}