# react-native-bootstrap-buttons
Simple and expandable React Native bootstrap buttons.

# Installation

`yarn add react-native-bootstrap-buttons`

or

`npm install react-native-bootstrap-buttons --save`

# Properties

| Prop Name       | Type          | Default Value  |
| ----------------|:-------------:| --------------:|
| onPress         | function      | null           |
| label           | string        | ""             |
| labelStyle      | Object        | {}             |
| containerStyle  | object        | {}             |
| disabled        | bool          | false          |
| buttonType      | string enum "primary", "outline", "info", "warning", "danger", "success", "link"        | "primary"      |
| curved          | bool          | true           |
| rounded         | bool          | false          |
| square          | bool          | false          |


# Usage

#### Curved button ( default )

```js
import Button from "react-native-bootstrap-buttons";

<Button label="Curved Button" buttonType="primary" />
```

#### Square button
```js
import Button from "react-native-bootstrap-buttons";

<Button label="My Button" buttonType="primary" square />
```

#### Rounded button
```js
import Button from "react-native-bootstrap-buttons";

<Button label="My Button" buttonType="primary" rounded />
```

#### Disabled button
```js
import Button from "react-native-bootstrap-buttons";

<Button label="My Button" buttonType="primary" disabled />
```


# Add your own themes
call the `addTheme` function in your app entry file (index.js)

```js
import { addTheme } from "react-native-bootstrap-buttons";

//addTheme( themeName, labelColor, disabledLabelColor, backgroundColor, disabledBackgroundColor );
addTheme( "myTheme", "red", "gray", "yellow", "teal" );

// Use your custom theme
<Button buttonType="myTheme" label="My Button" />
```

# Demo
To run the demo clone the repo and navigate into the example folder

```
yarn install
or
npm run
```

then run `yarn run ios` or `yarn run android`
