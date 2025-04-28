
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { 
  Database, 
  Tag, 
  Package, 
  ChartBar, 
  Brain,
  Search
} from 'lucide-react';

export const Navigation = () => {
  const menuItems = [
    { title: '数据中心', icon: Database, url: '/' },
    { title: '产品编码', icon: Tag, url: '/product-codes' },
    { title: '采购订单', icon: Package, url: '/purchase-orders' },
    { title: '数据分析', icon: ChartBar, url: '/analytics' },
    { title: 'AI 洞察', icon: Brain, url: '/ai-insights' },
    { title: '库存查询', icon: Search, url: '/inventory' },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4">
          <div className="font-bold text-xl text-tiger-700">Tiger</div>
          <div className="font-medium text-lg text-accent-orange">Sales Nexus AI</div>
        </div>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>主导航</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex items-center gap-2">
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
