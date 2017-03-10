Reactors Grid
===

Flex grid for reactors.

# Install

```bash
npm install reactors-grid
```

# Usage

Use `Row` for rows and `Stack` for columns.

```javascript
import {Row, Stack} from 'reactors-grid';

<Stack>
  <Row>
    <Text>1</Text>
    <Text>2</Text>
    <Text>3</Text>
  </Row>
</Stack>
```

If you prefer the column term over stack, you can use it this way:

```javascript
import {Row, Stack as Column} from 'reactors-grid';

<Column>
  <Row>
    <Text>1</Text>
    <Text>2</Text>
    <Text>3</Text>
  </Row>
</Column>
```

# Documentation

| Property | CSS Equivalent | Example |
|----------|----------------|---------|
| **flexAround** | {justify-content: space-around} | `<Row flexAround />` |
| **flexBetween** | {justify-content: space-between} | `<Row flexBetween />` |
| **flexCenter** | {justify-content: center; align-items: center} | `<Row flexCenter />` |
| **flexCenterHorizontal** | {justify-content: center} | `<Row flexCenterHorizontal />` |
| **flexCenterHorizontal** *for stacks* | {align-items: center} | `<Stack flexCenterHorizontal />` |
| **flexCenterVertical** | {align-items: center} | `<Row flexCenterVertical />` |
| **flexCenterVertical** *for stacks* | {justify-content: center} | `<Stack flexCenterVertical />` |
| **flexDown** | {align-items: flex-end} | `<Row flexDown />` |
| **flexDown** *for stacks* | {justify-content: flex-end} | `<Stack flexDown />` |
| **flexGrow** | {flex-grow: 2} | `<Row flexGrow />` |
| **flexGrow** *with a number* | {flex-grow: 3} | `<Row flexGrow={3} />` |
| **flexLeft** | {justify-content: flex-start} | `<Row flexLeft />` |
| **flexLeft** *for stacks* | {align-items: flex-start} | `<Stack flexLeft />` |
| **flexReverse** | {flex-direction: row-reverse} | `<Row flexReverse />` |
| **flexReverse** *for stacks* | {flex-direction: column-reverse} | `<Stack flexReverse />` |
| **flexRight** | {justify-content: flex-end} | `<Row flexRight />` |
| **flexRight** *for stacks* | {align-items: flex-end} | `<Stack flexRight />` |
| **flexStretch** | {alignItems: stretch} | `<Row flexStretch />` |
| **flexUp** | {align-items: flex-start} | `<Row flexUp />` |
| **flexUp** *for stacks* | {justify-content: flex-start} | `<Stack flexUp />` |
