// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/inquiry/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'ERP Management',
    path: '/erp/dashboard/app',
    icon: getIcon('eva:shopping-bag-fill'),
    
  },
  {
    title: 'Inquiry Management',
    path : null,
    icon: getIcon('eva:people-fill'),
    children: [
          {
            title: "Inquiry List",
            path: "",
            icon: getIcon('eva:person-add-fill'),
          },
          {
            title: "Appointment List",
            path: "",
            icon: getIcon('eva:people-fill'),
          },

    ],
  }
];

export default navConfig;
