import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx';
import {useState} from 'react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please click a button');

  function handleSelect(selectButton) {
    setSelectedTopic(selectButton);
    console.log(selectedTopic);
  }
  

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
