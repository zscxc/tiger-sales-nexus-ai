
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatsCard } from '@/components/common/StatsCard';
import { CreditCard, Package, TrendingUp, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const BasicSalesData = () => {
  const { t } = useTranslation();
  
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title={t('metrics.todaySales')}
        value="¥26,580"
        description={t('metrics.compared')}
        icon={<CreditCard className="h-4 w-4" />}
        trend={{ value: 8.2, isPositive: true }}
      />
      <StatsCard
        title={t('metrics.todayOrders')}
        value="182"
        description={t('metrics.compared')}
        icon={<Package className="h-4 w-4" />}
        trend={{ value: 5.7, isPositive: true }}
      />
      <StatsCard
        title={t('metrics.conversionRate')}
        value="12.8%"
        description={t('metrics.compared')}
        icon={<TrendingUp className="h-4 w-4" />}
        trend={{ value: 1.2, isPositive: false }}
      />
      <StatsCard
        title={t('metrics.newCustomers')}
        value="48"
        description={t('metrics.compared')}
        icon={<Users className="h-4 w-4" />}
        trend={{ value: 9.3, isPositive: true }}
      />
    </div>
  );
};
