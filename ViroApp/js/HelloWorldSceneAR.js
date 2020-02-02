'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  // Adding sample obj
  ViroBox,
  ViroMaterials,
  // Added 3d OBj
  ViroAmbientLight,
  Viro3DObject,
  ViroARCamera,
  ViroCamera,
  ViroARPlaneSelector
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        {/* <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} /> */}
        {/* <ViroBox position={[0, -.5, -1]} scale={[.3, .3, .1]} materials={["grid"]} /> */}
        {/* test 3d obj */}

        {/* <ViroCamera position={[0, 0, 0]} rotation={[45, 0, 0]} active={true} /> */}
        <ViroAmbientLight color="#ffffff" />
        <Viro3DObject
          source={require("./res/textures/Lowpoly_Notebook_2.obj")}
          resources={[require('./res/textures/Lowpoly_Notebook_2.mtl'),
          require('./res/textures/Lowpoly_Laptop_1.jpg'),
          require('./res/textures/Lowpoly_Laptop_2.jpg'),
          require('./res/textures/Lowpoly_Laptop_Nor_1.jpg'),
          require('./res/textures/Lowpoly_Laptop_Nor_2.jpg'),
          ]}
          highAccuracyEvents={true}
          position={[0, -1, -1]}
          scale={[.1, .1, .1]}
          rotation={[0, 90, 0]}
          type="OBJ"
          // transformBehaviors={["billboard"]} 
          />

      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Hello World!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/grid_bg.jpg'),
  },
});

module.exports = HelloWorldSceneAR;
