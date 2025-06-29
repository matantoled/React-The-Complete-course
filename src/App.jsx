import CoreConcepts from './components/CoreConcepts.jsx';
import Header from './components/Header.jsx';

import TabButton from './components/TabButton.jsx';
import {useState} from 'react';
import {EXAMPLES} from './data-with-examples.js'

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectButton) {
    setSelectedTopic(selectButton);
  }
  

  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {selectedTopic ? <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div> : <h1>Please select a topic.</h1>}
        </section>
      </main>
    </div>
  );
}

export default App;
