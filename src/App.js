import React, {Suspense} from "react";
import LogoAndSearchBarComponent from './components/logoAndSearchBar/logoAndSearchBar.components';
import MainNav from './components/main-nav-component/main-nav.component';
import FirstSectionComponent from './components/first-section.component.jsx/first-section.component';

import './Assets/css/default.min.css';

function App() {
  const SecondSectionComponent = React.lazy(() => import('./components/second-section/second-section.component'));
  const PackagesPage = React.lazy(() => import('./components/packages-page/packages.page'))
  const MainVideoComponent = React.lazy(() => import('./components/main-video-component/main-video.component'))
  const ClinicToolsComponent = React.lazy(() => import('./components/clinical-tools-section/clinical-tools.component'))
  const ExpertsInsight = React.lazy(() => import ('./components/experts-insights-component/experts-insights.component'))
  const ReferanceButton = React.lazy(() => import('./components/Referance-button-component/reference-button.component'))
  const FooterComponent = React.lazy(() => import('./components/footer-component/footer.component'))

  return (
    <Suspense fallback={<div> ... Loading </div>}>
      <LogoAndSearchBarComponent />
      <MainNav />
      <FirstSectionComponent />
      <SecondSectionComponent />
      <PackagesPage />
      <MainVideoComponent />
      <ClinicToolsComponent />
      <ExpertsInsight /> 
      <ReferanceButton />
      <FooterComponent />
    </Suspense>
  );
}

export default App;
