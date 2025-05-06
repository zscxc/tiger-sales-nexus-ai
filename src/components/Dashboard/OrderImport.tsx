
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { FileUploadZone } from '@/components/common/FileUploadZone';
import { toast } from 'sonner';
import { Upload } from 'lucide-react';

export const OrderImport = () => {
  const [importMethod, setImportMethod] = useState<'file' | 'api'>('file');

  const handleFileUpload = (files: File[]) => {
    // In a real application, this would send the files to your backend
    console.log('Files to be uploaded:', files);
    toast.success(`成功上传 ${files.length} 个订单数据文件`);
  };

  const handleAPIImport = () => {
    // In a real application, this would trigger an API import
    toast.success('API导入已启动，请检查导入状态');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">订单数据导入</CardTitle>
        <CardDescription>
          从平台导入销售订单数据。支持表格导入或API自动拉取。
        </CardDescription>
      </CardHeader>
      <CardContent>
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
              <Button variant="outline" className="mr-2">取消</Button>
              <Button 
                onClick={() => handleFileUpload([])} 
                className="bg-tiger-600 hover:bg-tiger-700"
              >
                <Upload className="h-4 w-4 mr-2" />
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
              <Button variant="outline" className="mr-2">取消</Button>
              <Button 
                onClick={handleAPIImport} 
                className="bg-tiger-600 hover:bg-tiger-700"
              >
                <Upload className="h-4 w-4 mr-2" />
                开始导入
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
