// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/erp/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Inquiry Management',
    path: '/inquiry/dashboard/app',
    icon: getIcon('eva:shopping-bag-fill'),
    
  },
  {
    title: 'Tailor',
    path : null,
    icon: getIcon('eva:people-fill'),
    children: [
          {
            title: "Tailors Register",
            path: "/erp/tailor/tailors-register",
            icon: getIcon('eva:person-add-fill'),
          },
          {
            title: "Tailors List",
            path: "/erp/tailor/tailors-list",
            icon: getIcon('eva:people-fill'),
          },

    ],
  }
];

export default navConfig;
