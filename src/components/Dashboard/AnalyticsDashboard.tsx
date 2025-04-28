
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { StatsCard } from '@/components/common/StatsCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ChartBar, ChartPie, Tags, CreditCard, Package } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

export const AnalyticsDashboard = () => {
  const [chartView, setChartView] = useState('sales');
  
  // Sample data
  const salesData = [
    { month: '1月', 雅虎: 4000, 乐天: 2400, 亚马逊: 1800 },
    { month: '2月', 雅虎: 3200, 乐天: 2000, 亚马逊: 2200 },
    { month: '3月', 雅虎: 5000, 乐天: 3100, 亚马逊: 2800 },
    { month: '4月', 雅虎: 4500, 乐天: 2900, 亚马逊: 3200 },
    { month: '5月', 雅虎: 6000, 乐天: 3400, 亚马逊: 3800 },
    { month: '6月', 雅虎: 5500, 乐天: 3600, 亚马逊: 4000 },
  ];

  const categoryData = [
    { name: '厨房用品', value: 40 },
    { name: '餐桌用品', value: 25 },
    { name: '家居装饰', value: 20 },
    { name: '储物收纳', value: 15 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
        <StatsCard
          title="总销售额"
          value="¥1,850,500"
          description="本月销售总额"
          icon={<CreditCard className="h-4 w-4" />}
          trend={{ value: 12.5, isPositive: true }}
        />
        <StatsCard
          title="订单数量"
          value="1,284"
          description="本月订单总数"
          icon={<Package className="h-4 w-4" />}
          trend={{ value: 8.2, isPositive: true }}
        />
        <StatsCard
          title="售出商品"
          value="5,672"
          description="本月售出商品总数"
          icon={<Tags className="h-4 w-4" />}
          trend={{ value: 5.1, isPositive: true }}
        />
        <StatsCard
          title="平均订单金额"
          value="¥1,441"
          description="本月平均订单金额"
          icon={<CreditCard className="h-4 w-4" />}
          trend={{ value: 3.2, isPositive: true }}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-7 md:col-span-5">
          <CardHeader>
            <CardTitle>销售趋势分析</CardTitle>
            <CardDescription>按平台查看月度销售趋势</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <Tabs defaultValue={chartView} onValueChange={setChartView}>
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="sales">销售额</TabsTrigger>
                  <TabsTrigger value="orders">订单数</TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                {chartView === 'sales' ? (
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="雅虎" fill="#0088FE" />
                    <Bar dataKey="乐天" fill="#00C49F" />
                    <Bar dataKey="亚马逊" fill="#FFBB28" />
                  </BarChart>
                ) : (
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="雅虎" stroke="#0088FE" />
                    <Line type="monotone" dataKey="乐天" stroke="#00C49F" />
                    <Line type="monotone" dataKey="亚马逊" stroke="#FFBB28" />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-7 md:col-span-2">
          <CardHeader>
            <CardTitle>产品类别分布</CardTitle>
            <CardDescription>按产品类别销售比例</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
