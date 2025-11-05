import React from "react";

import { SidebarNavTagsPropsType } from "@/types";
import Container from "@/components/common/container";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export const SidebarNavTags: React.FC<SidebarNavTagsPropsType> = ({
  tagTitle,
  tagsContent,
}) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{tagTitle}</SidebarGroupLabel>

      <SidebarGroupContent>
        <ScrollArea>
          {tagsContent.map((tag) => {
            const Icon = tag.icon;

            return (
              <SidebarMenuItem key={tag.id}>
                <SidebarMenuButton>
                  <Container as={"div"} className="flex items-center gap-2">
                    {Icon && <Icon />}
                    <span>{tag.title}</span>
                  </Container>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </ScrollArea>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
