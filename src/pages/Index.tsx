
import React, { useState } from 'react';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { DashboardHeader } from '@/components/Dashboard/DashboardHeader';
import { OrderImport } from '@/components/Dashboard/OrderImport';
import { ProductCodes } from '@/components/Dashboard/ProductCodes';
import { PurchaseOrders } from '@/components/Dashboard/PurchaseOrders';
import { AnalyticsDashboard } from '@/components/Dashboard/AnalyticsDashboard';
import { AIInsights } from '@/components/Dashboard/AIInsights';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

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
          <TabsTrigger value="products">产品编码</TabsTrigger>
          <TabsTrigger value="purchase">采购订单</TabsTrigger>
          <TabsTrigger value="ai">AI 洞察</TabsTrigger>
        </TabsList>
      </Tabs>
      
      <TabsContent value="dashboard" className="mt-0 space-y-6">
        <AnalyticsDashboard />
      </TabsContent>
      
      <TabsContent value="orders" className="mt-0">
        <OrderImport />
      </TabsContent>
      
      <TabsContent value="products" className="mt-0">
        <ProductCodes />
      </TabsContent>
      
      <TabsContent value="purchase" className="mt-0">
        <PurchaseOrders />
      </TabsContent>
      
      <TabsContent value="ai" className="mt-0">
        <AIInsights />
      </TabsContent>
    </DashboardLayout>
  );
};

export default Index;
