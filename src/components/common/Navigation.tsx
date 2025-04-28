
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
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
import { toast } from 'sonner';

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (tabId: string) => {
    // 导航到主页并通知需要切换标签
    navigate('/');
    // 使用事件自定义事件来进行组件间通信
    const event = new CustomEvent('switch-tab', { detail: { tab: tabId } });
    window.dispatchEvent(event);
    toast.info(`切换到${getTabName(tabId)}`);
  };

  const getTabName = (tabId: string) => {
    switch(tabId) {
      case 'dashboard': return '数据中心';
      case 'orders': return '订单导入';
      case 'products': return '产品编码';
      case 'purchase': return '采购订单';
      case 'ai': return 'AI 洞察';
      case 'inventory': return '库存查询';
      default: return tabId;
    }
  };

  const menuItems = [
    { title: '数据中心', icon: Database, id: 'dashboard' },
    { title: '订单导入', icon: Tag, id: 'orders' },
    { title: '产品编码', icon: Package, id: 'products' },
    { title: '采购订单', icon: ChartBar, id: 'purchase' },
    { title: 'AI 洞察', icon: Brain, id: 'ai' },
    { title: '库存查询', icon: Search, id: 'inventory' },
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
                  <SidebarMenuButton 
                    onClick={() => handleNavigation(item.id)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </div>
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
