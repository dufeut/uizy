import logo from "/logo.png";

export default function Component({ height, space }: any) {
  return (
    <img
      src={logo}
      alt="Logo"
      height={height || "80px"}
      class={`mr-${space || "4"} sl-12 br-100p`}
    />
  );
}
