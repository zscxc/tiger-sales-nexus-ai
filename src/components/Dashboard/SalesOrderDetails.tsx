
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTable } from '@/components/common/DataTable';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { toast } from 'sonner';

export const SalesOrderDetails = () => {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const columns = [
    { key: 'id', header: '销售订单号', width: '15%' },
    { key: 'date', header: '创建日期', width: '15%' },
    { key: 'platform', header: '来源平台', width: '15%' },
    { key: 'items', header: '商品数', width: '10%' },
    { key: 'amount', header: '金额', width: '15%' },
    { key: 'status', header: '状态', width: '15%' },
    { key: 'actions', header: '操作', width: '15%' },
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
          详情
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
          详情
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
          详情
        </Button>
      ),
    },
  ];

  const viewOrderDetails = (id: string) => {
    setSelectedOrder(id);
    toast.info(`查看订单 ${id} 详情`);
  };

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>销售订单详情</CardTitle>
        <CardDescription>查看并管理来自各平台的销售订单</CardDescription>
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
