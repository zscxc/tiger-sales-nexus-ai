
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatsCard } from '@/components/common/StatsCard';
import { CreditCard, Package, TrendingUp, Users } from 'lucide-react';

export const BasicSalesData = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="今日销售额"
        value="¥26,580"
        description="较昨日"
        icon={<CreditCard className="h-4 w-4" />}
        trend={{ value: 8.2, isPositive: true }}
      />
      <StatsCard
        title="今日订单量"
        value="182"
        description="较昨日"
        icon={<Package className="h-4 w-4" />}
        trend={{ value: 5.7, isPositive: true }}
      />
      <StatsCard
        title="销售转化率"
        value="12.8%"
        description="较昨日"
        icon={<TrendingUp className="h-4 w-4" />}
        trend={{ value: 1.2, isPositive: false }}
      />
      <StatsCard
        title="新增客户"
        value="48"
        description="较昨日"
        icon={<Users className="h-4 w-4" />}
        trend={{ value: 9.3, isPositive: true }}
      />
    </div>
  );
};
