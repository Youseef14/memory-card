import React from 'react';  // استيراد React لأنه مطلوب لإنشاء مكونات React.
import ReactDOM from 'react-dom/client';  // استيراد ReactDOM لإنشاء الجذر لواجهة المستخدم.
import './style.css';  // استيراد ملف الـ CSS لتنسيق الواجهة.
import App from './App';  // استيراد المكون الرئيسي للتطبيق.

const rootElement = document.getElementById('root');  // الحصول على العنصر الذي سيحمل التطبيق داخل الـ DOM.

if (!rootElement._reactRootContainer) {
  const root = ReactDOM.createRoot(rootElement);  // إنشاء الجذر إذا لم يكن موجودًا.
  root.render(<App />);  // ربط مكون App بالـ DOM.
}
