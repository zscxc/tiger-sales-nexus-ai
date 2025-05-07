
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/common/DataTable';
import { Plus, Download, Upload } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

export const ProductCodes = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  // Sample data based on the provided Japanese product information
  const productData = [
    {
      tigerCode: '38575',
      productCode: '',
      name: 'ｴｲﾄｺｰﾝ 12x8x8 (茶) 500入',
      supplier: 'グループ工場生産',
      price: '¥13.31',
      category: '',
      quantity: ''
    },
    {
      tigerCode: '27359',
      productCode: 'skb01010601',
      name: '梁引金具 O型(鉄ｶｯﾌﾟ) 250入★',
      supplier: 'グループ工場生産',
      price: '¥31.23',
      category: '梁引金具',
      quantity: '1'
    },
    {
      tigerCode: '27810',
      productCode: 'skb01010602',
      name: '梁引金具 A型(鉄ｶｯﾌﾟ) 250入★',
      supplier: 'グループ工場生産',
      price: '¥33.35',
      category: '梁引金具',
      quantity: '1'
    },
    {
      tigerCode: '37901',
      productCode: '',
      name: '梁引金具 B型(Pｺﾝ無) 400入★',
      supplier: '',
      price: '¥25.51',
      category: '',
      quantity: ''
    },
    {
      tigerCode: '41314',
      productCode: '',
      name: '釘付Pｺﾏ 5/16 Sﾀｲﾌﾟ 500入',
      supplier: '',
      price: '¥21.53',
      category: '',
      quantity: ''
    },
    {
      tigerCode: '32933',
      productCode: 'skb01010201',
      name: 'ｶﾄﾞｷﾞﾒ 5/16 100入★',
      supplier: 'グループ工場生産',
      price: '¥72.81',
      category: 'カドギメ',
      quantity: '1'
    },
    {
      tigerCode: '49650',
      productCode: 'skb02010501',
      name: 'ﾏﾙﾁｾﾊﾟ引き ★',
      supplier: 'グループ工場生産',
      price: '¥57',
      category: 'マルチセパ引き',
      quantity: '1'
    },
    {
      tigerCode: '38183',
      productCode: '38183',
      name: 'ｽﾃﾝﾚｽﾊﾟﾈｻｰﾄ SUS PN-3030 500入',
      supplier: '本社仕入',
      price: '¥0',
      category: 'ステンレスパネサート',
      quantity: '1'
    },
    {
      tigerCode: '32955',
      productCode: 'skb01010501',
      name: '型枠ｸﾘｯﾌﾟ 24型 100入★',
      supplier: 'グループ工場生産',
      price: '¥49',
      category: '型枠クリップ',
      quantity: '1'
    },
    {
      tigerCode: '32987',
      productCode: 'skb01010502',
      name: '型枠ｸﾘｯﾌﾟ 27型 100入 ★',
      supplier: 'グループ工場生産',
      price: '¥32',
      category: '型枠クリップ',
      quantity: '1',
      status: '停'
    },
    {
      tigerCode: '30581',
      productCode: 'skb02010101',
      name: 'C型ジョイント 48.6',
      supplier: '本社仕入',
      price: '¥181',
      category: 'C型ジョイント',
      quantity: '1'
    },
    {
      tigerCode: '30764',
      productCode: 'skb02010201',
      name: 'C型ジョイント φ48.6 ドブメッキ',
      supplier: '本社仕入',
      price: '¥243',
      category: 'C型ジョイント',
      quantity: '1'
    }
  ];

  // Pagination logic
  const totalPages = Math.ceil(productData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, productData.length);
  const currentData = productData.slice(startIndex, endIndex);

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
        <div className="flex items-center mb-4">
          <Input 
            placeholder={t('common.search')} 
            className="max-w-sm" 
          />
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t('products.tigerCode')}</TableHead>
                <TableHead>{t('products.code')}</TableHead>
                <TableHead>{t('products.name')}</TableHead>
                <TableHead>{t('common.supplier')}</TableHead>
                <TableHead>{t('products.price')}</TableHead>
                <TableHead>{t('products.category')}</TableHead>
                <TableHead>{t('products.quantity')}</TableHead>
                <TableHead>{t('common.status')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentData.map((product, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{product.tigerCode}</TableCell>
                  <TableCell>{product.productCode}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.supplier}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>{product.status || ''}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {totalPages > 1 && (
          <div className="mt-4 flex justify-end">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink 
                      isActive={currentPage === i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
