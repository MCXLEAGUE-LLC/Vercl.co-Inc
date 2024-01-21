import { cn } from "@dub/utils";

export default function LogoType({ className }: { className?: string }) {
  return (
<svg
  height="222"
  version="1.2"
  viewBox="0 0 834 222"
  width="834"
  xmlns="http://www.w3.org/2000/svg"
>
  <title>
    font_rend(3)
  </title>
  <defs>
    <image
      height="119"
      href="data:image/png;base64,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"
      id="img1"
      width="750"
    />
  </defs>
  <style
    dangerouslySetInnerHTML={{
      __html: '  '
    }}
   />
  <use
    href="#img1"
    id="Background"
    x="50"
    y="51"
  />
</svg>
  );
}
