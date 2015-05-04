Config Plugin for Fluxible
==========================

Your config available from your component, action & store contexts.

Features
--------

 * Shares config from server to client (you can use environment variable)
 * Works well with browserify / webpack
 * Comes with a "do whatever you want" (MIT) license

Install
-------

Add the package to your project :

    npm install --save fluxible-plugin-config

Register it to your fluxible instance :

```javascript

import configPlugin from 'fluxible-plugin-config';

app.plug(configPlugin({
    foo: process.env.FOO,
    bar: process.env.BAR,
}));

```

Component Context
-----------------

```javascript

export default class MyComponent extends React.Component {

    static contextTypes = {
        config: React.PropTypes.object
    }

    render() {
        return (
            <p>foo: {this.context.config.foo}, bar: {this.context.config.bar}</p>
        );
    }

}

```

Action Context
--------------

```javascript

export default function doStuff(context, params) {
    debug('foo:', context.config.foo);
}

```

Store Context
-------------

```javascript

class MyStore extends BaseStore {

    getFoo() {
        return this.getContext().config.foo;
    }

}

```
