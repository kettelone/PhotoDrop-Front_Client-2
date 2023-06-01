import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Login from '../components/pages/login/Login';
import CodeConfirmation from '../components/pages/codeConfirmation/CodeConfirmation';
import AddSelfie from '../components/pages/addSelfie/AddSelfie';
import Dashboard from '../components/pages/dashboard/Dashboard';
import Profile from '../components/pages/profile/Profile';
import EditName from '../components/pages/editName/EditName';
import ProvideEmail from '../components/pages/provideEmail/ProvideEmail';
import AlbumsDashboard from '../components/pages/albumsDashboard/AlbumsDashboard';
import Album from '../components/pages/album/Album';
import PaymentSuccess from '../components/pages/paymentSuccess/PaymentSuccess';
import AccountSettings from '../components/pages/accountSettings/AccountSettings';
import EditPhone from '../components/pages/editMobile/EditModile';
import NewCodeConfirmation from '../components/pages/newPhoneConfirmation/NewPhoneConfirmation';
import PaymentFailed from '../components/pages/paymentFailed/PaymentFailed';
import PrivacyPolicy from '../components/pages/privacyPolicy/PrivacyPolicy';
import {
  LOGIN_ROUTE,
  CODE_CONFIRMATION_ROUTE,
  UPLOAD_SELFIE_ROUTE,
  DASHBOARD_ROUTE,
  PROFILE_ROUTE,
  EDIT_NAME_ROUTE,
  PROVIDE_EMAIL_ROUTE,
  ALBUMS_DASHBOARD_ROUTE,
  ALBUM_ROUTE,
  SUCCESS_ROUTE,
  ACCOUNT_SETTINGS, EDIT_PHONE_ROUTE,
  CONFIRM_EDIT_PHONE_ROUTE,
  FAILED_ROUTE,
  EDIT_EMAIL,
  PRIVACY_POLICY_ROUTE,
  TERMS_ROUTE
} from '../utils/consts';
import EditEmail from '../components/pages/editEmail/EditEmail';
import Terms from '../components/pages/terms/Terms';


const AppRouter = () => {
  return (
    <Routes>
      <Route path={LOGIN_ROUTE} element={<Login />} />
      <Route path={CODE_CONFIRMATION_ROUTE} element={<CodeConfirmation />} />
      <Route path={UPLOAD_SELFIE_ROUTE} element={<AddSelfie />} />
      <Route path={DASHBOARD_ROUTE} element={<Dashboard />} />
      <Route path={PROFILE_ROUTE} element={<Profile />} />
      <Route path={EDIT_NAME_ROUTE} element={<EditName />} />
      <Route path={EDIT_PHONE_ROUTE} element={<EditPhone />} />
      <Route path={EDIT_EMAIL} element={<EditEmail/>} />
      <Route path={CONFIRM_EDIT_PHONE_ROUTE} element={<NewCodeConfirmation />} />
      <Route path={PROVIDE_EMAIL_ROUTE} element={<ProvideEmail />} />
      <Route path={ACCOUNT_SETTINGS} element={<AccountSettings />} />
      <Route path={ALBUMS_DASHBOARD_ROUTE} element={<AlbumsDashboard />} />
      <Route path={ALBUM_ROUTE} element={<Album />} />
      <Route path={SUCCESS_ROUTE} element={<PaymentSuccess />} />
      <Route path={FAILED_ROUTE} element={<PaymentFailed />} />
      <Route path={PRIVACY_POLICY_ROUTE} element={<PrivacyPolicy />} />
      <Route path={TERMS_ROUTE} element={<Terms />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
export default AppRouter;