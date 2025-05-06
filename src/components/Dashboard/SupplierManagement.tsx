
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { DataTable } from '@/components/common/DataTable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Edit, Trash2, Link } from 'lucide-react';
import { toast } from 'sonner';

export const SupplierManagement = () => {
  const [newSupplier, setNewSupplier] = useState({
    name: '',
    contact: '',
    email: '',
    phone: ''
  });

  const columns = [
    { key: 'id', header: '供应商ID', width: '10%' },
    { key: 'name', header: '供应商名称', width: '20%' },
    { key: 'contact', header: '联系人', width: '15%' },
    { key: 'email', header: '电子邮件', width: '15%' },
    { key: 'phone', header: '联系电话', width: '15%' },
    { key: 'actions', header: '操作', width: '25%' },
  ];

  // Sample data
  const data = [
    {
      id: 'SUP-001',
      name: '雅虎供应链',
      contact: '张经理',
      email: 'zhang@yahoo-supply.com',
      phone: '13812345678',
      actions: (
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" onClick={() => handleEditSupplier('SUP-001')}>
            <Edit className="h-3 w-3 mr-1" />
            编辑
          </Button>
          <Button size="sm" variant="outline" onClick={() => handleLinkSupplier('SUP-001')}>
            <Link className="h-3 w-3 mr-1" />
            关联产品
          </Button>
          <Button size="sm" variant="outline" className="text-destructive hover:bg-destructive/10" onClick={() => handleDeleteSupplier('SUP-001')}>
            <Trash2 className="h-3 w-3 mr-1" />
            删除
          </Button>
        </div>
      ),
    },
    {
      id: 'SUP-002',
      name: '乐天市场',
      contact: '李经理',
      email: 'li@rakuten.com',
      phone: '13987654321',
      actions: (
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" onClick={() => handleEditSupplier('SUP-002')}>
            <Edit className="h-3 w-3 mr-1" />
            编辑
          </Button>
          <Button size="sm" variant="outline" onClick={() => handleLinkSupplier('SUP-002')}>
            <Link className="h-3 w-3 mr-1" />
            关联产品
          </Button>
          <Button size="sm" variant="outline" className="text-destructive hover:bg-destructive/10" onClick={() => handleDeleteSupplier('SUP-002')}>
            <Trash2 className="h-3 w-3 mr-1" />
            删除
          </Button>
        </div>
      ),
    },
    {
      id: 'SUP-003',
      name: '亚马逊全球',
      contact: '王经理',
      email: 'wang@amazon.com',
      phone: '13698765432',
      actions: (
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" onClick={() => handleEditSupplier('SUP-003')}>
            <Edit className="h-3 w-3 mr-1" />
            编辑
          </Button>
          <Button size="sm" variant="outline" onClick={() => handleLinkSupplier('SUP-003')}>
            <Link className="h-3 w-3 mr-1" />
            关联产品
          </Button>
          <Button size="sm" variant="outline" className="text-destructive hover:bg-destructive/10" onClick={() => handleDeleteSupplier('SUP-003')}>
            <Trash2 className="h-3 w-3 mr-1" />
            删除
          </Button>
        </div>
      ),
    },
  ];

  const handleAddSupplier = () => {
    toast.success('已添加新供应商');
    setNewSupplier({ name: '', contact: '', email: '', phone: '' });
  };

  const handleEditSupplier = (id: string) => {
    toast.info(`编辑供应商 ${id}`);
  };

  const handleDeleteSupplier = (id: string) => {
    toast.success(`已删除供应商 ${id}`);
  };

  const handleLinkSupplier = (id: string) => {
    toast.info(`关联供应商 ${id} 的产品`);
  };

  return (
    <Card className="col-span-3">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>供应商管理</CardTitle>
            <CardDescription>管理产品供应商及其关联商品</CardDescription>
          </div>
          <Button className="bg-tiger-600 hover:bg-tiger-700">
            <Plus className="h-4 w-4 mr-1" />
            添加供应商
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
      <CardFooter className="border-t pt-6 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-4">
          <div>
            <label className="text-sm font-medium mb-1 block">供应商名称</label>
            <Input 
              value={newSupplier.name} 
              onChange={(e) => setNewSupplier({...newSupplier, name: e.target.value})}
              placeholder="输入供应商名称"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">联系人</label>
            <Input 
              value={newSupplier.contact} 
              onChange={(e) => setNewSupplier({...newSupplier, contact: e.target.value})}
              placeholder="输入联系人姓名"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">电子邮件</label>
            <Input 
              value={newSupplier.email} 
              onChange={(e) => setNewSupplier({...newSupplier, email: e.target.value})}
              placeholder="输入电子邮件"
              type="email"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">联系电话</label>
            <Input 
              value={newSupplier.phone} 
              onChange={(e) => setNewSupplier({...newSupplier, phone: e.target.value})}
              placeholder="输入联系电话"
            />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
