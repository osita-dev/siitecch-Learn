import { useEffect, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTheme } from './context/themeContext'; // Import theme context
import ScrollToTop from './components/scrollToTop';
import CookieConsentPopup from './components/CookieConsentPopup';
import FeedBack from './pages/feedback';
import ViewStats from './pages/viewStats';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ProtectedRoute from './utils/protectedRoutes';
import Dashboard from './pages/dashboard';
import PublicRoute from './utils/publicRoutes';
import Unauthorized from './pages/unauthorise';
import ProtectedAdminRoute from './utils/ProtectedAdminRoute';
import AdminCategoriesPage from './pages/admin/admincategory';
import Ping from './components/ping';
// import FeedbackPopup from './components/feedback';
//<TrackView />
// Lazy-loaded components
const GoogleCallback = lazy(() => import('./components/GoogleCallback'));
const HomePage = lazy(() => import('./pages/homePage'));
const Privacy = lazy(() => import('./pages/privacy'));
const Terms = lazy(() => import('./pages/terms'));
const About = lazy(() => import('./pages/about'));
const SinglePage = lazy(() => import('./pages/singlePage'));
const Login = lazy(() => import('./pages/login'));
const Register = lazy(() => import('./pages/register'));
const Forgot = lazy(() => import('./pages/forgottenPassword'));
const Support = lazy(() => import('./pages/support'));
const Cookie = lazy(() => import('./pages/cookiePolicy'));
const AboutDeveloper = lazy(() => import('./pages/aboutDeveloper'));
const PageNotFound = lazy(() => import('./pages/pageNotFound'));
const Faq = lazy(() => import('./pages/faq'));
// admin section
const AdminHome = lazy(() => import('./pages/admin/adminHome'));
const Languages = lazy(() => import('./pages/admin/language'));
const Categories = lazy(() => import('./pages/admin/categories'));
const Videos = lazy(() => import('./pages/admin/videosLink'));
const AllCategories = lazy(() => import('./pages/admin/allcategory'));
const EditCategory = lazy(() => import('./pages/admin/editcategory'));



function App() {
  const { theme } = useTheme(); // Use theme context

  // Apply theme class to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
    <Ping />
      <ScrollToTop />
      {/* <FeedbackPopup/> */}
      <CookieConsentPopup />
      <ToastContainer position="top-right" autoClose={3000} />
      <Suspense
        fallback={
          <div className="loadertotal">
            <span class="loadtotal"></span>
          </div>
        }
      >
        <Routes>
          <Route path="/google/callback" element={<GoogleCallback />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/index" element={<HomePage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookie" element={<Cookie />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/developer" element={<AboutDeveloper />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/language/:slug" element={<SinglePage />} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/viewstats" element={<ViewStats />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/dashboard" element={<ProtectedRoute allowedRoles={['student', 'admin']}><Dashboard /></ProtectedRoute>} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Admin Protected Routes */}
          <Route path="/admin*" element={ <ProtectedAdminRoute allowedRoles={['admin']}><AdminHome /></ProtectedAdminRoute>}/>
          <Route path="/admin/languages" element={<ProtectedAdminRoute allowedRoles={['admin']}><Languages /></ProtectedAdminRoute>}/>
          <Route path="/admin/categories" element={<ProtectedAdminRoute allowedRoles={['admin']}><Categories /></ProtectedAdminRoute>}/>
          <Route path="/admin/videos" element={<ProtectedAdminRoute allowedRoles={['admin']}><Videos /></ProtectedAdminRoute>}/>
          <Route path="/admin/allcategory" element={<ProtectedAdminRoute allowedRoles={['admin']}><AllCategories /></ProtectedAdminRoute>}/>
          <Route path="/admin/editcategory/:id" element={<ProtectedAdminRoute allowedRoles={['admin']}><EditCategory/></ProtectedAdminRoute>}/>
          {/*  */}
          <Route path="/admin/admincategory" element={<ProtectedAdminRoute allowedRoles={['admin']}><AdminCategoriesPage/></ProtectedAdminRoute>}/>
        
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
