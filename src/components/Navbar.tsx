import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, User, Users, Shield, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const userTypes = [
    { name: "Student", icon: GraduationCap, path: "/login/student" },
    { name: "Alumni", icon: Users, path: "/login/alumni" },
    { name: "Staff", icon: User, path: "/login/staff" },
    { name: "Admin", icon: Shield, path: "/login/admin" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-2xl font-bold gradient-text">Asthra</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${isActive("/") ? "text-primary" : ""}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${isActive("/about") ? "text-primary" : ""}`}>
              About Us
            </Link>
            
            {/* Career Portal Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center space-x-1">
                <span>Career Portal</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/career/jobs" className="flex items-center space-x-2">
                    <span>Job Portal</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/career/applications" className="flex items-center space-x-2">
                    <span>My Applications</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/career/success-stories" className="flex items-center space-x-2">
                    <span>Success Stories</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Login Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center space-x-1">
                  <span>Login</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40">
                {userTypes.map((type, index) => (
                  <div key={type.name}>
                    <DropdownMenuItem asChild>
                      <Link to={type.path} className="flex items-center space-x-2">
                        <type.icon className="w-4 h-4" />
                        <span>{type.name}</span>
                      </Link>
                    </DropdownMenuItem>
                    {index < userTypes.length - 1 && <DropdownMenuSeparator />}
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Signup Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="btn-hero flex items-center space-x-1">
                  <span>Sign Up</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40">
                {userTypes.map((type, index) => (
                  <div key={type.name}>
                    <DropdownMenuItem asChild>
                      <Link to={`/signup/${type.name.toLowerCase()}`} className="flex items-center space-x-2">
                        <type.icon className="w-4 h-4" />
                        <span>{type.name}</span>
                      </Link>
                    </DropdownMenuItem>
                    {index < userTypes.length - 1 && <DropdownMenuSeparator />}
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <Link 
              to="/" 
              className={`block nav-link ${isActive("/") ? "text-primary" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block nav-link ${isActive("/about") ? "text-primary" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Career Portal</div>
              <div className="pl-4 space-y-2">
                <Link to="/career/jobs" className="block nav-link text-sm" onClick={() => setIsOpen(false)}>
                  Job Portal
                </Link>
                <Link to="/career/applications" className="block nav-link text-sm" onClick={() => setIsOpen(false)}>
                  My Applications
                </Link>
                <Link to="/career/success-stories" className="block nav-link text-sm" onClick={() => setIsOpen(false)}>
                  Success Stories
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Login As</div>
              <div className="grid grid-cols-2 gap-2">
                {userTypes.map((type) => (
                  <Link 
                    key={type.name}
                    to={type.path}
                    className="flex items-center space-x-1 text-sm nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    <type.icon className="w-4 h-4" />
                    <span>{type.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Sign Up As</div>
              <div className="grid grid-cols-2 gap-2">
                {userTypes.map((type) => (
                  <Link 
                    key={type.name}
                    to={`/signup/${type.name.toLowerCase()}`}
                    className="flex items-center space-x-1 text-sm nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    <type.icon className="w-4 h-4" />
                    <span>{type.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;