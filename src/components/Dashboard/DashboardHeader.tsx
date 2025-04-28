
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

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title, subtitle }) => {
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
            <span className="hidden md:inline">日期范围</span>
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1 flex">
            <Filter className="h-4 w-4" />
            <span className="hidden md:inline">筛选</span>
          </Button>
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-[120px] h-8">
              <SelectValue placeholder="平台" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全部平台</SelectItem>
              <SelectItem value="yahoo">雅虎</SelectItem>
              <SelectItem value="rakuten">乐天</SelectItem>
              <SelectItem value="amazon">亚马逊</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Tabs defaultValue="day">
        <TabsList>
          <TabsTrigger value="day">今日</TabsTrigger>
          <TabsTrigger value="week">本周</TabsTrigger>
          <TabsTrigger value="month">本月</TabsTrigger>
          <TabsTrigger value="quarter">本季度</TabsTrigger>
          <TabsTrigger value="year">今年</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};
