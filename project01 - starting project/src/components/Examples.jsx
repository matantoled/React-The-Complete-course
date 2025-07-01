import {useState} from 'react';
import { EXAMPLES } from "../data-with-examples.js";
import TabButton from "../components/TabButton.jsx";
import Section from "./Section.jsx";


export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();
    
      function handleSelect(selectButton) {
        setSelectedTopic(selectButton);
      }

    return (
        <Section title="Examples" id="examples">
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
                </Section>
    )
}