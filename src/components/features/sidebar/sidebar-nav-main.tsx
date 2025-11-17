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
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";

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
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  isActive={item.isActive}
                >
                  <Link
                    href={item.url}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      {Icon ? (
                        <Icon
                          className={cn(
                            item.isActive && item.url == "/trash"
                              ? "text-destructive"
                              : item.isActive
                                ? "text-primary"
                                : undefined,
                          )}
                        />
                      ) : null}
                      <span
                        className={cn(
                          item.isActive && item.url == "/trash"
                            ? "text-destructive"
                            : item.isActive
                              ? "text-primary"
                              : undefined,
                        )}
                      >
                        {item.title}
                      </span>
                    </div>

                    {item.isActive ? (
                      <ChevronRightIcon
                        className={cn(
                          item.isActive && item.url == "/trash"
                            ? "text-destructive"
                            : item.isActive
                              ? "text-primary"
                              : undefined,
                        )}
                      />
                    ) : null}
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
