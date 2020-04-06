import CMS from 'netlify-cms-app';
import siteStyles from '../styles/index.scss';
import localPreviewStyles from './style.css';
// Preview Templates
import BlogPostPreview from './BlogPostPreview';
import withStyledComponentsInjector from './withStyledComponentsInjector';

// CMS.registerPreviewTemplate('blog', (props: any) => <BlogPostPreview {...props} />);
CMS.registerPreviewTemplate('blog', withStyledComponentsInjector(BlogPostPreview));

// Register global styles
CMS.registerPreviewStyle(siteStyles.toString(), { raw: true });
// Register custom preview styles
CMS.registerPreviewStyle(localPreviewStyles.toString(), { raw: true });
