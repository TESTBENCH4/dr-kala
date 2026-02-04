

import { Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import HealthHubs from './HealthHubs';
import PrecisionFlow from './PrecisionFlow';
import PersonalizationEngine from './PersonalizationEngine';
import Differentiation from './Differentiation';
import InstitutionalPromise from './InstitutionalPromise';
import ExpressionOfInterest from './ExpressionOfInterest';
import ObesityReversal from './ObesityReversal';
import DiseaseReversal from './DiseaseReversal';
import RegenerativeMedicine from './RegenerativeMedicine';
import LongevityAntiAging from './LongevityAntiAging';
import Footer from './Footer';
import HomeVideoSection from './HomeVideoSection';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
            <HealthHubs />
            <PrecisionFlow />
            <div className="w-full h-2 bg-[#A69D89] my-8 rounded-full opacity-30" />
            <HomeVideoSection />
            <PersonalizationEngine />
            <ExpressionOfInterest />
            <Differentiation />
            <Footer />
          </>
        }
      />
      <Route path="/obesity-reversal" element={<ObesityReversal />} />
      <Route path="/disease-reversal" element={<DiseaseReversal />} />
      <Route path="/regenerative-medicine" element={<RegenerativeMedicine />} />
      <Route path="/longevity-anti-aging" element={<LongevityAntiAging />} />
    </Routes>
  );
}

export default App;
