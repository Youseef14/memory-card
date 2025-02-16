import React from "react";  // هذا الاستيراد ضروري
export default function RegularButton({ children, handleClick }) {
    return (
        <button
            className="btn btn--text"
            onClick={handleClick}  // استدعاء handleClick عند الضغط على الزر.
        >
            {children}  {/* عرض المحتوى داخل الزر (مثل "Start Game"). */}
        </button>
    );
}
