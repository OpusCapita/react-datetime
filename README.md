# react-datetime

### Description
React date time picker and input component

### Installation
```
npm install @opuscapita/react-datetime
npm install moment
```

### Demo
View the [DEMO](https://opuscapita.github.io/react-datetime)

### Builds
#### UMD
The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
* Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### API
| Prop name                | Type     | Default       | Description                               |
| ------------------------ | ---------| ------------- | ----------------------------------------- |
| value                    | string   | ''            | Current date value                        |
| onChange                 | function |               | onChange callback returns new date string |
| locale                   | string   | 'en'          | Locale                                    |
| dateFormat               | string   | 'M/D/YYYY'    | Date format as MomentJS [format](https://momentjs.com/docs/#/displaying/format) |
| inputProps               | object   |               | Custom props for the input field          |
| inputRef                 | function |               | Input component ref function              |
| disabled                 | boolean  |               | Is component disabled                     |
| time                     | boolean  | false         | Time picker on/off. Prefer DateTime component if possible                        |
| showWeekNumber           | boolean  | true          | Show week number in calendar              |

### Code example

```jsx
import React from 'react';
import { DateInput, DateTimeInput } from '@opuscapita/react-datetime';

constructor(props) {
  super(props)
  this.state = {
    date: null,
    dateTime: null,
  }
}

export default class SomeView extends React.Component {
  render() {
    return (
      <DateInput
        value={this.state.date}
        onChange={this.changeDate}
      />
      
      <DataTimeInput
        value={this.state.dateTime}
        onChange={this.changeDateTime}
      />
    );
  }
}
```
