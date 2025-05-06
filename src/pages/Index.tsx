
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
import { SalesOrderDetails } from '@/components/Dashboard/SalesOrderDetails';
import { PurchaseOrderDetails } from '@/components/Dashboard/PurchaseOrderDetails';
import { SupplierManagement } from '@/components/Dashboard/SupplierManagement';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // 监听从侧边栏发来的切换标签事件
  useEffect(() => {
    const handleSwitchTab = (e: CustomEvent) => {
      if (e.detail && e.detail.tab) {
        setActiveTab(e.detail.tab);
      }
    };

    // 添加事件监听
    window.addEventListener('switch-tab', handleSwitchTab as EventListener);

    // 清理函数
    return () => {
      window.removeEventListener('switch-tab', handleSwitchTab as EventListener);
    };
  }, []);

  return (
    <DashboardLayout>
      <DashboardHeader
        title="Tiger Sales Nexus AI"
        subtitle="AI 驱动的网络销售管理平台"
      />
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList>
          <TabsTrigger value="dashboard">数据中心</TabsTrigger>
          <TabsTrigger value="orders">订单导入</TabsTrigger>
          <TabsTrigger value="sales">销售订单</TabsTrigger>
          <TabsTrigger value="purchase">采购订单</TabsTrigger>
          <TabsTrigger value="suppliers">供应商管理</TabsTrigger>
          <TabsTrigger value="products">产品编码</TabsTrigger>
          <TabsTrigger value="ai">AI 洞察</TabsTrigger>
          <TabsTrigger value="inventory">库存查询</TabsTrigger>
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
          <SalesOrderDetails />
        </TabsContent>
        
        <TabsContent value="purchase" className="mt-0">
          <PurchaseOrders />
        </TabsContent>
        
        <TabsContent value="purchase-details" className="mt-0">
          <PurchaseOrderDetails />
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
            <h2 className="text-xl font-bold mb-4">库存查询</h2>
            <p className="text-muted-foreground">此功能正在开发中，敬请期待。</p>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Index;
