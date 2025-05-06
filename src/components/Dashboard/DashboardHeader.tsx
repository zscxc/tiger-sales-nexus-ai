
import React from 'react';
import { Calendar, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher';

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title, subtitle }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col space-y-2.5 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1 flex">
            <Calendar className="h-4 w-4" />
            <span className="hidden md:inline">{t('periods.dateRange')}</span>
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1 flex">
            <Filter className="h-4 w-4" />
            <span className="hidden md:inline">{t('common.filter')}</span>
          </Button>
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-[120px] h-8">
              <SelectValue placeholder={t('common.platform')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('common.allPlatforms')}</SelectItem>
              <SelectItem value="yahoo">雅虎</SelectItem>
              <SelectItem value="rakuten">乐天</SelectItem>
              <SelectItem value="amazon">亚马逊</SelectItem>
            </SelectContent>
          </Select>
          
          <LanguageSwitcher />
        </div>
      </div>
      <Tabs defaultValue="day">
        <TabsList>
          <TabsTrigger value="day">{t('periods.day')}</TabsTrigger>
          <TabsTrigger value="week">{t('periods.week')}</TabsTrigger>
          <TabsTrigger value="month">{t('periods.month')}</TabsTrigger>
          <TabsTrigger value="quarter">{t('periods.quarter')}</TabsTrigger>
          <TabsTrigger value="year">{t('periods.year')}</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};
