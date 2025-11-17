"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { SidebarNavHeader } from "./sidebar-nav-header";
import { Separator } from "@/components/ui/separator";
import { SidebarNavMain } from "./sidebar-nav-main";
import { SidebarNavTags } from "./sidebar-nav-tags";
import { SidebarNavUser } from "./sidebar-nav-user";
import {
  ArchiveIcon,
  HeartIcon,
  HomeIcon,
  TagsIcon,
  TrashIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

const data = {
  user: {
    name: "Souleymane",
    email: "souleymane@email.com",
    avatar:
      "https://unsplash.com/fr/photos/un-homme-avec-une-barbe-debout-devant-un-fond-violet-7N5Qi3PYIBI",
  },

  navTags: {
    tagsTitle: "Tags",
    tagsContent: [
      {
        id: crypto.randomUUID(),
        title: "React",
        icon: TagsIcon,
      },
      {
        id: crypto.randomUUID(),
        title: "Typescript",
        icon: TagsIcon,
      },
      {
        id: crypto.randomUUID(),
        title: "Next.js",
        icon: TagsIcon,
      },
    ],
  },
};

const AppSidebar = ({
  ...delegatedProps
}: React.ComponentProps<typeof Sidebar>) => {
  const pathname = usePathname();
  const navMain = [
    {
      id: crypto.randomUUID(),
      title: "Home",
      url: "/",
      icon: HomeIcon,
      isActive: pathname === "/",
    },
    {
      id: crypto.randomUUID(),
      title: "Favorite",
      url: "/favorite",
      icon: HeartIcon,
      isActive: pathname === "/favorite",
    },
    {
      id: crypto.randomUUID(),
      title: "Archive",
      url: "/archive",
      icon: ArchiveIcon,
      isActive: pathname === "/archive",
    },
    {
      id: crypto.randomUUID(),
      title: "Trash",
      url: "/trash",
      icon: TrashIcon,
      isActive: pathname === "/trash",
    },
  ];

  return (
    <Sidebar {...delegatedProps} className="px-3">
      <SidebarNavHeader />

      <Separator />
      <SidebarContent>
        <SidebarNavMain items={navMain} />
        <Separator />
        <SidebarNavTags
          tagTitle={data.navTags.tagsTitle}
          tagsContent={data.navTags.tagsContent}
        />
      </SidebarContent>
      <Separator />

      <SidebarFooter>
        <SidebarNavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
