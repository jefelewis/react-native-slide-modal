# React Native Slide Modal

[![npm version](https://badge.fury.io/js/react-native-slide-modal.svg)](https://badge.fury.io/js/react-native-slide-modal)
[![npm downloads](https://img.shields.io/npm/dm/react-native-slide-modal.svg)](https://www.npmjs.com/package/react-native-slide-modal)

*  [Features](#features)
*  [Built With](#built-with)
*  [Pending Items](#pending-items)
*  [Getting Started](#getting-started)
*  [Example Code](#example-code)
*  [Screenshot (iOS)](#screenshot-ios)
*  [Screenshot (Android)](#screenshot-android)
*  [Building & Publishing](#building-&-publishing)
*  [Changelog](#changelog)

## Features
*  ✅ iOS/Android
*  ✅ Dark Mode
*  ✅ Built with TypeScript
*  ✅ Built with React Hooks
*  ✅ Lightweight (0 Third Party Libraries)

## Built With
* [TypeScript](https://github.com/microsoft/TypeScript) - Programming Language
* [React Hooks](https://reactjs.org/docs/hooks-intro.html) - Functional Component State/Lifecycle Methods
* [React Native](https://facebook.github.io/react-native/) - Mobile (iOS/Android) Framework

## Pending Items
- [ ] 

## Getting Started
**1. Install Package:**
```
npm i react-native-slide-modal
```

**2. Install Cocoapods:**
```
pod install
```

**3. Run Project:**

**Android**
```javascript
react-native run-android
```

**iOS**
```javascript
react-native run-ios
```


## Screenshot (iOS)
<div align="center">
  <!-- <img src="/screenshots/ios/iosActionSheet.gif" width="40%" height="40%" /> -->
</div>

## Screenshot (Android)
<div align="center">
  <!-- <img src="/screenshots/android/androidActionSheet.gif" width="40%" height="40%" /> -->
</div>


## Example Code
```typescript
// Imports: Dependencies
import React, { useState } from 'react';
import { Button, Text } from 'react-native';

// Imports: Components
import { SlideModal }  from 'react-native-slide-modal';

// App
const App: React.FC = (): JSX.Element => {
  // React Hooks: State
  const [ modalVisible, setModalVisible ] = useState<boolean>(false);

  return (
    <SlideModal
      modalType="iOS Form Sheet"
      // modalType="iOS Bottom Sheet"
      modalVisible={modalVisible}
      screenContainer={
        <>
          <Button
            title="Show Modal"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </>
      }

      modalContainer={
        <>
          <Text>Modal Content</Text>
        </>
      }
      modalHeaderTitle="Header Title"
      pressDone={() => setModalVisible(!modalVisible)}
      pressCancel={() => setModalVisible(!modalVisible)}
      darkMode={false}
      doneDisabled={false}
    />
  );
};

// Exports
export default App;
```

## Building & Publishing

**Build**
```javascript
npm run build
```

**Publish**
```javascript
npm publish
```


## Changelog

### [0.0.2] - 5/18/2021

***Added***

- Added `README` example code.


### [0.0.1] - 5/18/2021

***Added***

- Added `SlideModal` component (`iOS Bottom Sheet`, `iOS Form Sheet`).
