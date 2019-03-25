## UseInView

Check if your component is in viewport using this simple hook! 

[![Build Status](https://travis-ci.org/elinadenfina/useInView.svg?branch=master)](https://travis-ci.org/elinadenfina/useInView)


[Demo](https://elinadenfina.github.io/useInView/)

## Install

```
$ yarn add use-in-view
```

## Usage

```jsx
import useInView from 'use-in-view';

const AnimatedComponent = () => {
    const [ref, inView] = useInView();

    return (
        <div className={`${inView && 'in-view'}`} ref={ref}>
            Animate me!
        </div>
    );
};

```


