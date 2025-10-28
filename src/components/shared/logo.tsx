import Title from "../common/title";
import Container from "../common/container";

import { LogoIcon } from "../icons/icons.component";

const Logo = () => {
  return (
    <Container as={"div"} className="flex items-center gap-2">
      <LogoIcon />

      <Title level="h2" className="text-heading-md font-satisfy">
        Inkly
      </Title>
    </Container>
  );
};

export default Logo;
