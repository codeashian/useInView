## UseInView

[![Build Status](https://travis-ci.org/elinadenfina/useInView.svg?branch=master)](https://travis-ci.org/elinadenfina/useInView)

A react hook which makes it easy to check if your component is in the viewport.

## Install

```
$ yarn add use-in-view
```

## Usage

```js
import useInView from 'use-in-view';

const AnimatedComponent = () => {
	const [ref, inView] = useInView();

	return (
		<div className={`${inView && "in-view"}`} ref={ref} >
			Animate me when in viewport! 
		</div>
	)
}

```


