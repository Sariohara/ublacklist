import { exportMessages } from '../../locale';

export default exportMessages({
  extensionName: 'uBlacklist',
  extensionDescription: '禁止特定的网站显示在 Google 的搜索结果中。',
  dayjsLocale: 'zh-cn',
  error: '出现错误: $1',
  cancelButton: '取消',
  okButton: '确定',
  content_singleSiteBlocked: 'uBlacklist 已经禁止了 1 个网站',
  content_multipleSitesBlocked: 'uBlacklist 已经禁止了 $1 个网站',
  content_showBlockedSitesLink: '显示',
  content_hideBlockedSitesLink: '隐藏',
  content_blockSiteLink: '加入黑名单',
  content_unblockSiteLink: '取消禁止这个网站',
  popup_blockSiteTitle: '将该网站加入黑名单',
  popup_unblockSiteTitle: '取消禁止这个网站',
  popup_details: '详情',
  popup_pageURLLabel: '页面 URL',
  popup_pathDepth: '深度',
  popup_addedRulesLabel: '要添加的规则',
  popup_removedRulesLabel: '要移除的规则',
  popup_blockSiteButton: '确定',
  popup_unblockSiteButton: '移除',
  options_generalTitle: '一般',
  options_blacklistLabel: '以下网站将不会显示在 Google 的搜索结果中：',
  options_blacklistHelper:
    '你可以使用 <a href="https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns" noopener noreferrer target="_blank">匹配模式</a> 或 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions" noopener noreferrer target="_blank">正则表达式</a>。',
  options_importBlacklistButton: '从 Personal Blocklist 导入网站黑名单',
  options_saveBlacklistButton: '保存',
  options_importBlacklistDialog_title: '从 Personal Blocklist 导入网站黑名单',
  options_importBlacklistDialog_helper: '贴上你从 Personal Blocklist 导出的的网站黑名单',
  options_importBlacklistDialog_importButton: '导入',
  options_otherSearchEngines: '其他搜索引擎',
  options_otherSearchEnginesDescription:
    '当前还支持以下搜索引擎（需要手动开启，并同意读取和更改网页数据）',
  options_registerSearchEngine: '启用',
  options_searchEngineRegistered: '已启用',
  options_hideBlockLinksLabel: '不在搜索结果中显示「加入黑名单」连接',
  options_syncTitle: '同步',
  options_turnOnSync: '开启同步',
  options_turnOffSync: '关闭同步',
  options_syncResult: '最近同步',
  options_syncNever: '从未同步',
  options_syncRunning: '正在同步中...',
  options_syncNowButton: '立即同步',
  options_subscriptionTitle: '订阅',
  options_subscriptionFeature: '订阅黑名单列表',
  options_subscriptionFeatureDescription: '如果你添加了订阅，网站黑名单将会定期从指定的 URL 更新。',
  options_addSubscriptionButton: '添加订阅',
  options_subscriptionNameHeader: '名称',
  options_subscriptionURLHeader: 'URL地址',
  options_subscriptionUpdateResultHeader: '最近更新',
  options_noSubscriptionsAdded: '未添加任何订阅',
  options_subscriptionUpdateRunning: '正在更新...',
  options_showSubscriptionMenu: '显示黑名单',
  options_updateSubscriptionNowMenu: '立即更新',
  options_removeSubscriptionMenu: '移除此订阅',
  options_updateAllSubscriptionsNowButton: '立即更新',
  options_addSubscriptionDialog_title: '添加订阅',
  options_addSubscriptionDialog_nameLabel: '名称',
  options_addSubscriptionDialog_urlLabel: 'URL地址',
  options_addSubscriptionDialog_addButton: '添加',
  clouds_googleDriveSync: '使用 Google Drive 同步',
  clouds_googleDriveSyncTurnedOn: '已开启使用 Google Drive 同步',
  clouds_dropboxSync: '使用 Dropbox 同步',
  clouds_dropboxSyncTurnedOn: '已开启使用 Dropbox 同步',
});