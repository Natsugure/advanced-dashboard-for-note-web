import { Button, type ButtonSize } from "@mantine/core";
import { SiChromewebstore } from "react-icons/si";

interface Props {
  size?: ButtonSize
}

const crxStoreUrl = ""

export function CrxStoreButton({ size }: Props) {
  return (
    <Button 
      size={size}
      leftSection={<SiChromewebstore />} 
      onClick={() => {window.open(crxStoreUrl, "_blank");}}
    >
      Chrome Web Store へ
    </Button>
  )
}