export default function Header() {
  return (
    <head className="container mx-auto flex flex-row items-center justify-between my-5">
      <div className="flex flex-row items-center space-x-4">
        <a href="https://" className="text-2xl font-medium">
          React Checkboxify
        </a>
        <nav className="flex flex-row items-center space-x-3">
          <a href="#" className="text-lg">
            Installation
          </a>
          <a href="#" className="text-lg">
            example
          </a>
        </nav>
      </div>
    </head>
  );
}
