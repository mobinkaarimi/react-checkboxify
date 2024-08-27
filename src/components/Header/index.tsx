export default function Header() {
  return (
    <head className="container mx-auto flex flex-row items-center justify-between my-5 py-3">
      <div className="flex flex-row items-center space-x-4">
        <a href="https://" className="text-2xl font-medium text-primary-orange">
          React Checkboxify
        </a>
        <nav className="flex flex-row items-center space-x-3 px-4">
          <a href="#installation" className="text-lg">
            Installation
          </a>
          <a href="#usage" className="text-lg">
            Usage
          </a>
          <a href="#api" className="text-lg">
            API
          </a>
        </nav>
      </div>
    </head>
  );
}
