
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

interface PurchaseOrderDetailsProps {
  orderId: string;
  onBack: () => void;
}

export const PurchaseOrderDetails = ({ orderId, onBack }: PurchaseOrderDetailsProps) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('inspectionInfo');
  
  // Sample purchase order data based on the reference image
  const orderData = {
    id: orderId || 'PO25042301',
    materialName: '物料名测试',
    materialCode: '1.12.3.3',
    specification: '规格',
    planNo: 'PR-250315-005-01',
    unit: '单位3',
    quantity: 3,
    totalPrice: 6,
    deliveryDate: '',
    deliveredQuantity: '暂无字段',
    undeliveredQuantity: '暂无字段'
  };

  // Sample inspection data
  const inspectionData = [];

  const handleDownload = () => {
    toast.info(`下载订单 ${orderId} 的合同附件`);
  };

  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <Button variant="ghost" size="sm" onClick={onBack} className="mb-2">
            <ArrowLeft className="h-4 w-4 mr-1" />
            {t('common.back')}
          </Button>
          <CardTitle>{t('purchase.detailsTitle')}</CardTitle>
          <CardDescription>{t('purchase.detailsDescription')}</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <div className="border rounded-md p-4 mb-6">
          <h3 className="font-semibold text-md border-b pb-2 mb-4">{t('common.basicInfo')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <div className="text-sm font-medium text-muted-foreground">{t('purchase.purchaseOrderNo')}</div>
              <div>{orderData.id}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">{t('purchase.materialName')}</div>
              <div>{orderData.materialName}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">{t('purchase.materialCode')}</div>
              <div>{orderData.materialCode}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">{t('common.specification')}</div>
              <div>{orderData.specification}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">{t('purchase.planNo')}</div>
              <div>{orderData.planNo}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">{t('common.unit')}</div>
              <div>{orderData.unit}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">{t('common.quantity')}</div>
              <div>{orderData.quantity}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">{t('common.totalPrice')}</div>
              <div>{orderData.totalPrice}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">{t('common.deliveryDate')}</div>
              <div>{orderData.deliveryDate || '—'}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">{t('common.deliveredQuantity')}</div>
              <div>{orderData.deliveredQuantity}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">{t('common.undeliveredQuantity')}</div>
              <div>{orderData.undeliveredQuantity}</div>
            </div>
          </div>
        </div>

        <div>
          <Tabs defaultValue="inspectionInfo" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 md:grid-cols-3">
              <TabsTrigger value="inspectionInfo">{t('purchase.inspectionInfo')}</TabsTrigger>
              <TabsTrigger value="inventoryInfo">{t('purchase.inventoryInfo')}</TabsTrigger>
              <TabsTrigger value="contractAttachment">{t('purchase.contractAttachment')}</TabsTrigger>
            </TabsList>

            <TabsContent value="inspectionInfo" className="mt-4">
              <div className="rounded-md border overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t('sales.serialNumber')}</TableHead>
                      <TableHead>{t('purchase.inspectionType')}</TableHead>
                      <TableHead>{t('purchase.inspectionTime')}</TableHead>
                      <TableHead>{t('purchase.inspector')}</TableHead>
                      <TableHead>{t('purchase.inspectionStatus')}</TableHead>
                      <TableHead>{t('purchase.inspectedQuantity')}</TableHead>
                      <TableHead>{t('purchase.qualifiedQuantity')}</TableHead>
                      <TableHead>{t('purchase.unqualifiedQuantity')}</TableHead>
                      <TableHead>{t('purchase.unqualifiedReason')}</TableHead>
                      <TableHead>{t('purchase.unqualifiedProductCount')}</TableHead>
                      <TableHead>{t('purchase.qualificationRate')}</TableHead>
                      <TableHead>{t('purchase.purchaseOrderQuantity')}</TableHead>
                      <TableHead>{t('purchase.purchasedQuantity')}</TableHead>
                      <TableHead>{t('purchase.inventoriedQuantity')}</TableHead>
                      <TableHead>{t('purchase.currentInventoryQuantity')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inspectionData.length > 0 ? (
                      inspectionData.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.serialNumber}</TableCell>
                          <TableCell>{item.inspectionType}</TableCell>
                          <TableCell>{item.inspectionTime}</TableCell>
                          <TableCell>{item.inspector}</TableCell>
                          <TableCell>{item.inspectionStatus}</TableCell>
                          <TableCell>{item.inspectedQuantity}</TableCell>
                          <TableCell>{item.qualifiedQuantity}</TableCell>
                          <TableCell>{item.unqualifiedQuantity}</TableCell>
                          <TableCell>{item.unqualifiedReason}</TableCell>
                          <TableCell>{item.unqualifiedProductCount}</TableCell>
                          <TableCell>{item.qualificationRate}</TableCell>
                          <TableCell>{item.purchaseOrderQuantity}</TableCell>
                          <TableCell>{item.purchasedQuantity}</TableCell>
                          <TableCell>{item.inventoriedQuantity}</TableCell>
                          <TableCell>{item.currentInventoryQuantity}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={15} className="text-center py-8">
                          {t('purchase.noData')}
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="inventoryInfo" className="mt-4">
              <div className="p-8 text-center text-muted-foreground">
                {t('common.comingSoon')}
              </div>
            </TabsContent>

            <TabsContent value="contractAttachment" className="mt-4">
              <div className="flex flex-col items-center justify-center p-8 border rounded-md">
                <p className="mb-4 text-muted-foreground">{t('common.comingSoon')}</p>
                <Button onClick={handleDownload}>
                  <Download className="h-4 w-4 mr-1" />
                  {t('purchase.download')}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          {t('common.back')}
        </Button>
      </CardFooter>
    </Card>
  );
};
