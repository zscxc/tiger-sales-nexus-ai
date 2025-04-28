
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-tiger-800">404</h1>
        <p className="text-xl text-gray-600 mb-6">页面未找到</p>
        <p className="text-gray-500 mb-6 max-w-md mx-auto">
          您尝试访问的页面不存在或可能已被移动。请返回主页或尝试使用导航菜单。
        </p>
        <Button asChild className="bg-tiger-600 hover:bg-tiger-700">
          <Link to="/">返回主页</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
