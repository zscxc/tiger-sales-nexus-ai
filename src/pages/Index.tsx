
import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { DashboardHeader } from '@/components/Dashboard/DashboardHeader';
import { OrderImport } from '@/components/Dashboard/OrderImport';
import { ProductCodes } from '@/components/Dashboard/ProductCodes';
import { PurchaseOrders } from '@/components/Dashboard/PurchaseOrders';
import { AnalyticsDashboard } from '@/components/Dashboard/AnalyticsDashboard';
import { AIInsights } from '@/components/Dashboard/AIInsights';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { BasicSalesData } from '@/components/Dashboard/BasicSalesData';
import { SalesOrderManagement } from '@/components/Dashboard/SalesOrderManagement';
import { SalesOrderDetails } from '@/components/Dashboard/SalesOrderDetails';
import { SupplierManagement } from '@/components/Dashboard/SupplierManagement';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedSalesOrder, setSelectedSalesOrder] = useState<string | null>(null);
  const { t } = useTranslation();

  // 监听从侧边栏发来的切换标签事件
  useEffect(() => {
    const handleSwitchTab = (e: CustomEvent) => {
      if (e.detail && e.detail.tab) {
        setActiveTab(e.detail.tab);
        // Reset any selected states when switching tabs
        setSelectedSalesOrder(null);
      }
    };

    // 添加事件监听
    window.addEventListener('switch-tab', handleSwitchTab as EventListener);

    // 清理函数
    return () => {
      window.removeEventListener('switch-tab', handleSwitchTab as EventListener);
    };
  }, []);

  const handleViewSalesOrderDetails = (id: string) => {
    setSelectedSalesOrder(id);
  };

  return (
    <DashboardLayout>
      <DashboardHeader
        title={t('app.title')}
        subtitle={t('app.subtitle')}
      />
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList>
          <TabsTrigger value="dashboard">{t('nav.dashboard')}</TabsTrigger>
          <TabsTrigger value="orders">{t('nav.orders')}</TabsTrigger>
          <TabsTrigger value="sales">{t('nav.sales')}</TabsTrigger>
          <TabsTrigger value="purchase">{t('nav.purchase')}</TabsTrigger>
          <TabsTrigger value="suppliers">{t('nav.suppliers')}</TabsTrigger>
          <TabsTrigger value="products">{t('nav.products')}</TabsTrigger>
          <TabsTrigger value="ai">{t('nav.ai')}</TabsTrigger>
          <TabsTrigger value="inventory">{t('nav.inventory')}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard" className="mt-0 space-y-6">
          <AnalyticsDashboard />
        </TabsContent>
        
        <TabsContent value="orders" className="mt-0">
          <div className="grid gap-4 mb-6">
            <BasicSalesData />
          </div>
          <OrderImport />
        </TabsContent>
        
        <TabsContent value="sales" className="mt-0">
          {selectedSalesOrder ? (
            <SalesOrderDetails 
              orderId={selectedSalesOrder} 
              onBack={() => setSelectedSalesOrder(null)} 
            />
          ) : (
            <SalesOrderManagement onViewDetails={handleViewSalesOrderDetails} />
          )}
        </TabsContent>
        
        <TabsContent value="purchase" className="mt-0">
          <PurchaseOrders />
        </TabsContent>
        
        <TabsContent value="suppliers" className="mt-0">
          <SupplierManagement />
        </TabsContent>
        
        <TabsContent value="products" className="mt-0">
          <ProductCodes />
        </TabsContent>
        
        <TabsContent value="ai" className="mt-0">
          <AIInsights />
        </TabsContent>
        
        <TabsContent value="inventory" className="mt-0">
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">{t('nav.inventory')}</h2>
            <p className="text-muted-foreground">{t('common.comingSoon')}</p>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Index;
