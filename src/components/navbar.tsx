import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { 
  Navbar as HeroNavbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button
} from '@heroui/react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Events", path: "/events" },
    { name: "Upcoming Events", path: "/upcoming-events" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <HeroNavbar 
      isBordered 
      isBlurred={false}
      
      className="lg:h-20 xl:h-24 transition-all duration-300 bg-background/70 backdrop-blur-md"

      maxWidth="xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <NavbarBrand>
  <RouterLink to="/" className="flex items-center gap-2">
    <div className="flex flex-col">
      <img 
        className="h-28 w-auto sm:h-28 md:h-32 lg:h-28 xl:h-36 object-contain transition-all duration-300"
        src="src\assets\Kalam Vision Logo-02.png" 
        alt="Kalam Vision Logo"
      />
    </div>
  </RouterLink>
</NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.path} isActive={location.pathname === item.path}>
            <Link 
              as={RouterLink} 
              to={item.path}
              color={location.pathname === item.path ? "primary" : "foreground"}
              className="relative font-medium"
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-1 bg-primary rounded-full"
                  layoutId="navbar-indicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button 
            as={RouterLink} 
            to="/contact" 
            color="primary" 
            variant="shadow"
            className="font-medium"
          >
            Get Involved
          </Button>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              as={RouterLink}
              to={item.path}
              color={location.pathname === item.path ? "primary" : "foreground"}
              className="w-full font-medium text-lg py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button 
            as={RouterLink} 
            to="/contact" 
            color="primary" 
            variant="shadow"
            className="font-medium mt-4 w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Involved
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroNavbar>
  );
};