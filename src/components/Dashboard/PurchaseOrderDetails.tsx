
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTable } from '@/components/common/DataTable';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { toast } from 'sonner';

export const PurchaseOrderDetails = () => {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const columns = [
    { key: 'id', header: '商品编码', width: '15%' },
    { key: 'name', header: '商品名称', width: '20%' },
    { key: 'quantity', header: '数量', width: '10%' },
    { key: 'price', header: '单价', width: '15%' },
    { key: 'total', header: '总价', width: '15%' },
    { key: 'supplier', header: '供应商', width: '15%' },
    { key: 'status', header: '状态', width: '10%' },
  ];

  // Sample data
  const data = [
    {
      id: 'SKU-001',
      name: '智能手表 Pro',
      quantity: '5',
      price: '¥980',
      total: '¥4,900',
      supplier: '雅虎',
      status: '待发货',
    },
    {
      id: 'SKU-002',
      name: '无线蓝牙耳机',
      quantity: '10',
      price: '¥420',
      total: '¥4,200',
      supplier: '乐天',
      status: '已发货',
    },
    {
      id: 'SKU-003',
      name: '智能家居套装',
      quantity: '2',
      price: '¥2,100',
      total: '¥4,200',
      supplier: '亚马逊',
      status: '已完成',
    },
    {
      id: 'SKU-004',
      name: '高清投影仪',
      quantity: '3',
      price: '¥3,800',
      total: '¥11,400',
      supplier: '雅虎',
      status: '待发货',
    },
  ];

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>采购订单详情</CardTitle>
        <CardDescription>查看采购订单中的商品明细</CardDescription>
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
