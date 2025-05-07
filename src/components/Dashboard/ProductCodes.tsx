
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/common/DataTable';
import { Plus, Download, Upload } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const ProductCodes = () => {
  const { t } = useTranslation();
  
  const columns = [
    { key: 'code', header: t('products.code'), width: '15%' },
    { key: 'name', header: t('products.name'), width: '25%' },
    { key: 'category', header: t('products.category'), width: '15%' },
    { key: 'platform', header: t('common.platform'), width: '15%' },
    { key: 'tigerCode', header: t('products.tigerCode'), width: '20%' },
    { key: 'status', header: t('common.status'), width: '10%' },
  ];

  // Sample data
  const data = [
    {
      code: 'JP001',
      name: '高级厨房刀具套装',
      category: '厨房用品',
      platform: '雅虎',
      tigerCode: 'TG-KTC-001',
      status: t('products.mapped'),
    },
    {
      code: 'JP002',
      name: '不锈钢煎锅',
      category: '厨房用品',
      platform: '乐天',
      tigerCode: 'TG-KTC-045',
      status: t('products.mapped'),
    },
    {
      code: 'JP003',
      name: '高级陶瓷餐具组合',
      category: '餐桌用品',
      platform: '亚马逊',
      tigerCode: 'TG-TBL-102',
      status: t('products.mapped'),
    },
    {
      code: 'JP004',
      name: '竹制砧板',
      category: '厨房用品',
      platform: '雅虎',
      tigerCode: 'TG-KTC-078',
      status: t('products.mapped'),
    },
    {
      code: 'JP005',
      name: '高级调味料架',
      category: '厨房用品',
      platform: '乐天',
      tigerCode: 'TG-KTC-156',
      status: t('products.unmapped'),
    },
  ];

  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>{t('products.title')}</CardTitle>
          <CardDescription>{t('products.description')}</CardDescription>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-1" />
            {t('common.import')}
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1" />
            {t('common.export')}
          </Button>
          <Button size="sm" className="bg-tiger-600 hover:bg-tiger-700">
            <Plus className="h-4 w-4 mr-1" />
            {t('products.addProduct')}
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
