import React from 'react';
import { MDXProvider } from './src/components/MDXProvider';

// Custom Typefaces
import 'typeface-inter';
import 'typeface-jetbrains-mono';

// Global Styles
import './src/styles/index.scss';

export const wrapRootElement = ({ element }) => <MDXProvider>{element}</MDXProvider>;
