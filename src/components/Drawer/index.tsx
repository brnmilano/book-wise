import { Drawer as DrawerMaterial, DrawerProps } from "@mui/material";
import { PropsWithChildren } from "react";

export default function Drawer(props: PropsWithChildren<DrawerProps>) {
  const { children, ...rest } = props;
  
  return <DrawerMaterial {...rest}>{children}</DrawerMaterial>;
}
