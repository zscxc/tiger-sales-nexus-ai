
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Download, Edit, FilePlus } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

interface SalesOrderDetailsProps {
  orderId: string;
  onBack: () => void;
}

export const SalesOrderDetails = ({ orderId, onBack }: SalesOrderDetailsProps) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('details');
  
  // Sample order data based on the reference image
  const orderData = {
    id: orderId,
    country: '中国',
    customer: '阿宝',
    destination: '冲绳',
    orderTime: '2025-04-03 00:00:00',
    items: 4,
    orderQuantity: 59100,
    totalAmount: '¥59,100',
    estimatedCompletion: '2025-04-10',
    estimatedShipping: '2025-04-16',
    status: '审核中'
  };

  // Sample order items data
  const orderItems = [
    {
      id: 1,
      name: '上下らくらくスペーサー',
      code: '35137',
      japaneseName: 'スペーサー',
      japaneseCode: 'skb03020101',
      category: 'スペーサー',
      specifications: '30・40X60',
      entryQuantity: 5,
      totalQuantity: 100,
      unitPrice: '¥13',
      comparativePrice: '¥13',
      totalPrice: '¥1,300',
      currentInventory: 50,
      inProductionValue: 20,
      inInventoryValue: 30,
      outboundQuantity: 10,
      estimatedRevenue: '¥1,500'
    },
    {
      id: 2,
      name: '工作クランプ',
      code: '29482',
      japaneseName: 'クランプ',
      japaneseCode: 'skb02010301',
      category: '工作クランプ',
      specifications: '48.6φ 直交',
      entryQuantity: 2,
      totalQuantity: 30,
      unitPrice: '¥182',
      comparativePrice: '¥182',
      totalPrice: '¥5,460',
      currentInventory: 15,
      inProductionValue: 10,
      inInventoryValue: 5,
      outboundQuantity: 5,
      estimatedRevenue: '¥6,000'
    }
  ];

  const handleModifyOrder = () => {
    toast.info(`修改订单 ${orderId}`);
  };

  const handlePlanShipping = () => {
    toast.info(`为订单 ${orderId} 创建出荷计划`);
  };

  const handleAddQualityFeedback = () => {
    toast.info(`为订单 ${orderId} 添加质量反馈`);
  };

  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <Button variant="ghost" size="sm" onClick={onBack} className="mb-2">
            <ArrowLeft className="h-4 w-4 mr-1" />
            {t('common.back')}
          </Button>
          <CardTitle>{t('sales.detailsTitle')}</CardTitle>
          <CardDescription>{t('sales.detailsDescription')}</CardDescription>
        </div>
        <Button className="bg-tiger-600 hover:bg-tiger-700">
          {t('sales.sendMessage')}
        </Button>
      </CardHeader>

      <CardContent>
        <div className="border rounded-md p-4 mb-6">
          <h3 className="font-semibold text-md border-b pb-2 mb-4">{t('common.basicInfo')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <div className="text-sm font-medium text-muted-foreground">{t('common.orderNo')}</div>
              <div>{orderData.id}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">{t('common.country')}</div>
              <div>{orderData.country}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">{t('common.customer')}</div>
              <div>{orderData.customer}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">{t('common.destination')}</div>
              <div>{orderData.destination}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">{t('common.orderTime')}</div>
              <div>{orderData.orderTime}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">{t('common.orderItems')}</div>
              <div>{orderData.items}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">{t('common.orderQuantity')}</div>
              <div>{orderData.orderQuantity}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">{t('common.totalAmount')}</div>
              <div>{orderData.totalAmount}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">{t('common.estimatedCompletion')}</div>
              <div>{orderData.estimatedCompletion}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">{t('common.estimatedShipping')}</div>
              <div>{orderData.estimatedShipping}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">{t('common.orderStatus')}</div>
              <div className="text-tiger-600">{orderData.status}</div>
            </div>
          </div>
        </div>

        <div>
          <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 mb-4">
              <TabsTrigger value="details">{t('sales.orderDetails')}</TabsTrigger>
              <TabsTrigger value="productionPlan">{t('sales.productionPlan')}</TabsTrigger>
              <TabsTrigger value="productionInfo">{t('sales.productionInfo')}</TabsTrigger>
              <TabsTrigger value="inventoryInfo">{t('sales.inventoryInfo')}</TabsTrigger>
              <TabsTrigger value="shippingPlan">{t('sales.shippingPlan')}</TabsTrigger>
              <TabsTrigger value="shippingDetails">{t('sales.shippingDetails')}</TabsTrigger>
              <TabsTrigger value="completion">{t('sales.completionAndPayment')}</TabsTrigger>
              <TabsTrigger value="modification">{t('sales.orderModification')}</TabsTrigger>
              <TabsTrigger value="audit">{t('sales.auditInfo')}</TabsTrigger>
              <TabsTrigger value="mrp">{t('sales.mrpCalculation')}</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="mt-0">
              <div className="flex justify-between mb-4">
                <h3 className="font-semibold text-md">{t('common.detailedInfo')}</h3>
                <div className="space-x-2">
                  <Button size="sm" variant="outline" onClick={handleModifyOrder}>
                    <Edit className="h-4 w-4 mr-1" />
                    {t('sales.modify')}
                  </Button>
                  <Button size="sm" variant="outline" onClick={handlePlanShipping}>
                    <Download className="h-4 w-4 mr-1" />
                    {t('sales.planShipping')}
                  </Button>
                  <Button size="sm" variant="outline" onClick={handleAddQualityFeedback}>
                    <FilePlus className="h-4 w-4 mr-1" />
                    {t('sales.addQualityFeedback')}
                  </Button>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t('sales.serialNumber')}</TableHead>
                      <TableHead>{t('sales.productName')}</TableHead>
                      <TableHead>{t('sales.materialCode')}</TableHead>
                      <TableHead>{t('sales.japaneseProductName')}</TableHead>
                      <TableHead>{t('sales.japaneseMaterialCode')}</TableHead>
                      <TableHead>{t('sales.productCategory')}</TableHead>
                      <TableHead>{t('sales.specifications')}</TableHead>
                      <TableHead>{t('sales.entryQuantity')}</TableHead>
                      <TableHead>{t('sales.totalQuantity')}</TableHead>
                      <TableHead>{t('sales.unitPrice')}</TableHead>
                      <TableHead>{t('sales.comparativePrice')}</TableHead>
                      <TableHead>{t('sales.totalPrice')}</TableHead>
                      <TableHead>{t('sales.currentInventory')}</TableHead>
                      <TableHead>{t('sales.inProductionValue')}</TableHead>
                      <TableHead>{t('sales.inInventoryValue')}</TableHead>
                      <TableHead>{t('sales.outboundQuantity')}</TableHead>
                      <TableHead>{t('sales.estimatedRevenue')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orderItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.code}</TableCell>
                        <TableCell>{item.japaneseName}</TableCell>
                        <TableCell>{item.japaneseCode}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{item.specifications}</TableCell>
                        <TableCell>{item.entryQuantity}</TableCell>
                        <TableCell>{item.totalQuantity}</TableCell>
                        <TableCell>{item.unitPrice}</TableCell>
                        <TableCell>{item.comparativePrice}</TableCell>
                        <TableCell>{item.totalPrice}</TableCell>
                        <TableCell>{item.currentInventory}</TableCell>
                        <TableCell>{item.inProductionValue}</TableCell>
                        <TableCell>{item.inInventoryValue}</TableCell>
                        <TableCell>{item.outboundQuantity}</TableCell>
                        <TableCell>{item.estimatedRevenue}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Placeholder for other tabs */}
            {['productionPlan', 'productionInfo', 'inventoryInfo', 'shippingPlan', 'shippingDetails', 'completion', 'modification', 'audit', 'mrp'].map((tab) => (
              <TabsContent key={tab} value={tab} className="mt-0">
                <div className="p-8 text-center text-muted-foreground">
                  {t('common.comingSoon')}
                </div>
              </TabsContent>
            ))}
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
