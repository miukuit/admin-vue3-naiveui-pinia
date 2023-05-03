# Use node Version
v18.15.0

# Git提交注意事项
> git config --global core.autocrlf true


# Methods Or API
- [x] 数据精度处理

- [x] 防抖+节流


# icon 图标
1. svg图标

   >  注意：自定义 svg 图标固定放在 src/assets/svg 下

2. iconify图标

   > 注意：默认已安装Ant Design Icons

## 使用方法

```vue
<!-- 使用svg图标 -->
<app-icon icon="logo" type="svg" :size="18" />
<!-- 使用Ant Design Icons -->
<app-icon icon="ant-design:copyright-outlined" :size="18" />
```

## Options

| 属性  | 类型   | 描述             | 默认值  | 备注               |
| ----- | ------ | ---------------- | ------- | ------------------ |
| icon  | String | [必填]，图标名称 |         |                    |
| size  | Number | 图标尺寸大小     | 14      |                    |
| color | String | 图标颜色         |         |                    |
| type  | String | 图标类型         | iconify | 可选：svg、iconify |

