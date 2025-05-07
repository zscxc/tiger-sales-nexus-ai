
import React from 'react';
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
  Search,
  FileText,
  Users,
  BarChart3
} from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const handleNavigation = (tabId: string) => {
    // 导航到主页并通知需要切换标签
    navigate('/');
    // 使用事件自定义事件来进行组件间通信
    const event = new CustomEvent('switch-tab', { detail: { tab: tabId } });
    window.dispatchEvent(event);
    toast.info(`${t('common.switch')} ${t(`nav.${tabId}`)}`);
  };

  const menuItems = [
    { title: t('nav.dashboard'), icon: Database, id: 'dashboard' },
    { title: t('nav.orders'), icon: Tag, id: 'orders' },
    { title: t('nav.sales'), icon: FileText, id: 'sales' },
    { title: t('nav.purchase'), icon: ChartBar, id: 'purchase' },
    { title: t('nav.suppliers'), icon: Users, id: 'suppliers' },
    { title: t('nav.products'), icon: Package, id: 'products' },
    { title: t('nav.ai'), icon: Brain, id: 'ai' },
    { title: t('nav.inventory'), icon: Search, id: 'inventory' },
    { title: t('nav.reports'), icon: BarChart3, id: 'reports' }
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
          <SidebarGroupLabel>{t('nav.mainNavigation', '主导航')}</SidebarGroupLabel>
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
