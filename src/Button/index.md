# 按钮

## 基本使用

<code src="./demos/index.tsx"></code>

## 按钮大小

按钮有大、中、小三种尺寸。通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。

<code src="./demos/size.tsx"></code>

## 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态的按钮不可点击。

<code src="./demos/disabled.tsx"></code>

## 危险按钮

通过传入 danger 可以将按钮设置为危险按钮，用于警告用户。

<code src="./demos/danger.tsx"></code>

#### Props

| 参数     | 说明                       | 类型                                                | 默认值    | 必传 |
| -------- | -------------------------- | --------------------------------------------------- | --------- | ---- |
| type     | 按钮类型，默认为 `default` | `default`、`primary`、`emphasis` 、`text`、`danger` | `default` | 否   |
| disabled | 是否禁止点击               | `boolean`                                           | false     | 否   |
| size     | 按钮大小，默认为 `middle ` | `small`、`middle`、`large`                          | `middle`  | 否   |
| shape    | 按钮形状，默认 `square`    | `square`、`circle`                                  | `square`  | 否   |
