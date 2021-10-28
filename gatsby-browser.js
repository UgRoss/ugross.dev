import React from 'react';
import { MDXProvider } from './src/components/MDXProvider';

// Custom Typefaces
import 'typeface-inter';

// Global Styles
import './src/styles/global.css';

export const wrapRootElement = ({ element }) => <MDXProvider>{element}</MDXProvider>;
