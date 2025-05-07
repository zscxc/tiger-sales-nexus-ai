
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { ChartBar, ChartLine, ChartPie, ListOrdered } from 'lucide-react';

export const ECBusinessReport = () => {
  const { t } = useTranslation();
  const [reportView, setReportView] = useState('sales');

  // Monthly sales data by platform
  const monthlyPlatformSales = [
    { month: '2月', 楽天: 1164678, yahoo: 70496, amazon: 297669, 自社: 101475, その他: 584815, 合計: 2219133 },
    { month: '3月', 楽天: 2017038, yahoo: 330042, amazon: 238905, 自社: 77000, その他: 0, 合計: 2662985 },
    { month: '4月', 楽天: 894468, yahoo: 157153, amazon: 260880, 自社: 69500, その他: 0, 合計: 1382001 }
  ];

  // Monthly orders count by platform
  const monthlyOrdersData = [
    { month: '2月', 楽天: 142, yahoo: 14, amazon: 17, 自社: 3, その他: 1, 合計: 177 },
    { month: '3月', 楽天: 170, yahoo: 19, amazon: 18, 自社: 1, その他: 0, 合計: 208 },
    { month: '4月', 楽天: 143, yahoo: 9, amazon: 19, 自社: 2, その他: 0, 合計: 172 }
  ];

  // Yearly sales comparison
  const yearlyComparisonData = [
    { month: '1月', '2022年': 1339, '2023年': 1347, '2024年': 1490, '2025年': 3605 },
    { month: '2月', '2022年': 2032, '2023年': 1264, '2024年': 1689, '2025年': 2219 },
    { month: '3月', '2022年': 2569, '2023年': 1691, '2024年': 1807, '2025年': 2662 },
    { month: '4月', '2022年': 2444, '2023年': 1888, '2024年': 1647, '2025年': 1382 },
    { month: '5月', '2022年': 2353, '2023年': 2115, '2024年': 1946, '2025年': null },
    { month: '6月', '2022年': 1856, '2023年': 2285, '2024年': 2369, '2025年': null },
    { month: '7月', '2022年': 1629, '2023年': 1567, '2024年': 1743, '2025年': null },
    { month: '8月', '2022年': 1425, '2023年': 1670, '2024年': 1418, '2025年': null },
    { month: '9月', '2022年': 2445, '2023年': 1370, '2024年': 1500, '2025年': null },
    { month: '10月', '2022年': 1907, '2023年': 2028, '2024年': 1608, '2025年': null },
    { month: '11月', '2022年': 2396, '2023年': 1793, '2024年': 1688, '2025年': null },
    { month: '12月', '2022年': 1244, '2023年': 1469, '2024年': 1480, '2025年': null },
  ];

  // Regional sales ranking March 2025
  const marchRegionalSales = [
    { name: '中部地方', value: 1023525 },
    { name: '関東地方', value: 769392 },
    { name: '関西地方', value: 217430 },
    { name: '東北地方', value: 147136 },
    { name: '九州地方', value: 109807 },
    { name: '中国地方', value: 64230 },
    { name: '沖縄地方', value: 58955 },
    { name: '四国地方', value: 45468 },
    { name: '北海道地方', value: 24830 }
  ];

  // Regional sales ranking April 2025
  const aprilRegionalSales = [
    { name: '中部地方', value: 352159 },
    { name: '関東地方', value: 309825 },
    { name: '関西地方', value: 250132 },
    { name: '中国地方', value: 89200 },
    { name: '東北地方', value: 73600 },
    { name: '四国地方', value: 64624 },
    { name: '九州地方', value: 61540 },
    { name: '沖縄地方', value: 48130 },
    { name: '北海道地方', value: 27210 }
  ];

  // Product sales ranking data March
  const marchProductSales = [
    { name: '工作クランプ', sales: 929055, count: 2536, orders: 31 },
    { name: 'アンダーベース', sales: 391760, count: 1964, orders: 21 },
    { name: 'ケーブルタイ', sales: 311730, count: 676, orders: 97 },
    { name: 'C型ジョイント', sales: 163048, count: 443, orders: 9 },
    { name: '型枠クリップ', sales: 155000, count: 1900, orders: 12 }
  ];

  // Product sales ranking data April
  const aprilProductSales = [
    { name: 'アンダーベース', sales: 367440, count: 1876, orders: 16 },
    { name: 'ケーブルタイ', sales: 188850, count: 497, orders: 91 },
    { name: '工作クランプ', sales: 143283, count: 384, orders: 12 },
    { name: '型枠クリップ', sales: 105000, count: 1300, orders: 7 },
    { name: 'タラップ', sales: 91460, count: 250, orders: 8 }
  ];

  // Shipping location data March
  const shippingLocationData = [
    { name: '東京営業所', value: 1329147, orders: 63 },
    { name: '本社', value: 554982, orders: 85 },
    { name: '大阪営業所', value: 243713, orders: 26 },
    { name: '盛虎ジャパン', value: 168337, orders: 34 },
    { name: 'RSL', value: 137203, orders: 61 },
    { name: '仙台営業所', value: 27390, orders: 5 }
  ];

  // Stock source data March
  const stockSourceData = [
    { name: '産業仕入', sales: 1504232, percentage: 61.1, orders: 108, averageOrder: 13928 },
    { name: '自社工場', sales: 643200, percentage: 26.1, orders: 69, averageOrder: 9322 },
    { name: '盛虎ジャパン', sales: 313340, percentage: 12.8, orders: 96, averageOrder: 3264 }
  ];

  // Cable tie sales trend data
  const cableTieData = [
    { month: '2024-06', sales: 416741, count: 1851, orders: 102, profit: 206840, profitRate: 49.63 },
    { month: '2024-07', sales: 214180, count: 494, orders: 103, profit: 110759, profitRate: 51.71 },
    { month: '2024-08', sales: 206139, count: 564, orders: 76, profit: 107828, profitRate: 52.31 },
    { month: '2024-09', sales: 250490, count: 693, orders: 80, profit: 122630, profitRate: 48.96 },
    { month: '2024-10', sales: 224705, count: 544, orders: 74, profit: 108427, profitRate: 48.25 },
    { month: '2024-11', sales: 240080, count: 500, orders: 109, profit: 121515, profitRate: 50.61 },
    { month: '2024-12', sales: 307098, count: 1043, orders: 117, profit: 140463, profitRate: 45.74 },
    { month: '2025-01', sales: 393040, count: 1042, orders: 108, profit: 215222, profitRate: 54.76 },
    { month: '2025-02', sales: 215875, count: 445, orders: 74, profit: 119123, profitRate: 55.18 },
    { month: '2025-03', sales: 310440, count: 673, orders: 95, profit: 170876, profitRate: 55.04 },
    { month: '2025-04', sales: 187560, count: 494, orders: 88, profit: 103865, profitRate: 55.38 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#fa8072', '#00CED1', '#9370DB', '#3CB371'];

  const formatYenValue = (value: number) => {
    return `¥${value.toLocaleString()}`;
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{t('reports.ecBusinessReport')}</h2>
        <Badge variant="outline" className="text-sm">2025年4月24日</Badge>
      </div>

      <Tabs value={reportView} onValueChange={setReportView} className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="sales" className="flex items-center gap-2">
            <ChartBar className="h-4 w-4" /> {t('reports.salesAnalysis')}
          </TabsTrigger>
          <TabsTrigger value="platforms" className="flex items-center gap-2">
            <ChartLine className="h-4 w-4" /> {t('reports.platformComparison')}
          </TabsTrigger>
          <TabsTrigger value="regions" className="flex items-center gap-2">
            <ChartPie className="h-4 w-4" /> {t('reports.regionalSales')}
          </TabsTrigger>
          <TabsTrigger value="products" className="flex items-center gap-2">
            <ListOrdered className="h-4 w-4" /> {t('reports.productRankings')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sales" className="mt-0 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('reports.yearlySalesComparison')}</CardTitle>
              <CardDescription>{t('reports.yearlySalesDescription')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={yearlyComparisonData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={(value) => `¥${value}万`} />
                    <Tooltip formatter={(value) => [`¥${value}万`, '売上']} />
                    <Legend />
                    <Line type="monotone" dataKey="2022年" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="2023年" stroke="#82ca9d" strokeWidth={2} />
                    <Line type="monotone" dataKey="2024年" stroke="#ffc658" strokeWidth={2} />
                    <Line type="monotone" dataKey="2025年" stroke="#ff7300" strokeWidth={2} activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>{t('reports.monthlySalesByPlatform')}</CardTitle>
                <CardDescription>{t('reports.recentMonths')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyPlatformSales}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis tickFormatter={(value) => `¥${Math.floor(value/10000)}万`} />
                      <Tooltip formatter={(value) => [`¥${value.toLocaleString()}`, '']} />
                      <Legend />
                      <Bar dataKey="楽天" fill="#8884d8" />
                      <Bar dataKey="yahoo" fill="#82ca9d" />
                      <Bar dataKey="amazon" fill="#ffc658" />
                      <Bar dataKey="自社" fill="#ff7300" />
                      <Bar dataKey="その他" fill="#00C49F" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('reports.monthlyOrdersByPlatform')}</CardTitle>
                <CardDescription>{t('reports.recentMonths')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyOrdersData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => [value, '件数']} />
                      <Legend />
                      <Bar dataKey="楽天" fill="#8884d8" />
                      <Bar dataKey="yahoo" fill="#82ca9d" />
                      <Bar dataKey="amazon" fill="#ffc658" />
                      <Bar dataKey="自社" fill="#ff7300" />
                      <Bar dataKey="その他" fill="#00C49F" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="platforms" className="mt-0 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('reports.cableTieSalesTrend')}</CardTitle>
              <CardDescription>{t('reports.cableTieDescription')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={cableTieData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" tickFormatter={(value) => `¥${Math.floor(value/1000)}K`} />
                    <YAxis yAxisId="right" orientation="right" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                    <Tooltip formatter={(value, name) => {
                      if (name === 'sales') return [`¥${value.toLocaleString()}`, '売上'];
                      if (name === 'profit') return [`¥${value.toLocaleString()}`, '粗利'];
                      if (name === 'profitRate') return [`${value}%`, '粗利率'];
                      return [value, name];
                    }} />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="sales" name="売上" stroke="#8884d8" strokeWidth={2} />
                    <Line yAxisId="left" type="monotone" dataKey="profit" name="粗利" stroke="#82ca9d" strokeWidth={2} />
                    <Line yAxisId="right" type="monotone" dataKey="profitRate" name="粗利率" stroke="#ff7300" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('reports.stockSourceAnalysis')}</CardTitle>
              <CardDescription>{t('reports.stockSourceDescription')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stockSourceData.map((item, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="bg-muted p-4">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-primary">¥{item.sales.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">{item.percentage}% {t('reports.ofTotalSales')}</div>
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        <div>
                          <div className="text-sm text-muted-foreground">{t('reports.orders')}</div>
                          <div className="font-medium">{item.orders}件</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{t('reports.averageOrderValue')}</div>
                          <div className="font-medium">¥{item.averageOrder.toLocaleString()}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="regions" className="mt-0 space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>{t('reports.marchRegionalSales')}</CardTitle>
                <CardDescription>2025年3月</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={marchRegionalSales}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                      >
                        {marchRegionalSales.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`¥${value.toLocaleString()}`, '']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('reports.aprilRegionalSales')}</CardTitle>
                <CardDescription>2025年4月</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={aprilRegionalSales}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                      >
                        {aprilRegionalSales.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`¥${value.toLocaleString()}`, '']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{t('reports.shippingLocations')}</CardTitle>
              <CardDescription>2025年3月</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={shippingLocationData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" tickFormatter={(value) => `¥${Math.floor(value/10000)}万`} />
                    <YAxis type="category" dataKey="name" width={100} />
                    <Tooltip formatter={(value, name, props) => {
                      if (name === "value") return [`¥${value.toLocaleString()}`, '売上'];
                      return [value, name];
                    }} />
                    <Legend />
                    <Bar dataKey="value" name="売上" fill="#8884d8" />
                    <Bar dataKey="orders" name="注文数" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="products" className="mt-0 space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>{t('reports.topProductsMarch')}</CardTitle>
                <CardDescription>2025年3月</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={marchProductSales}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis tickFormatter={(value) => `¥${Math.floor(value/10000)}万`} />
                      <Tooltip formatter={(value, name) => {
                        if (name === "sales") return [`¥${value.toLocaleString()}`, '売上'];
                        if (name === "count") return [value, '個数'];
                        if (name === "orders") return [value, '注文数'];
                        return [value, name];
                      }} />
                      <Legend />
                      <Bar dataKey="sales" name="売上" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('reports.topProductsApril')}</CardTitle>
                <CardDescription>2025年4月</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={aprilProductSales}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis tickFormatter={(value) => `¥${Math.floor(value/10000)}万`} />
                      <Tooltip formatter={(value, name) => {
                        if (name === "sales") return [`¥${value.toLocaleString()}`, '売上'];
                        if (name === "count") return [value, '個数'];
                        if (name === "orders") return [value, '注文数'];
                        return [value, name];
                      }} />
                      <Legend />
                      <Bar dataKey="sales" name="売上" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{t('reports.aprilActionItems')}</CardTitle>
              <CardDescription>{t('reports.actionPlans')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">{t('reports.aprilActions')}</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>{t('reports.actionGoalDifference')}</li>
                    <li>{t('reports.actionBundleSales')}</li>
                    <li>{t('reports.actionFreeShipping')}</li>
                    <li>{t('reports.actionShoppingMarathon')}</li>
                  </ol>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">{t('reports.mayPlannedActions')}</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>{t('reports.actionProductRegistration')}</li>
                    <li>{t('reports.actionTopPageBanners')}</li>
                    <li>{t('reports.actionClearanceCorner')}</li>
                    <li>{t('reports.actionTopBannerRevision')}</li>
                    <li>{t('reports.actionCategoryBanners')}</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};
