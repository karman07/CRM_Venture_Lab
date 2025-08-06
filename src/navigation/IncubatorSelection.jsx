const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="bg-white border-b p-4 shadow-sm">
        <div className="flex space-x-6 font-medium text-sm">
          <button className="hover:text-blue-600">My Incubators</button>
          <button className="hover:text-blue-600">Apply For Incubation</button>
        </div>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
};

export default Layout;
