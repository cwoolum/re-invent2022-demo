import "./App.css";

import { Flex, View } from "@aws-amplify/ui-react";

const DEFAULT_PADDING = {
  bottom: 400,
};

const DEFAULT_ZOOM = 13;

function App() {
  return (
    <div className="App">
      Navigation bar goes here.
      <Flex overflow="auto">
        <View>List goes here.</View>
        <Flex position="relative" overflow="hidden" grow={1}>
          Map/Rocket goes here.
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
