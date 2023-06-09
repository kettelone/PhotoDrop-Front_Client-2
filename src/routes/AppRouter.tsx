import React from 'react';
import { Route,Routes} from 'react-router-dom'

import AccountSettings from '../components/pages/accountSettings/AccountSettings';
import AddSelfie from '../components/pages/addSelfie/AddSelfie';
import Album from '../components/pages/album/Album';
import CodeConfirmation from '../components/pages/codeConfirmation/CodeConfirmation';
import EditEmail from '../components/pages/editEmail/EditEmail';
import EditPhone from '../components/pages/editMobile/EditModile';
import EditName from '../components/pages/editName/EditName';
import Login from '../components/pages/login/Login';
import MainDashboard from '../components/pages/mainDashboard/MainDashboard';
import NewCodeConfirmation from '../components/pages/newPhoneConfirmation/NewPhoneConfirmation';
import PaymentFailed from '../components/pages/paymentFailed/PaymentFailed';
import PaymentSuccess from '../components/pages/paymentSuccess/PaymentSuccess';
import PrivacyPolicy from '../components/pages/privacyPolicy/PrivacyPolicy';
import Profile from '../components/pages/profile/Profile';
import ProvideEmail from '../components/pages/provideEmail/ProvideEmail';
import Terms from '../components/pages/terms/Terms';
import {
  ACCOUNT_SETTINGS, 
  ALBUM_ROUTE,
  CODE_CONFIRMATION_ROUTE,
  CONFIRM_EDIT_PHONE_ROUTE,
  EDIT_EMAIL,
  EDIT_NAME_ROUTE,
  EDIT_PHONE_ROUTE,
  FAILED_ROUTE,
  LOGIN_ROUTE,
  MAIN_DASHBOARD_ROUTE,
  PRIVACY_POLICY_ROUTE,
  PROFILE_ROUTE,
  PROVIDE_EMAIL_ROUTE,
  SUCCESS_ROUTE,
  TERMS_ROUTE,
  UPLOAD_SELFIE_ROUTE
} from '../utils/consts';
import ProtectedRoute from '../utils/protectedRoutes';
const AppRouter = () => {
  return (
    <Routes>
      <Route path={LOGIN_ROUTE} element={
          <Login />
      } />
      <Route path={CODE_CONFIRMATION_ROUTE} element={
          <CodeConfirmation />
      } />
      <Route path={UPLOAD_SELFIE_ROUTE} element={
          <AddSelfie />
      } />
      <Route path={MAIN_DASHBOARD_ROUTE} element={
        <ProtectedRoute>  
          <MainDashboard />
        </ProtectedRoute>
      } />
      <Route path={PROFILE_ROUTE} element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />
      <Route path={EDIT_NAME_ROUTE} element={
        <ProtectedRoute>
          <EditName />
        </ProtectedRoute>
      } />
      <Route path={EDIT_PHONE_ROUTE} element={
        <ProtectedRoute>
          <EditPhone />
        </ProtectedRoute>
      } />
      <Route path={EDIT_EMAIL} element={
        <ProtectedRoute>
          <EditEmail />
        </ProtectedRoute>
      } />
      <Route path={CONFIRM_EDIT_PHONE_ROUTE} element={
        <ProtectedRoute>
          <NewCodeConfirmation />
        </ProtectedRoute>
      } />
      <Route path={PROVIDE_EMAIL_ROUTE} element={
        <ProtectedRoute>
          <ProvideEmail />
        </ProtectedRoute>
      } />
      <Route path={ACCOUNT_SETTINGS} element={
        <ProtectedRoute>
          <AccountSettings />
        </ProtectedRoute>
      } />
      <Route path={ALBUM_ROUTE} element={
        <ProtectedRoute>
          <Album />
        </ProtectedRoute>
      } />
      <Route path={SUCCESS_ROUTE} element={ <PaymentSuccess />} />
      <Route path={FAILED_ROUTE} element={<PaymentFailed /> } />
      <Route path={PRIVACY_POLICY_ROUTE} element={
        <ProtectedRoute>
          <PrivacyPolicy />
        </ProtectedRoute>
      } />
      <Route path={TERMS_ROUTE} element={
        <ProtectedRoute>
          <Terms />
        </ProtectedRoute>
      } />
      <Route path="*" element={
        <ProtectedRoute>
          <MainDashboard />
        </ProtectedRoute>
      } />
    </Routes>
  );
};
export default AppRouter;