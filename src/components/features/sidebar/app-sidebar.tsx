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

const data = {
  user: {
    name: "Souleymane",
    email: "souleymane@email.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      id: crypto.randomUUID(),
      title: "Home",
      url: "#",
      icon: HomeIcon,
    },
    {
      id: crypto.randomUUID(),
      title: "Favorite",
      url: "#",
      icon: HeartIcon,
    },
    {
      id: crypto.randomUUID(),
      title: "Archive",
      url: "#",
      icon: ArchiveIcon,
    },
    {
      id: crypto.randomUUID(),
      title: "Trash",
      url: "#",
      icon: TrashIcon,
    },
  ],
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
  return (
    <Sidebar {...delegatedProps}>
      <SidebarNavHeader />

      <Separator />
      <SidebarContent>
        <SidebarNavMain items={data.navMain} />
        <Separator />
        <SidebarNavTags
          tagTitle={data.navTags.tagsTitle}
          tagsContent={data.navTags.tagsContent}
        />
      </SidebarContent>
      <Separator className="my-8" />

      <SidebarFooter>
        <SidebarNavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
