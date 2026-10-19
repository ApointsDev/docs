# Apoints 文档中心

集中维护 Apoints 各产品的开发文档、接入参数和集成说明。

## 文档导航

| 产品 | 文档 | 状态 |
| --- | --- | --- |
| AnchorCAF | [授权页个性化参数](docs/anchorcaf/consent-appearance.md) | 已上线，2026-10-19 |
| AnchorCAF | [授权页调用示例](examples/anchorcaf/consent-url.mjs) | 与已上线参数同步 |

## 文档状态

- **待上线**：说明已经实现并在本地验证的能力，不代表生产环境已支持。
- **已上线**：完成生产验收后，补充上线版本与日期。
- **已废弃**：说明替代方案和移除安排。

授权页于 **2026-10-19 19:05（Asia/Shanghai）**完成静态发布与入口验收，对应 [CAFServer PR #1](https://github.com/ApointsDev/CAFServer/pull/1)，合并提交 `449e0b7`。CAF 后端未重启，数据库未修改。文档提交本身不触发应用发布。

## 目录约定

```text
docs/<产品>/       产品文档
examples/<产品>/   不含真实凭据的调用示例
CHANGELOG.md       文档与协议变更记录
```

新文档通过 Pull Request 审核，至少写清适用产品、功能状态、参数约束及示例。参数变化时同步更新示例和变更记录。

## 信息边界

本仓库为私有文档仓库。不提交密码、Token、私钥、真实授权码、用户个人资料、生产配置或服务器运维记录；示例统一使用虚构数据。
