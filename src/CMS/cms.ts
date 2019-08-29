import CMS from 'netlify-cms-app';
// Add Global Styles
import '../styles/index.scss';

// Preview Templates
import BlogPostPreview from './BlogPostPreview';

CMS.registerPreviewTemplate('blog', BlogPostPreview);
