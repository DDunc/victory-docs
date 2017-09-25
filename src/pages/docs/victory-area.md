---
id: 2
title: VictoryArea
category: chart
scope:
  - sampleData
  - VictoryArea
  - VictoryChart
  - VictoryClipContainer
  - VictoryLabel
  - VictoryPolarAxis
  - VictoryTheme
---
# VictoryArea

VictoryArea renders a dataset as a single area. VictoryArea can be composed with [`VictoryChart`] to create area charts.

```playground
<VictoryChart
  theme={VictoryTheme.material}
>
  <VictoryArea
    style={{ data: { fill: "#c43a31" } }}
    data={sampleData}
  />
</VictoryChart>
```

## Props

### animate

`VictoryArea` uses the standard `animate` prop. [Read about it in detail](https://formidable.com/open-source/victory/docs/common-props#animate)

See the [Animations Guide] for more detail on animations and transitions

```jsx
  animate={{
    duration: 2000,
    onLoad: { duration: 1000 }
  }}
```

### categories

`VictoryArea` uses the standard `categories` prop. [Read about it in detail](https://formidable.com/open-source/victory/docs/common-props#categories)

```jsx
categories={{ x: ["dogs", "cats", "mice"] }}
```

### containerComponent

`VictoryArea` uses the standard `containerComponent` prop. [Read about it in detail](https://formidable.com/open-source/victory/docs/common-props#containercomponent)

```jsx
containerComponent={<VictoryVoronoiContainer dimension="x"/>}
```

### data

`VictoryArea` uses the standard `data` prop. [Read about it in detail](https://formidable.com/open-source/victory/docs/common-props#data)

See the [Data Accessors Guide] for more detail on formatting and processing data.

```playground
<VictoryChart>
  <VictoryArea
    data={[
      { x: 1, y: 2, y0: 0 },
      { x: 2, y: 3, y0: 1 },
      { x: 3, y: 5, y0: 1 },
      { x: 4, y: 4, y0: 2 },
      { x: 5, y: 6, y0: 2 }
    ]}
  />
</VictoryChart>
```

### dataComponent

`VictoryArea` uses the standard `dataComponent` prop. [Read about it detail](https://formidable.com/open-source/victory/docs/common-props#datacomponent)

`VictoryArea` supplies the following props to its `dataComponent`: `data`, `events`, `groupComponent`, `interpolation`, `origin` (for polar charts), `polar`, `scale`, `style`

See the [Custom Components Guide] for more detail on creating your own `dataComponents`

*default:* `<Area/>`

```jsx
dataComponent={<Area events={{ onClick: handleClick }}/>}
```


### domain

`VictoryArea` uses the standard `domain` prop. [Read about it in detail](https://formidable.com/open-source/victory/docs/common-props#domain)

```jsx
domain={{x: [0, 100], y: [0, 1]}}
```

### domainPadding

`VictoryArea` uses the standard `domainPadding` prop. [Read about it in detail](https://formidable.com/open-source/victory/docs/common-props#domainpadding)

```jsx
domainPadding={{x: [10, -10], y: 5}}
```

### eventKey

`VictoryArea` uses the standard `eventKey` prop. **This prop is not commonly used.** [Read about the `eventKey` prop in more detail here](https://formidable.com/open-source/victory/docs/common-props#eventkey)

**note:** `VictoryArea` only renders one element per dataset, so only one event key will be generated.

```jsx
eventKey="x"
```

### events

`VictoryArea` uses the standard `events` prop. [Read about it in detail](https://formidable.com/open-source/victory/docs/common-props#events)

See the [Events Guide] for more information on defining events.

**note:** `VictoryArea` will use the special `eventKey` "all" rather than refering to data by index, as it renders only one element for an entire dataset

```playground
<div>
  <h3>Click Me</h3>
  <VictoryArea
    style={{
      data: { fill: "#c43a31" },
      parent: { border: "1px solid #ccc"}
    }}
    events={[{
      target: "parent",
      eventHandlers: {
        onClick: () => {
          return [
            {
              target: "data",
              eventKey: "all",
              mutation: (props) => {
                const fill = props.style && props.style.fill;
                return fill === "black" ? null : { style: { fill: "black" } };
              }
            }, {
              target: "labels",
              eventKey: 2,
              mutation: (props) => {
                return props.text ? null : { text: "clicked" };
              }
            }
          ];
        }
      }
    }]}
    data={sampleData}
  />
</div>
```

### groupComponent

`VictoryArea` uses the standard `groupComponent` prop. [Read about it in detail](https://formidable.com/open-source/victory/docs/common-props#groupcomponent)

**note:** `VictoryArea` uses [`VictoryClipContainer`] as its default `groupComponent` `VictoryClipContainer` renders a `<g>` tag with a `clipPath` `def`. This allows continuous data components to transition smoothly when new data points enter and exit. **Supplying a completely custom `groupComponent` to `VictoryArea` may result in broken animations.**

*default:* `<VictoryClipContainer/>`

```playground
<VictoryChart>
  <VictoryArea
    groupComponent={<VictoryClipContainer clipPadding={{ top: 5, right: 10 }}/>}
    style={{ data: { stroke: "#c43a31", strokeWidth: 15, strokeLinecap: "round" } }}
    data={sampleData}
  />
</VictoryChart>
```

### height

`VictoryArea` uses the standard `height` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#height)

*default (provided by default theme):* `height={300}`

```jsx
height={400}
```

### interpolation

The `interpolation` prop determines how data points should be connected when creating a path. Victory uses [d3-shape](https://github.com/d3/d3-shape#curves) for interpolating curves.

Polar area charts may use the following interpolation options: "basis", "cardinal", "catmullRom", "linear"

Cartesian area charts may use the following interpolation options: "basis", "cardinal", "catmullRom", "linear", "monotoneX", "monotoneY", "natural", "step", "stepAfter", "stepBefore"

[Explore all the interpolation options].

*default:* `"linear"`

```playground
<VictoryArea
  interpolation="natural"
  data={sampleData}
/>
```

### labelComponent

`VictoryArea` uses the standard `labelComponent` prop. [Read about it in detail](https://formidable.com/open-source/victory/docs/common-props#labelcomponent)

*default:* `<VictoryLabel renderInPortal/>`

```playground
<VictoryArea
  data={sampleData}
  labels={(datum) => datum.y}
  labelComponent={<VictoryLabel renderInPortal dy={-20}/>}
/>
```


### labels

`VictoryArea` uses the standard `labels` prop. [Read about it in detail](https://formidable.com/open-source/victory/docs/common-props#labels)

```playground
<VictoryArea
  data={sampleData}
  labels={(datum) => datum.y}
/>
```

### name

The `name` prop is used to reference a component instance when defining shared events.

```jsx
name="series-1"
```

### origin

**The `origin` prop is only used by polar charts, and is usually controlled by `VictoryChart`. It will not typically be necessary to set an `origin` prop manually**

[Read about the `origin` prop in detail](https://formidable.com/open-source/victory/docs/common-props#origin)

### padding

`VictoryArea` uses the standard `padding` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#padding)

*default (provided by default theme):* `padding={50}`

```jsx
padding={{ top: 20, bottom: 60 }}
```

### polar

`VictoryArea` uses the standard `polar` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#polar)

```playground
<VictoryChart polar
  theme={VictoryTheme.material}
  style={{
    parent: { border: "1px solid #ccc"}
  }}
>
  <VictoryPolarAxis dependentAxis
    style={{ axis: { stroke: "none" } }}
    tickFormat={() => null}
  />
  <VictoryPolarAxis/>
  <VictoryArea
    data={sampleData}
    style={{
      data: { fill: "#c43a31" },
    }}
  />
</VictoryChart>
```

### range

**The `range` prop is usually controlled by `VictoryChart`. It will not typically be necessary to set a `range` prop manually**

[Read about the `range` prop in detail](https://formidable.com/open-source/victory/docs/common-props#range)

### samples

`VictoryArea` uses the standard `samples` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#samples)

*default:* `samples={50}`

```jsx
samples={100}
```

### scale

`VictoryArea` uses the standard `scale` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#scale)

*default:* `scale="linear"`

```jsx
scale={{x: "linear", y: "log"}}
```

### sharedEvents

**The `sharedEvents` prop is used internally to coordinate events between components. It should not be set manually.**

### sortKey

`VictoryArea` uses the standard `sortKey` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#sortkey)

See the [Data Accessors Guide] for more detail on formatting and processing data.

```jsx
sortKey="x"
```

### standalone

`VictoryArea` uses the standard `standalone` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#standalone)

**note:** When `VictoryArea` is nested within a component like `VictoryChart`, this prop will be set to `false`

*default:* `standalone={true}`

```playground
<svg width={300} height={300}>
  <circle cx={150} cy={150} r={150} fill="#c43a31"/>
  <VictoryArea
    standalone={false}
    width={300} height={300} padding={0}
    data={sampleData}
  />
</svg>
```

### style

`VictoryArea` uses the standard `style` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#style)

*default (provided by default theme):* See [grayscale theme] for more detail

```playground
  <VictoryArea
    style={{
      parent: {
        border: "1px solid #ccc"
      },
      data: {
        fill: "#c43a31", fillOpacity: 0.7, stroke: "#c43a31", strokeWidth: 3
      },
      labels: {
        fontSize: 15, fill: "#c43a31"
      }
    }}
    data={sampleData}
    labels={(d) => d.x}
  />
```

### theme

`VictoryArea` uses the standard `theme` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#theme)

See the [Themes Guide] for information about creating custom themes.

*default:* `theme={VictoryTheme.grayscale}`

```jsx
theme={VictoryTheme.material}
```

### width

`VictoryArea` uses the standard `width` prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#width)

*default (provided by default theme):* `width={450}`

```jsx
width={400}
```

### x

`VictoryArea` uses the standard `x` data accessor prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#x)

See the [Data Accessors Guide] for more detail on formatting and processing data.

```jsx
x="employee.name"
```

### y

`VictoryArea` uses the standard `y` data accessor prop. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#y)

See the [Data Accessors Guide] for more detail on formatting and processing data.

```jsx
y={(d) => d.value + d.error}
```

### y0

`VictoryArea` uses the standard `y0` data accessor prop to set a baseline. [Read about it here](https://formidable.com/open-source/victory/docs/common-props#y0)

See the [Data Accessors Guide] for more detail on formatting and processing data.

```playground
<VictoryChart>
  <VictoryArea
    data={sampleData}
    y0={(d) => d.y - 1}
  />
</VictoryChart>
```

[Animations Guide]: https://formidable.com/open-source/victory/guides/animations
[Data Accessors Guide]: https://formidable.com/open-source/victory/guides/data-accessors
[Custom Components Guide]: https://formidable.com/open-source/victory/guides/custom-components
[Events Guide]: https://formidable.com/open-source/victory/guides/events
[Themes Guide]: https://formidable.com/open-source/victory/guides/themes
[`VictoryChart`]: https://formidable.com/open-source/victory/docs/victory-chart
[`VictoryClipContainer`]: https://formidable.com/open-source/victory/docs/victory-clip-container
[grayscale theme]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-theme/grayscale.js
[Explore all the interpolation options]: https://formidable.com/open-source/victory/gallery/interpolation
