
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/common/DataTable';
import { Plus, Download, Upload } from 'lucide-react';

export const ProductCodes = () => {
  const columns = [
    { key: 'code', header: '产品编码', width: '15%' },
    { key: 'name', header: '产品名称', width: '25%' },
    { key: 'category', header: '产品类别', width: '15%' },
    { key: 'platform', header: '平台', width: '15%' },
    { key: 'tigerCode', header: 'Tiger总部编码', width: '20%' },
    { key: 'status', header: '状态', width: '10%' },
  ];

  // Sample data
  const data = [
    {
      code: 'JP001',
      name: '高级厨房刀具套装',
      category: '厨房用品',
      platform: '雅虎',
      tigerCode: 'TG-KTC-001',
      status: '已映射',
    },
    {
      code: 'JP002',
      name: '不锈钢煎锅',
      category: '厨房用品',
      platform: '乐天',
      tigerCode: 'TG-KTC-045',
      status: '已映射',
    },
    {
      code: 'JP003',
      name: '高级陶瓷餐具组合',
      category: '餐桌用品',
      platform: '亚马逊',
      tigerCode: 'TG-TBL-102',
      status: '已映射',
    },
    {
      code: 'JP004',
      name: '竹制砧板',
      category: '厨房用品',
      platform: '雅虎',
      tigerCode: 'TG-KTC-078',
      status: '已映射',
    },
    {
      code: 'JP005',
      name: '高级调味料架',
      category: '厨房用品',
      platform: '乐天',
      tigerCode: 'TG-KTC-156',
      status: '未映射',
    },
  ];

  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>产品编码管理</CardTitle>
          <CardDescription>管理与Tiger总部一致的产品编码映射</CardDescription>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-1" />
            导入
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1" />
            导出
          </Button>
          <Button size="sm" className="bg-tiger-600 hover:bg-tiger-700">
            <Plus className="h-4 w-4 mr-1" />
            新增产品
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
