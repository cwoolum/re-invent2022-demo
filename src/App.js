import "./App.css";

import {
  Button,
  Flex,
  MapView,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { useState } from "react";
import { Marker } from "react-map-gl";

import {
  Details,
  LocationCollection,
  RecommendationCreateForm,
  Rocket,
  TopBar,
} from "./ui-components";

const DEFAULT_PADDING = {
  bottom: 400,
};

const DEFAULT_ZOOM = 13;

function App() {
  const [selection, setSelection] = useState();
  const [createNew, setCreateNew] = useState(false);

  return (
    <div className="App">
      <TopBar overrides={{ TopBar: { width: "100vw" } }} width={"100vw"} />
      <Flex overflow="auto">
        {createNew ? (
          <RecommendationCreateForm
            onCancel={() => setCreateNew(false)}
            onSuccess={() => setCreateNew(false)}
          ></RecommendationCreateForm>
        ) : (
          <>
            <Flex direction={"column"}>
              <Button onClick={() => setCreateNew(true)}>
                Create new recommendation
              </Button>
              <LocationCollection
                overrideItems={({ item }) => ({
                  onClick: () => setSelection(item),
                })}
              />
            </Flex>
            <Flex position="relative" overflow="hidden" grow={1}>
              {selection ? (
                <MapView
                  viewState={{
                    latitude: selection.lat,
                    longitude: selection.long,
                    zoom: DEFAULT_ZOOM,
                    padding: DEFAULT_PADDING,
                  }}
                >
                  <Marker latitude={selection.lat} longitude={selection.long} />
                </MapView>
              ) : (
                <Rocket />
              )}
              <View className={`details ${selection ? "" : "hidden"}`}>
                <Details recommendation={selection}></Details>
              </View>
            </Flex>
          </>
        )}
      </Flex>
    </div>
  );
}

export default withAuthenticator(App);
