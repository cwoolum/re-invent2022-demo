import "./App.css";

import { Flex, View, MapView, Button } from "@aws-amplify/ui-react";

import {
  Details,
  LocationCollection,
  Rocket,
  TopBar,
  RecommendationCreateForm
} from './ui-components';
import { useState } from "react";
import { Marker } from "react-map-gl";

const DEFAULT_PADDING = {
  bottom: 400,
};

const DEFAULT_ZOOM = 13;

function App() {
  const [selection, setSelection] = useState();
  const [createForm, setCreateForm] = useState();

  return (
    <div className="App">
      <TopBar width={'100vw'} />
      {createForm ?
        <Flex justifyContent={'center'}>
          <div className="form-wrapper-inner">
            <RecommendationCreateForm onCancel={() => setCreateForm(false)} onSuccess={() => setCreateForm(false)} />
          </div>
        </Flex> :
        <Flex overflow="auto">
          <View className="recommendation-menu">
            <Button onClick={() => setCreateForm(true)}>New Recommendation</Button>
            <LocationCollection overrideItems={({ item }) => ({ onClick: () => setSelection(item) })} />
          </View>
          <Flex position="relative" overflow="hidden" grow={1}>
            {selection ? <MapView
              viewState={{
                latitude: selection.lat,
                longitude: selection.long,
                zoom: DEFAULT_ZOOM,
                padding: DEFAULT_PADDING,
              }}
            >
              <Marker latitude={selection.lat} longitude={selection.long} />
            </MapView> : <Rocket />}
            <View className={`details ${selection ? "" : "hidden"}`}>
              <Details recommendation={selection}></Details>
            </View>
          </Flex>
        </Flex>
      }
    </div>
  );
}

export default App;
