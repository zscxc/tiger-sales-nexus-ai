
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTable } from '@/components/common/DataTable';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

interface SalesOrderManagementProps {
  onViewDetails: (id: string) => void;
}

export const SalesOrderManagement = ({ onViewDetails }: SalesOrderManagementProps) => {
  const { t } = useTranslation();

  const columns = [
    { key: 'id', header: t('sales.orderNumber'), width: '15%' },
    { key: 'date', header: t('sales.createdDate'), width: '15%' },
    { key: 'platform', header: t('sales.sourcePlatform'), width: '15%' },
    { key: 'items', header: t('sales.items'), width: '10%' },
    { key: 'amount', header: t('sales.amount'), width: '15%' },
    { key: 'status', header: t('common.status'), width: '15%' },
    { key: 'actions', header: t('common.actions'), width: '15%' },
  ];

  // Sample data
  const data = [
    {
      id: 'SO-2023-0001',
      date: '2023-04-12',
      platform: '雅虎',
      items: '5',
      amount: '¥12,300',
      status: '待处理',
      actions: (
        <Button size="sm" variant="outline" onClick={() => viewOrderDetails('SO-2023-0001')}>
          <FileText className="h-3 w-3 mr-1" />
          {t('common.view')}
        </Button>
      ),
    },
    {
      id: 'SO-2023-0002',
      date: '2023-04-13',
      platform: '乐天',
      items: '3',
      amount: '¥8,700',
      status: '处理中',
      actions: (
        <Button size="sm" variant="outline" onClick={() => viewOrderDetails('SO-2023-0002')}>
          <FileText className="h-3 w-3 mr-1" />
          {t('common.view')}
        </Button>
      ),
    },
    {
      id: 'SO-2023-0003',
      date: '2023-04-14',
      platform: '亚马逊',
      items: '8',
      amount: '¥19,200',
      status: '已完成',
      actions: (
        <Button size="sm" variant="outline" onClick={() => viewOrderDetails('SO-2023-0003')}>
          <FileText className="h-3 w-3 mr-1" />
          {t('common.view')}
        </Button>
      ),
    },
    {
      id: 'CNY-0003-2504-024',
      date: '2023-04-15',
      platform: '阿里巴巴',
      items: '4',
      amount: '¥59,100',
      status: '审核中',
      actions: (
        <Button size="sm" variant="outline" onClick={() => viewOrderDetails('CNY-0003-2504-024')}>
          <FileText className="h-3 w-3 mr-1" />
          {t('common.view')}
        </Button>
      ),
    },
  ];

  const viewOrderDetails = (id: string) => {
    onViewDetails(id);
    toast.info(t('sales.viewOrderDetails', { id }));
  };

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>{t('sales.title')}</CardTitle>
        <CardDescription>{t('sales.description')}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2 mb-6">
          <Button variant="outline" className="text-center py-4 h-auto flex flex-col items-center" size="sm">
            <div className="text-2xl font-bold">2000</div>
            <div className="text-xs text-muted-foreground">{t('sales.allOrders')}</div>
          </Button>
          <Button variant="outline" className="text-center py-4 h-auto flex flex-col items-center" size="sm">
            <div className="text-2xl font-bold">2000</div>
            <div className="text-xs text-muted-foreground">{t('sales.placed')}</div>
          </Button>
          <Button variant="outline" className="text-center py-4 h-auto flex flex-col items-center" size="sm">
            <div className="text-2xl font-bold">2000</div>
            <div className="text-xs text-muted-foreground">{t('sales.inProduction')}</div>
          </Button>
          <Button variant="outline" className="text-center py-4 h-auto flex flex-col items-center" size="sm">
            <div className="text-2xl font-bold">2000</div>
            <div className="text-xs text-muted-foreground">{t('sales.awaitingProduction')}</div>
          </Button>
          <Button variant="outline" className="text-center py-4 h-auto flex flex-col items-center" size="sm">
            <div className="text-2xl font-bold">2000</div>
            <div className="text-xs text-muted-foreground">{t('sales.awaitingDelivery')}</div>
          </Button>
          <Button variant="outline" className="text-center py-4 h-auto flex flex-col items-center" size="sm">
            <div className="text-2xl font-bold">2000</div>
            <div className="text-xs text-muted-foreground">{t('sales.shipped')}</div>
          </Button>
          <Button variant="outline" className="text-center py-4 h-auto flex flex-col items-center" size="sm">
            <div className="text-2xl font-bold">2000</div>
            <div className="text-xs text-muted-foreground">{t('sales.invoiced')}</div>
          </Button>
          <Button variant="outline" className="text-center py-4 h-auto flex flex-col items-center" size="sm">
            <div className="text-2xl font-bold">2000</div>
            <div className="text-xs text-muted-foreground">{t('sales.completed')}</div>
          </Button>
        </div>

        <DataTable
          columns={columns}
          data={data}
          searchable
        />
      </CardContent>
    </Card>
  );
};
