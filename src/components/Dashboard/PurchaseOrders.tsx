
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { DataTable } from '@/components/common/DataTable';
import { Download, Clock, ArrowRight, FileText } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import { PurchaseOrderDetails } from './PurchaseOrderDetails';

export const PurchaseOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const { t } = useTranslation();

  const columns = [
    { key: 'id', header: t('purchase.purchaseOrderNo'), width: '15%' },
    { key: 'date', header: t('common.date'), width: '15%' },
    { key: 'supplier', header: t('common.supplier'), width: '15%' },
    { key: 'items', header: t('sales.items'), width: '10%' },
    { key: 'amount', header: t('sales.amount'), width: '15%' },
    { key: 'status', header: t('common.status'), width: '15%' },
    { key: 'actions', header: t('common.actions'), width: '15%' },
  ];

  // Sample data
  const data = [
    {
      id: 'PO-2023-0001',
      date: '2023-04-15',
      supplier: '雅虎',
      items: '12',
      amount: '¥45,600',
      status: '待发送',
      actions: (
        <div className="flex space-x-2">
          <Button size="sm" onClick={() => handleSendPO('PO-2023-0001')} className="bg-tiger-600 hover:bg-tiger-700">
            <ArrowRight className="h-3 w-3 mr-1" />
            {t('purchase.send')}
          </Button>
          <Button size="sm" variant="outline" onClick={() => handleViewPO('PO-2023-0001')}>
            <FileText className="h-3 w-3 mr-1" />
            {t('common.view')}
          </Button>
        </div>
      ),
    },
    {
      id: 'PO-2023-0002',
      date: '2023-04-16',
      supplier: '乐天',
      items: '8',
      amount: '¥23,400',
      status: '已发送',
      actions: (
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" onClick={() => handleDownloadPO('PO-2023-0002')}>
            <Download className="h-3 w-3 mr-1" />
            {t('purchase.download')}
          </Button>
          <Button size="sm" variant="outline" onClick={() => handleViewPO('PO-2023-0002')}>
            <FileText className="h-3 w-3 mr-1" />
            {t('common.view')}
          </Button>
        </div>
      ),
    },
    {
      id: 'PO-2023-0003',
      date: '2023-04-17',
      supplier: '亚马逊',
      items: '15',
      amount: '¥67,800',
      status: '已确认',
      actions: (
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" onClick={() => handleDownloadPO('PO-2023-0003')}>
            <Download className="h-3 w-3 mr-1" />
            {t('purchase.download')}
          </Button>
          <Button size="sm" variant="outline" onClick={() => handleViewPO('PO-2023-0003')}>
            <FileText className="h-3 w-3 mr-1" />
            {t('common.view')}
          </Button>
        </div>
      ),
    },
    {
      id: 'PO25042301',
      date: '2023-04-18',
      supplier: '测试供应商',
      items: '3',
      amount: '¥6',
      status: '已发送',
      actions: (
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" onClick={() => handleDownloadPO('PO25042301')}>
            <Download className="h-3 w-3 mr-1" />
            {t('purchase.download')}
          </Button>
          <Button size="sm" variant="outline" onClick={() => handleViewPO('PO25042301')}>
            <FileText className="h-3 w-3 mr-1" />
            {t('common.view')}
          </Button>
        </div>
      ),
    },
  ];

  const handleSendPO = (id: string) => {
    toast.success(`订单 ${id} 已成功发送至供应商`);
  };

  const handleViewPO = (id: string) => {
    setSelectedOrder(id);
  };

  const handleDownloadPO = (id: string) => {
    toast.success(`订单 ${id} 已开始下载`);
  };

  const handleScheduleChange = (checked: boolean) => {
    toast.success(checked ? '采购订单定时推送已启用' : '采购订单定时推送已禁用');
  };

  if (selectedOrder) {
    return (
      <PurchaseOrderDetails 
        orderId={selectedOrder} 
        onBack={() => setSelectedOrder(null)}
      />
    );
  }

  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>{t('purchase.title')}</CardTitle>
          <CardDescription>{t('purchase.description')}</CardDescription>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Switch id="scheduled-po" onCheckedChange={handleScheduleChange} />
            <Label htmlFor="scheduled-po">{t('purchase.enableSchedule')}</Label>
          </div>
          <Button size="sm" className="bg-tiger-600 hover:bg-tiger-700">
            <Clock className="h-4 w-4 mr-1" />
            {t('purchase.schedule')}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={columns}
          data={data}
          searchable
        />
      </CardContent>
    </Card>
  );
};
