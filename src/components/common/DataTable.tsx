import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface Column {
  key: string;
  header: string;
  width?: string;
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, any>[];
  searchable?: boolean;
  pageSize?: number;
}

export const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  searchable = true,
  pageSize = 10,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const filteredData = searchable && searchTerm
    ? data.filter(item =>
        Object.entries(item)
          .filter(([key]) => key !== 'actions') // Don't search in actions column
          .some(
            ([_, value]) => 
              typeof value === 'string' && 
              value.toLowerCase().includes(searchTerm.toLowerCase())
          )
      )
    : data;

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = filteredData.slice(startIndex, endIndex);

  const renderCellContent = (row: Record<string, any>, key: string) => {
    // If it's a React element (like buttons in actions column), return it directly
    if (React.isValidElement(row[key])) {
      return row[key];
    }
    // Otherwise, render as string
    return row[key];
  };

  return (
    <div className="w-full">
      {searchable && (
        <div className="flex items-center mb-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="搜索..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      )}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.key} style={{ width: column.width }}>
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  没有找到数据
                </TableCell>
              </TableRow>
            ) : (
              currentData.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((column) => (
                    <TableCell key={`${rowIndex}-${column.key}`}>
                      {renderCellContent(row, column.key)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
          >
            上一页
          </Button>
          <div className="text-sm text-muted-foreground">
            {`第 ${currentPage + 1} 页，共 ${totalPages} 页`}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1}
          >
            下一页
          </Button>
        </div>
      )}
    </div>
  );
};
