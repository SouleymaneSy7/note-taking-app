import React from "react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { SidebarNavMainPropsType } from "@/types";
import Link from "next/link";

export const SidebarNavMain: React.FC<SidebarNavMainPropsType> = ({
  items,
}) => {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton tooltip={item.title} asChild>
                  <Link href={item.url}>
                    {Icon && <Icon />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
