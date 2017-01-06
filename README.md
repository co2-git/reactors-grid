Reactors Grid
===

Flex grid for reactors.

# Row

```javascript
import {Row} from 'reactors-grid';

<Row>
  // ...
</Row>
```

# Stack

Stacks are vertical rows.

```javascript
import {Stack} from 'reactors-grid';

<Stack>
  // ...
</Stack>
```

<div data-reactroot="" style="display: flex; flex-direction: column; justify-content: space-between; align-items: stretch; border-width: 5px; background-color: rgb(153, 153, 153); border-radius: 8px;"><div style="display: flex; flex-direction: column; justify-content: space-between; align-items: stretch; border: 1px solid rgb(153, 153, 153); padding: 10px; margin: 10px; background-color: white; border-radius: 6px;"><div style="padding: 10px; font-weight: bold; font-size: 22px;">&lt;Row /&gt;</div><div style="display: flex; align-items: center; flex-flow: row nowrap; justify-content: space-between; background-color: rgb(204, 204, 204); border-radius: 4px;"><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">1</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">2</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">3</div></div></div><div style="display: flex; flex-direction: column; justify-content: space-between; align-items: stretch; border: 1px solid rgb(153, 153, 153); padding: 10px; margin: 10px; background-color: white; border-radius: 6px;"><div style="padding: 10px; font-weight: bold; font-size: 22px;">&lt;Row reverse /&gt;</div><div style="display: flex; align-items: center; flex-flow: row-reverse nowrap; justify-content: space-between; background-color: rgb(204, 204, 204); border-radius: 4px;"><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">1</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">2</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">3</div></div></div><div style="display: flex; flex-direction: column; justify-content: space-between; align-items: stretch; border: 1px solid rgb(153, 153, 153); padding: 10px; margin: 10px; background-color: white; border-radius: 6px;"><div style="padding: 10px; font-weight: bold; font-size: 22px;">&lt;Row wrap /&gt;</div><div style="display: flex; align-items: center; flex-flow: row wrap; justify-content: space-between; background-color: rgb(204, 204, 204); border-radius: 4px;"><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">1</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">2</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">3</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">4</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">5</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">6</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">7</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">8</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">9</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">10</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">11</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">12</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">13</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">14</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">15</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">16</div></div></div><div style="display: flex; flex-direction: column; justify-content: space-between; align-items: stretch; border: 1px solid rgb(153, 153, 153); padding: 10px; margin: 10px; background-color: white; border-radius: 6px;"><div style="padding: 10px; font-weight: bold; font-size: 22px;">&lt;Row nowrap /&gt;</div><div style="padding: 10px; font-weight: bold; font-size: 22px;">&lt;Row no-wrap /&gt;</div><div style="padding: 10px; font-weight: bold; font-size: 22px;">&lt;Row wrap={false} /&gt;</div><div style="display: flex; align-items: center; flex-flow: row nowrap; justify-content: space-between; background-color: rgb(204, 204, 204); border-radius: 4px;"><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">1</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">2</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">3</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">4</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">5</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">6</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">7</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">8</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">9</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">10</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">11</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">12</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">13</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">14</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">15</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">16</div></div></div><div style="display: flex; flex-direction: column; justify-content: space-between; align-items: stretch; border: 1px solid rgb(153, 153, 153); padding: 10px; margin: 10px; background-color: white; border-radius: 6px;"><div style="padding: 10px; font-weight: bold; font-size: 22px;">&lt;Row space-around /&gt;</div><div style="display: flex; align-items: center; flex-flow: row nowrap; justify-content: space-around; background-color: rgb(204, 204, 204); border-radius: 4px;"><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">1</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">2</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">3</div></div></div><div style="display: flex; flex-direction: column; justify-content: space-between; align-items: stretch; border: 1px solid rgb(153, 153, 153); padding: 10px; margin: 10px; background-color: white; border-radius: 6px;"><div style="padding: 10px; font-weight: bold; font-size: 22px;">&lt;Row space-between /&gt;</div><div style="display: flex; align-items: center; flex-flow: row nowrap; justify-content: space-between; background-color: rgb(204, 204, 204); border-radius: 4px;"><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">1</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">2</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">3</div></div></div><div style="display: flex; flex-direction: column; justify-content: space-between; align-items: stretch; border: 1px solid rgb(153, 153, 153); padding: 10px; margin: 10px; background-color: white; border-radius: 6px;"><div style="padding: 10px; font-weight: bold; font-size: 22px;">&lt;Row left /&gt;</div><div style="display: flex; align-items: center; flex-flow: row nowrap; justify-content: flex-start; background-color: rgb(204, 204, 204); border-radius: 4px;"><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">1</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">2</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">3</div></div></div><div style="display: flex; flex-direction: column; justify-content: space-between; align-items: stretch; border: 1px solid rgb(153, 153, 153); padding: 10px; margin: 10px; background-color: white; border-radius: 6px;"><div style="padding: 10px; font-weight: bold; font-size: 22px;">&lt;Row center-x /&gt;</div><div style="display: flex; align-items: center; flex-flow: row nowrap; justify-content: center; background-color: rgb(204, 204, 204); border-radius: 4px;"><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">1</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">2</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">3</div></div></div><div style="display: flex; flex-direction: column; justify-content: space-between; align-items: stretch; border: 1px solid rgb(153, 153, 153); padding: 10px; margin: 10px; background-color: white; border-radius: 6px;"><div style="padding: 10px; font-weight: bold; font-size: 22px;">&lt;Row right /&gt;</div><div style="display: flex; align-items: center; flex-flow: row nowrap; justify-content: flex-end; background-color: rgb(204, 204, 204); border-radius: 4px;"><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">1</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">2</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">3</div></div></div><div style="display: flex; flex-direction: column; justify-content: space-between; align-items: stretch; border: 1px solid rgb(153, 153, 153); padding: 10px; margin: 10px; background-color: white; border-radius: 6px;"><div style="padding: 10px; font-weight: bold; font-size: 22px;">&lt;Row up /&gt;</div><div style="display: flex; align-items: flex-start; flex-flow: row nowrap; justify-content: space-between; background-color: rgb(204, 204, 204); border-radius: 4px;"><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 80px;">1</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">2</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 30px;">3</div></div></div><div style="display: flex; flex-direction: column; justify-content: space-between; align-items: stretch; border: 1px solid rgb(153, 153, 153); padding: 10px; margin: 10px; background-color: white; border-radius: 6px;"><div style="padding: 10px; font-weight: bold; font-size: 22px;">&lt;Row down /&gt;</div><div style="display: flex; align-items: flex-end; flex-flow: row nowrap; justify-content: space-between; background-color: rgb(204, 204, 204); border-radius: 4px;"><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 80px;">1</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">2</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 30px;">3</div></div></div><div style="display: flex; flex-direction: column; justify-content: space-between; align-items: stretch; border: 1px solid rgb(153, 153, 153); padding: 10px; margin: 10px; background-color: white; border-radius: 6px;"><div style="padding: 10px; font-weight: bold; font-size: 22px;">&lt;Row center-y /&gt;</div><div style="display: flex; align-items: center; flex-flow: row nowrap; justify-content: space-between; background-color: rgb(204, 204, 204); border-radius: 4px;"><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 80px;">1</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">2</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 30px;">3</div></div></div><div style="display: flex; flex-direction: column; justify-content: space-between; align-items: stretch; border: 1px solid rgb(153, 153, 153); padding: 10px; margin: 10px; background-color: white; border-radius: 6px;"><div style="padding: 10px; font-weight: bold; font-size: 22px;">&lt;Stack /&gt;</div><div style="display: flex; flex-direction: column; justify-content: space-between; align-items: center; border-width: 5px; background-color: rgb(204, 204, 204); border-radius: 4px; height: 200px;"><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">1</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">2</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">3</div></div></div><div style="display: flex; flex-direction: column; justify-content: space-between; align-items: stretch; border: 1px solid rgb(153, 153, 153); padding: 10px; margin: 10px; background-color: white; border-radius: 6px;"><div style="padding: 10px; font-weight: bold; font-size: 22px;">&lt;Stack center /&gt;</div><div style="display: flex; flex-direction: column; justify-content: center; align-items: center; border-width: 5px; background-color: rgb(204, 204, 204); border-radius: 4px; height: 200px;"><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">1</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">2</div><div style="border: 1px solid rgb(204, 204, 204); padding: 6px; margin: 4px; border-radius: 3px; background-color: white; height: 50px;">3</div></div></div></div>
