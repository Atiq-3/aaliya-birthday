import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import AuroraBackground from './components/AuroraBackground';
import FloatingParticles from './components/FloatingParticles';
import GrainOverlay from './components/GrainOverlay';
import ScreenTransition from './components/ScreenTransition';
import Intro from './screens/Intro';
import Question from './screens/Question';
import Gallery from './screens/Gallery';
import Messages from './screens/Messages';
import Finale from './screens/Finale';

type Screen = 'intro' | 'question' | 'gallery' | 'messages' | 'finale';

export default function App() {
  const [screen, setScreen] = useState<Screen>('intro');

  return (
    <div className="relative min-h-screen grain overflow-hidden">
      <AuroraBackground />
      <FloatingParticles />
      <GrainOverlay />

      <AnimatePresence mode="wait">
        <ScreenTransition key={screen} screenKey={screen}>
          {screen === 'intro' && <Intro onNext={() => setScreen('question')} />}
          {screen === 'question' && <Question onYes={() => setScreen('gallery')} />}
          {screen === 'gallery' && <Gallery onNext={() => setScreen('messages')} />}
          {screen === 'messages' && <Messages onNext={() => setScreen('finale')} />}
          {screen === 'finale' && <Finale onRestart={() => setScreen('intro')} />}
        </ScreenTransition>
      </AnimatePresence>
    </div>
  );
}