
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { FileUploadZone } from '@/components/common/FileUploadZone';
import { toast } from 'sonner';
import { Upload, FileUp, Plus } from 'lucide-react';
import { DataTable } from '@/components/common/DataTable';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

// 示例数据
const orderImportData = [
  { id: '1', date: '2025-05-01', platform: '亚马逊', status: '已完成', files: 2, records: 156 },
  { id: '2', date: '2025-05-02', platform: '乐天', status: '进行中', files: 1, records: 87 },
  { id: '3', date: '2025-05-03', platform: '雅虎', status: '已完成', files: 3, records: 245 },
  { id: '4', date: '2025-05-04', platform: '亚马逊', status: '失败', files: 1, records: 0 },
  { id: '5', date: '2025-05-05', platform: '乐天', status: '已完成', files: 2, records: 134 },
  { id: '6', date: '2025-05-06', platform: '雅虎', status: '已完成', files: 1, records: 56 },
];

export const OrderImport = () => {
  const [importMethod, setImportMethod] = useState<'file' | 'api'>('file');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleFileUpload = (files: File[]) => {
    // In a real application, this would send the files to your backend
    console.log('Files to be uploaded:', files);
    toast.success(`成功上传 ${files.length} 个订单数据文件`);
    setIsDialogOpen(false); // 关闭对话框
  };

  const handleAPIImport = () => {
    // In a real application, this would trigger an API import
    toast.success('API导入已启动，请检查导入状态');
    setIsDialogOpen(false); // 关闭对话框
  };

  const columns = [
    { key: 'date', header: '导入日期', width: '20%' },
    { key: 'platform', header: '平台', width: '15%' },
    { key: 'files', header: '文件数', width: '15%' },
    { key: 'records', header: '记录数', width: '15%' },
    { key: 'status', header: '状态', width: '15%' },
    { key: 'actions', header: '操作', width: '20%' },
  ];

  const dataWithActions = orderImportData.map(item => ({
    ...item,
    actions: (
      <div className="flex space-x-2">
        <Button variant="outline" size="sm">查看</Button>
        <Button variant="destructive" size="sm">删除</Button>
      </div>
    ),
  }));

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-xl">订单数据导入</CardTitle>
          <CardDescription>
            从平台导入销售订单数据。支持表格导入或API自动拉取。
          </CardDescription>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-tiger-600 hover:bg-tiger-700">
              <Plus className="h-4 w-4 mr-2" />
              导入订单数据
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>订单数据导入</DialogTitle>
              <DialogDescription>
                从平台导入销售订单数据。支持表格导入或API自动拉取。
              </DialogDescription>
            </DialogHeader>
            <Tabs value={importMethod} onValueChange={(value) => setImportMethod(value as 'file' | 'api')}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="file">文件导入</TabsTrigger>
                <TabsTrigger value="api">API导入</TabsTrigger>
              </TabsList>
              <TabsContent value="file" className="pt-4">
                <FileUploadZone
                  onUpload={handleFileUpload}
                  acceptedFileTypes=".csv, .xlsx, .xls"
                  maxFiles={5}
                  className="mb-4"
                />
                <div className="flex justify-end">
                  <Button variant="outline" className="mr-2" onClick={() => setIsDialogOpen(false)}>取消</Button>
                  <Button 
                    onClick={() => handleFileUpload([])} 
                    className="bg-tiger-600 hover:bg-tiger-700"
                  >
                    <FileUp className="h-4 w-4 mr-2" />
                    导入订单
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="api" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">选择要导入的平台</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {['雅虎', '乐天', '亚马逊'].map((platform) => (
                      <div key={platform} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={`platform-${platform}`}
                          className="form-checkbox h-4 w-4 text-tiger-600"
                        />
                        <label htmlFor={`platform-${platform}`} className="text-sm">{platform}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">选择时间范围</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="start-date" className="text-xs text-muted-foreground">开始日期</label>
                      <input
                        type="date"
                        id="start-date"
                        className="w-full mt-1 p-2 border rounded-md text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="end-date" className="text-xs text-muted-foreground">结束日期</label>
                      <input
                        type="date"
                        id="end-date"
                        className="w-full mt-1 p-2 border rounded-md text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button variant="outline" className="mr-2" onClick={() => setIsDialogOpen(false)}>取消</Button>
                  <Button 
                    onClick={handleAPIImport} 
                    className="bg-tiger-600 hover:bg-tiger-700"
                  >
                    <FileUp className="h-4 w-4 mr-2" />
                    开始导入
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <DataTable 
          columns={columns}
          data={dataWithActions}
          searchable={true}
          pageSize={5}
        />
      </CardContent>
    </Card>
  );
};
