
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Brain, TrendingUp, Calculator } from 'lucide-react';
import { toast } from 'sonner';

export const AIInsights = () => {
  // Sample data for forecasting
  const forecastData = [
    { month: '7月', actual: 15200, forecast: 15200 },
    { month: '8月', actual: 16500, forecast: 16500 },
    { month: '9月', actual: 18200, forecast: 18200 },
    { month: '10月', actual: null, forecast: 19800 },
    { month: '11月', actual: null, forecast: 22500 },
    { month: '12月', actual: null, forecast: 26000 },
  ];

  // Sample data for profit analysis
  const profitData = [
    { category: '厨房用品', revenue: 850000, cost: 510000, profit: 340000, margin: 40 },
    { category: '餐桌用品', revenue: 620000, cost: 390000, profit: 230000, margin: 37 },
    { category: '家居装饰', revenue: 480000, cost: 265000, profit: 215000, margin: 45 },
    { category: '储物收纳', revenue: 390000, cost: 230000, profit: 160000, margin: 41 },
  ];

  // Sample recommendations
  const recommendations = [
    {
      title: '增加厨房用品库存',
      description: '基于销售预测，建议增加厨房刀具和不锈钢锅具的库存，预计销量将在下个月增长25%。',
      impact: '预计增加销售额¥180,000',
      confidence: '87%',
    },
    {
      title: '优化餐桌用品定价',
      description: '分析显示陶瓷餐具组合的当前定价低于市场平均水平，建议提高价格8%不会影响销量。',
      impact: '预计增加利润率4.5%',
      confidence: '82%',
    },
    {
      title: '调整家居装饰营销策略',
      description: '数据显示家居装饰类产品在社交媒体广告中表现最佳，建议将预算从搜索广告转向社交媒体。',
      impact: '预计降低获客成本15%',
      confidence: '79%',
    },
  ];

  const handleRunAnalysis = () => {
    toast.success('AI分析已启动，结果将在几分钟后更新');
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>AI销售预测</CardTitle>
            <CardDescription>
              基于历史数据和市场趋势的未来3个月销售预测
            </CardDescription>
          </div>
          <Button onClick={handleRunAnalysis} className="bg-tiger-600 hover:bg-tiger-700">
            <TrendingUp className="h-4 w-4 mr-2" />
            更新预测
          </Button>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={forecastData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="actual"
                  name="实际销售额 (千元)"
                  stroke="#0284c7"
                  strokeWidth={2}
                  dot={{ r: 5 }}
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="forecast"
                  name="预测销售额 (千元)"
                  stroke="#0ea5e9"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>利润分析工具</CardTitle>
            <CardDescription>
              产品类别利润率和成本结构分析
            </CardDescription>
          </div>
          <Button onClick={handleRunAnalysis} className="bg-tiger-600 hover:bg-tiger-700">
            <Calculator className="h-4 w-4 mr-2" />
            运行分析
          </Button>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="profit">
            <TabsList className="mb-4">
              <TabsTrigger value="profit">利润分析</TabsTrigger>
              <TabsTrigger value="margin">利润率分析</TabsTrigger>
            </TabsList>
            <TabsContent value="profit" className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={profitData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="revenue" name="营收 (千元)" fill="#0ea5e9" />
                  <Bar dataKey="cost" name="成本 (千元)" fill="#64748b" />
                  <Bar dataKey="profit" name="利润 (千元)" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="margin" className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={profitData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis domain={[0, 50]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="margin" name="利润率 (%)" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>AI商业推荐</CardTitle>
            <CardDescription>
              基于数据分析的智能业务决策建议
            </CardDescription>
          </div>
          <Button variant="outline">刷新建议</Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendations.map((recommendation, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="font-medium text-tiger-800 flex items-center">
                    <Brain className="h-4 w-4 mr-2 text-tiger-600" />
                    {recommendation.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2 md:mt-0">
                    <div className="text-xs bg-accent-green/10 text-accent-green px-2 py-1 rounded">
                      {recommendation.impact}
                    </div>
                    <div className="text-xs bg-tiger-100 text-tiger-800 px-2 py-1 rounded">
                      置信度: {recommendation.confidence}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{recommendation.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
