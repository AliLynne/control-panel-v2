/** @jsx jsx */
import { Link as RouterLink } from "react-router-dom";
import { jsx } from "theme-ui";

const Link = (props) => {
  return (
    <RouterLink sx={{ variant: "styles.a" }} {...props}>
      {props.children}
    </RouterLink>
  );
};

export default Link;
