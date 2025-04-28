
import React, { useState } from 'react';
import { Upload, File, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface FileUploadZoneProps {
  onUpload: (files: File[]) => void;
  acceptedFileTypes?: string;
  maxFiles?: number;
  className?: string;
}

export const FileUploadZone: React.FC<FileUploadZoneProps> = ({
  onUpload,
  acceptedFileTypes = '.csv, .xlsx, .xls',
  maxFiles = 5,
  className,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      handleFiles(selectedFiles);
    }
  };

  const handleFiles = (newFiles: File[]) => {
    if (files.length + newFiles.length > maxFiles) {
      toast.error(`最多只能上传 ${maxFiles} 个文件`);
      return;
    }

    const updatedFiles = [...files, ...newFiles];
    setFiles(updatedFiles);
  };

  const handleUpload = () => {
    if (files.length === 0) {
      toast.error('请选择要上传的文件');
      return;
    }

    onUpload(files);
    toast.success('文件已上传');
    setFiles([]);
  };

  const removeFile = (index: number) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  return (
    <div className={className}>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
          isDragging ? "border-tiger-500 bg-tiger-50" : "border-gray-300 hover:border-tiger-500 hover:bg-tiger-50"
        )}
      >
        <input
          type="file"
          multiple
          accept={acceptedFileTypes}
          onChange={handleFileInput}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <Upload className="h-10 w-10 text-tiger-600 mx-auto mb-2" />
          <p className="text-sm text-gray-600 mb-1">
            拖放文件到这里，或 <span className="text-tiger-600 font-medium">点击浏览</span>
          </p>
          <p className="text-xs text-gray-500">
            支持 {acceptedFileTypes} 格式，最多 {maxFiles} 个文件
          </p>
        </label>
      </div>

      {files.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-medium mb-2">已选择的文件</p>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                <div className="flex items-center">
                  <File className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm">{file.name}</span>
                  <span className="text-xs text-gray-500 ml-2">({(file.size / 1024).toFixed(2)} KB)</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile(index)}
                  className="h-6 w-6 p-0"
                >
                  <span className="sr-only">Remove file</span>
                  <X className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
          <Button onClick={handleUpload} className="mt-4 bg-tiger-600 hover:bg-tiger-700">
            <Check className="h-4 w-4 mr-2" />
            上传文件
          </Button>
        </div>
      )}
    </div>
  );
};
