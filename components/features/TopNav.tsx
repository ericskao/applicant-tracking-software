import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

const menuLinkClassName =
  'underline-offset-4 hover:underline hover:text-primary';

const TopNav = () => {
  return (
    <NavigationMenu className="p-4 sticky">
      <NavigationMenuList className="gap-x-6">
        <NavigationMenuItem>
          <Link href="/jobs" legacyBehavior passHref>
            <NavigationMenuLink className={menuLinkClassName}>
              Jobs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/applications" legacyBehavior passHref>
            <NavigationMenuLink className={menuLinkClassName}>
              Applications
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/admin" legacyBehavior passHref>
            <NavigationMenuLink className={menuLinkClassName}>
              Admin
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default TopNav;
