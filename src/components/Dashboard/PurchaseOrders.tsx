
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { DataTable } from '@/components/common/DataTable';
import { Download, Clock, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export const PurchaseOrders = () => {
  const columns = [
    { key: 'id', header: '采购订单号', width: '15%' },
    { key: 'date', header: '创建日期', width: '15%' },
    { key: 'supplier', header: '供应商', width: '15%' },
    { key: 'items', header: '商品数', width: '10%' },
    { key: 'amount', header: '金额', width: '15%' },
    { key: 'status', header: '状态', width: '15%' },
    { key: 'actions', header: '操作', width: '15%' },
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
        <Button size="sm" onClick={() => handleSendPO('PO-2023-0001')} className="bg-tiger-600 hover:bg-tiger-700">
          <ArrowRight className="h-3 w-3 mr-1" />
          发送
        </Button>
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
        <Button size="sm" variant="outline">
          <Download className="h-3 w-3 mr-1" />
          下载
        </Button>
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
        <Button size="sm" variant="outline">
          <Download className="h-3 w-3 mr-1" />
          下载
        </Button>
      ),
    },
  ];

  const handleSendPO = (id: string) => {
    toast.success(`订单 ${id} 已成功发送至供应商`);
  };

  const handleScheduleChange = (checked: boolean) => {
    toast.success(checked ? '采购订单定时推送已启用' : '采购订单定时推送已禁用');
  };

  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>采购订单管理</CardTitle>
          <CardDescription>管理向供应商推送的采购订单</CardDescription>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Switch id="scheduled-po" onCheckedChange={handleScheduleChange} />
            <Label htmlFor="scheduled-po">定时推送</Label>
          </div>
          <Button size="sm" className="bg-tiger-600 hover:bg-tiger-700">
            <Clock className="h-4 w-4 mr-1" />
            设置定时
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
