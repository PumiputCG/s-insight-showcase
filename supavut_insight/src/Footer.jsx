import React from 'react';

function Footer() {
  return (
    <footer className="bg-white mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-slate-500 border-t">
        &copy; {new Date().getFullYear()} Supavut Insight. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
