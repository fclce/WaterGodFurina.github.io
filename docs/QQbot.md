#关于本群QQbot
群内有个叫"星露"的管理员，是本群的机器人。

星露接入的模型为Gemini 3 Flash，根据谷歌的官方文档，该模型的调用速率为50次/10min，250次/日，即使我上两个账号也才500次/日（每次日志查询就消耗2-4次）。

望请群友在无事时不要玩她(除非得到小白的同意)，否则你将喜提禁言大礼包(1小时 - 7天不等)。

她可以做的事：

- 违禁词撤回
- 欢迎新人入群
- [分析群友发来的日志](#日志)
- [查询MC相关内容](#MC)

##关于分析日志 {#日志}

你可以将FCL/ZL/Pojav等启动器日志发送至群内，引用(回复)日志文件消息并@星露来进行日志分析，如图中所示：

![正确示例](./assets/img/AI1.jpg)

> 如果星露未分析日志（即发送与日志无关内容，并且约45秒没回复），你可以再次@星露来进行日志分析

错误示例

![错误示例](./assets/img/AI2.jpg)

分析日志时，请注意：

- 不要发送大小超过800 KB的日志
- 不要发送成功进入游戏后的日志
- 不要将日志网址发送给星露分析
- 星露目前无法分析群友发来的视频
- 星露无法分析手抄日志内容、日志拍屏
- 禁止将错误报告的内容截图下来（因为这样只能截取一部分日志）
- 将图片交给星露分析时，请引用图片消息内容(就像引用日志消息一样)

以下内容星露有概率成功分析：

- 打包成ZIP压缩文件的日志

##关于MC内容查询 {#MC}
星露支持MC模组查询、正版玩家查询、mc最新版本查询、mcwiki查询等。

> 这些查询并不需要模型调用，但也请群友们不要频繁调用以造成刷屏。

>已知模组查询存在爆Base64码的问题(即合并转发失败以造成刷屏)，请等待暑假修复

指令如下:

/fclhelp

介绍:查看可以使用的指令。

![help指令](./assets/img/fclhelp.jpg)

剩下的指令介绍以后再咕

<style>
  /* 移动端优化的导航卡片 */
  .mobile-pagination-card {
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 1.2rem;
    margin: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  }

  /* 左侧“上一章”区域 */
  .prev-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding-right: 1rem;
  }

  /* 右侧“下一章”区域 */
  .next-section {
    flex: 2; /* 右边占更多空间，因为标题通常更长 */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    padding-left: 1rem;
  }

  /* 类目小字（上一章/下一页） */
  .cat-text {
    font-size: 0.55rem;
    color: #888;
    margin-bottom: 0.25rem;
    font-weight: normal;
  }

  /* 标题大字 */
  .title-text {
    font-size: 1rem; /* 手机上稍微大一点，便于点击 */
    color: #2196F3; /* 蓝色表示链接 */
    font-weight: 600;
    text-decoration: none;
    display: block;
  }

  /* 防止标题过长换行，超出部分隐藏（移动端重要） */
  .title-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%; /* 防止溢出 */
  }

  /* Hover效果（虽然手机没有hover，但为了平板或电脑浏览保留） */
  .title-text:hover {
    color: #1976D2;
  }

  /* 分隔线（可选，增加区分度） */
  .divider-line {
    width: 1px;
    height: 24px;
    background-color: #eee;
    margin: 0 1rem;
  }

  @media (max-width: 480px) {
    /* 更小的屏幕下调整内边距 */
    .mobile-pagination-card {
      padding: 1rem;
    }
    .title-text {
      font-size: 0.75rem;
    }
  }
</style>

<!-- HTML 结构 -->
<div class="mobile-pagination-card">
  <!-- 左侧：上一章 -->
  <a href="/others/" class="prev-section">
    <span class="cat-text">上一页</span>
    <span class="title-text">额外补充</span>
  </a>

  <!-- 中间分隔线（可选，如果不需要可以删掉<div class="divider-line"></div>这一行） -->
  <div class="divider-line"></div>

  <!-- 右侧：下一章 -->
  <a href="/" class="next-section">
    <span class="cat-text">下一页</span>
    <span class="title-text">首页</span>
  </a>
</div>
