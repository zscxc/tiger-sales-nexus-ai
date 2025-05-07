
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { DataTable } from '@/components/common/DataTable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Edit, Trash2, Link, ArrowLeft, FileText } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export const SupplierManagement = () => {
  const [newSupplier, setNewSupplier] = useState({
    name: '',
    contact: '',
    email: '',
    phone: ''
  });
  const [selectedSupplier, setSelectedSupplier] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('purchaseOrders');
  const { t } = useTranslation();

  const columns = [
    { key: 'id', header: t('suppliers.id'), width: '10%' },
    { key: 'name', header: t('suppliers.name'), width: '20%' },
    { key: 'contact', header: t('suppliers.contact'), width: '15%' },
    { key: 'email', header: t('suppliers.email'), width: '15%' },
    { key: 'phone', header: t('suppliers.phone'), width: '15%' },
    { key: 'actions', header: t('common.actions'), width: '25%' },
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
            {t('common.edit')}
          </Button>
          <Button size="sm" variant="outline" onClick={() => handleLinkSupplier('SUP-001')}>
            <Link className="h-3 w-3 mr-1" />
            {t('common.switch')}
          </Button>
          <Button size="sm" variant="outline" className="text-destructive hover:bg-destructive/10" onClick={() => handleDeleteSupplier('SUP-001')}>
            <Trash2 className="h-3 w-3 mr-1" />
            {t('common.delete')}
          </Button>
          <Button size="sm" variant="outline" onClick={() => handleViewSupplier('SUP-001')}>
            <FileText className="h-3 w-3 mr-1" />
            {t('common.view')}
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
            {t('common.edit')}
          </Button>
          <Button size="sm" variant="outline" onClick={() => handleLinkSupplier('SUP-002')}>
            <Link className="h-3 w-3 mr-1" />
            {t('common.switch')}
          </Button>
          <Button size="sm" variant="outline" className="text-destructive hover:bg-destructive/10" onClick={() => handleDeleteSupplier('SUP-002')}>
            <Trash2 className="h-3 w-3 mr-1" />
            {t('common.delete')}
          </Button>
          <Button size="sm" variant="outline" onClick={() => handleViewSupplier('SUP-002')}>
            <FileText className="h-3 w-3 mr-1" />
            {t('common.view')}
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
            {t('common.edit')}
          </Button>
          <Button size="sm" variant="outline" onClick={() => handleLinkSupplier('SUP-003')}>
            <Link className="h-3 w-3 mr-1" />
            {t('common.switch')}
          </Button>
          <Button size="sm" variant="outline" className="text-destructive hover:bg-destructive/10" onClick={() => handleDeleteSupplier('SUP-003')}>
            <Trash2 className="h-3 w-3 mr-1" />
            {t('common.delete')}
          </Button>
          <Button size="sm" variant="outline" onClick={() => handleViewSupplier('SUP-003')}>
            <FileText className="h-3 w-3 mr-1" />
            {t('common.view')}
          </Button>
        </div>
      ),
    },
  ];

  // Supplier details data
  const supplierDetails = {
    id: selectedSupplier || 'SUP-001',
    name: '测试厂',
    socialCreditCode: '123',
    address: '测试地址',
    detailedAddress: '123',
    contact: '123',
    phone: '15878814118',
    email: '1231@qq.com',
    status: 'normal',
    supplierType: '生产型供应商',
    notes: '阿萨德',
    productCount: 0,
    lastOrderDate: ''
  };

  const supplierProducts = [];

  const handleAddSupplier = () => {
    toast.success(t('suppliers.title'));
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

  const handleViewSupplier = (id: string) => {
    setSelectedSupplier(id);
  };

  if (selectedSupplier) {
    return (
      <Card className="col-span-3">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <Button variant="ghost" size="sm" onClick={() => setSelectedSupplier(null)} className="mb-2">
              <ArrowLeft className="h-4 w-4 mr-1" />
              {t('common.back')}
            </Button>
            <CardTitle>{t('suppliers.detailsTitle')}</CardTitle>
            <CardDescription>{t('suppliers.detailsDescription')}</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <div className="border rounded-md p-4 mb-6">
            <h3 className="font-semibold text-md border-b pb-2 mb-4">{t('common.basicInfo')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <div className="text-sm font-medium text-muted-foreground">{t('suppliers.name')}</div>
                <div>{supplierDetails.name}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">{t('suppliers.socialCreditCode')}</div>
                <div>{supplierDetails.socialCreditCode}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">{t('suppliers.address')}</div>
                <div>{supplierDetails.address}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">{t('suppliers.detailedAddress')}</div>
                <div>{supplierDetails.detailedAddress}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">{t('suppliers.contact')}</div>
                <div>{supplierDetails.contact}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">{t('suppliers.phone')}</div>
                <div>{supplierDetails.phone}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">{t('suppliers.email')}</div>
                <div>{supplierDetails.email}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">{t('suppliers.notes')}</div>
                <div>{supplierDetails.notes}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">{t('suppliers.status')}</div>
                <div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                    {t('suppliers.normal')}
                  </Badge>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">{t('suppliers.type')}</div>
                <div>{supplierDetails.supplierType}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">{t('suppliers.productCount')}</div>
                <div>{supplierDetails.productCount}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">{t('suppliers.lastOrderDate')}</div>
                <div>{supplierDetails.lastOrderDate || '—'}</div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-md text-red-500 mb-4">{t('suppliers.supplierProducts')}</h3>
            <Tabs defaultValue="purchaseOrders" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="purchaseOrders">{t('suppliers.purchaseOrders')}</TabsTrigger>
                <TabsTrigger value="purchaseCapability">{t('suppliers.purchaseCapability')}</TabsTrigger>
              </TabsList>

              <TabsContent value="purchaseOrders" className="mt-0">
                <div className="rounded-md border overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{t('sales.serialNumber')}</TableHead>
                        <TableHead>{t('purchase.purchaseOrderNo')}</TableHead>
                        <TableHead>{t('purchase.materialName')}</TableHead>
                        <TableHead>{t('purchase.materialCode')}</TableHead>
                        <TableHead>{t('common.specification')}</TableHead>
                        <TableHead>{t('suppliers.relatedPlanOrder')}</TableHead>
                        <TableHead>{t('common.unit')}</TableHead>
                        <TableHead>{t('common.quantity')}</TableHead>
                        <TableHead>{t('common.price')}</TableHead>
                        <TableHead>{t('suppliers.taxInclusivePrice')}</TableHead>
                        <TableHead>{t('suppliers.taxRate')}</TableHead>
                        <TableHead>{t('suppliers.taxAmount')}</TableHead>
                        <TableHead>{t('common.totalAmount')}</TableHead>
                        <TableHead>{t('common.deliveryDate')}</TableHead>
                        <TableHead>{t('common.deliveredQuantity')}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell colSpan={15} className="text-center py-8">
                          {t('purchase.noData')}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="purchaseCapability" className="mt-0">
                <div className="p-8 text-center text-muted-foreground">
                  {t('common.comingSoon')}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => setSelectedSupplier(null)}>
            {t('common.back')}
          </Button>
          <Button className="bg-tiger-600 hover:bg-tiger-700">
            {t('common.edit')}
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="col-span-3">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>{t('suppliers.title')}</CardTitle>
            <CardDescription>{t('suppliers.description')}</CardDescription>
          </div>
          <Button className="bg-tiger-600 hover:bg-tiger-700">
            <Plus className="h-4 w-4 mr-1" />
            {t('common.add')}
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
            <label className="text-sm font-medium mb-1 block">{t('suppliers.name')}</label>
            <Input 
              value={newSupplier.name} 
              onChange={(e) => setNewSupplier({...newSupplier, name: e.target.value})}
              placeholder={`${t('common.add')}${t('suppliers.name')}`}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">{t('suppliers.contact')}</label>
            <Input 
              value={newSupplier.contact} 
              onChange={(e) => setNewSupplier({...newSupplier, contact: e.target.value})}
              placeholder={`${t('common.add')}${t('suppliers.contact')}`}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">{t('suppliers.email')}</label>
            <Input 
              value={newSupplier.email} 
              onChange={(e) => setNewSupplier({...newSupplier, email: e.target.value})}
              placeholder={`${t('common.add')}${t('suppliers.email')}`}
              type="email"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">{t('suppliers.phone')}</label>
            <Input 
              value={newSupplier.phone} 
              onChange={(e) => setNewSupplier({...newSupplier, phone: e.target.value})}
              placeholder={`${t('common.add')}${t('suppliers.phone')}`}
            />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
