# react-svg-icon-host
A simple icon control to render SVG icon inline for user provided SVGs.

## Installation
```
npm install react-svg-icon-host
```

## Usage
```
import { Icon, ExampleIcons } from 'react-svg-icon-host';

const MyControlWithIcon = () => 
    <div>
        <Icon icon={EaxampleIcons.plus}>
        <span className="ml-2">Add</spann>
    </div>
```