import "./App.css";

import { Flex, View } from "@aws-amplify/ui-react";

import {
  Location,
  Rocket,
  TopBar
} from './ui-components';

const DEFAULT_PADDING = {
  bottom: 400,
};

const DEFAULT_ZOOM = 13;

function App() {
  return (
    <div className="App">
      <TopBar width={'100vw'} />
      <Flex overflow="auto">
        <View>
          <Location />
          <Location />
          <Location />
          <Location />
          <Location />
          <Location />
        </View>
        <Flex position="relative" overflow="hidden" grow={1}>
          <Rocket />
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
