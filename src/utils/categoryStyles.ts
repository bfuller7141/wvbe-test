// src/utils/categoryStyles.ts

interface CategoryStyle {
  boxColor: string;
  textColor: string;
  icon: string;
}

const categoryStyles: { [key: string]: CategoryStyle } = {
  'Online Event': {
    boxColor: '#e9f7e9',
    textColor: 'text-green-500',
    icon: '/icons/online-event.svg' // Use the correct relative path from the public directory
  },
  'Local Event': {
    boxColor: '#ccf5ff',
    textColor: 'text-teal-500',
    icon: '/icons/local-event.svg' // Update with the correct path to your image
  },
  'Special Event': {
    boxColor: '#fff5d1',
    textColor: 'text-yellow-500',
    icon: '/icons/special-event.svg' // Update with the correct path to your image
  },
  'Members Only': {
    boxColor: '#eaecee',
    textColor: 'text-blue-500',
    icon: '/icons/member-only.svg' // Update with the correct path to your image
  }
};

export default categoryStyles;
